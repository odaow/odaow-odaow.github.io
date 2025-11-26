import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Lab from './pages/Lab';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <DataProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<><SEO page="home" /><Home /></>} />
                <Route path="about" element={<><SEO page="about" /><About /></>} />
                <Route path="services" element={<><SEO page="services" /><Services /></>} />
                <Route path="projects" element={<><SEO page="projects" /><Projects /></>} />
                <Route path="projects/:id" element={<ProjectDetail />} />
                <Route path="lab" element={<><SEO page="lab" /><Lab /></>} />
                <Route path="contact" element={<><SEO page="contact" /><Contact /></>} />
                {/* Catch-all route to redirect 404s to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </DataProvider>
    </HelmetProvider>
  );
};

export default App;