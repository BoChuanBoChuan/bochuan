import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./hook/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import ProductDetail from "./pages/products/ProductDetail";

export default function App() {
  const { i18n } = useTranslation();

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Thay id thành slug để chuẩn SEO */}
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
