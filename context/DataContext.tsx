import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Translation, ServiceItem, TeamMember, ProjectItem, LabServiceItem, VipServiceItem } from '../types';
import { DEFAULT_CONTENT, DEFAULT_SERVICES, DEFAULT_TEAM, DEFAULT_PROJECTS, DEFAULT_LAB_SERVICES, DEFAULT_LAB_GALLERY, DEFAULT_VIP_SERVICES } from '../constants';

interface SiteContent {
  translations: Record<'en' | 'ar', Translation>;
  services: ServiceItem[];
  team: TeamMember[];
  projects: ProjectItem[];
  labServices: LabServiceItem[];
  labGallery: string[];
  vipServices: VipServiceItem[];
}

interface DataContextType {
  content: SiteContent;
  loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>({
    translations: DEFAULT_CONTENT,
    services: DEFAULT_SERVICES,
    team: DEFAULT_TEAM,
    projects: DEFAULT_PROJECTS,
    labServices: DEFAULT_LAB_SERVICES,
    labGallery: DEFAULT_LAB_GALLERY,
    vipServices: DEFAULT_VIP_SERVICES
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Use absolute path to ensure it works from sub-routes
        const response = await fetch('/data/content.json');
        if (response.ok) {
          const data = await response.json();
          
          setContent(prev => {
            // Deep merge translations to ensure new keys (like 'vip') from DEFAULT_CONTENT 
            // are preserved if the fetched JSON is stale or incomplete.
            const mergedTranslations = { ...prev.translations };
            
            if (data.translations) {
              if (data.translations.en) {
                mergedTranslations.en = { ...mergedTranslations.en, ...data.translations.en };
              }
              if (data.translations.ar) {
                mergedTranslations.ar = { ...mergedTranslations.ar, ...data.translations.ar };
              }
            }

            return {
              ...prev,
              ...data,
              translations: mergedTranslations
            };
          });
        } else {
          console.warn("Failed to load external content, using defaults.");
        }
      } catch (error) {
        console.warn("Error loading content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return (
    <DataContext.Provider value={{ content, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};