import React from 'react';
import { motion } from 'motion/react';
import Industry1 from '../assets/index/industries1.png';
import Industry2 from '../assets/index/industries2.png';
import Industry3 from '../assets/index/industries3.png';
import { useNavigate } from 'react-router-dom';

const IndustrySections = () => {
    const navigate = useNavigate();

    const industries = [
        {
            category: 'Polyurethanes Foam',
            title: 'Elevating Polyurethanes & Hygiene Standards with Premium Materials',
            desc: 'We supply essential raw materials for polyurethane and hygiene applications, ensuring product safety, performance, and quality. With innovation at the core, we help our partners deliver effective and reliable solutions to the market.',
            bg: Industry1,
            cardBg: 'bg-black/25 backdrop-blur-2xl',
            slug: 'polyurethanes',
        },
        {
            category: 'Home & Personal Care',
            title: 'High-Quality Raw Materials for Household & Personal Care',
            desc: 'We provide trusted raw materials for hygiene, grooming, and household care products. By maintaining strict quality standards and fostering innovation, we support brands in delivering safe, effective, and consumer-trusted solutions.',
            bg: Industry2,
            cardBg: 'bg-black/25 backdrop-blur-2xl',
            slug: 'home-and-personal-care',
        },
        {
            category: 'Food Ingredients',
            title: 'Leading Food and Beverages with Premium Ingredients and Expert Service',
            desc: 'We source and distribute high-quality food ingredients that ensure taste, safety, and compliance. Our expertise helps clients innovate and meet evolving consumer demands with reliable and consistent supply.',
            bg: Industry3,
            cardBg: 'bg-black/25 backdrop-blur-2xl',
            slug: 'food-ingredients',
        },
    ];

    return (
        <section className="bg-white font-sans">
            <div className="container mx-auto px-10 md:px-18 xl:px-19 2xl:px-19">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex flex-col justify-between items-start gap-12"
                >
                    <span className="text-black text-[25px] font-normal">
                        • Industries
                    </span>

                    <h2 className="text-3xl md:text-[50px] font-noraml text-black w-full leading-tight max-w-[82rem]">
                        From sourcing to supply chain innovation,<br />
                        <span className="text-primary font-bold text-3xl xl:text-[50px]">Our solutions are built to deliver efficiency, safety, and long-term resilience for industries.</span>
                    </h2>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="flex flex-col gap-8 mb-16"
                >
                    {industries.map((item, index) => (
                        <motion.div 
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="relative h-[400px] md:h-[600px] lg:h-[470px] rounded-2xl overflow-hidden group"
                        >
                            <img 
                                src={item.bg} 
                                alt={item.category} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            
                            <div className="absolute inset-0 flex items-center p-6 md:p-12">
                                <div className={`${item.cardBg} p-8 2xl:p-12 rounded-2xl max-w-3xl relative`}>
                                    <span className="text-white text-[25px] font-medium italic mb-2 block leading-tight">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white text-lg md:text-[35px] font-bold mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white text-xs md:text-[18px] leading-relaxed mb-6 max-w-4xl hidden md:block">
                                        {item.desc}
                                    </p>
                                    
                                    <button 
                                        onClick={() => navigate(`/industry/${item.slug}`)}
                                        className="mt-10 2xl:mt-0 bg-gradient-to-r from-primary to-[#010533] hover:scale-110 text-white text-[20px] font-medium py-3 px-8 rounded-full transition-all cursor-pointer"
                                    >
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center">
                    <button onClick={() => navigate('/industry')} className="border border-black hover:scale-110 hover:text-primary text-black text-[20px] font-medium py-4 px-10 rounded-full transition-all uppercase cursor-pointer">
                        More Industries
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IndustrySections;
