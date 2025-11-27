
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { MonitorPlay, Cuboid, BookOpen, ShieldCheck, Crown, ArrowRight, ArrowLeft } from 'lucide-react';

// Icon Map with defensive checks
const iconMap: { [key: string]: React.ElementType } = {
  MonitorPlay, Cuboid, BookOpen, ShieldCheck, Crown
};

// Safe Icon wrapper to prevent render crashes if an icon is undefined
const SafeIcon: React.FC<{ icon: React.ElementType | undefined, size?: number, className?: string, strokeWidth?: number }> = ({ icon: Icon, size = 24, className, strokeWidth = 2 }) => {
  if (!Icon) return null;
  return <Icon size={size} className={className} strokeWidth={strokeWidth} />;
};

const VipServices: React.FC = () => {
  const { lang, dir } = useLanguage();
  const { content } = useData();
  
  // Defensive checks for translations
  const t = content.translations[lang];
  const vipServicesData = content.vipServices || [];
  
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  
  // Fallbacks for text content
  const vipTitle = t.vip?.title || (lang === 'ar' ? "خدمات VIP" : "VIP Services");
  const vipSubtitle = t.vip?.subtitle || (lang === 'ar' ? "خدمات متميزة وحصرية" : "Premium and exclusive services");
  const ctaButton = t.vip?.ctaButton || (lang === 'ar' ? "تواصل معنا" : "Contact Us");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-[#0F1C15] text-white py-28 md:py-36 overflow-hidden">
        {/* Background Patterns - Gold Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
           </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059] rounded-full filter blur-[100px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-[#C5A059] text-[#C5A059] px-4 py-1.5 rounded-full text-sm uppercase tracking-widest font-medium mb-8">
             <SafeIcon icon={Crown} size={16} />
             <span>Premium Collection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-serif text-white">
            {vipTitle}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            {vipSubtitle}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {Array.isArray(vipServicesData) && vipServicesData.map((service, index) => {
          if (!service) return null;
          
          const IconComponent = (service.iconName && iconMap[service.iconName]) ? iconMap[service.iconName] : Crown;
          const isEven = index % 2 === 0;
          const title = service.title?.[lang] || 'Service Title';
          const description = service.description?.[lang] || '';
          const image = service.image || '';

          return (
            <div key={service.id || index} className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                 <div className="absolute inset-4 border border-[#C5A059]/30 transform translate-x-3 translate-y-3 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                 <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden rounded-sm relative shadow-xl">
                   {image && (
                     <img 
                       src={image} 
                       alt={title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   )}
                   <div className="absolute inset-0 bg-[#0F1C15]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-[#0F1C15] rounded-full flex items-center justify-center text-[#C5A059] shadow-lg mb-4">
                   <SafeIcon icon={IconComponent} size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C15] leading-tight">
                  {title}
                </h2>
                <div className="h-0.5 w-16 bg-[#C5A059]"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {description}
                </p>
              </div>

            </div>
          );
        })}
      </div>

      {/* CTA Footer */}
      <div className="bg-gray-50 border-t border-gray-100 py-24 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-gray-900 mb-8">{vipTitle}</h2>
           <Link 
             to="/contact" 
             className="inline-flex items-center gap-3 bg-[#0F1C15] text-white px-10 py-4 rounded-md text-lg hover:bg-[#1a2e22] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
           >
             <span>{ctaButton}</span>
             <SafeIcon icon={Arrow} size={20} className="text-[#C5A059] group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
           </Link>
        </div>
      </div>
    </div>
  );
};

export default VipServices;
