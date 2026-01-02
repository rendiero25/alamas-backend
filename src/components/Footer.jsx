import React from 'react';
import WhiteLogo from '../assets/footer/alamaswhitelogo.png';
import PhoneIcon from '../assets/footer/phoneicon.png';
import MailIcon from '../assets/footer/mailicon.png';
import WAIcon from '../assets/footer/whatsappicon.png';
import BgFooter from '../assets/footer/bg-footer.png';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-30 pb-10 font-primary" style={{ backgroundImage: `url(${BgFooter})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
                    <div className="w-1/2 flex flex-col gap-6 justify-between items-start">
                        <img src={WhiteLogo} alt="Alamas" className="w-70 object-contain" />
                        <p className="text-white text-[25px] font-medium leading-relaxed">
                            PT Alamas Niaga Gemilang is a chemical raw material distributor, proudly representing principals from around the globe, and are home to hundreds of chemical for different applications.
                        </p>
                    </div>

                    <div className="w-1/2 flex flex-col justify-between items-start">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-[20px] font-bold uppercase text-white">Office</h4>
                            <p className="text-[20px] font-light text-white leading-relaxed">
                                Arcade Business Center, Fl . 12, Unit : 12-10, Jl. Pantai Indah Utara 2, Kapuk Muara, Daerah Khusus Ibukota Jakarta 14460
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h4 className="text-[20px] font-bold uppercase text-white">Warehouse</h4>
                            <p className="text-[20px] font-light text-white leading-relaxed">
                                Laksana Business Park Blok C No 23, Jl. Laksana Gemilang 3 Selatan No 23, Laksana, Kec. Pakuhaji, Kabupaten Tangerang, Banten 15570
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row justify-between items-center gap-2'>
                    <div className="flex flex-row flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <img src={PhoneIcon} alt="phone" className="w-5" />
                            <span className="text-[20px] font-normal text-white">+62 21 123 4567</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={WAIcon} alt="whatsapp" className="w-5" />
                            <span className="text-[20px] font-normal text-white">+62 811 1234 5678</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={MailIcon} alt="email" className="w-5" />
                            <span className="text-[20px] font-normal text-white">sales@alamasniaga.com</span>
                        </div>
                    </div>

                    <div>
                        <ul className="flex flex-row flex-wrap gap-8 text-[20px] font-medium">
                            <li><Link to="/" className="hover:text-primary transition-colors">HOME</Link></li>
                            <li><Link to="/about-us" className="hover:text-primary transition-colors">ABOUT US</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">PRODUCTS</Link></li>
                            <li><Link to="/industry" className="hover:text-primary transition-colors">INDUSTRY</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="py-12 my-10 text-center">
                    <h2 className="text-4xl md:text-[80px] font-thin">
                        alamas | chemical distributor company
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-[14px] text-white/70 font-medium gap-6">
                    <p>© 2026 Alamas Niaga Gemilang. All Rights Reserved. developed by <a href="http://rendiero.site" className="text-white hover:font-bold transition-colors">rendiero</a></p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">Tiktok</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
