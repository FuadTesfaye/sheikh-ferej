import type { Language } from "@/hooks/use-language";

type MultilingualText = {
  en: string;
  am: string;
  ar: string;
};

export type Post = {
  slug: string;
  title: MultilingualText;
  excerpt: MultilingualText;
  category: MultilingualText;
  date: string;
  readTime: MultilingualText;
  body: MultilingualText[];
};

export const posts: Post[] = [
  {
    slug: "the-light-of-tawhid",
    title: {
      en: "The Light of Tawhid in Everyday Life",
      am: "በዕለት ተዕለት ሕይወት ውስጥ የተውሒድ ብርሃን",
      ar: "نور التوحيد في الحياة اليومية",
    },
    excerpt: {
      en: "How the oneness of Allah shapes the smallest moments — from the morning prayer to the words we speak with our neighbors.",
      am: "አላህ አንድነት በትንሳትም በእንቅልፍም በጊዜያቶች እንዴት ይቀይራል — ከጠዋት ጸሎት እስከ ጋር በሚኖሩት ሰዎች ጋር እንደምንናገር ያለ ነገር አስከተሏል።",
      ar: "كيف يُشكل توحيد الله أصغر اللحظات — من الصلاة الصباحية إلى الكلمات التي نُحكيها مع جيراننا.",
    },
    category: {
      en: "Aqeedah",
      am: "አቂዳ",
      ar: "العقيدة",
    },
    date: "June 23, 2026",
    readTime: {
      en: "6 min read",
      am: "6 ደቂቃ አንበያ",
      ar: "قراءة 6 دقائق",
    },
    body: [
      {
        en: "Tawhid is not merely a chapter in a book of theology. It is a way of seeing — a lens through which every breath, every transaction, and every relationship is understood.",
        am: "ተውሒድ በእርግጽ የአኃዳዊ መጽሃፍ አንድ ክፍል ብቻ አይደለም። እሱ የማየት መንገድ ነው — እያንዳንዱን አትንፍ፣ እያንዳንዱን ትምህርት እና እያንዳንዱን ግንኙነት በሚረዳው ግልጽነት ያየው ነገር።",
        ar: "التوحيد ليس مجرد فصل في كتاب الفقه. بل هو طريقة رؤية — عدسة يُفهم من خلالها كل نَفَس، وكل معاملة، وكل علاقة.",
      },
      {
        en: "When the believer recognizes that all power, sustenance, and guidance flow from Allah alone, the heart finds a stillness that no worldly success can offer and no worldly loss can shake.",
        am: "አምላክ ሁሉንም ሀይል፣ ግዢ እና መምራየት ከአላህ ብቻ እንደሚመለከት አምላኪ አስተውሎታል፣ ልብም ምንም ዓለማዊ ስኬት ሊሰጠው የማይችል እና ምንም ዓለማዊ ኪሳራ ላይም ሊንቀጠቀጥ የማይችል ድምጽ ይገኛል።",
        ar: "عندما يُدرك المؤمن أن كل القوة، والرزق، والهداية تأتي من الله وحده، يجد القلب سكونًا لا يستطيع أن يمنحه أي نجاح دنيوي، ولا يُزعزعه أي خسارة دنيوية.",
      },
    ],
  },
  {
    slug: "manners-of-the-seeker",
    title: {
      en: "The Forgotten Manners of the Seeker of Knowledge",
      am: "የዕውቀት የሚፈልግ ሰው የተረሱበት ባህርነት",
      ar: "آداب طالب العلم المنسية",
    },
    excerpt: {
      en: "Imam Malik told his student: 'Learn manners before you learn knowledge.' A reminder for our times.",
      am: "ኢማም ማሊክ ለተማሪው " + '"ስለእውቀት መማር ከመጀምርዎ በፊት ባህርነትን ይማሩ" ' + "አለ። ለዚህ ዘመን አስታወቂያ።",
      ar: "قال الإمام مالك لتلميذه: 'تعلم الآداب قبل العلم'. تذكير لأوقاتنا.",
    },
    category: {
      en: "Tarbiyah",
      am: "ታርቢያ",
      ar: "التربية",
    },
    date: "June 20, 2026",
    readTime: {
      en: "8 min read",
      am: "8 ደቂቃ አንበያ",
      ar: "قراءة 8 دقائق",
    },
    body: [
      {
        en: "The classical scholars of Islam never separated knowledge from character.",
        am: "የእስላም ቀደምት ዑለማኦች እውቀትን ከባህርነትዎ ገድ አለመውጠጣም አይደለም።",
        ar: "لم يُفصِّل علماء الإسلام القديموا العلم عن الخلاق.",
      },
    ],
  },
];

export type Course = {
  id: string;
  title: MultilingualText;
  subtitle: MultilingualText;
  level: { en: "Beginner" | "Intermediate" | "Advanced"; am: string; ar: string };
  duration: MultilingualText;
  lessons: number;
  description: MultilingualText;
  topics: MultilingualText[];
};

export const courses: Course[] = [
  {
    id: "aqeedah-foundations",
    title: {
      en: "Foundations of Aqeedah",
      am: "የአቂዳ መሰረቶች",
      ar: "أساسيات العقيدة",
    },
    subtitle: {
      en: "The pillars of belief, taught from the classical texts",
      am: "የአምላኪነት መሰረቶች፣ ከቀደምት ጽሑፎች ይተማሩ",
      ar: "أركان الإيمان، تُدرس من النصوص الكلاسيكية",
    },
    level: {
      en: "Beginner",
      am: "ጀማሪ",
      ar: "مبتدئ",
    },
    duration: {
      en: "8 weeks",
      am: "8 ሳምንታት",
      ar: "8 أسابيع",
    },
    lessons: 24,
    description: {
      en: "A structured introduction to the six pillars of faith.",
      am: "ለስስት የአምላኪነት መሰረቶች ውስብስብ መግቢያ።",
      ar: "مقدمة منظمة لأركان الإيمان الستة.",
    },
    topics: [
      {
        en: "Belief in Allah and His Names",
        am: "በአላህ እና በስሞቹ አምላኪነት",
        ar: "الإيمان بالله وأسمائه",
      },
      {
        en: "The Angels and the Unseen",
        am: "መላእክቶች እና የማይታመም ነገር",
        ar: "الملائكة والغيب",
      },
    ],
  },
  {
    id: "tafsir-juz-amma",
    title: {
      en: "Tafsir of Juz 'Amma",
      am: "የጁዝ አማ ተፍሲር",
      ar: "تفسير جزء عم",
    },
    subtitle: {
      en: "A verse-by-verse exegesis of the final juz of the Qur'an",
      am: "የቁርአን የመጨረሻ ጁዝ በአንድ አያት በአንድ አያት ተርጉም",
      ar: "تفسير آية بآية لآخر جزء من القرآن",
    },
    level: {
      en: "Beginner",
      am: "ጀማሪ",
      ar: "مبتدئ",
    },
    duration: {
      en: "12 weeks",
      am: "12 ሳምንታት",
      ar: "12 أسبوع",
    },
    lessons: 37,
    description: {
      en: "Walk through every surah from An-Naba to An-Nas.",
      am: "ከአን-ነባ እስከ አን-ናስ ሁሉም ሱራዎችን ይሄዱ።",
      ar: "سير في كل سورة من النبإ إلى الناس.",
    },
    topics: [
      { en: "Surah An-Naba", am: "ሱራት አን-ነባ", ar: "سورة النبأ" },
      { en: "Surah An-Nazi'at", am: "ሱራት አን-ናዚዓት", ar: "سورة النازعات" },
    ],
  },
];

export type Lecture = {
  id: string;
  title: MultilingualText;
  topic: MultilingualText;
  duration: MultilingualText;
  date: string;
  platform: "TikTok" | "Facebook" | "Telegram" | "YouTube";
  videoUrl?: string;
  description: MultilingualText;
};

export const lectures: Lecture[] = [
  {
    id: "1",
    title: {
      en: "Surah Al-Imran - Part 1",
      am: "ሱራት አል-ዕምራን - ክፍል 1",
      ar: "سورة آل عمران - الجزء الأول",
    },
    topic: {
      en: "Tafsir",
      am: "ተፍሲር",
      ar: "التفسير",
    },
    duration: {
      en: "45 min",
      am: "45 ደቂቃ",
      ar: "45 دقيقة",
    },
    date: "June 20, 2026",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=5hlykYaVcn4",
    description: {
      en: "A deep dive into the meanings of Surah Al-Imran.",
      am: "የሱራት አል-ዕምራን ትርጉም ውስጥ ዥረት ውስጥ ግብረታል።",
      ar: "غوص عميق في معاني سورة آل عمران.",
    },
  },
  {
    id: "2",
    title: {
      en: "The Importance of Sunnah",
      am: "የሱና አስፈላጊነት",
      ar: "أهمية السنة",
    },
    topic: {
      en: "Hadith",
      am: "ሀዲዝ",
      ar: "الحديث",
    },
    duration: {
      en: "38 min",
      am: "38 ደቂቃ",
      ar: "38 دقيقة",
    },
    date: "June 15, 2026",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/watch?v=5hlykYaVcn4",
    description: {
      en: "Sheikh Muhammed Ferej Megeno explains the vital role of the Sunnah.",
      am: "ሼክ ሙሐመድ ፈረጅ ሜጌኖ የሱና አስፈላጊነት ይብራራል።",
      ar: "يفسر الشيخ محمد فرج ميجينو الدور الحيوي للسنة.",
    },
  },
];

export type BioEntry = {
  year: MultilingualText;
  title: MultilingualText;
  place?: MultilingualText;
  detail: MultilingualText;
};

export const biography: BioEntry[] = [
  {
    year: { en: "Early years", am: "የቀደምት ዓመታት", ar: "السنوات الأولى" },
    title: { en: "Birth & General Education", am: "ትውልድ እና አጠቃላይ ትምህርት", ar: "الولادة والتعليم العام" },
    place: { en: "Silti & Jimma, Ethiopia", am: "ሲልጢ እና ጅማ፣ ኢትዮጵያ", ar: "سيلتي وجيما، إثيوبيا" },
    detail: {
      en: "Primary school in Alcho; Middle and High school in Jimma. Studied Shafi'i jurisprudence, Tafsir, Hadith, Usul al-Fiqh, and Arabic linguistics under senior local scholars in the Silti and Jimma regions.",
      am: "የመጀመሪያ ደረጃ ትምህርቱን አልቾ ውስጥ፣ ሁለተኛ ደረጃ እና ሁለተኛ ደረጃ ትምህርቱን ደግሞ ጅማ ውስጥ ተከታትሏል። በሲልጢ እና ጅማ ክልሎች ውስጥ ከሽማግሌ ምሁራን ሥር የሻፊዒ ፊቅህ፣ ተፍሲር፣ ሀዲዝ፣ ኡሱልና ዐረብኛ ቋንቋ ተምሯል።",
      ar: "التحق بالمدرسة الابتدائية في ألتشو، والمتوسطة والثانوية في جيما. درس الفقه الشافعي والتفسير والحديث وأصول الفقه وعلوم العربية على يد كبار العلماء المحليين في منطقتي سيلتي وجيما.",
    },
  },
  {
    year: { en: "2001 (1422H)", am: "2001 (1422 ሂ)", ar: "2001 (1422هـ)" },
    title: { en: "Diploma in Islamic Sciences", am: "ዲፕሎማ ኢስላማዊ ሳይንሶች", ar: "دبلوم في العلوم الإسلامية" },
    place: { en: "Al-Ansar Sharia Institute, Ethiopia", am: "አል-አንሰር ሼሪዓ ኢንስቲቲዩት", ar: "معهد الأنصار الشرعي" },
    detail: {
      en: "Graduated with Excellent Grade from Ansar Dawah and Education Center — Al-Ansar Sharia Institute.",
      am: "ከአንሰር ዳዕዋ እና ትምህርት ማዕከል — አል-አንሰር ሼሪዓ ኢንስቲቲዩት በልዕለ ደረጃ ተመርቋል።",
      ar: "تخرج بامتياز من مركز الأنصار للدعوة والتعليم — معهد الأنصار الشرعي.",
    },
  },
  {
    year: { en: "2004", am: "2004", ar: "2004" },
    title: { en: "Diploma in Management", am: "ዲፕሎማ በዴሞክራሲ አስተዳደር", ar: "دبلوم في الإدارة" },
    place: { en: "Noor Salam Academic College", am: "ኑር ሰላም አካዳሚክ ኮሌጅ", ar: "كلية نور السلام الأكاديمية" },
    detail: {
      en: "Completed a Diploma in Management at Noor Salam Academic College.",
      am: "በኑር ሰላም አካዳሚክ ኮሌጅ የአስተዳደር ዲፕሎማ ተጠናቀቀ።",
      ar: "أتم دبلوم الإدارة في كلية نور السلام الأكاديمية.",
    },
  },
  {
    year: { en: "2008 (1429H)", am: "2008 (1429 ሂ)", ar: "2008 (1429هـ)" },
    title: { en: "Diploma in Arabic Language", am: "ዲፕሎማ ዐረብኛ ቋንቋ", ar: "دبلوم في اللغة العربية" },
    place: { en: "Khartoum International Arabic Institute / Sindbad Center, Addis Ababa", am: "ካርቱም ዓለም አቀፍ የዐረብኛ ቋንቋ ኢንስቲቲዩት", ar: "معهد الخرطوم الدولي للغة العربية / مركز سندباد، أديس أبابا" },
    detail: {
      en: "Completed an Arabic Language Diploma at the Khartoum International Arabic Institute, in collaboration with the Sindbad Center, Addis Ababa.",
      am: "በካርቱም ዓለም አቀፍ የዐረብኛ ቋንቋ ኢንስቲቲዩት፣ ከአዲስ አበባ ሲንድባድ ማዕከል ጋር በትብብር የዐረብኛ ቋንቋ ዲፕሎማ ጨርሷል።",
      ar: "أتم دبلوم اللغة العربية في معهد الخرطوم الدولي للغة العربية بالتعاون مع مركز سندباد، أديس أبابا.",
    },
  },
  {
    year: { en: "2023", am: "2023", ar: "2023" },
    title: { en: "Diploma in Sharia Standards (AAOIFI)", am: "ዲፕሎማ ሼሪዓ ደረጃዎች (AAOIFI)", ar: "دبلوم في معايير الشريعة (أيوفي)" },
    place: { en: "Max Breg Foundation", am: "ማክስ ብሬግ ፋውንዴሽን", ar: "مؤسسة ماكس بريغ" },
    detail: {
      en: "Certified Sharia Auditor and Controller — Excellent Grade. Qualified to provide Sharia advisory and auditing for Islamic banking and digital Islamic finance frameworks.",
      am: "የሼሪዓ ኦዲተር እና ተቆጣጣሪ ሰርቲፊኬት — ልዕለ ደረጃ። ለኢስላማዊ ባንኪንግ እና ዲጂታል ኢስላማዊ ፋይናንስ ማዕቀፎች የሼሪዓ ምክር እና ኦዲት ለማቅረብ ብቃት አለው።",
      ar: "مراجع ومراقب شرعي معتمد — بامتياز. مؤهل لتقديم الاستشارات والمراجعات الشرعية للبنوك الإسلامية وأطر التمويل الإسلامي الرقمي.",
    },
  },
  {
    year: { en: "2025", am: "2025", ar: "2025" },
    title: { en: "Bachelor's in Sharia and Law", am: "ባቸለር ዲግሪ ሼሪዓ እና ሕግ", ar: "بكالوريوس الشريعة والقانون" },
    place: { en: "Islamic University of Minnesota", am: "የሚኔሶታ ኢስላማዊ ዩኒቨርሲቲ", ar: "جامعة مينيسوتا الإسلامية" },
    detail: {
      en: "Graduated with Excellent Grade in Sharia and Law from the Islamic University of Minnesota.",
      am: "ከሚኔሶታ ኢስላማዊ ዩኒቨርሲቲ ሼሪዓ እና ሕግ ፋኩልቲ ልዕለ ደረጃ ተመርቋል።",
      ar: "تخرج بامتياز في الشريعة والقانون من جامعة مينيسوتا الإسلامية.",
    },
  },
  {
    year: { en: "2026 (Expected)", am: "2026 (የሚጠበቅ)", ar: "2026 (متوقع)" },
    title: { en: "Master's in Islamic Studies", am: "ማስተርስ ዲግሪ ኢስላማዊ ጥናቶች", ar: "ماجستير في الدراسات الإسلامية" },
    place: { en: "Islamic University of Minnesota", am: "የሚኔሶታ ኢስላማዊ ዩኒቨርሲቲ", ar: "جامعة مينيسوتا الإسلامية" },
    detail: {
      en: "Currently completing a Master's degree in Islamic Studies — expected graduation with distinction in 2026.",
      am: "በ2026 ከፍተኛ ደረጃ ይጠናቀቃል ተብሎ ሲጠበቅ፣ በኢስላማዊ ጥናቶች ማስተርስ ዲግሪ በሂደት ላይ ነው።",
      ar: "يُكمل حالياً درجة الماجستير في الدراسات الإسلامية — متوقع التخرج بامتياز عام 2026.",
    },
  },
];

export const specialties: MultilingualText[] = [
  { en: "Tafsir & Quranic Exegesis", am: "ተፍሲርና የቁርአን ትርጓሜ", ar: "التفسير وعلوم القرآن" },
  { en: "Shafi'i Jurisprudence (Fiqh)", am: "የሻፊዒ ፊቅህ", ar: "الفقه الشافعي" },
  { en: "Hadith & Islamic Sciences", am: "ሀዲዝ እና ኢስላማዊ ሳይንሶች", ar: "الحديث والعلوم الإسلامية" },
  { en: "Sharia Auditing & Islamic Finance", am: "ሼሪዓ ኦዲቲንግ እና ኢስላማዊ ፋይናንስ", ar: "المراجعة الشرعية والتمويل الإسلامي" },
  { en: "Dawah & Institutional Leadership", am: "ዳዕዋ እና ተቋማዊ አመራር", ar: "الدعوة والقيادة المؤسسية" },
  { en: "Arabic Language & Translation", am: "ዐረብኛ ቋንቋ እና ትርጉም", ar: "اللغة العربية والترجمة" },
];

// Helper to get content by language
export function getTextByLang<T extends { [key in Language]: string }>(
  obj: T,
  lang: Language,
): string {
  return obj[lang];
}
