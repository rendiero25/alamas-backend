import React from 'react';
import IndustryHero from "../components/IndustryHero";
import IndustryList from "../components/IndustryList";
import ContactFAQSection from "../components/ContactFAQSection";
import TickerSection from "../components/TickerSection";

const Industry = () => {
    return (
        <div className="min-h-screen overflow-hidden flex flex-col font-primary gap-[50px]">
            <IndustryHero />
            <TickerSection />
            <IndustryList />
            <ContactFAQSection />
        </div>
    );
};

export default Industry;
