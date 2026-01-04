import HeroImage from '../assets/index/heroimage.png';
import PhoneIcon from '../assets/index/phoneicon.png';
import MailIcon from '../assets/index/mailicon.png';

const Hero = () => {
    return (
        <div className="flex h-screen w-full font-primary">
            {/* Sidebar */}
            <div className="hidden md:flex w-20 h-[90%] bg-[#F0F0F0] flex-col items-center justify-center relative shrink-0 z-20">
                <div className="w-[2px] h-32 bg-gray-300 mb-6"></div>
                
                <div className="flex flex-col gap-4">
                    <button className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <img src={PhoneIcon} alt="Phone" className="w-8 h-8 object-contain invert-0" />
                    </button>
                    <button className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <img src={MailIcon} alt="Email" className="w-8 h-8 object-contain invert-0" />
                    </button>
                </div>

                <div className="w-[2px] h-32 bg-gray-300 mt-6"></div>
            </div>

            {/* Hero Content */}
            <div 
                className="flex-1 relative bg-cover bg-center flex items-center shadow-xl"
                style={{ backgroundImage: `url(${HeroImage})` }}
            >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto relative z-10 w-full">
                    <div className="max-w-5xl px-10 xl:px-15 2xl:px-0">
                        <p className="text-white italic text-lg md:text-[30px] font-medium mb-2 tracking-wider">
                            Alamas Niaga Gemilang
                        </p>
                        <h1 className="text-white text-4xl md:text-[80px] font-extrabold leading-tight mb-8">
                            CHEMICAL DISTRIBUTOR <br /> COMPANY
                        </h1>
                        <p className="text-white text-base md:text-[25px] font-medium leading-relaxed mb-10 max-w-5xl">
                            At our core, we believe that providing a trusted and seamless chemical 
                            distribution service is the key to unlocking new possibilities for innovation, 
                            ultimately driving long-term success and robust business growth.
                        </p>
                        
                        <a href="#aboutusection" className="bg-gradient-to-r from-primary to-[#010533] hover:scale-110 text-white text-xs md:text-[20px] font-medium py-4 px-10 rounded-full tracking-widest transition-all cursor-pointer shadow-lg">
                            DISCOVER MORE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

