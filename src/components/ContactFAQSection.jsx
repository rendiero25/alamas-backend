import React, { useState } from 'react';
import FormBg from '../assets/index/formbg.png';
import CityBg from '../assets/index/formbg.png';

const ContactFAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: 'How long does the SEO analysis take?',
            a: 'Our experts will complete your SEO analysis and deliver a detailed report within 48 hours of submitting your website URL.'
        },
        {
            q: 'Is this service only for real estate websites?',
            a: 'No, our service is available for all types of websites, including e-commerce, education, and healthcare.'
        },
        {
            q: 'Where do I get the report?',
            a: 'Alamas is a team of specialists and partners dedicated to delivering quality chemicals and reliable solutions for your business'
        },
        {
            q: 'Do I need technical knowledge to use the report?',
            a: 'With the experience of serving hundreds of satisfied customer, PT Alamas Niaga Gemilang strive to be your ultimate partner in success.'
        },
        {
            q: 'Can I request additional support after receiving the report?',
            a: 'PT Alamas Niaga Gemilang is a chemical raw material distributor, proudly representing principals from around the globe, and are home to hundreds of chemical for different applications.'
        }
    ];

    return (
        <section className="font-primary">
            <div className="flex flex-col lg:flex-row min-h-[700px]">
                {/* Left: Contact Form */}
                <div className="lg:w-1/2 relative min-h-[600px] flex items-center justify-center p-8 md:p-20 overflow-hidden">
                    <img src={CityBg} alt="back" className="absolute inset-0 w-full h-full object-cover" />
                    
                    <div 
                        className="relative z-10 w-full max-w-xl bg-black/50 backdrop-blur-xl p-10 md:p-12 rounded-2xl"
                    >
                        <h2 className="text-white text-[35px] font-bold mb-10 leading-tight">
                            Let's Start a Conversation About Your Needs
                        </h2>
                        
                        <form className="space-y-6">
                            <div className="grid 2xl:grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    className="bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Phone" 
                                    className="bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white"
                                />
                            </div>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white"
                            />
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white"
                            />
                            <textarea 
                                placeholder="Message" 
                                rows="3"
                                className="w-full bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white resize-none"
                            ></textarea>
                            
                            <div className="pt-6">
                                <button className="w-1/2 py-4 border border-white/50 hover:bg-white hover:text-black rounded-full text-white text-[20px] font-medium tracking-widest transition-all">
                                    SEND 
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right: FAQ */}
                <div className="lg:w-1/2">
                    <div className='flex flex-col justify-between items-center h-full'>
                        <div className='hidden 2xl:flex bg-white w-full h-25'></div>
                        
                        <div className="w-full h-full bg-[#F0F0F0] p-10 2xl:p-24">
                            <h2 className="text-[3xl] md:text-[50px] font-normal text-black mb-12">
                                Frequently Asked <span className="text-primary font-bold">Questions</span>
                            </h2>
                            
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-[#9E9E9E]/50 py-6 pr-10">
                                        <button 
                                            className="cursor-pointer w-full flex justify-between items-center text-left focus:outline-none"
                                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        >
                                            <span className={`text-[25px] font-bold transition-colors cursor-pointer ${openIndex === index ? 'text-primary' : 'text-[#1e1e1e]'}`}>
                                                {faq.q}
                                            </span>
                                            <span className="text-2xl text-black">
                                                {openIndex === index ? '−' : '+'}
                                            </span>
                                        </button>
                                        
                                        <div className={`mt-4 text-black text-[20px] leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {faq.a}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ContactFAQSection;
