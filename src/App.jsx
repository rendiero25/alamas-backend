import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Industry from "./pages/Industry";
import IndustryDetails from "./pages/IndustryDetails";
import ContactUs from "./pages/ContactUs";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/products" element={<Product />} />
                <Route path="/industry" element={<Industry />} />
                <Route path="/industry/:slug" element={<IndustryDetails />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <Footer />
        </Router> 
    );
};

export default App;

