
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { ArrowLeft, ArrowRight, Calendar, MapPin, User, Tag, Grid } from 'lucide-react';
import { PROJECT_CATEGORIES } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, dir } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  
  const project = content.projects.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(project?.image || '');
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const gallery = [project.image, ...(project.gallery || [])].filter((v, i, a) => a.indexOf(v) === i);
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  // Helper to get proper label for category
  const categoryLabel = PROJECT_CATEGORIES.find(c => c.id === project.category)?.label[lang] || project.category;

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Nav */}
        <div className="flex items-center justify-between mb-8">
           <Link 
             to="/projects" 
             className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4A7C59] transition-colors font-medium"
           >
             <BackIcon size={20} />
             <span>{t.projects.backToProjects}</span>
           </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-3">
               <span className="bg-[#4A7C59]/10 text-[#4A7C59] px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">
                  {categoryLabel}
               </span>
               {project.year && (
                 <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
                   <Calendar size={14} />
                   {project.year}
                 </span>
               )}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{project.title[lang]}</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
           
           {/* Left Column: Gallery */}
           <div className="lg:col-span-2 space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm bg-gray-200 border border-gray-100">
                 <img 
                   src={activeImage} 
                   alt={project.title[lang]} 
                   className="w-full h-full object-cover transition-all duration-500"
                 />
              </div>
              
              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                        activeImage === img ? 'border-[#4A7C59] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
           </div>

           {/* Right Column: Details */}
           <div className="space-y-8">
             
             {/* Info Card */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h3 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-2">
                 {t.projects.projectInfo}
               </h3>
               <ul className="space-y-4">
                 {project.client && (
                   <li className="flex items-start gap-3">
                     <User className="text-[#4A7C59] shrink-0 mt-0.5" size={18} />
                     <div>
                       <span className="block text-xs text-gray-400 uppercase tracking-wider">{t.projects.client}</span>
                       <span className="text-gray-700 font-medium">{project.client[lang]}</span>
                     </div>
                   </li>
                 )}
                 {project.location && (
                   <li className="flex items-start gap-3">
                     <MapPin className="text-[#4A7C59] shrink-0 mt-0.5" size={18} />
                     <div>
                        <span className="block text-xs text-gray-400 uppercase tracking-wider">{t.projects.location}</span>
                        <span className="text-gray-700 font-medium">{project.location[lang]}</span>
                     </div>
                   </li>
                 )}
                 {project.year && (
                   <li className="flex items-start gap-3">
                     <Calendar className="text-[#4A7C59] shrink-0 mt-0.5" size={18} />
                     <div>
                        <span className="block text-xs text-gray-400 uppercase tracking-wider">{t.projects.year}</span>
                        <span className="text-gray-700 font-medium">{project.year}</span>
                     </div>
                   </li>
                 )}
                 <li className="flex items-start gap-3">
                   <Tag className="text-[#4A7C59] shrink-0 mt-0.5" size={18} />
                   <div>
                      <span className="block text-xs text-gray-400 uppercase tracking-wider">{t.projects.category}</span>
                      <span className="text-gray-700 font-medium">{categoryLabel}</span>
                   </div>
                 </li>
               </ul>
             </div>

             {/* Description */}
             <div>
               <h3 className="font-bold text-gray-900 text-lg mb-3">{t.about.storyTitle}</h3>
               <div className="prose prose-green max-w-none text-gray-600 leading-relaxed">
                 <p>
                   {project.description 
                     ? project.description[lang] 
                     : t.about.storyText.substring(0, 150) + "..." // Fallback
                   }
                 </p>
               </div>
             </div>

           </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
