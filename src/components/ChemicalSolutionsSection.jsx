import React from 'react';
import { motion } from 'motion/react';
import industriesData from '../data/products.json';
import { useNavigate } from 'react-router-dom';

const ChemicalSolutionsSection = () => {
    const navigate = useNavigate();
    
    // Specific products requested by the user
    const targetChemicalNames = [
        "Malic Acid", 
        "Nitric Acid", 
        "Glycolic Acid (AHA)", 
        "Sorbitol", 
        "Polyether Polyol (PPG)", 
        "Propylene Glycol (PG) USP Grade", 
        "Normal Hexane (n-Hexane)", 
        "Methylene Chloride (MC)", 
        "Special Boiling Point (SBP)"
    ];

    // Build unique list of chemicals and their associated industries
    const featuredProducts = targetChemicalNames.map(targetName => {
        const industries = [];
        industriesData.forEach(industry => {
            industry.categories.forEach(category => {
                if (category.products.includes(targetName)) {
                    if (!industries.includes(industry.name)) {
                        industries.push(industry.name);
                    }
                }
            });
        });
        return {
            name: targetName,
            industries: industries
        };
    });

    return (
        <section className="px-8 md:px-24 bg-white font-primary">
            <div className="container mx-auto flex flex-col justify-between items-start gap-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-between items-start gap-12 w-full"
                >
                    <span className="text-black text-[25px] font-normal">
                        • Products
                    </span>
                    
                    <h2 className="text-3xl md:text-[50px] font-normal text-black w-full leading-tight">
                        Chemical Solutions for Your Business.<br />
                        <span className="text-primary font-bold text-[50px]">
                            From general chemicals to specialty chemicals, we have it all
                        </span>
                    </h2>
                </motion.div>

                {/* Featured Products Grid */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                >
                    {featuredProducts.map((product, index) => (
                        <motion.div 
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="bg-white border border-black p-10 rounded-2xl flex flex-col justify-between cursor-default min-h-[160px]"
                        >
                            <div>
                                <h3 className="font-bold text-[25px] mb-3">{product.name}</h3>
                                <div className="flex flex-wrap gap-4">
                                    {product.industries.map((ind, iIndex) => {
                                        const industryColors = {
                                            "Food Ingredients": "#009F6F",
                                            "Paint and Coatings": "#026DD6",
                                            "Home and Personal Care": "#E107CB",
                                            "Polyurethane Foam": "#E14640",
                                            "Cigarettes and Vape": "#333333"
                                        };
                                        const color = industryColors[ind] || '#000000';
                                        return (
                                            <span 
                                                key={iIndex}
                                                className="text-[16px] font-normal bg-[#D2D3CD]/25 px-4 py-2 rounded-full border"
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

                <div className="flex justify-center w-full mt-4 2xl:mt-12">
                    <button onClick={() => navigate('/products')} className="border border-black hover:scale-110 hover:text-primary text-black text-[20px] font-medium py-4 px-10 rounded-full transition-all uppercase cursor-pointer">
                        More Products
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ChemicalSolutionsSection;



