import React from 'react';
import { motion } from 'motion/react';
import ProductHero from '../components/ProductHero';
import IndustryNav from '../components/IndustryNav';
import ProductList from '../components/ProductList';
import ContactFAQSection from '../components/ContactFAQSection';
import TickerSection from "../components/TickerSection";

const Product = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen overflow-hidden flex flex-col font-primary gap-[50px]"
        >
            <ProductHero />
            <TickerSection/>
            <ProductList />
            <ContactFAQSection />
        </motion.div>
    );
};

export default Product;
