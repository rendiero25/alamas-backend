import Industry1Bg from "../assets/industry/industries1.png";
import Industry2Bg from "../assets/industry/industries2.png";
import Industry3Bg from "../assets/industry/industries3.png";
import Industry4Bg from "../assets/industry/industries4.png";
import Industry5Bg from "../assets/industry/industries5.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IndustryList = () => {
    const industries = [
        {
            slug: "polyurethane-foam",
            bg: Industry1Bg,
            title: "Polyurethane Foam",
            heading: "Elevating Polyurethanes & Hygiene Standards with Premium Materials",
            desc: "We supply essential raw materials for polyurethane and hygiene applications, ensuring product safety, performance, and quality. With innovation at the core, we help our partners deliver effective and reliable solutions to the market.",
        },
        {
            slug: "home-and-personal-care",
            bg: Industry2Bg,
            title: "Home & Personal Care",
            heading: "High-Quality Raw Materials for Household & Personal Care",
            desc: "We provide trusted raw materials for hygiene, grooming, and household care products. By maintaining strict quality standards and fostering innovation, we support brands in delivering safe, effective, and consumer-trusted solutions.",
        },
        {
            slug: "food-ingredients",
            bg: Industry3Bg,
            title: "Food Ingredients",
            heading: "Leading Food and Beverages with Premium Ingredients and Expert Service",
            desc: "We source and distribute high-quality food ingredients that ensure taste, safety, and compliance. Our expertise helps clients innovate and meet evolving consumer demands with reliable and consistent supply.",
        },
        {
            slug: "flavor-and-fragrance",
            bg: Industry4Bg,
            title: "Flavor & Fragrance",
            heading: "Innovating Sustainable Solutions in Flavor & Fragrance Industry",
            desc: "We deliver premium raw materials for the flavor and fragrance industry, focusing on durability, performance, and sustainability. Through reliable sourcing and supply, we help clients develop products that meet modern industry standards.",
        },
        {
            slug: "cigarettes-and-vape",
            bg: Industry5Bg,
            title: "Cigarette & Vape",
            heading: "Delivering Quality Ingredients for Cigarettes & Vapes Industry",
            desc: "We supply premium raw materials and additives essential to the cigarettes and vapes industry. With a focus on quality, consistency, and compliance, we ensure our clients have the right ingredients to meet evolving consumer demands and regulatory standards.",
        },
    ];

    return (
        <section className="w-full flex flex-col gap-12 md:gap-24 font-primary mb-[75px]">
            <div className="container mx-auto px-10 2xl:px-0">
                <div className="mb-0">
                    <h2 className="text-3xl md:text-[50px] font-bold text-primary">
                        Chemical Solutions <span className="text-black font-bold">For Every Industry</span>
                    </h2>
                    <p className="text-black mt-4 max-w-7xl font-normal italic text-[20px] md:text-[25px] leading-relaxed">
                        We provide specialty chemicals and raw materials sourced from trusted local and global partners to support diverse industries.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-10 2xl:px-0 flex flex-col gap-16 md:gap-20">
                {industries.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-[720px] sm:h-[500px] md:h-[550px] lg:h-[500px] 2xl:h-[520px] group rounded-2xl"
                    >
                        {/* Background Image */}
                        <img 
                            src={item.bg} 
                            alt={item.title} 
                            className="rounded-2xl absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex items-center px-6 md:px-8 2xl:px-12">
                            <div className="bg-black/25 backdrop-blur-2xl p-8 2xl:p-8 rounded-2xl border border-white/10 max-w-full md:max-w-4xl text-white">
                                <span className="text-lg md:text-xl italic font-normal block mb-4 opacity-100">
                                    {item.title}
                                </span>
                                <h3 className="text-2xl md:text-[35px] font-bold mb-6 leading-tight">
                                    {item.heading}
                                </h3>
                                <p className="text-base md:text-[18px] font-normal leading-relaxed mb-10 opacity-90">
                                    {item.desc}
                                </p>
                                <Link to={`/industry/${item.slug}`}>
                                    <button className="bg-gradient-to-r from-primary to-[#010533] hover:scale-110 text-white text-[20px] font-medium py-3 px-8 rounded-full transition-all cursor-pointer">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default IndustryList;
