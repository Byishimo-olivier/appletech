"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en.json';
import rw from '../locales/rw.json';
import fr from '../locales/fr.json';
import sw from '../locales/sw.json';
import ar from '../locales/ar.json';
import hi from '../locales/hi.json';
// Import other languages as needed or load dynamically

const translations = {
    en,
    rw,
    fr,
    sw,
    ar,
    hi
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Persist language preference
        const savedLang = localStorage.getItem('app-language');
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('app-language', language);
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[language];
        for (const key of keys) {
            value = value?.[key];
            if (!value) break;
        }
        return value || path;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
