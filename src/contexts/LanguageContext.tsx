
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    projects: 'المشاريع',
    timeline: 'الجدول الزمني',
    news: 'الأخبار',
    quote: 'طلب عرض أسعار',
    careers: 'طلب توظيف',
    testimonials: 'آراء العملاء',
    dashboard: 'لوحة التحكم',
    about: 'عن الشركة',
    contact: 'اتصل بنا',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    
    // Company Info
    companyName: 'شركة زان للألمونيوم و الزجاج',
    companyDescription: 'شركة متخصصة في حلول الألمونيوم والزجاج للمشاريع السكنية والتجارية والصناعية',
    
    // Common
    readMore: 'اقرأ المزيد',
    viewAll: 'عرض الكل',
    submit: 'إرسال',
    loading: 'جاري التحميل...',
    success: 'تم بنجاح',
    error: 'حدث خطأ',
    
    // Hero
    heroTitle: 'حلول متطورة للألمونيوم والزجاج',
    heroSubtitle: 'نقدم أفضل الحلول المعمارية للمشاريع السكنية والتجارية والصناعية',
    getQuote: 'احصل على عرض أسعار',
    
    // Sections
    featuredServices: 'الخدمات المميزة',
    projectsShowcase: 'معرض المشاريع',
    whyChooseUs: 'لماذا تختارنا',
    clientTestimonials: 'آراء العملاء',
    latestNews: 'آخر الأخبار',
    
    // Footer
    builtBy: 'تم التطوير بواسطة ابتكار تقني',
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    timeline: 'Timeline',
    news: 'News',
    quote: 'Request Quote',
    careers: 'Careers',
    testimonials: 'Testimonials',
    dashboard: 'Dashboard',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    
    // Company Info
    companyName: 'Zan Aluminum & Glass Company',
    companyDescription: 'A specialized company in aluminum and glass solutions for residential, commercial, and industrial projects',
    
    // Common
    readMore: 'Read More',
    viewAll: 'View All',
    submit: 'Submit',
    loading: 'Loading...',
    success: 'Success',
    error: 'Error',
    
    // Hero
    heroTitle: 'Advanced Aluminum & Glass Solutions',
    heroSubtitle: 'We provide the best architectural solutions for residential, commercial, and industrial projects',
    getQuote: 'Get Quote',
    
    // Sections
    featuredServices: 'Featured Services',
    projectsShowcase: 'Projects Showcase',
    whyChooseUs: 'Why Choose Us',
    clientTestimonials: 'Client Testimonials',
    latestNews: 'Latest News',
    
    // Footer
    builtBy: 'Built by Ebtkar Tqni',
    allRightsReserved: 'All Rights Reserved',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  
  const isRTL = language === 'ar';
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };
  
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
