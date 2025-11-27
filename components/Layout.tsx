
import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Menu, X, Globe, Phone, Mail, MapPin, Crown, LucideIcon } from 'lucide-react';

// Custom Logo Component
const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M30 90V40L50 10L70 40V90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 65H70" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <path d="M50 25L42 35L50 45L58 35L50 25Z" fill="currentColor" />
    <circle cx="50" cy="10" r="4" fill="currentColor" />
  </svg>
);

const Layout: React.FC = () => {
  const { lang, toggleLanguage, dir } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Defensive checks for translations with icon fallbacks
  const navLinks = [
    { to: "/", label: t.nav?.home || 'Home' },
    { to: "/about", label: t.nav?.about || 'About' },
    { to: "/services", label: t.nav?.services || 'Services' },
    { to: "/projects", label: t.nav?.projects || 'Projects' },
    { to: "/lab", label: t.nav?.lab || 'The Lab' },
    { to: "/vip-services", label: t.nav?.vip || 'VIP', icon: Crown },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800" dir={dir}>
      {/* Navbar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100 h-24 flex items-center transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0 focus:outline-none z-20">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <LogoIcon className="w-12 h-12 text-[#4A7C59]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-[#4A7C59] text-xl tracking-tight leading-none mb-1 group-hover:text-[#3a6346] transition-colors">
                  {lang === 'ar' ? 'مكتب النبراس الهندسي' : 'Nebras'}
                </span>
                <span className={`text-xs text-gray-500 uppercase group-hover:text-[#4A7C59] transition-colors ${lang === 'ar' ? '' : 'tracking-[0.15em]'}`}>
                  {lang === 'ar' ? 'للاستشارات الهندسية' : 'Engineering Office'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-[15px] font-medium tracking-wide transition-all hover:text-[#4A7C59] relative py-2 flex items-center gap-1 ${
                        isActive 
                          ? 'text-[#4A7C59] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4A7C59]' 
                          : link.to === "/vip-services" ? 'text-[#C5A059] hover:text-[#a08040]' : 'text-gray-600 hover:text-[#4A7C59]'
                      }`
                    }
                  >
                    {Icon && <Icon size={14} />}
                    {link.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-6 z-20">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#4A7C59] transition-colors p-2 rounded-md hover:bg-gray-50"
                aria-label="Toggle Language"
              >
                <Globe size={18} />
                <span className="uppercase tracking-wide">{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <Link
                to="/contact"
                className="bg-[#4A7C59] text-white px-7 py-2.5 rounded-md font-semibold text-sm hover:bg-[#3a6346] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone size={16} />
                {t.contact?.title || 'Contact'}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-[#4A7C59] transition-colors rounded-md focus:bg-gray-50 ml-auto lg:ml-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-slideDown z-40">
            <div className="flex flex-col py-6 px-6 space-y-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors flex items-center gap-2 ${
                        isActive 
                          ? 'text-[#4A7C59]' 
                          : link.to === '/vip-services' ? 'text-[#C5A059]' : 'text-gray-600'
                      }`
                    }
                  >
                    {Icon && <Icon size={18} />}
                    {link.label}
                  </NavLink>
                );
              })}
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                   `text-lg font-medium transition-colors ${
                      isActive ? 'text-[#4A7C59]' : 'text-gray-600'
                    }`
                }
              >
                {t.nav?.contact || 'Contact'}
              </NavLink>
              
              <hr className="border-gray-100" />
              
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 text-gray-600 font-medium p-2 rounded hover:bg-gray-50"
              >
                <Globe size={20} />
                <span>{lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2e22] text-gray-300 py-16 mt-auto border-t border-[#2a4234]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
                <LogoIcon className="w-10 h-10 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-start">
                   <h3 className="text-white font-bold text-xl uppercase tracking-wider group-hover:text-[#4A7C59] transition-colors">
                     {lang === 'ar' ? 'مكتب النبراس الهندسي' : 'Nebras Engineering'}
                   </h3>
                   <span className={`text-[10px] text-gray-400 uppercase ${lang === 'ar' ? '' : 'tracking-[0.15em]'}`}>
                     {lang === 'ar' ? 'للاستشارات الهندسية' : 'Engineering Office'}
                   </span>
                </div>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-8">
                {t.home?.heroSubtitle}
              </p>
              
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4A7C59] hover:text-white transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4A7C59] hover:text-white transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-wider border-b border-gray-700 pb-4 inline-block">
                {t.contact?.title || 'Contact Us'}
              </h3>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4 group">
                  <MapPin size={22} className="text-[#4A7C59] mt-1 shrink-0 group-hover:text-white transition-colors" />
                  <span className="leading-relaxed text-gray-300 group-hover:text-white transition-colors">{t.contact?.address}</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={22} className="text-[#4A7C59] shrink-0 group-hover:text-white transition-colors" />
                  <a href="tel:+970569628237" className="text-gray-300 hover:text-white transition-colors text-base">+970 569 628 237</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <Mail size={22} className="text-[#4A7C59] shrink-0 group-hover:text-white transition-colors" />
                  <a href="mailto:info@nebras-bim.com" className="text-gray-300 hover:text-white transition-colors text-base">info@nebras-bim.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">{t.common?.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
