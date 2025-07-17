import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/img/logo.png";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    `block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 ${
      location.pathname === path ? "text-blue-700 font-semibold" : "text-gray-700"
    }`;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo & Company Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <div className="flex-col hidden text-sm leading-tight sm:flex">
            <span className="font-semibold text-blue-700">Công ty Bochuan</span>
            <span className="font-semibold text-blue-700">Bochuan Company</span>
            <span className="font-semibold text-blue-700">博川公司</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden space-x-6 font-medium md:flex">
          <Link to="/" className={linkClass("/")}>
            {t("nav.home")}
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            {t("nav.about")}
          </Link>
          <Link to="/products" className={linkClass("/products")}>
            {t("nav.products")}
          </Link>
          {/* <Link to="/services" className={linkClass("/services")}>
            {t("nav.services")}
          </Link> */}
          <Link to="/contact" className={linkClass("/contact")}>
            {t("nav.contact")}
          </Link>
        </nav>

        {/* LanguageSwitcher & Hamburger */}
        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          {/* Hamburger menu for mobile */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu, slide down */}
      <div
        className={`md:hidden bg-white shadow-md transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className={linkClass("/")}>
            {t("nav.home")}
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={linkClass("/about")}>
            {t("nav.about")}
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className={linkClass("/products")}>
            {t("nav.products")}
          </Link>
          {/* <Link to="/services" onClick={() => setMenuOpen(false)} className={linkClass("/services")}>
            {t("nav.services")}
          </Link> */}
          <Link to="/contact" onClick={() => setMenuOpen(false)} className={linkClass("/contact")}>
            {t("nav.contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
