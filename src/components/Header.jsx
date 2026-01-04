import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'motion/react';

import Logo from '../assets/header/logoalamas.png';
import LogoWaHeader from '../assets/header/logowaheader.png';
import QuoteModal from './QuoteModal';


const Header = () => {   

    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navigation = [
            {name: 'Home', href: '/'},
            {name: 'About Us', href: '/about-us'},
            {name: 'Products', href: '/products'},
            {name: 'Industry', href: '/industry'},
            {name: 'Contact', href: '/contact'}
        ]

    return (
        <header className={isContactPage ? 'w-full bg-white font-primary' : 'w-full bg-[#F0F0F0] font-primary'}>
            <div className="container mx-auto px-10 md:px-18 xl:px-19 2xl:px-0 h-24 flex items-center flex flex-row justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo Icon - stylized 'A' */}
                    <button onClick={() => navigate('/')} className='cursor-pointer'>
                        <img src={Logo} alt="logoalamas" className='w-95 md:w-75 xl:w-80 2xl:w-75'/>
                    </button>
                </div>

                {/* Navigation Links - Hidden on mobile, visible on lg */}
                <div className='flex w-full items-center pl-15'>
                    <nav className="hidden xl:flex items-center gap-8">
                        {navigation.map((item) => {
                            return (
                                <Link 
                                    key={item.name}
                                    to={item.href}
                                    className="uppercase font-medium text-black hover:text-primary hover:font-bold text-[16px] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                </div>
                

                {/* Right Action Section */}
                <div className="hidden xl:flex items-center gap-6 flex flex-row justify-between items-start gap-20">
                    {/* WhatsApp Contact */}
                    <div className="flex items-center gap-3 hover:scale-110">
                        <img src={LogoWaHeader} alt="logo wa header" className='size-10'/>
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-xs font-bold text-gray-500 tracking-widest px-1">CONTACT US NOW!</span>
                            <a href="https://wa.me/6281118895089" target="_blank" rel="noopener noreferrer">
                                <span className="text-[16px] font-bold text-black leading-tight whitespace-nowrap">+62 811-1889-5089</span>
                            </a>
                        </div>
                    </div>

                    {/* Get a Quote Button */}
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gray-900 hover:scale-110 text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-full transition-colors whitespace-nowrap shadow-lg cursor-pointer"
                    >
                        GET A QUOTE
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="xl:hidden flex items-center">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-3xl text-black hover:text-primary transition-colors focus:outline-none"
                    >
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="xl:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto py-6 px-10 flex flex-col gap-6">
                            <nav className="flex flex-col gap-4">
                                {navigation.map((item) => (
                                    <Link 
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="uppercase font-medium text-black hover:text-primary transition-colors text-lg"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="h-px bg-gray-200 w-full" />

                            <div className="flex flex-col gap-4">
                                {/* WhatsApp Contact */}
                                <div className="flex items-center gap-3">
                                    <img src={LogoWaHeader} alt="logo wa header" className='size-10'/>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-500 tracking-widest px-1">CONTACT US NOW!</span>
                                        <a href="https://wa.me/6281118895089" target="_blank" rel="noopener noreferrer">
                                            <span className="text-[16px] font-bold text-black leading-tight">+62 811-1889-5089</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Get a Quote Button */}
                                <button 
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsModalOpen(true);
                                    }}
                                    className="bg-gray-900 text-white text-sm font-bold py-4 px-6 rounded-full transition-colors shadow-lg w-full"
                                >
                                    GET A QUOTE
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
};

export default Header;
