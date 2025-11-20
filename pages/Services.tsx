import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { 
  Building, PencilRuler, Sofa, Cuboid, Route, Briefcase, Calculator, Lightbulb 
} from 'lucide-react';

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
  Building, PencilRuler, Sofa, Cuboid, Route, Briefcase, Calculator, Lightbulb
};

const Services: React.FC = () => {
  const { lang } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const services = content.services;

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.services.title}</h1>
          <p className="text-xl text-gray-600">{t.services.description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Briefcase;
            return (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-lg border border-gray-100 hover:border-[#4A7C59] transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4A7C59] transition-colors duration-300">
                  <Icon size={28} className="text-[#4A7C59] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4A7C59] transition-colors">
                  {service.title[lang]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;