import HeroBg from "../assets/industry/hero-bg.png";
import { motion } from "framer-motion";

const IndustryHero = () => {
    return (
        <section className="font-primary">
            {/* Hero Section */}
            <div className="flex w-full h-[450px]">
                {/* Sidebar */}
                <div className="hidden md:flex w-20 h-[350px] bg-[#F0F0F0] flex-col items-center justify-center relative shrink-0 z-20"></div>
                {/* Hero Content */}
                <div 
                    className="flex-1 relative bg-cover bg-center shadow-xl"
                    style={{ backgroundImage: `url(${HeroBg})` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full flex items-end p-10">
                        <div className="absolute ">
                            <motion.h1 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="text-white text-5xl md:text-[40px] font-normal"
                            >
                                Industry
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryHero;
