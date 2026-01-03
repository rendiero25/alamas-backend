import React from 'react';
import { motion } from 'motion/react';
import TimeCircleIcon from "../assets/index/timecircle.png";
import CityBgIcon from "../assets/index/citybackground.png";
import Men3StartsIcon from "../assets/index/menwith3stars.png";

const AboutSection = () => {
    const stats = [
        { label: 'Tones of products sold', value: '5000+' },
        { label: 'Satisfied Customer', value: '200+' },
        { label: 'Provinces in Indonesia', value: '17+' },
        { label: 'Industries Served', value: '5+' },
    ];

    return (
        <section id='aboutusection' className="container mx-auto bg-white font-primary">
            <div className="px-10 2xl:px-2 2xl:px-2">
                <div className="flex flex-col justify-between items-start gap-12">
                    <div className="w-full">
                        <span className="text-black text-[25px] font-normal">
                            • About Us
                        </span>
                    </div>
                    
                    <div className="w-full">
                        <h2 className="text-2xl md:text-[50px] font-normal text-black leading-snug">
                            Founded in 2023 
                            <span className="inline-block align-middle mx-2">
                                <motion.img 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    src={TimeCircleIcon} alt="timecircleicon" className="w-12" />
                            </span>, 

                            <span className="text-primary"> PT Alamas Niaga Gemilang</span> which headquartered in North Jakarta <motion.span 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="inline-block align-middle mx-1"
                            >
                                <img src={CityBgIcon} alt="citybackgroundicon" className="w-20" />
                            </motion.span>, began as a <span className="text-primary decoration-2 underline-offset-4">specialized chemical</span> <motion.span 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="inline-block align-middle mx-1"
                            >
                                <img src={Men3StartsIcon} alt="menwith3starsicon" className="w-12" />
                            </motion.span> solutions provider for the <span className="text-[#040F99] font-normal">polyurethane foam</span> manufacturing industry.
                        </h2>

                        <div className="flex flex-col md:flex-row justify-start items-center gap-16 mt-16">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="text-4xl md:text-[100px] font-medium text-black mb-2">
                                        {stat.value}
                                    </span>
                                    <span className="text-black text-[30px] font-medium w-full">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
