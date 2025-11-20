import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const { content } = useData();
  const t = content.translations[lang];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.contact.title}</h1>
          <p className="text-gray-600">{t.about.storyText.substring(0, 100)}...</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Phone */}
          <a href="tel:+970569628237" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4A7C59] transition-colors">
              <Phone size={28} className="text-[#4A7C59] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{t.contact.phone}</h3>
            <p className="text-gray-600 font-mono text-sm">+970 569 628 237</p>
          </a>

          {/* Card 2: WhatsApp */}
          <a href="https://wa.me/970569628237" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4A7C59] transition-colors">
              <MessageCircle size={28} className="text-[#4A7C59] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{t.contact.whatsapp}</h3>
            <p className="text-gray-600 text-sm">Chat with us</p>
          </a>

          {/* Card 3: Email */}
          <a href="mailto:info@nebras-bim.com" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4A7C59] transition-colors">
              <Mail size={28} className="text-[#4A7C59] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{t.contact.email}</h3>
            <p className="text-gray-600 text-sm">info@nebras-bim.com</p>
          </a>

          {/* Card 4: Address */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#4A7C59] transition-colors">
              <MapPin size={28} className="text-[#4A7C59] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">{t.contact.location}</h3>
            <p className="text-gray-600 text-sm">{t.contact.address}</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gray-200 relative">
            <iframe 
              title="Al-Nabras Location"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13486.275142870097!2d35.3697!3d32.3211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE5JzE2LjAiTiAzNcKwMjInMTAuOSJF!5e0!3m2!1sen!2s!4v1633023232000!5m2!1sen!2s" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;