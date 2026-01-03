import React from 'react';
import { FaCog, FaLeaf } from 'react-icons/fa';

const IndustryNav = () => {
    const industries = [
        { name: 'CIGARETTE & VAPE', icon: <FaLeaf className="rotate-45" /> },
        { name: 'PAINT & COATINGS', icon: <FaCog /> },
        { name: 'CHEMICAL INDUSTRY', icon: <FaCog /> },
        { name: 'POLYURETHANES', icon: <FaCog /> },
        { name: 'HOME & PERSONAL CARE', icon: <FaCog /> },
        { name: 'FOOD INGREDIENTS', icon: <FaCog /> },
    ];

    return (
        <nav className="w-full bg-[#1A3A8A] text-white font-primary overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="container mx-auto flex justify-between items-center py-4 px-8 md:px-24">
                {industries.map((industry, index) => (
                    <div 
                        key={index} 
                        className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors px-4 border-r last:border-r-0 border-white/20"
                    >
                        <span className="text-sm md:text-base">{industry.icon}</span>
                        <span className="text-[10px] md:text-[14px] font-bold tracking-wider">
                            {industry.name}
                        </span>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default IndustryNav;
