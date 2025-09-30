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
    "nav.residents": "Partners",
    "nav.registration": "Registration",
    "nav.techstarts": "Tech Starts",
    "nav.siteTitle": "Startup Weekend Sur",
    
    // Home Page
    "home.hero.title": "Welcome! To Startup weekend",
    "home.hero.subtitle": "Limitless ideas",
    "home.hero.coming": "WE ARE COMING SOON",
    "home.hero.description": "Get ready for a weekend full of creativity, innovation, and entrepreneurship at Startup Weekend Sur!",
    "home.what.title": "What is Startup Weekend?",
    "home.what.description": "Startup Weekend is a 54-hour event where aspiring entrepreneurs, developers, designers, and startup enthusiasts come together to share ideas, form teams, and launch a startup in a single weekend. It's an opportunity to learn, network, and potentially find your co-founder or next big idea.",
    "home.timetable.title": "Event Timetable",
    "home.timetable.day1.title": "Day 1 - Kickoff & Team Formation",
    "home.timetable.day1.date": "Friday Evening",
    "home.timetable.day2.title": "Day 2 - Building & Development",
    "home.timetable.day2.date": "Saturday All Day",
    "home.timetable.day3.title": "Day 3 - Presentations & Awards",
    "home.timetable.day3.date": "Sunday Evening",
    "home.sponsors.title": "Our Esteemed Sponsors",
    "home.footer.quickLinks": "Quick Links",
    "home.footer.about": "About",
    "home.footer.community": "Community",
    
    // Countdown Timer
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    
    // Residents Page
    "residents.title": "Meet Our Partners",
    "residents.description": "Discover our partners guiding Startup Weekend – from dedicated organizers and experienced judges to insightful mentors, each contributing to an unforgettable journey of innovation.",
    "residents.organizers": "Organizers",
    "residents.judges": "Judges",
    "residents.supervisors": "Mentors",
    
    // Roles - Organizers
    "role.leadOrganizer": "Lead Organizer",
    "role.logisticsCoordinator": "Logistics Coordinator",
    "role.marketingDirector": "Marketing Director",
    "role.volunteerManager": "Volunteer Manager",
    
    // Roles - Judges
    "role.ventureCapitalist": "Venture Capitalist",
    "role.angelInvestor": "Angel Investor",
    "role.techInnovator": "Tech Innovator",
    "role.startupMentor": "Startup Mentor",
    "role.legalAdvisor": "Legal Advisor",
    "role.productDesignLead": "Product Design Lead",
    
    // Roles - Supervisors
    "role.technicalSupervisor": "Technical Supervisor (AI/ML)",
    "role.businessModelSupervisor": "Business Model Supervisor",
    "role.pitchCoach": "Pitch Coach",
    "role.designThinkingSupervisor": "Design Thinking Supervisor",
    
    // Names - Organizers
    "name.ahmed": "Ahmed Al-Harthi",
    "name.fatima": "Fatima Al-Maqbali",
    "name.sarah": "Sarah Al-Balushi",
    "name.khalid": "Khalid Al-Shehhi",
    
    // Names - Judges
    "name.layla": "Dr. Layla Al-Amri",
    "name.mohammed": "Mohammed Al-Hinai",
    "name.mona": "Mona Al-Farsi",
    "name.omar": "Omar Al-Bahri",
    "name.noura": "Noura Al-Kalbani",
    "name.youssef": "Youssef Al-Rawahi",
    
    // Names - Supervisors
    "name.aisha": "Aisha Al-Saidi",
    "name.tariq": "Tariq Al-Maamari",
    "name.reem": "Reem Al-Shakili",
    "name.hamad": "Hamad Al-Ghafri",
    
    // Descriptions - Organizers
    "desc.ahmed": "Ahmed is a dynamic leader with a proven track record in community development and project management.",
    "desc.fatima": "Fatima excels at the operational side of things, from venue setup to resource allocation.",
    "desc.sarah": "Sarah drives the communication and marketing strategy, ensuring the event reaches top talent.",
    "desc.khalid": "Khalid is the heart of the volunteer team, recruiting and coordinating dedicated individuals.",
    
    // Descriptions - Judges
    "desc.layla": "Dr. Layla brings extensive experience in startup investment and strategic mentorship.",
    "desc.mohammed": "A successful serial entrepreneur, Mohammed now dedicates his time to mentoring and investing in startups.",
    "desc.mona": "Mona is a leading figure in AI development, known for her cutting-edge applications.",
    "desc.omar": "Omar has guided numerous startups through their early challenges with his expertise and advice.",
    "desc.noura": "As an experienced lawyer, Noura provides essential guidance on protecting new ventures.",
    "desc.youssef": "Youssef specializes in user-centered design, helping teams build intuitive products.",
    
    // Descriptions - Supervisors
    "desc.aisha": "Aisha provides deep technical guidance in artificial intelligence and machine learning.",
    "desc.tariq": "Tariq specializes in business models and financial frameworks, helping teams clarify their value proposition.",
    "desc.reem": "Reem is an expert in public speaking and presentations, training teams to deliver compelling pitches.",
    "desc.hamad": "Hamad facilitates design thinking workshops, helping teams empathize with users and develop solutions.",
    
    // Registration Page
    "registration.title": "Ready to Innovate? Register Now!",
    "registration.description": "Join us for an exhilarating weekend of innovation, networking, and launching your startup idea. Don't miss this opportunity to connect with mentors, judges, and fellow entrepreneurs. Secure your spot today!",
    "registration.button": "Register for Startup Weekend",
    
    // Tech Starts Page
    "techstarts.title": "Tech Startups",
    "techstarts.description": "Discover innovative startups and groundbreaking ideas from our community",
    "techstarts.readmore": "Read More",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.residents": "الشركاء",
    "nav.registration": "التسجيل",
    "nav.techstarts": "تك ستارتس",
    "nav.siteTitle": "ستارت أب ويكند صور",
    
    // Home Page
    "home.hero.title": "مرحباً بكم في ستارت أب ويكند",
    "home.hero.subtitle": "أفكار بلا حدود",
    "home.hero.coming": "قريباً",
    "home.hero.description": "استعد لعطلة نهاية أسبوع مليئة بالإبداع والابتكار وريادة الأعمال في ستارت أب ويكند صور!",
    "home.what.title": "ما هو ستارت أب ويكند؟",
    "home.what.description": "ستارت أب ويكند هو حدث لمدة 54 ساعة حيث يجتمع رواد الأعمال الطموحون والمطورون والمصممون وعشاق الشركات الناشئة معًا لتبادل الأفكار وتشكيل الفرق وإطلاق شركة ناشئة في عطلة نهاية أسبوع واحدة. إنها فرصة للتعلم والتواصل وربما العثور على شريكك المؤسس أو فكرتك الكبيرة التالية.",
    "home.timetable.title": "جدول الفعاليات",
    "home.timetable.day1.title": "اليوم الأول - الافتتاح وتشكيل الفرق",
    "home.timetable.day1.date": "مساء الجمعة",
    "home.timetable.day2.title": "اليوم الثاني - البناء والتطوير",
    "home.timetable.day2.date": "السبت طوال اليوم",
    "home.timetable.day3.title": "اليوم الثالث - العروض والجوائز",
    "home.timetable.day3.date": "مساء الأحد",
    "home.sponsors.title": "رعاتنا المحترمون",
    "home.footer.quickLinks": "روابط سريعة",
    "home.footer.about": "عن",
    "home.footer.community": "المجتمع",
    
    // Countdown Timer
    "countdown.days": "أيام",
    "countdown.hours": "ساعات",
    "countdown.minutes": "دقائق",
    "countdown.seconds": "ثواني",
    
    // Residents Page
    "residents.title": "تعرف على شركائنا",
    "residents.description": "اكتشف شركاءنا الذين يقودون ستارت أب ويكند – من المنظمين المتفانين والحكام ذوي الخبرة إلى الموجهين، كل منهم يساهم في رحلة ابتكار لا تُنسى.",
    "residents.organizers": "المنظمون",
    "residents.judges": "الحكام",
    "residents.supervisors": "الموجهون",
    
    // Roles - Organizers
    "role.leadOrganizer": "المنظم الرئيسي",
    "role.logisticsCoordinator": "منسق اللوجستيات",
    "role.marketingDirector": "مدير التسويق",
    "role.volunteerManager": "مدير المتطوعين",
    
    // Roles - Judges
    "role.ventureCapitalist": "مستثمر رأس المال المغامر",
    "role.angelInvestor": "مستثمر ملاك",
    "role.techInnovator": "مبتكر تقني",
    "role.startupMentor": "موجه الشركات الناشئة",
    "role.legalAdvisor": "مستشار قانوني",
    "role.productDesignLead": "قائد تصميم المنتج",
    
    // Roles - Supervisors
    "role.technicalSupervisor": "مشرف تقني (ذكاء اصطناعي/تعلم آلي)",
    "role.businessModelSupervisor": "مشرف نموذج الأعمال",
    "role.pitchCoach": "مدرب العروض التقديمية",
    "role.designThinkingSupervisor": "مشرف التفكير التصميمي",
    
    // Names - Organizers
    "name.ahmed": "أحمد الحارثي",
    "name.fatima": "فاطمة المقبالي",
    "name.sarah": "سارة البلوشي",
    "name.khalid": "خالد الشحي",
    
    // Names - Judges
    "name.layla": "د. ليلى العامري",
    "name.mohammed": "محمد الهنائي",
    "name.mona": "منى الفارسي",
    "name.omar": "عمر البحري",
    "name.noura": "نورة الكلباني",
    "name.youssef": "يوسف الرواحي",
    
    // Names - Supervisors
    "name.aisha": "عائشة السعيدي",
    "name.tariq": "طارق المعمري",
    "name.reem": "ريم الشكيلي",
    "name.hamad": "حمد الغافري",
    
    // Descriptions - Organizers
    "desc.ahmed": "أحمد قائد ديناميكي ذو سجل حافل في تنمية المجتمع وإدارة المشاريع.",
    "desc.fatima": "فاطمة تتفوق في الجوانب التشغيلية، من إعداد المكان إلى تخصيص الموارد.",
    "desc.sarah": "سارة تقود استراتيجية التواصل والتسويق، مما يضمن وصول الحدث لأفضل المواهب.",
    "desc.khalid": "خالد هو قلب فريق المتطوعين، يقوم بتوظيف وتنسيق الأفراد المخلصين.",
    
    // Descriptions - Judges
    "desc.layla": "د. ليلى تجلب خبرة واسعة في الاستثمار في الشركات الناشئة والإرشاد الاستراتيجي.",
    "desc.mohammed": "رائد أعمال متسلسل ناجح، محمد يكرس الآن وقته لتوجيه الشركات الناشئة والاستثمار فيها.",
    "desc.mona": "منى شخصية رائدة في تطوير الذكاء الاصطناعي، معروفة بتطبيقاتها الرائدة.",
    "desc.omar": "عمر قد وجه العديد من الشركات الناشئة من خلال تحدياتها الأولية بخبرته ونصائحه.",
    "desc.noura": "كمحامية متمرسة، نورة تقدم التوجيه الأساسي حول حماية المشاريع الجديدة.",
    "desc.youssef": "يوسف متخصص في التصميم المتمحور حول المستخدم، مساعداً الفرق على بناء منتجات بديهية.",
    
    // Descriptions - Supervisors
    "desc.aisha": "عائشة تقدم إرشاداً تقنياً عميقاً في الذكاء الاصطناعي والتعلم الآلي.",
    "desc.tariq": "طارق متخصص في نماذج الأعمال والأطر المالية، يساعد الفرق على توضيح عرض القيمة.",
    "desc.reem": "ريم خبيرة في التحدث أمام الجمهور والعروض التقديمية، تدرب الفرق على تقديم عروض مقنعة.",
    "desc.hamad": "حمد يسهل ورش عمل التفكير التصميمي، يساعد الفرق على التعاطف مع المستخدمين وتطوير الحلول.",
    
    // Registration Page
    "registration.title": "هل أنت مستعد للابتكار؟ سجل الآن!",
    "registration.description": "انضم إلينا في عطلة نهاية أسبوع مثيرة من الابتكار والتواصل وإطلاق فكرة شركتك الناشئة. لا تفوت هذه الفرصة للتواصل مع الموجهين والحكام ورواد الأعمال الآخرين. احجز مكانك اليوم!",
    "registration.button": "التسجيل في ستارت أب ويكند",
    
    // Tech Starts Page
    "techstarts.title": "الشركات الناشئة التقنية",
    "techstarts.description": "اكتشف الشركات الناشئة المبتكرة والأفكار الرائدة من مجتمعنا",
    "techstarts.readmore": "اقرأ المزيد",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

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
