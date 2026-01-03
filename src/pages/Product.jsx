import React from 'react';
import ProductHero from '../components/ProductHero';
import IndustryNav from '../components/IndustryNav';
import ProductList from '../components/ProductList';
import ContactFAQSection from '../components/ContactFAQSection';
import TickerSection from "../components/TickerSection";

const Product = () => {
    return (
        <div className="min-h-screen overflow-hidden flex flex-col font-primary gap-[50px]">
            <ProductHero />
            <TickerSection/>
            <ProductList />
            <ContactFAQSection />
        </div>
    );
};

export default Product;
