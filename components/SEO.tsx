
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

interface SEOProps {
  page: string;
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ page, title: overrideTitle, description: overrideDesc, image }) => {
  const { lang } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];
  
  const siteName = lang === 'ar' ? "مكتب النبراس الهندسي" : "Nebras Engineering Office";
  const currentUrl = window.location.href;
  const domain = "https://nebras-bim.com";

  // Dynamic Titles based on page
  let title = "";
  let description = "";

  switch(page) {
    case 'home':
      title = `${siteName} - ${lang === 'ar' ? 'هندسة دقيقة وتصميم مبتكر' : 'Precision Engineering & Innovative Design'}`;
      description = t.home.heroSubtitle;
      break;
    case 'about':
      title = `${t.nav.about} | ${siteName}`;
      description = t.about.storyText.substring(0, 160) + "...";
      break;
    case 'services':
      title = `${t.nav.services} | ${siteName}`;
      description = t.services.description;
      break;
    case 'projects':
      title = `${t.nav.projects} | ${siteName}`;
      description = lang === 'ar' ? "استعرض مشاريعنا المتميزة في الهندسة المعمارية والإنشائية في فلسطين." : "Explore our distinguished architectural and structural engineering projects in Palestine.";
      break;
    case 'lab':
      title = `${t.nav.lab} | ${siteName}`;
      description = t.lab.subtitle;
      break;
    case 'contact':
      title = `${t.nav.contact} | ${siteName}`;
      description = lang === 'ar' ? "تواصل مع مكتب النبراس في طوباس للاستشارات الهندسية وفحوصات المختبر." : "Contact Nebras Engineering Office in Tubas for engineering consultancy and lab testing.";
      break;
    default:
      title = siteName;
      description = t.home.heroSubtitle;
  }

  // Use overrides if provided (for Project Details)
  if (overrideTitle) title = `${overrideTitle} | ${siteName}`;
  if (overrideDesc) description = overrideDesc;

  const socialImage = image || `${domain}/og-image.jpg`; // You should upload a default OG image

  return (
    <Helmet>
      {/* Basic Meta */}
      <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical & Hreflang (Ideally, you should have distinct URLs for languages, but pointing canonical to self is step 1) */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" href={domain} hrefLang="x-default" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang === 'ar' ? 'ar_PS' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
};

export default SEO;
