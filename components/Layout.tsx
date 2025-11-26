
import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';

// Custom Logo Component
// Concept: "The Engineering Beacon" - A stylized compass/structure with a central light (Nibras)
const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left Pillar / Structure leg */}
    <path d="M30 90V40L50 10L70 40V90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    {/* The Beam / Crossbar representing stability and the letter N/A abstraction */}
    <path d="M30 65H70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    {/* The Beacon Light - Diamond at the apex */}
    <path d="M50 25L42 35L50 45L58 35L50 25Z" fill="currentColor" />
    {/* Radiance / Shine (Optional subtle detail for 'Creative' aspect) */}
    <circle cx="50" cy="10" r="4" fill="currentColor" />
  </svg>
);

const Layout: React.FC = () => {
  const { lang, toggleLanguage, dir } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/vip-services", label: t.nav.vip },
    { to: "/projects", label: t.nav.projects },
    { to: "/lab", label: t.nav.lab },
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
            {/* Corrected Centering: Removed rtl:translate-x-1/2 because left-1/2 is physical and correct for both modes */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-[15px] font-medium tracking-wide transition-all hover:text-[#4A7C59] relative py-2 ${isActive
                      ? 'text-[#4A7C59] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4A7C59]'
                      : 'text-gray-600 hover:text-[#4A7C59]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
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
                {t.nav.contact}
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
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${isActive ? 'text-[#4A7C59]' : 'text-gray-600'
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
                  `text-lg font-medium transition-colors ${isActive ? 'text-[#4A7C59]' : 'text-gray-600'
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
                {t.home.heroSubtitle}
              </p>

              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4A7C59] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4A7C59] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-wider border-b border-gray-700 pb-4 inline-block">
                {t.contact.title}
              </h3>
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4 group">
                  <MapPin size={22} className="text-[#4A7C59] mt-1 shrink-0 group-hover:text-white transition-colors" />
                  <span className="leading-relaxed text-gray-300 group-hover:text-white transition-colors">{t.contact.address}</span>
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
            <p className="text-xs text-gray-500">{t.common.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
