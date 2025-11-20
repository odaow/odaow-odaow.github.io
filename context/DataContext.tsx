
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Translation, ServiceItem, TeamMember, ProjectItem, LabServiceItem } from '../types';
import { DEFAULT_CONTENT, DEFAULT_SERVICES, DEFAULT_TEAM, DEFAULT_PROJECTS, DEFAULT_LAB_SERVICES, DEFAULT_LAB_GALLERY } from '../constants';

interface SiteContent {
  translations: Record<'en' | 'ar', Translation>;
  services: ServiceItem[];
  team: TeamMember[];
  projects: ProjectItem[];
  labServices: LabServiceItem[];
  labGallery: string[];
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
    labGallery: DEFAULT_LAB_GALLERY
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('data/content.json');
        if (response.ok) {
          const data = await response.json();
          setContent(data);
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
