import React from 'react';
import Industry1 from '../assets/index/industries1.png';
import Industry2 from '../assets/index/industries2.png';
import Industry3 from '../assets/index/industries3.png';
import { useNavigate } from 'react-router-dom';

const IndustrySections = () => {
    const navigate = useNavigate();

    const industries = [
        {
            category: 'Polyurethanes',
            title: 'Elevating Polyurethanes & Hygiene Standards with Premium Materials',
            desc: 'We supply essential raw materials for polyurethane and hygiene applications, ensuring product safety, performance, and quality. With innovation at the core, we help our partners deliver effective and reliable solutions to the market.',
            bg: Industry1,
            cardBg: 'bg-black/25 backdrop-blur-2xl',
        },
        {
            category: 'Home & Personal Care',
            title: 'High-Quality Raw Materials for Household & Personal Care',
            desc: 'We provide trusted raw materials for hygiene, grooming, and household care products. By maintaining strict quality standards and fostering innovation, we support brands in delivering safe, effective, and consumer-trusted solutions.',
            bg: Industry2,
            cardBg: 'bg-black/25 backdrop-blur-2xl',
        },
        {
            category: 'Food Ingredients',
            title: 'Leading Food and Beverages with Premium Ingredients and Expert Service',
            desc: 'We source and distribute high-quality food ingredients that ensure taste, safety, and compliance. Our expertise helps clients innovate and meet evolving consumer demands with reliable and consistent supply.',
            bg: Industry3,
            cardBg: 'bg-black/25 backdrop-blur-2xl',
        },
    ];

    return (
        <section className="px-8 md:px-24 bg-white font-sans">
            <div className="container mx-auto">
                <div className="mb-16 flex flex-col justify-between items-start gap-12">
                    <span className="text-black text-[25px] font-normal">
                        • Industries
                    </span>

                    <h2 className="text-3xl md:text-[50px] font-noraml text-black w-full leading-tight max-w-[82rem]">
                        From sourcing to supply chain innovation,<br />
                        <span className="text-primary font-bold text-[50px]">Our solutions are built to deliver efficiency, safety, and long-term resilience for industries.</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-8 mb-16">
                    {industries.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative h-[400px] md:h-[600px] lg:h-[470px] rounded-2xl overflow-hidden group"
                        >
                            <img 
                                src={item.bg} 
                                alt={item.category} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            
                            <div className="absolute inset-0 flex items-center p-6 md:p-12">
                                <div className={`${item.cardBg} p-8 2xl:p-12 rounded-2xl max-w-3xl relative`}>
                                    <span className="text-white text-[25px] font-medium italic mb-2 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white text-[2xl] md:text-[35px] font-bold mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white text-xs md:text-[18px] leading-relaxed mb-6 max-w-4xl hidden md:block">
                                        {item.desc}
                                    </p>
                                    
                                    <button className="mt-10 2xl:mt-0 bg-gradient-to-r from-primary to-[#010533] hover:scale-110 text-white text-[20px] font-medium py-3 px-8 rounded-full transition-all cursor-pointer">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

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
