import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Home: React.FC = () => {
  const { lang, dir } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-[90vh] flex items-center bg-white relative">
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 hidden md:block clip-diagonal"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A7C59]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-[#4A7C59]/10 px-4 py-1.5 rounded-full">
                <span className="text-[#4A7C59] font-semibold text-sm tracking-wide uppercase">
                  {t.home.since}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] whitespace-pre-line">
                {t.home.heroTitle}
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                {t.home.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/projects" 
                  className="inline-flex items-center justify-center gap-3 bg-[#4A7C59] text-white px-8 py-4 rounded-md font-medium hover:bg-[#3a6346] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t.home.ctaProject}
                  <Arrow size={18} />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center gap-3 bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-md font-medium hover:border-[#4A7C59] hover:text-[#4A7C59] transition-all"
                >
                  {t.home.ctaServices}
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block relative h-[600px] w-full">
               <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                alt="Modern Architecture"
                className="w-full h-full object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-[#4A7C59]">
                 <p className="text-gray-600 italic">"{t.home.quote}"</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Access Strip */}
      <div className="bg-[#1a2e22] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700/50 rtl:divide-x-reverse">
            <Link to="/services" className="group p-8 text-center hover:bg-white/5 transition-colors">
               <h3 className="text-white text-2xl font-semibold mb-2">{t.nav.services}</h3>
               <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Civil, Architecture, Interior</p>
               <span className="text-[#4A7C59] text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">{t.common.readMore}</span>
            </Link>
            <Link to="/projects" className="group p-8 text-center hover:bg-white/5 transition-colors">
               <h3 className="text-white text-2xl font-semibold mb-2">{t.nav.projects}</h3>
               <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Residential, Commercial, Public</p>
               <span className="text-[#4A7C59] text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">{t.common.readMore}</span>
            </Link>
            <Link to="/contact" className="group p-8 text-center hover:bg-white/5 transition-colors">
               <h3 className="text-white text-2xl font-semibold mb-2">{t.nav.contact}</h3>
               <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Tubas, Palestine</p>
               <span className="text-[#4A7C59] text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">{t.common.readMore}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;