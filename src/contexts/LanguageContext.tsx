import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    isArabic: boolean;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Arab world timezones
const ARAB_TIMEZONES = [
    'Africa/Cairo',           // Egypt
    'Africa/Algiers',         // Algeria
    'Africa/Casablanca',      // Morocco
    'Africa/Tunis',           // Tunisia
    'Africa/Tripoli',         // Libya
    'Africa/Khartoum',        // Sudan
    'Asia/Riyadh',            // Saudi Arabia
    'Asia/Dubai',             // UAE
    'Asia/Qatar',             // Qatar
    'Asia/Kuwait',            // Kuwait
    'Asia/Bahrain',           // Bahrain
    'Asia/Muscat',            // Oman
    'Asia/Amman',             // Jordan
    'Asia/Beirut',            // Lebanon
    'Asia/Damascus',          // Syria
    'Asia/Baghdad',           // Iraq
    'Asia/Aden',              // Yemen
    'Asia/Gaza',              // Palestine
    'Asia/Hebron',            // Palestine
];

function detectIsArabRegion(): boolean {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return ARAB_TIMEZONES.includes(timezone);
    } catch {
        return false;
    }
}

function getInitialLanguage(): Language {
    // Check localStorage first
    const stored = localStorage.getItem('arino-language');
    if (stored === 'en' || stored === 'ar') {
        return stored;
    }

    // Detect based on region
    return detectIsArabRegion() ? 'ar' : 'en';
}

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const isArabic = language === 'ar';

    useEffect(() => {
        // Update document attributes when language changes
        document.documentElement.lang = language;
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

        // Persist to localStorage
        localStorage.setItem('arino-language', language);
    }, [language, isArabic]);

    const toggleLanguage = () => {
        setLanguageState(prev => prev === 'en' ? 'ar' : 'en');
    };

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, isArabic, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
