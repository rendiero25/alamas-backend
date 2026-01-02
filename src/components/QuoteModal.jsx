import React, { useState } from 'react';

const QuoteModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, subject, message } = formData;
        const mailtoLink = `mailto:workspace.rendy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;
        
        onClose();
    };

    return (
        <div className="container mx-auto flex items-center justify-end fixed inset-0 z-[9999]">
            <div 
                className="rounded-3xl relative flex flex-col w-full max-w-[621px] h-[731px] max-h-auto overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="backdrop-blur-md p-8 md:p-12 flex flex-col h-auto bg-black/50 rounded-2xl">
                    <div className='flex flex-col justify-between gap-5'>
                        <h2 className="text-3xl font-bold text-white mb-5 text-left font-primary">Let’s Start a Conversation <br /> About Your Needs</h2>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col gap-10 flex-grow">
                            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full py-2 bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all text-lg"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full py-2 bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all text-lg"
                                />
                            </div>

                            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full py-2 bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all text-lg"
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full py-2 bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all text-lg"
                                />
                            </div>

                            <div className="flex-grow min-h-[120px]">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-full py-2 bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all text-lg resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-1/3 hover:bg-white text-white hover:text-black font-bold py-4 mt-5 rounded-full border border-white transition-colors mt-4 cursor-pointer"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;
