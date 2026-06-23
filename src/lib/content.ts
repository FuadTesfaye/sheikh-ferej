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
      en: "Sheikh Mohammed Ferej explains the vital role of the Sunnah.",
      am: "ሼክ መሐመድ ፈረጅ የሱና አስፈላጊነት ይብራራል።",
      ar: "يفسر الشيخ محمد فرج الدور الحيوي للسنة.",
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
    year: {
      en: "Early years",
      am: "የመጀመሪያ ዓመታት",
      ar: "السنوات الأولى",
    },
    title: {
      en: "Birth and upbringing",
      am: "ትውልድ እና አድሳት",
      ar: "الولادة والنشأة",
    },
    place: {
      en: "Ethiopia",
      am: "ኢትዮጵያ",
      ar: "إثيوبيا",
    },
    detail: {
      en: "Born in Ethiopia and raised in a household where the Book of Allah was recited daily.",
      am: "በኢትዮጵያ ተወልዶ፣ በየቀኑ የአላህ መጽሀፍ የሚታነብ ቤት ውስጥ አድጓል።",
      ar: "وُلد في إثيوبيا ونشأ في بيت يُتلى فيه كتاب الله يوميًا.",
    },
  },
  {
    year: {
      en: "Formative study",
      am: "ማዕከለኛ ትምህርት",
      ar: "الدراسة التكوينية",
    },
    title: {
      en: "Memorization of the Qur'an",
      am: "የቁርአን ግብራት",
      ar: "حفظ القرآن",
    },
    detail: {
      en: "Completed the memorization of the noble Qur'an at the hands of traditional teachers.",
      am: "በባህላዊ መምራን እጅ ከቀደምት የኢትዮጵያ ማድራስ ከተማዎች የአዛዝ ቁርአን ግብራት አጠናቋል።",
      ar: "أكمل حفظ القرآن الكريم على أيدي معلمين تقليديين.",
    },
  },
];

export const specialties: MultilingualText[] = [
  {
    en: "Tafsir of the Noble Qur'an",
    am: "የአዛዝ ቁርአን ተፍሲር",
    ar: "تفسير القرآن الكريم",
  },
  {
    en: "Aqeedah of Ahl as-Sunnah",
    am: "የአህለሱና ወልጀመዓ አቂዳ",
    ar: "عقيدة أهل السنة",
  },
  {
    en: "Fiqh of worship and daily life",
    am: "የአምልኮ እና የዕለት ተዕለት ሕይወት ፊቅህ",
    ar: "فقه العبادة والحياة اليومية",
  },
];

// Helper to get content by language
export function getTextByLang<T extends { [key in Language]: string }>(
  obj: T,
  lang: Language
): string {
  return obj[lang];
}
