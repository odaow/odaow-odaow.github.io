
import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';

const Layout: React.FC = () => {
  const { lang, toggleLanguage, dir } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/projects", label: t.nav.projects },
    { to: "/lab", label: t.nav.lab },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800" dir={dir}>
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50 border-b border-gray-100 h-24 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-12 h-12 bg-[#4A7C59] text-white flex items-center justify-center rounded-md group-hover:bg-[#3a6346] transition-colors shadow-sm">
                <span className="font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#4A7C59] text-xl tracking-tight leading-none mb-1">
                  {lang === 'ar' ? 'مكتب النبراس الهندسي' : 'Nebras'}
                </span>
                <span className="text-xs text-gray-500 tracking-widest uppercase">
                  {lang === 'ar' ? 'للاستشارات الهندسية' : 'Engineering Office'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-base font-medium tracking-wide transition-all hover:text-[#4A7C59] relative py-2 ${
                      isActive 
                        ? 'text-[#4A7C59] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4A7C59]' 
                        : 'text-gray-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#4A7C59] transition-colors"
                aria-label="Toggle Language"
              >
                <Globe size={18} />
                <span>{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <Link
                to="/contact"
                className="bg-[#4A7C59] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#3a6346] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone size={16} />
                {t.nav.contact}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-[#4A7C59] transition-colors"
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
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive ? 'text-[#4A7C59]' : 'text-gray-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                   `text-lg font-medium transition-colors ${
                      isActive ? 'text-[#4A7C59]' : 'text-gray-600'
                    }`
                }
              >
                {t.nav.contact}
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
      <footer className="bg-[#1a2e22] text-gray-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#4A7C59] text-white flex items-center justify-center rounded-sm">
                  <span className="font-bold text-sm">N</span>
                </div>
                <h3 className="text-white font-bold text-xl uppercase tracking-wider">
                  {lang === 'ar' ? 'مكتب النبراس الهندسي' : 'Nebras Engineering'}
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-6">
                {t.home.heroSubtitle}
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">
                {t.contact.title}
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#4A7C59] mt-1 shrink-0" />
                  <span className="leading-relaxed">{t.contact.address}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-[#4A7C59] shrink-0" />
                  <a href="tel:+970569628237" className="hover:text-white transition-colors text-base">+970 569 628 237</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={20} className="text-[#4A7C59] shrink-0" />
                  <a href="mailto:info@nebras-bim.com" className="hover:text-white transition-colors text-base">info@nebras-bim.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">{t.common.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
