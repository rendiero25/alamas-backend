import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import api, { BACKEND_URL } from '../api';
import { FaFlask, FaVial, FaMicroscope, FaDna, FaAtom, FaFillDrip, FaIndustry } from 'react-icons/fa';
import SearchIcon from "../assets/products/search-icon.png";
import ArrowDown from "../assets/products/arrow-down.png";



const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedIndustry, setSelectedIndustry] = useState('All');
    const [productsData, setProductsData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Products and Categories in parallel
                const [prodRes, catRes] = await Promise.all([
                    api.get('/products'),
                    api.get('/categories')
                ]);
                
                const flatProducts = prodRes.data;
                const fetchedCategories = catRes.data;
                setCategoriesData(fetchedCategories);

                // Transform Flat API data to Nested Structure to match existing Logic
                // Structure needed: [{ name: "Industry Name", categories: [{ name: "Cat Name", products: ["P1", "P2"] }] }]
                
                const industryMap = {};

                flatProducts.forEach(product => {
                    const industryName = product.industry ? product.industry.name : 'Unknown';
                    const categoryName = product.category;

                    if (!industryMap[industryName]) {
                        industryMap[industryName] = {
                            name: industryName,
                            categories: {}
                        };
                    }

                    if (!industryMap[industryName].categories[categoryName]) {
                        industryMap[industryName].categories[categoryName] = {
                            name: categoryName,
                            products: []
                        };
                    }

                    industryMap[industryName].categories[categoryName].products.push(product.name);
                });

                // Convert map to array
                const transformedData = Object.values(industryMap).map(ind => ({
                    ...ind,
                    categories: Object.values(ind.categories)
                }));
                
                setProductsData(transformedData);
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to get category icon
    const getCategoryIcon = (catName) => {
        const cat = categoriesData.find(c => c.name === catName);
        if (cat && cat.icon) {
            const iconUrl = cat.icon.startsWith('/') ? `${BACKEND_URL}${cat.icon}` : cat.icon;
            return <img src={iconUrl} alt={catName} className="w-8 h-8 object-contain" />;
        }
        return <FaFlask className='text-black text-2xl'/>; // Default fallback
    };
    
    // Extract all unique categories and industries for dropdowns (without 'All')
    const allIndustries = useMemo(() => productsData.map(i => i.name), [productsData]);
    const allCategories = useMemo(() => {
        const cats = new Set();
        productsData.forEach(ind => {
            ind.categories.forEach(cat => cats.add(cat.name));
        });
        return Array.from(cats);
    }, [productsData]);

    // Filter and group products
    const filteredGroupedProducts = useMemo(() => {
        const grouped = {};
        
        // Iterate through all industries 
        for (const industry of productsData) {
            // Skip this industry if filter is applied and doesn't match
            if (selectedIndustry !== 'All' && industry.name !== selectedIndustry) {
                continue;
            }
            
            // Iterate through all categories in this industry
            for (const category of industry.categories) {
                // Skip this category if filter is applied and doesn't match
                if (selectedCategory !== 'All' && category.name !== selectedCategory) {
                    continue;
                }
                
                // Iterate through all products in this category
                for (const productName of category.products) {
                    // Skip if search term doesn't match
                    if (searchTerm && !productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        continue;
                    }
                    
                    // Initialize category in grouped if needed
                    if (!grouped[category.name]) {
                        grouped[category.name] = [];
                    }
                    
                    // Check if product already exists in this category
                    const existingProduct = grouped[category.name].find(p => p.name === productName);
                    
                    if (existingProduct) {
                        // Product exists, add this industry to its list
                        if (!existingProduct.industries.includes(industry.name)) {
                            existingProduct.industries.push(industry.name);
                        }
                    } else {
                        // New product
                        grouped[category.name].push({
                            name: productName,
                            industries: [industry.name]
                        });
                    }
                }
            }
        }
        
        // Filter out empty categories
        const result = {};
        for (const categoryName of Object.keys(grouped)) {
            if (grouped[categoryName].length > 0) {
                result[categoryName] = grouped[categoryName];
            }
        }
        
        return result;
    }, [searchTerm, selectedCategory, selectedIndustry, productsData]);

    if (loading) {
        return <div className="text-center py-20">Loading products...</div>;
    }

    return (
        <section className="font-primary mb-[75px]">
            <div className="container mx-auto px-10 md:px-18 xl:px-19 2xl:px-19">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-[50px] font-bold text-primary">
                        Chemical Solutions <span className="text-black font-bold">For Your Business</span>
                    </h2>
                    <p className="text-black mt-4 max-w-7xl font-normal italic text-[25px]">
                        The following are chemical products that we are ready to distribute throughout Indonesia and overseas. 
                        For information on products not mentioned, please feel free to contact us.
                    </p>
                </motion.div>

                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row gap-5 xl:gap-4 mb-12">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full border border-gray-300 rounded-full py-3 px-6 focus:outline-none focus:border-primary"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <img src={SearchIcon} alt="Search" className="absolute right-6 top-1/2 -translate-y-1/2 w-5" />
                    </div>
                    
                    <div className="relative">
                        <select 
                            className="cursor-pointer w-full border border-gray-300 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-primary appearance-none bg-white min-w-[200px]"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="All">All Categories</option>
                            {allCategories.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <img src={ArrowDown} alt="Arrow Down" className="absolute right-6 top-1/2 -translate-y-1/2 w-3 pointer-events-none" />
                    </div>

                    <div className="relative">
                        <select 
                            className="cursor-pointer w-full border border-gray-300 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-primary appearance-none bg-white min-w-[200px]"
                            value={selectedIndustry}
                            onChange={(e) => setSelectedIndustry(e.target.value)}
                        >
                            <option value="All">All Industries</option>
                            {allIndustries.map(i => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                        <img src={ArrowDown} alt="Arrow Down" className="absolute right-6 top-1/2 -translate-y-1/2 w-3 pointer-events-none" />
                    </div>
                </div>

                {/* Product Groups */}
                <div className="space-y-12">
                    {Object.entries(filteredGroupedProducts).map(([categoryName, products]) => (
                        <div key={categoryName}>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-primary text-2xl">
                                    {getCategoryIcon(categoryName)}
                                </span>
                                <h3 className="text-xl md:text-[30px] font-normal text-black">
                                    {categoryName}
                                </h3>
                            </div>
                            
                            <motion.div 
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                            >
                                {products.map((product) => (
                                    <motion.div 
                                        key={product.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border border-black/25 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all bg-white group hover:-translate-y-1"
                                    >
                                        <div className='flex flex-col justify-between h-full'>
                                            <h4 className="font-bold text-[20px] mb-4 leading-tight group-hover:text-primary">
                                                {product.name}
                                            </h4>

                                            <div className="flex flex-wrap gap-2">
                                                {product.industries.map((ind, iIdx) => {
                                                    const industryColors = {
                                                        "Food Ingredients": "#009F6F",
                                                        "Flavor & Fragrance": "#026DD6",
                                                        "Home and Personal Care": "#E107CB",
                                                        "Polyurethane Foam": "#E14640",
                                                        "Cigarettes and Vape": "#333333"
                                                    };
                                                    
                                                    const color = industryColors[ind] || "#000000";
                                                    
                                                    return (
                                                        <span 
                                                            key={iIdx} 
                                                            className="text-[12px] font-normal bg-[#D2D3CD]/25 border px-3 py-1 rounded-full whitespace-nowrap"
                                                            style={{ color: color, borderColor: color }}
                                                        >
                                                            {ind}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}

                    {Object.keys(filteredGroupedProducts).length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No products found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
