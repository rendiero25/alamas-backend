import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import productsData from '../data/products.json';
import ContactFAQSection from '../components/ContactFAQSection';
import { FaFlask, FaVial, FaMicroscope, FaDna, FaAtom, FaFillDrip, FaIndustry } from 'react-icons/fa';

// Assets for background/hero specific to industry details if available, 
// otherwise reuse the industry bg from the list.
import PolyBg from "../assets/industry/industries1.png";
import HomeBg from "../assets/industry/industries2.png";
import FoodBg from "../assets/industry/industries3.png";
import PaintBg from "../assets/industry/industries4.png";
import VapeBg from "../assets/industry/industries5.png";

const industryInfo = {
    "polyurethanes": {
        name: "Polyurethanes Foam",
        bg: PolyBg,
        heading: "Elevating Polyurethanes & Hygiene Standards with Premium Materials   ",
        desc: "We provide from the chemicals to equipment & machine parts to run your polyurethane foam business smoothly",
        productListDesc: "The following are chemical products that we are ready to distribute throughout Indonesia and overseas. For information on products not mentioned, please feel free to contact us."
    },
    "home-and-personal-care": {
        name: "Home and Personal Care",
        bg: HomeBg,
        heading: "Elevating Polyurethanes & Hygiene Standards with Premium Materials",
        desc: "We provide range of chemical products such as surfactant, preservatives, active ingredients, fragrance, and many more.",
        productListDesc: "The following are chemical products that we are ready to distribute throughout Indonesia and overseas. For information on products not mentioned, please feel free to contact us."
    },
    "food-ingredients": {
        name: "Food Ingredients",
        bg: FoodBg,
        heading: "Elevating Polyurethanes & Hygiene Standards with Premium Materials",
        desc: "We provide sweetener, preservatives, thickener, stabilizer, food coloring and other additives.",
        productListDesc: "The following are chemical products that we are ready to distribute throughout Indonesia and overseas. For information on products not mentioned, please feel free to contact us."
    },
    "flavor-and-fragrance": {
        name: "Flavor & Fragrance",
        bg: PaintBg,
        heading: "Elevating Polyurethanes & Hygiene Standards with Premium Materials",
        desc: "We deliver premium raw materials for the flavor and fragrance industry, focusing on durability, performance, and sustainability. Through reliable sourcing and supply, we help clients develop products that meet modern industry standards.",
        productListDesc: "The following are chemical products that we are ready to distribute throughout Indonesia and overseas. For information on products not mentioned, please feel free to contact us."
    },
    "cigarettes-and-vape": {
        name: "Cigarettes and Vape",
        bg: VapeBg,
        heading: "Delivering Quality Ingredients for Cigarettes & Vapes Industry",
        desc: "We supply premium raw materials and additives essential to the cigarettes and vapes industry. With a focus on quality, consistency, and compliance, we ensure our clients have the right ingredients to meet evolving consumer demands and regulatory standards.",
        productListDesc: "The following are chemical products that we are ready to distribute throughout Indonesia and overseas. For information on products not mentioned, please feel free to contact us."
    }
};

const categoryIcons = {
    'Acids': <FaFlask className='text-black'/>,
    'Polyols and Glycols': <FaVial className='text-black'/>,
    'Solvents': <FaMicroscope className='text-black'/>,
    'Surfactants and Emulsifiers': <FaDna className='text-black'/>,
    'Catalysts': <FaAtom className='text-black'/>,
    'Specialty Chemicals': <FaFillDrip className='text-black'/>,
    'Industrial Chemicals': <FaIndustry className='text-black'/>
};

const IndustryDetails = () => {
    const { slug } = useParams();
    const info = industryInfo[slug];

    const industryProducts = useMemo(() => {
        if (!info) return null;
        // Match name exactly with products.json (it uses "Cigarettes and Vape" etc)
        return productsData.find(i => i.name.toLowerCase() === info.name.toLowerCase());
    }, [slug, info]);

    if (!info) return <div className="p-20 text-center">Industry not found</div>;

    return (
        <div className="min-h-screen flex flex-col gap-[50px] font-primary">
            {/* Hero Section */}
            <div className="flex w-full h-[450px]">
                {/* Sidebar */}
                <div className="hidden md:flex w-20 h-[350px] bg-[#F0F0F0] flex-col items-center justify-center relative shrink-0 z-20"></div>
                {/* Hero Content */}
                <div 
                    className="flex-1 relative bg-cover bg-center shadow-xl"
                    style={{ backgroundImage: `url(${info.bg})` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full flex items-end p-10">
                        <div className="absolute ">
                            <motion.h1 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="text-white text-5xl md:text-[40px] font-medium"
                            >
                                {info.name}
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-10 md:px-18 xl:px-19 2xl:px-19 flex flex-col md:flex-row justify-between items-end gap-12"
            >
                <div className="md:w-1/2">
                    <h2 className="text-[45px] sm:text-[50px] font-medium text-black leading-tight">
                        {info.heading}
                    </h2>
                    
                </div>
                <div className="md:w-1/2 flex items-center">
                    <p className="text-black text-[30px] font-normal leading-tight">
                        {info.desc}
                    </p>
                </div>
            </motion.section>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-10 2xl:px-0 flex flex-col gap-4"
            >
                <span className="text-black text-[25px] font-normal">
                    • Product List
                </span>

                <p className="text-black text-[25px] font-normal max-w-3xl">
                    {info.productListDesc}
                </p>
            </motion.div>

            {/* Products Grouped by Category */}
            <section className="container mx-auto px-10 2xl:px-0 mb-[75px]">
                {industryProducts?.categories.map((cat, idx) => (
                    <div key={idx} className="mb-12">
                        <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                            <span className="text-2xl">
                                {categoryIcons[cat.name] || <FaFlask />}
                            </span>
                            <h3 className="text-3xl font-normal text-black">{cat.name}</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                            {cat.products.map((product, pIdx) => (
                                <div key={pIdx} className="border border-black p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all bg-white group hover:-translate-y-1">
                                    <div>
                                        <h4 className="font-bold text-xl mb-4 leading-tight group-hover:text-primary transition-colors">
                                            {product}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-[12px] font-normal bg-[#D2D3CD]/25 border border-[#999996] px-3 py-1 rounded-full text-black">
                                                {info.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            <ContactFAQSection />
        </div>
    );
};

export default IndustryDetails;
