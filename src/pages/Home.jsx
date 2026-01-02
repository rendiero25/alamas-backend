import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TickerSection from '../components/TickerSection';
import ServicesSection from '../components/ServicesSection';
import ChemicalSolutionsSection from '../components/ChemicalSolutionsSection';
import IndustrySections from '../components/IndustrySections';
import ContactFAQSection from '../components/ContactFAQSection';

const Home = () => {
    return (
        <div className="overflow-hidden flex flex-col gap-[125px]">
            <Hero />
            <AboutSection />
            <TickerSection />
            <ServicesSection />
            <ChemicalSolutionsSection />
            <IndustrySections />
            <ContactFAQSection />
        </div>
    );
};

export default Home;
