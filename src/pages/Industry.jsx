import React from 'react';
import { motion } from 'motion/react';
import IndustryHero from "../components/IndustryHero";
import IndustryList from "../components/IndustryList";
import ContactFAQSection from "../components/ContactFAQSection";
import TickerSection from "../components/TickerSection";

const Industry = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen overflow-hidden flex flex-col font-primary gap-[50px]"
        >
            <IndustryHero />
            <TickerSection />
            <IndustryList />
            <ContactFAQSection />
        </motion.div>
    );
};

export default Industry;
