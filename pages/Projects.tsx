
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { PROJECT_CATEGORIES } from '../constants';
import { Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const { lang, dir } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  const projects = content.projects;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-12 gap-8">
          <div>
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.projects.title}</h1>
             <div className="h-1 w-20 bg-[#4A7C59]"></div>
          </div>
          
          {/* Advanced Filtering System */}
          <div className="w-full">
            
            {/* Mobile View: Styled Select Dropdown */}
            <div className="md:hidden relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#4A7C59] rtl:left-auto rtl:right-0 rtl:pl-0 rtl:pr-3">
                <Filter size={18} />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="block w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent sm:text-sm rounded-lg bg-gray-50 text-gray-900 appearance-none"
              >
                {PROJECT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.label[lang]}
                  </option>
                ))}
              </select>
              {/* Custom Arrow for consistent look */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 rtl:right-auto rtl:left-0">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>

            {/* Desktop View: Modern Pills/Tags */}
            <div className="hidden md:flex flex-wrap gap-3">
              {PROJECT_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-in-out border ${
                    filter === cat.id
                      ? 'bg-[#4A7C59] text-white border-[#4A7C59] shadow-md transform scale-105' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#4A7C59] hover:text-[#4A7C59] hover:bg-green-50/30'
                  }`}
                >
                  <span>{cat.label[lang]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {filteredProjects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group relative cursor-pointer block h-full">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title[lang]} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                   <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 border border-white px-6 py-2 rounded-full font-medium backdrop-blur-sm">
                     {t.projects.viewDetails}
                   </span>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#4A7C59]"></span>
                  <span className="text-xs font-bold text-[#4A7C59] uppercase tracking-wider">
                    {/* Lookup proper label */}
                    {PROJECT_CATEGORIES.find(f => f.id === project.category)?.label[lang] || project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4A7C59] transition-colors leading-tight">{project.title[lang]}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
