import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "en" | "am" | "ar" | "om";

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
  closeVideo: string;
  watchNow: string;
  archiveLabel: string;
  lecturesAndReminders: string;
  lecturesHero: string;
  lecturesSubhero: string;
  shareMessage: string;
  viewCourse: string;
  enrollNow: string;
  previewLesson: string;
  aboutThisCourse: string;
  curriculum: string;
  module: string;
  instructor: string;
  duration: string;
  languageLabel: string;
  certificate: string;
  yes: string;
  amharicAndArabic: string;
  writingsLabel: string;
  writingsHero: string;
  writingsSubhero: string;
  continueReading: string;
  articleNotFound: string;
  courseNotFound: string;
  byAuthor: string;
  subjectLabel: string;
  findOnline: string;
  aWordReaches: string;
  aWordReachesSubhero: string;
  aSchoolOfSeekers: string;
  aSchoolSubhero: string;
  learnLabel: string;

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
    scholarTitle: "Sheikh Muhammed Ferej Megeno",
    scholarSubtitle: "Islamic Scholar · Sharia Consultant · Ethiopia",
    revivingTradition:
      "An experienced Islamic scholar, educator, and Sharia consultant with over 35 years of experience in teaching, Dawah, and institutional leadership.",
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
    closeVideo: "Close video",
    watchNow: "Watch now →",
    archiveLabel: "The archive",
    lecturesAndReminders: "Lectures & reminders",
    lecturesHero: "The spoken word, recorded for the seeker.",
    lecturesSubhero: "Friday khutbas, halaqas, and short reminders — drawn from over twenty years of teaching in the mosques of Ethiopia.",
    shareMessage: "Share what benefits you. The reward of the one who guides is like the reward of the one who acts.",
    viewCourse: "View course →",
    enrollNow: "Enroll now",
    previewLesson: "Preview a lesson",
    aboutThisCourse: "About this course",
    curriculum: "Curriculum",
    module: "Module",
    instructor: "Instructor",
    duration: "Duration",
    languageLabel: "Language",
    certificate: "Certificate",
    yes: "Yes",
    amharicAndArabic: "Amharic & Arabic",
    writingsLabel: "The writings",
    writingsHero: "Reflections from the journey of faith.",
    writingsSubhero: "Short essays and longer pieces — written slowly, meant to be read slowly.",
    continueReading: "Continue reading",
    articleNotFound: "Article not found",
    courseNotFound: "Course not found",
    byAuthor: "By Sheikh Mohammed Ferej",
    subjectLabel: "Subject",
    findOnline: "Find the sheikh online",
    aWordReaches: "A word reaches further than we know.",
    aWordReachesSubhero: "Whether you have a question, a request for a lecture, or simply a salaam to send — you are welcome here.",
    aSchoolOfSeekers: "A school of seekers. A path of knowledge.",
    aSchoolSubhero: "Structured courses in the classical Islamic sciences, taught with clarity for the modern seeker. Begin where you are.",
    learnLabel: "The learning",
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
    scholarTitle: "ሼክ ሙሐመድ ፈረጅ ሜጌኖ",
    scholarSubtitle: "ኢስላማዊ ምሁር · የሸሪዓ አማካሪ · ኢትዮጵያ",
    revivingTradition: "ከ35 ዓመታት በላይ ልምድ ያለው ኢስላማዊ ምሁር፣ አስተማሪ እና የሸሪዓ አማካሪ — በማስተማር፣ ዳዕዋ እና ተቋማዊ አመራር ላይ።",
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
    closeVideo: "ቪዲዮውን ዝጋ",
    watchNow: "አሁን ይመልከቱ →",
    archiveLabel: "ማህደር",
    lecturesAndReminders: "ትምህርቶች እና ማስታወሻዎች",
    lecturesHero: "ለሚፈልግ ሰው የተቀመጠ የተናገረ ቃል።",
    lecturesSubhero: "የአርብ ቁጥብ፣ ሃላቆች እና አጭር ማስታወሻዎች — ከኢትዮጵያ መስጊዳዎች ከ20 ዓመታት በላይ ትምህርት ላይ የተመሰረተ።",
    shareMessage: "ጠቃሚ ሆኖ ያገኘሁትን አጋሩ። ለሚያስተምር ሰው ሽልማቱ እንደ ሚሰራው ሰው ሽልማት ነው።",
    viewCourse: "ኮርሱን ይመልከቱ →",
    enrollNow: "አሁን ይመዝገቡ",
    previewLesson: "አንድ ትምህርት ይመልከቱ",
    aboutThisCourse: "ስለዚህ ኮርስ",
    curriculum: "ምዕራፎች",
    module: "ክፍል",
    instructor: "አስተማሪ",
    duration: "ቀጣይነት",
    languageLabel: "ቋንቋ",
    certificate: "የምስክር ወረቀት",
    yes: "አዎ",
    amharicAndArabic: "አማርኛ እና አረብኛ",
    writingsLabel: "ጽሁፎች",
    writingsHero: "ከእምነት ጉዞ ስሔቶችና ስምኦች።",
    writingsSubhero: "አጭር ጽሑፎች እና ረዘም ያሉ ነገሮች — በዝግታ የተጻፉ፣ በዝግታ ለማንበብ የታሰቡ።",
    continueReading: "ይቀጥሉ ለማንበብ",
    articleNotFound: "ጽሑፉ አልተገኘም",
    courseNotFound: "ኮርሱ አልተገኘም",
    byAuthor: "በሼክ መሐመድ ፈረጅ",
    subjectLabel: "ርዕሰ ጉዳይ",
    findOnline: "ሼኩን በመስመር ላይ ይፈልጉ",
    aWordReaches: "አንድ ቃል ከምንናገር በላይ ይደርሳል።",
    aWordReachesSubhero: "ጥያቄ ካለዎት፣ ለትምህርት ጥያቄዎት ካለዎት ወይም በቀላል ሰላም ለመላክ — እዚህ እንኳን ደህና መጡ።",
    aSchoolOfSeekers: "ለሚፈልጉ ሰዎች ትምህርት ቤት። የእውቀት መንገድ።",
    aSchoolSubhero: "ለዘመናዊ ፈላጊ በግልጽነት የሚተምሩ የቀደምት ኢስላማዊ ሳይንሶች ትምህርቶች። ከእርስዎ ቦታ ይጀምሩ።",
    learnLabel: "ትምህርቱ",
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
    scholarTitle: "الشيخ محمد فرج ميجينو",
    scholarSubtitle: "عالم إسلامي · مستشار شرعي · إثيوبيا",
    revivingTradition:
      "عالم إسلامي وداعية ومستشار شرعي بخبرة تزيد على 35 عاماً في التدريس والدعوة والقيادة المؤسسية.",
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
    closeVideo: "إغلاق الفيديو",
    watchNow: "شاهد الآن →",
    archiveLabel: "الأرشيف",
    lecturesAndReminders: "المحاضرات والتذكيرات",
    lecturesHero: "القول المنطوق، مسجل للباحث.",
    lecturesSubhero: "خطب الجمع، وحلقات تذكير قصيرة — مأخوذة من أكثر من عشرين عاماً من التدريس في مساجد إثيوبيا.",
    shareMessage: "شارك ما ينفعك. أجر من يهتدي كأجر من يعمل.",
    viewCourse: "عرض الدورة →",
    enrollNow: "سجل الآن",
    previewLesson: "معاينة درس",
    aboutThisCourse: "حول هذه الدورة",
    curriculum: "المنهج",
    module: "وحدة",
    instructor: "المدرب",
    duration: "المدة",
    languageLabel: "اللغة",
    certificate: "الشهادة",
    yes: "نعم",
    amharicAndArabic: "الأمهرية والعربية",
    writingsLabel: "المقالات",
    writingsHero: "تأملات من رحلة الإيمان.",
    writingsSubhero: "مقالات قصيرة وقطع أطول — مكتوبة ببطء، مخصصة للقراءة ببطء.",
    continueReading: "استمر في القراءة",
    articleNotFound: "لم يتم العثور على المقال",
    courseNotFound: "لم يتم العثور على الدورة",
    byAuthor: "بقلم الشيخ محمد فرج",
    subjectLabel: "الموضوع",
    findOnline: "ابحث عن الشيخ على الإنترنت",
    aWordReaches: "الكلمة تصل أبعد مما نعلم.",
    aWordReachesSubhero: "سواء كان لديك سؤال، أو طلب محاضرة، أو مجرد تحية تريد إرسالها — أنت مرحب هنا.",
    aSchoolOfSeekers: "مدرسة للباحثين. طريق للمعرفة.",
    aSchoolSubhero: "دورات منظمة في العلوم الإسلامية الكلاسيكية، تُدرس بوضوح للباحث الحديث. ابدأ من حيث أنت.",
    learnLabel: "التعلم",
  },
  om: {
    home: "Mana",
    about: "Waa'ee Sheekicha",
    lectures: "Barnoota",
    writings: "Barreeffama",
    learning: "Barumsaa",
    contact: "Quunnamtii",
    beginLearning: "Barumsa jalqabi",
    knowledgeIsLight: "Beekumsi ifa dha.",
    scholarTitle: "Sheekh Muhammed Ferej Megeno",
    scholarSubtitle: "Aalima Islaamaa · Gorsaa Shari'aa · Itoophiyaa",
    revivingTradition: "Aalima Islaamaa, barsiisaa, fi gorsaa Shari'aa muuxannoo waggaa 35 ol qabu — barsiisuu, Da'awaa, fi hoogganummaa dhaabbilee keessatti.",
    explore: "Qoradhu",
    follow: "Hordofi",
    login: "Seeni",
    logout: "Ba'i",
    loginTitle: "Seensa Bulchiinsaa",
    email: "Imeelii",
    password: "Jecha darbii",
    loginButton: "Seeni",
    loginSuccess: "Milkaa'inaan seentaniittu!",
    loginError: "Odeeffannoo dogoggoraa. admin@sheikh.com / admin123 yaalaa",
    welcome: "Baga nagaan dhuftan",
    yearsTeaching: "Waggaa barsiisuu",
    lecturesOnline: "Barnoota interneetii irratti",
    telegramFollowers: "Hordoftoota Telegram",
    listenToLectures: "Barnoota caqasi",
    studyWithTheSheikh: "Sheekicha wajjin baradhu",
    fromTheMinbar: "Minbarraa",
    latestLecture: "Barnoota haaraa",
    allLectures: "Barnoota hunda",
    areasOfTeaching: "Garaagarummaa barsiisuu",
    featuredCourse: "Koorsi filatame",
    enterTheCourse: "Koorsii seeni",
    lessons: "Barnoota",
    recentWritings: "Barreeffama dhiyoo",
    fromTheDesk: "Meja Ustaazichaa irraa",
    allWritings: "Barreeffama hunda",
    readTime: "Yeroo dubbisuu",
    minRead: "daqiiqaa dubbisuu",
    biography: "Seenaa jireenyaa",
    teachings: "Barnoota",
    islamicScholar: "Aalima Islaamaa Itoophiyaa",
    ethopia: "Itoophiyaa",
    prophetMuhammadQuote: "Isinirraa gaarii kan ta'e amala gaarii qabu dha.",
    source: "Madda",
    sahihMuslim: "Sahiih Muslim",
    allClasses: "Kutaa hunda",
    platform: "Marsariitii",
    watchOn: "Irratti ilaalaa",
    listenOn: "Irratti caqasaa",
    duration: "Yeroo",
    date: "Guyyaa",
    play: "Taphadhu",
    featuredLecture: "Barnoota filatame",
    allAvailableLectures: "Barnoota hunda argamuu danda'an",
    getInTouch: "Nu quunnamaa",
    name: "Maqaa",
    message: "Ergaa",
    send: "Ergi",
    sending: "Ergaa jira...",
    messageSent: "Ergaan ergameera!",
    followUs: "Nu hordofi",
    backToBlog: "Blogiitti deebi'i",
    categories: "Kutaalee",
    allCourses: "Koorsi hunda",
    selectCourse: "Barumsaa jalqabuuf koorsi filadhu",
    courseContent: "Qabiyyee koorsii",
    startLearning: "Barumsa jalqabi",
    level: "Sadarkaa",
    topics: "Mata-duree",
    begin: "Jalqabi",
    beginner: "Jalqabaa",
    intermediate: "Giddu-galeessa",
    advanced: "Olaanaa",
    week: "torbee",
    weeks: "torbeewwan",
    closeVideo: "Viidiyoo cufaa",
    watchNow: "Amma ilaalaa →",
    archiveLabel: "Kuusaa",
    lecturesAndReminders: "Barnoota fi yaadachiisaa",
    lecturesHero: "Dubbii afaanii, barattootaaf galmeeffame.",
    lecturesSubhero: "Khutbaa Jimaataa, halaqaalee, fi yaadachiisaalee gabaabaa — waggaa digdamii oliif masjiidota Itoophiyaa keessatti barsiisuu irraa fudhame.",
    shareMessage: "Faayida argatte qoodi. Kan qajeelche mindaan isaa kan dalagee fakkaata.",
    viewCourse: "Koorsii ilaalaa →",
    enrollNow: "Amma galmaa'i",
    previewLesson: "Barnoota tokkoo ilaalaa",
    aboutThisCourse: "Koorsii kana waa'ee",
    curriculum: "Karaa barnootaa",
    module: "Kutaa",
    instructor: "Barsiisaa",
    languageLabel: "Afaan",
    certificate: "Waraqaa ragaa",
    yes: "Eeyyee",
    amharicAndArabic: "Afaan Amaaraa fi Arabiffaa",
    writingsLabel: "Barreeffama",
    writingsHero: "Yaadannoo imala amantii irraa.",
    writingsSubhero: "Barruu gabaabaa fi dheeraa — gara gara barreeffame, gara gara dubbifamuuf.",
    continueReading: "Dubbisuu itti fufaa",
    articleNotFound: "Barreeffamichi hin argamne",
    courseNotFound: "Koorsiichi hin argamne",
    byAuthor: "Sheekh Mohammed Ferej tiin",
    subjectLabel: "Mata-duree",
    findOnline: "Sheekicha interneetii irratti barbaadaa",
    aWordReaches: "Dubbiin beeknu caalaa fagaata.",
    aWordReachesSubhero: "Gaaffii yoo qabaattan, barnoota gaafachuu yoo barbaaddan, yookaan salaamaa erguu qofaaf — asitti baga nagaan dhuftan.",
    aSchoolOfSeekers: "Mana barumsaa barattootaaf. Karaa beekumsaa.",
    aSchoolSubhero: "Koorsiilee barnootaa Islaamaa sirnoome, barattoo ammaatiif ifaan barsiifaman. Jirtan irraa jalqabaa.",
    learnLabel: "Barumsaa",
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
    if (saved && ["en", "am", "ar", "om"].includes(saved)) {
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
