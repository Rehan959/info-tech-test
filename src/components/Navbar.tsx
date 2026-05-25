import  { useState } from "react";
import Logo from "../assets/Logo.png";
import ContactIcon from "../assets/Contact-icon.png";
import Menu from "../assets/Menu.png";
import Home from "../assets/Home.png";
import AboutUs from "../assets/AboutUs.png";
import OurServices from "../assets/Our Services.png";
import Pricing from "../assets/Pricing.png";
import FAQ from "../assets/FAQ.png";
import Contact from "../assets/Contact.png";

const navLinks = [
  { label: "Home", icon: Home },
  { label: "About Us", icon: AboutUs },
  { label: "Our Services", icon: OurServices },
  { label: "Pricing", icon: Pricing },
  { label: "FAQ", icon: FAQ },
  { label: "Contact", icon: Contact },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-9 w-auto object-contain" />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {navLinks.map(({ label }, i) => (
              <li key={label}>
                <a
                  href="#"
                  className={`hover:text-blue-600 transition-colors ${
                    i === 0 ? "text-blue-600 font-semibold" : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md">
              <img src={ContactIcon} alt="" className="w-4 h-4 object-contain brightness-200" />
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <img src={Menu} alt="Menu" className="w-6 h-6 object-contain" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

          {/* Drawer Panel */}
          <div
            className="relative z-10 bg-white w-72 h-full flex flex-col shadow-2xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideIn 0.25s ease-out" }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
              <img src={Logo} alt="Logo" className="h-8 w-auto object-contain" />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-gray-700 transition-colors text-2xl leading-none"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col mt-2 flex-1">
              {navLinks.map(({ label, icon }, i) => (
                <li key={label}>
                  <a
                    href="#"
                    className={`flex items-center gap-4 px-6 py-4 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                      i === 0 ? "text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <img
                      src={icon}
                      alt=""
                      className={`w-5 h-5 object-contain ${i === 0 ? "opacity-100" : "opacity-60"}`}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button at bottom */}
            <div className="px-5 py-6 border-t border-gray-100">
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md">
                <img src={ContactIcon} alt="" className="w-4 h-4 object-contain brightness-200" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-in animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}