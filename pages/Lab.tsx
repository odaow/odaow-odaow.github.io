
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { CheckCircle } from 'lucide-react';

const Lab: React.FC = () => {
  const { lang } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang].lab;
  const services = content.labServices;
  const gallery = content.labGallery || [];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#1a2e22] text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=80" 
             alt="Material Testing Lab" 
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e22]/80 via-[#1a2e22]/60 to-[#1a2e22]/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight whitespace-pre-line">{t.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
           <div className="h-1 w-20 bg-[#4A7C59] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map(service => (
             <div key={service.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
               <div className="h-56 overflow-hidden relative">
                 {service.image && (
                   <img 
                     src={service.image} 
                     alt={service.title[lang]} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
               <div className="p-8">
                 <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-[#4A7C59] transition-colors">{service.title[lang]}</h4>
                 <p className="text-gray-600 leading-relaxed text-sm">{service.description[lang]}</p>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Accreditation Section */}
      <div className="bg-gray-50 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.accreditationTitle}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
                    {t.accreditationText}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                       <CheckCircle className="text-[#4A7C59] shrink-0" size={24} />
                       <span className="font-medium text-gray-800">Accredited by Palestinian Engineers Association</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                       <CheckCircle className="text-[#4A7C59] shrink-0" size={24} />
                       <span className="font-medium text-gray-800">Compliance with ASTM & BS Standards</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                       <CheckCircle className="text-[#4A7C59] shrink-0" size={24} />
                       <span className="font-medium text-gray-800">ISO 9001:2015 Certified Quality Management</span>
                    </div>
                  </div>
               </div>
               <div className="order-1 md:order-2 flex justify-center relative">
                  <div className="absolute -inset-4 bg-[#4A7C59]/5 rounded-full blur-2xl"></div>
                  {/* Stylized Certificate */}
                  <div className="relative w-full max-w-md aspect-[3/4] bg-white p-2 shadow-2xl rotate-1 border border-gray-200 rounded-sm">
                     <div className="w-full h-full border-[10px] border-double border-gray-100 flex items-center justify-center flex-col text-center p-8 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                        <div className="w-24 h-24 rounded-full bg-[#4A7C59] flex items-center justify-center mb-6 shadow-lg">
                           <CheckCircle size={48} className="text-white" />
                        </div>
                        <h3 className="font-serif text-3xl font-bold text-gray-800 mb-2 tracking-wide">CERTIFICATE</h3>
                        <p className="text-xs text-[#4A7C59] font-bold uppercase tracking-[0.3em] mb-8">OF ACCREDITATION</p>
                        <div className="w-full h-px bg-gray-300 mb-8"></div>
                        <p className="text-lg font-serif text-gray-600 italic mb-2">Presented to</p>
                        <p className="text-xl font-bold text-gray-900 mb-8">Al-Shamal Laboratories</p>
                        <p className="text-sm text-gray-400 mt-auto">Valid until 2025</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.galleryTitle}</h2>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((imgUrl, index) => (
               <img 
                 key={index}
                 src={imgUrl} 
                 alt={`Lab Equipment ${index + 1}`} 
                 className="w-full h-64 object-cover rounded-lg shadow-md hover:opacity-90 transition-opacity hover:scale-[1.02] duration-300" 
               />
            ))}
         </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-[#1a2e22] text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{t.requestTestTitle}</h2>
            <Link 
              to="/contact" 
              className="inline-block bg-[#4A7C59] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#4A7C59] transition-all shadow-xl transform hover:-translate-y-1 border-2 border-transparent hover:border-[#4A7C59]"
            >
              {t.ctaButton}
            </Link>
         </div>
      </div>
    </div>
  );
};

export default Lab;
