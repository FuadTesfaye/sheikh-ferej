import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "en" | "am" | "ar";

export interface Translation {
  // Shared UI
  home: string;
  about: string;
  lectures: string;
  writings: string;
  learning: string;
  contact: string;
  beginLearning: string;
  knowledgeIsLight: string;
  scholarTitle: string;
  scholarSubtitle: string;
  revivingTradition: string;
  explore: string;
  follow: string;
  login: string;
  logout: string;
  loginTitle: string;
  password: string;
  loginButton: string;
  loginSuccess: string;
  loginError: string;

  // Home page
  welcome: string;
  yearsTeaching: string;
  lecturesOnline: string;
  telegramFollowers: string;
  listenToLectures: string;
  studyWithTheSheikh: string;
  fromTheMinbar: string;
  latestLecture: string;
  allLectures: string;
  areasOfTeaching: string;
  featuredCourse: string;
  enterTheCourse: string;
  lessons: string;
  recentWritings: string;
  fromTheDesk: string;
  allWritings: string;
  readTime: string;
  minRead: string;

  // About page
  biography: string;
  teachings: string;
  islamicScholar: string;
  ethopia: string;
  prophetMuhammadQuote: string;
  source: string;
  sahihMuslim: string;

  // Lectures page
  allClasses: string;
  platform: string;
  watchOn: string;
  listenOn: string;
  duration: string;
  date: string;
  play: string;
  featuredLecture: string;
  allAvailableLectures: string;

  // Contact page
  getInTouch: string;
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  messageSent: string;
  followUs: string;

  // Blog pages
  backToBlog: string;
  categories: string;

  // Learn pages
  allCourses: string;
  selectCourse: string;
  courseContent: string;
  startLearning: string;
  level: string;
  topics: string;
  begin: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  week: string;
  weeks: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    home: "Home",
    about: "About",
    lectures: "Lectures",
    writings: "Writings",
    learning: "Learning",
    contact: "Contact",
    beginLearning: "Begin learning",
    knowledgeIsLight: "Knowledge is light.",
    scholarTitle: "Sheikh Mohammed Ferej",
    scholarSubtitle: "Islamic Scholar · Ethiopia",
    revivingTradition:
      "Reviving the classical tradition of Islamic learning for a new generation of Ethiopian Muslims and the worldwide ummah.",
    explore: "Explore",
    follow: "Follow",
    login: "Login",
    logout: "Logout",
    loginTitle: "Admin Login",
    email: "Email",
    password: "Password",
    loginButton: "Sign In",
    loginSuccess: "Successfully logged in!",
    loginError: "Invalid credentials. Please try admin@sheikh.com / admin123",
    welcome: "Welcome",
    yearsTeaching: "Years teaching",
    lecturesOnline: "Lectures online",
    telegramFollowers: "Telegram followers",
    listenToLectures: "Listen to lectures",
    studyWithTheSheikh: "Study with the sheikh",
    fromTheMinbar: "From the minbar",
    latestLecture: "Latest lecture",
    allLectures: "All lectures",
    areasOfTeaching: "Areas of teaching",
    featuredCourse: "Featured course",
    enterTheCourse: "Enter the course",
    lessons: "Lessons",
    recentWritings: "Recent writings",
    fromTheDesk: "From the desk of the ustaz",
    allWritings: "All writings",
    readTime: "Read time",
    minRead: "min read",
    biography: "Biography",
    teachings: "Teachings",
    islamicScholar: "Ethiopian Islamic scholar",
    ethopia: "Ethiopia",
    prophetMuhammadQuote: "The best of you are those with the best character.",
    source: "Source",
    sahihMuslim: "Sahih Muslim",
    allClasses: "All classes",
    platform: "Platform",
    watchOn: "Watch on",
    listenOn: "Listen on",
    duration: "Duration",
    date: "Date",
    play: "Play",
    featuredLecture: "Featured lecture",
    allAvailableLectures: "All available lectures",
    getInTouch: "Get in touch",
    name: "Name",
    message: "Message",
    send: "Send",
    sending: "Sending...",
    messageSent: "Message sent!",
    followUs: "Follow us",
    backToBlog: "Back to blog",
    categories: "Categories",
    allCourses: "All courses",
    selectCourse: "Select a course to begin your learning",
    courseContent: "Course content",
    startLearning: "Start learning",
    level: "Level",
    topics: "Topics",
    begin: "Begin",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    week: "week",
    weeks: "weeks",
  },
  am: {
    home: "መነሻ",
    about: "ስለ ሼኩ",
    lectures: "ትምህርቶች",
    writings: "ጽሁፎች",
    learning: "ትምህርት",
    contact: "እውቂያ",
    beginLearning: "ትምህርት ጀምር",
    knowledgeIsLight: "እውቀት ብርሃን ነው።",
    scholarTitle: "ሼክ መሐመድ ፈረጅ",
    scholarSubtitle: "ኢስላማዊ ምሁር · ኢትዮጵያ",
    revivingTradition: "ለአዲሱ የኢትዮጵያ ሙስሊሞች ትውልድ እና ለአለም አቀፉ ኡማ የቀደምት ኢስላማዊ የትምህርት ባህልን ማደስ።",
    explore: "አስስ",
    follow: "ተከተሉ",
    login: "ግባ",
    logout: "ውጣ",
    loginTitle: "የአድሚን ግባ",
    email: "ኢሜይል",
    password: "የይለፍ ቃል",
    loginButton: "ይግቡ",
    loginSuccess: "በተሳካ ሁኔታ ግብ ተደረገ!",
    loginError: "የተሳሳተ መረጃ። እባክዎ admin@sheikh.com / admin123 ይሞክሩ",
    welcome: "እንኳን ደህና መጡ",
    yearsTeaching: "ዓመታት ትምህርት",
    lecturesOnline: "በመስመር ላይ ትምህርቶች",
    telegramFollowers: "የቴሌግራም ተከታይዎች",
    listenToLectures: "ትምህርቶችን ያድምጉ",
    studyWithTheSheikh: "ከሼኩ ጋር ይማሩ",
    fromTheMinbar: "ከሚንበር",
    latestLecture: "የአናር ስምህርት",
    allLectures: "ሁሉም ትምህርቶች",
    areasOfTeaching: "የትምህርት መስኮች",
    featuredCourse: "የተመለከተኮርስ",
    enterTheCourse: "ኮርሱን መግባት",
    lessons: "ትምህርቶች",
    recentWritings: "የቅርብ ጊዜ ጽሁፎች",
    fromTheDesk: "ከእስታዝ ሰጋጊያ",
    allWritings: "ሁሉም ጽሁፎች",
    readTime: "የማንበያ ጊዜ",
    minRead: "ደቂቃ አንበያ",
    biography: "ሕይወት ታሪክ",
    teachings: "ትምህርቶች",
    islamicScholar: "ኢትዮጵያዊ ኢስላማዊ ምሁር",
    ethopia: "ኢትዮጵያ",
    prophetMuhammadQuote: "በእነርሱ ውስጥ እንደእርስዎ ጥሩ የሆነ ባህርነት ያለው ነው።",
    source: "መንበር",
    sahihMuslim: "ሳሒህ ሙስሊም",
    allClasses: "ሁሉም ክፍሎች",
    platform: "መድረክ",
    watchOn: "ይመልከቱ",
    listenOn: "ይድምጉ",
    duration: "ቀጣይነት",
    date: "ቀን",
    play: "አጫወት",
    featuredLecture: "የተመለከተ ትምህርት",
    allAvailableLectures: "ሁሉም የሚገኙ ትምህርቶች",
    getInTouch: "ያግኙን",
    name: "ስም",
    message: "መልእክት",
    send: "ላክ",
    sending: "በመላክ ላይ...",
    messageSent: "መልእክቱ ተልክቷል!",
    followUs: "ይከተሉን",
    backToBlog: "ወደ ብሎግ ተመለስ",
    categories: "ምድቦች",
    allCourses: "ሁሉም ኮርሶች",
    selectCourse: "ትምህርትዎን ለመጀምር ኮርስ ይምረጡ",
    courseContent: "የኮርስ ይዘት",
    startLearning: "ትምህርትን መጀምር",
    level: "ደረጃ",
    topics: "ርዕሰ ጉዳዮች",
    begin: "ጀምር",
    beginner: "ጀማሪ",
    intermediate: "መካከለኛ",
    advanced: "ላይ-ደረጃ",
    week: "ሳምንት",
    weeks: "ሳምንታት",
  },
  ar: {
    home: "الرئيسية",
    about: "عن الشيخ",
    lectures: "المحاضرات",
    writings: "المقالات",
    learning: "التعلم",
    contact: "اتصل بنا",
    beginLearning: "ابدأ التعلم",
    knowledgeIsLight: "العلم نور.",
    scholarTitle: "الشيخ محمد فرج",
    scholarSubtitle: "عالم إسلامي · إثيوبيا",
    revivingTradition:
      "إحياء التراث التعليمي الإسلامي الكلاسيكي لجيل جديد من مسلمي إثيوبيا والأمة الإسلامية جمعاء.",
    explore: "استكشف",
    follow: "تابعنا",
    login: "تسجيل الدخول",
    logout: "تسجيل الخروج",
    loginTitle: "تسجيل دخول المدير",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    loginButton: "تسجيل الدخول",
    loginSuccess: "تم تسجيل الدخول بنجاح!",
    loginError: "بيانات غير صالحة. يرجى المحاولة admin@sheikh.com / admin123",
    welcome: "أهلا وسهلا",
    yearsTeaching: "سنوات التدريس",
    lecturesOnline: "محاضرات على الإنترنت",
    telegramFollowers: "متابعو تيليجرام",
    listenToLectures: "استمع إلى المحاضرات",
    studyWithTheSheikh: "درس مع الشيخ",
    fromTheMinbar: "من المنبر",
    latestLecture: "آخر محاضرة",
    allLectures: "جميع المحاضرات",
    areasOfTeaching: "مجالات التدريس",
    featuredCourse: "الكورس المميز",
    enterTheCourse: "أدخل الكورس",
    lessons: "دروس",
    recentWritings: "مقالات حديثة",
    fromTheDesk: "من مكتب الأستاذ",
    allWritings: "جميع المقالات",
    readTime: "وقت القراءة",
    minRead: "دقائق للقراءة",
    biography: "السيرة الذاتية",
    teachings: "التعاليم",
    islamicScholar: "عالم إسلامي إثيوبي",
    ethopia: "إثيوبيا",
    prophetMuhammadQuote: "خيركم من له أحسن خلقا.",
    source: "المصدر",
    sahihMuslim: "صحيح مسلم",
    allClasses: "جميع الفصول",
    platform: "منصة",
    watchOn: "شاهد على",
    listenOn: "استمع على",
    duration: "المدة",
    date: "التاريخ",
    play: "تشغيل",
    featuredLecture: "محاضرة مميزة",
    allAvailableLectures: "جميع المحاضرات المتاحة",
    getInTouch: "تواصل معنا",
    name: "الاسم",
    message: "الرسالة",
    send: "إرسال",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة!",
    followUs: "تابعنا",
    backToBlog: "العودة إلى المدونة",
    categories: "التصنيفات",
    allCourses: "جميع الكورسات",
    selectCourse: "اختر كورسًا لبدء تعلمك",
    courseContent: "محتوى الكورس",
    startLearning: "ابدأ التعلم",
    level: "المستوى",
    topics: "المواضيع",
    begin: "ابدأ",
    beginner: "مبتدئ",
    intermediate: "متوسط",
    advanced: "متقدم",
    week: "أسبوع",
    weeks: "أسابيع",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("app-language") as Language | null;
    if (saved && ["en", "am", "ar"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app-language", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
