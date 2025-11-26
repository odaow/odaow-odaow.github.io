import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Crown, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const VipServices: React.FC = () => {
    const { lang } = useLanguage();
    const { content } = useData();
    const t = content.translations[lang];
    const vipServices = content.vipServices || []; // Fallback if undefined

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Hero Section */}
            <div className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80"
                        alt="VIP Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-full mb-8 border border-amber-500/30 backdrop-blur-sm">
                        <Crown className="w-8 h-8 text-amber-400" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        {t.vip.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        {t.vip.subtitle}
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {vipServices.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
                                <img
                                    src={service.image}
                                    alt={service.title[lang]}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-amber-500/20 backdrop-blur-md p-2 rounded-lg border border-amber-500/30">
                                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                                    {service.title[lang]}
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {service.description[lang]}
                                </p>

                                <div className="flex items-center text-amber-400 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                                    <span>{t.common.readMore}</span>
                                    <ArrowRight className="w-4 h-4 ml-2 rtl:rotate-180" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {lang === 'en' ? "Ready to Experience Excellence?" : "جاهز لتجربة التميز؟"}
                        </h2>
                        <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                            {lang === 'en'
                                ? "Contact us today to discuss how our VIP services can elevate your project to the next level."
                                : "تواصل معنا اليوم لمناقشة كيف يمكن لخدمات VIP الخاصة بنا الارتقاء بمشروعك إلى المستوى التالي."}
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {t.vip.ctaContact}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VipServices;
