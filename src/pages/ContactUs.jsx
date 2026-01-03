import React from 'react';
import ContactFAQSection from '../components/ContactFAQSection';

const ContactUs = () => {
    return (
        <div className="font-primary">
            {/* Hero Section */}
            <section className="container mx-auto pt-20 mb-[75px]">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
                    {/* Left: Title */}
                    <div className="lg:w-1/2">
                        <h1 className="text-[60px] md:text-[100px] font-medium text-black leading-tight mb-8">
                            Let's get <br /> in touch
                        </h1>
                        <p className="text-[30px] md:text-[35px] font-medium text-black leading-tight">
                            Don't be afraid to <br /> say hello with us!
                        </p>
                    </div>

                    {/* Right: Info Area */}
                    <div className="lg:w-1/2 pt-10 lg:pt-20">
                        <p className="text-[25px] font-medium text-black mb-12 max-w-lg">
                            Great! we're excited to hear from you and let's start something special together. call us for any inquery.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-black/50 text-[18px]">Phone</span>
                                <span className="text-black text-[18px] font-bold">021-3001-0522</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-black/50 text-[18px]">Whatsapp</span>
                                <span className="text-black text-[18px] font-bold">0811-1889-5089</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-black/50 text-[18px]">Email</span>
                                <span className="text-black text-[18px] font-bold">info@alamasng.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form & FAQ Section */}
            <ContactFAQSection />
        </div>
    );
};

export default ContactUs;
