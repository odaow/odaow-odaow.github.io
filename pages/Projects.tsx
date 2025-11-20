import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const { lang } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const projects = content.projects;
  const [filter, setFilter] = useState('all');

  // Mapping for the strict categories requested
  const filters = [
    { id: 'all', label: { en: "All Projects", ar: "جميع المشاريع" } },
    { id: 'bim', label: { en: "BIM Projects", ar: "مشاريع BIM" } },
    { id: 'structural', label: { en: "Structural Projects", ar: "مشاريع إنشائية" } },
    { id: 'interior', label: { en: "Interior Design Projects", ar: "مشاريع تصميم داخلي" } },
    { id: 'architectural', label: { en: "Architectural Projects", ar: "مشاريع معمارية" } }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.projects.title}</h1>
             <div className="h-1 w-20 bg-[#4A7C59]"></div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-[#4A7C59] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {/* Display label based on current language, but key is the specific combination asked? 
                    Actually, standard practice is to show the translation.
                    However, if the user wants the label to literally contain both languages at once, 
                    I would do `${cat.label.ar} / ${cat.label.en}`. 
                    Given the context of "Dual-Language Filtering", usually means available in both, 
                    but I will follow the prompt's format "Arabic / English" literally if interpreted that way, 
                    OR just switch based on lang.
                    
                    Prompt: "Implement a filter bar with the following dual-language categories... جميع المشاريع / All Projects"
                    I will interpret this as showing the text exactly as requested in the prompt for maximum compliance.
                */}
                <span className="hidden md:inline">{cat.label.ar} / {cat.label.en}</span>
                <span className="md:hidden">{cat.label[lang]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {filteredProjects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group relative cursor-pointer block">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title[lang]} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                   <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white px-6 py-2 rounded-sm">
                     {t.projects.viewDetails}
                   </span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-xs font-bold text-[#4A7C59] uppercase tracking-wider">
                   {/* Map category ID back to label for display */}
                   {filters.find(f => f.id === project.category)?.label[lang] || project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4A7C59] transition-colors">{project.title[lang]}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;