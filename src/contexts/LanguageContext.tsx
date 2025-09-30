import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.residents": "Residents",
    "nav.registration": "Registration",
    "nav.techstarts": "Tech Starts",
    "nav.siteTitle": "Startup Weekend Sur",
    
    // Home Page
    "home.hero.title": "Welcome! To Startup weekend",
    "home.hero.subtitle": "My work about outside space",
    "home.hero.coming": "WE ARE COMING SOON",
    "home.hero.description": "Get ready for a weekend full of creativity, innovation, and entrepreneurship at Startup Weekend Sur!",
    "home.what.title": "What is Startup Weekend?",
    "home.what.description": "Startup Weekend is a 54-hour event where aspiring entrepreneurs, developers, designers, and startup enthusiasts come together to share ideas, form teams, and launch a startup in a single weekend. It's an opportunity to learn, network, and potentially find your co-founder or next big idea.",
    "home.timetable.title": "Event Timetable",
    "home.sponsors.title": "Our Esteemed Sponsors",
    "home.footer.quickLinks": "Quick Links",
    "home.footer.about": "About",
    "home.footer.community": "Community",
    
    // Residents Page
    "residents.title": "Meet Our Innovators, Mentors, and Leaders",
    "residents.description": "Discover the brilliant minds guiding Startup Weekend – from dedicated organizers and experienced judges to insightful supervisors, each contributing to an unforgettable journey of innovation.",
    "residents.organizers": "Organizers",
    "residents.judges": "Judges",
    "residents.supervisors": "Supervisors",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.residents": "المقيمون",
    "nav.registration": "التسجيل",
    "nav.techstarts": "تك ستارتس",
    "nav.siteTitle": "ستارت أب ويكند صور",
    
    // Home Page
    "home.hero.title": "مرحباً بكم في نهاية أسبوع الشركات الناشئة",
    "home.hero.subtitle": "عملي حول الفضاء الخارجي",
    "home.hero.coming": "قريباً",
    "home.hero.description": "استعد لعطلة نهاية أسبوع مليئة بالإبداع والابتكار وريادة الأعمال في ستارت أب ويكند صور!",
    "home.what.title": "ما هو ستارت أب ويكند؟",
    "home.what.description": "ستارت أب ويكند هو حدث لمدة 54 ساعة حيث يجتمع رواد الأعمال الطموحون والمطورون والمصممون وعشاق الشركات الناشئة معًا لتبادل الأفكار وتشكيل الفرق وإطلاق شركة ناشئة في عطلة نهاية أسبوع واحدة. إنها فرصة للتعلم والتواصل وربما العثور على شريكك المؤسس أو فكرتك الكبيرة التالية.",
    "home.timetable.title": "جدول الفعاليات",
    "home.sponsors.title": "رعاتنا المحترمون",
    "home.footer.quickLinks": "روابط سريعة",
    "home.footer.about": "عن",
    "home.footer.community": "المجتمع",
    
    // Residents Page
    "residents.title": "تعرف على المبتكرين والموجهين والقادة لدينا",
    "residents.description": "اكتشف العقول اللامعة التي توجه ستارت أب ويكند – من المنظمين المتفانين والحكام ذوي الخبرة إلى المشرفين البصيرين، كل منهم يساهم في رحلة ابتكار لا تُنسى.",
    "residents.organizers": "المنظمون",
    "residents.judges": "الحكام",
    "residents.supervisors": "المشرفون",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    
    // Apply font based on language
    if (language === "ar") {
      document.body.style.fontFamily = "'Droid Arabic Kufi', sans-serif";
    } else {
      document.body.style.fontFamily = "'Rubik', sans-serif";
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
