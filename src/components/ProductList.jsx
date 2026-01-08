import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import productsData from '../data/products.json';
import { FaFlask, FaVial, FaMicroscope, FaDna, FaAtom, FaFillDrip, FaIndustry } from 'react-icons/fa';
import SearchIcon from "../assets/products/search-icon.png";
import ArrowDown from "../assets/products/arrow-down.png";

const categoryIcons = {
    'Acids': <FaFlask className='text-black'/>,
    'Polyols and Glycols': <FaVial className='text-black'/>,
    'Solvents': <FaMicroscope className='text-black'/>,
    'Surfactants and Emulsifiers': <FaDna className='text-black'/>,
    'Catalysts': <FaAtom className='text-black'/>,
    'Specialty Chemicals': <FaFillDrip className='text-black'/>,
    'Industrial Chemicals': <FaIndustry className='text-black'/>
};

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedIndustry, setSelectedIndustry] = useState('All');

    // Extract all unique categories and industries for dropdowns
    const allIndustries = useMemo(() => ['All', ...productsData.map(i => i.name)], []);
    const allCategories = useMemo(() => {
        const cats = new Set();
        productsData.forEach(ind => {
            ind.categories.forEach(cat => cats.add(cat.name));
        });
        return ['All', ...Array.from(cats)];
    }, []);

    // Filter and group products
    const filteredGroupedProducts = useMemo(() => {
        const grouped = {};

        productsData.forEach(industry => {
            if (selectedIndustry !== 'All' && industry.name !== selectedIndustry) return;

            industry.categories.forEach(category => {
                if (selectedCategory !== 'All' && category.name !== selectedCategory) return;

                if (!grouped[category.name]) {
                    grouped[category.name] = [];
                }

                category.products.forEach(productName => {
                    if (searchTerm && !productName.toLowerCase().includes(searchTerm.toLowerCase())) return;
                    
                    // Avoid duplicates if a product is in multiple industries
                    if (!grouped[category.name].some(p => p.name === productName)) {
                        grouped[category.name].push({
                            name: productName,
                            industries: [industry.name]
                        });
                    } else {
                        const existing = grouped[category.name].find(p => p.name === productName);
                        if (!existing.industries.includes(industry.name)) {
                            existing.industries.push(industry.name);
                        }
                    }
                });
            });
        });

        // Remove empty categories
        Object.keys(grouped).forEach(key => {
            if (grouped[key].length === 0) delete grouped[key];
        });

        return grouped;
    }, [searchTerm, selectedCategory, selectedIndustry]);

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
                            className="w-full border border-gray-300 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-primary appearance-none bg-white min-w-[200px]"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="All">Category</option>
                            {allCategories.filter(c => c !== 'All').map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <img src={ArrowDown} alt="Arrow Down" className="absolute right-6 top-1/2 -translate-y-1/2 w-3 pointer-events-none" />
                    </div>

                    <div className="relative">
                        <select 
                            className="w-full border border-gray-300 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:border-primary appearance-none bg-white min-w-[200px]"
                            value={selectedIndustry}
                            onChange={(e) => setSelectedIndustry(e.target.value)}
                        >
                            <option value="All">Industry</option>
                            {allIndustries.filter(i => i !== 'All').map(i => (
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
                                    {categoryIcons[categoryName] || <FaFlask />}
                                </span>
                                <h3 className="text-xl md:text-[30px] font-normal text-black">
                                    {categoryName}
                                </h3>
                            </div>
                            
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
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
                                {products.map((product, idx) => (
                                    <motion.div 
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="border border-black/25 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all bg-white group hover:-translate-y-1"
                                    >
                                        <div>
                                            <h4 className="font-bold text-[20px] mb-4 h-12 overflow-hidden leading-tight group-hover:text-primary">
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
