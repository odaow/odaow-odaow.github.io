import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const team = content.team;

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.about.title}</h1>
          <div className="h-1 w-20 bg-[#4A7C59] mx-auto"></div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
             <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.about.storyTitle}</h2>
             <p className="text-lg text-gray-600 leading-relaxed text-justify">
               {t.about.storyText}
             </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
               <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
                alt="Architects Planning" 
                className="w-full h-full object-cover" 
               />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#4A7C59] -z-10 rounded-lg hidden md:block"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">{t.about.teamTitle}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name[lang]} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name[lang]}</h3>
                    <p className="text-[#4A7C59] font-medium text-sm uppercase tracking-wide">{member.role[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;