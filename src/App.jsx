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
import Dashboard from "./pages/admin/Dashboard";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageCategories from "./pages/admin/ManageCategories";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageIndustries from "./pages/admin/ManageIndustries";
import NotFound from "./pages/NotFound";

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
                
                <Route path="/login" element={<Login />} />

                {/* Admin Routes (Protected) */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
                    <Route path="/dashboard/products" element={<ManageProducts />} />
                    <Route path="/dashboard/industries" element={<ManageIndustries />} />
                    <Route path="/dashboard/categories" element={<ManageCategories />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router> 
    );
};

export default App;

