import React from 'react';
import SettingIcon from '../assets/index/settingicon.png';
import RunningBg from "../assets/index/blackandbluelinebg.png";

const TickerSection = () => {
    const items = [
        'CIGARETTE & VAPE',
        'PAINT & COATINGS',
        'CHEMICAL INDUSTRY',
        'POLYURETHANES',
        'HOME & PERSONAL CARE',
        'FOOD INGREDIENTS',
    ];

    const tickerItems = [...items, ...items]; // Duplicate for infinite scroll

    return (
        <div className="h-[164px] relative" style={{ backgroundImage: `url(${RunningBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute top-0 left-0 w-full h-full animate-marquee flex items-center">
                {tickerItems.map((item, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <span className="text-white font-medium text-xs md:text-[25px]">
                            {item}
                        </span>
                        <img src={SettingIcon} alt="icon" className="w-10 ml-15" />
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    width: max-content;
                }
            `}} />
        </div>
    );
};

export default TickerSection;
