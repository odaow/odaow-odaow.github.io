
export type Language = 'en' | 'ar';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    lab: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaProject: string;
    ctaServices: string;
    ctaContact: string;
    quote: string;
    since: string;
  };
  about: {
    title: string;
    storyTitle: string;
    storyText: string;
    teamTitle: string;
  };
  services: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    filterAll: string;
    viewDetails: string;
    projectInfo: string;
    client: string;
    location: string;
    year: string;
    category: string;
    backToProjects: string;
  };
  lab: {
    title: string;
    subtitle: string;
    servicesTitle: string;
    accreditationTitle: string;
    accreditationText: string;
    galleryTitle: string;
    ctaButton: string;
    requestTestTitle: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    location: string;
  };
  common: {
    readMore: string;
    copyright: string;
  };
}

export interface ServiceItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  image: string;
}

export interface ProjectItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  category: string;
  image: string;
  description?: {
    en: string;
    ar: string;
  };
  client?: {
    en: string;
    ar: string;
  };
  location?: {
    en: string;
    ar: string;
  };
  year?: string;
  gallery?: string[];
}

export interface LabServiceItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  category: string;
  image?: string;
}
