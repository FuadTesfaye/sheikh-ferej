export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "the-light-of-tawhid",
    title: "The Light of Tawhid in Everyday Life",
    excerpt:
      "How the oneness of Allah shapes the smallest moments — from the morning prayer to the words we speak with our neighbors.",
    category: "Aqeedah",
    date: "March 14, 2026",
    readTime: "6 min read",
    body: [
      "Tawhid is not merely a chapter in a book of theology. It is a way of seeing — a lens through which every breath, every transaction, and every relationship is understood.",
      "When the believer recognizes that all power, sustenance, and guidance flow from Allah alone, the heart finds a stillness that no worldly success can offer and no worldly loss can shake.",
      "In this short reflection, we explore three practical ways the doctrine of tawhid transforms the rhythm of daily life: in our intentions, in our reliance, and in our gratitude.",
      "May Allah make us among those who not only know His oneness, but live by it.",
    ],
  },
  {
    slug: "manners-of-the-seeker",
    title: "The Forgotten Manners of the Seeker of Knowledge",
    excerpt:
      "Imam Malik told his student: 'Learn manners before you learn knowledge.' A reminder for our times.",
    category: "Tarbiyah",
    date: "February 28, 2026",
    readTime: "8 min read",
    body: [
      "The classical scholars of Islam never separated knowledge from character. To them, a person who memorized a thousand hadith but mistreated his mother had learned nothing at all.",
      "In this article we revisit the adab of the student: humility before the teacher, gentleness with peers, patience with the difficult, and silence where silence is sweeter than speech.",
      "These are not relics of a bygone age — they are the very soil in which sacred knowledge grows.",
    ],
  },
  {
    slug: "ramadan-and-the-heart",
    title: "Ramadan and the Reformation of the Heart",
    excerpt:
      "Fasting is not only of the stomach. The tongue fasts, the eyes fast, and most importantly — the heart.",
    category: "Spirituality",
    date: "February 10, 2026",
    readTime: "5 min read",
    body: [
      "The Prophet ﷺ said: 'Whoever does not abandon false speech and acting upon it, Allah is not in need of him leaving his food and drink.'",
      "Ramadan invites us to a deeper fast — one that purifies intention, restrains the tongue, and softens the heart toward creation.",
      "Let this Ramadan be the year we leave it not just thinner, but truer.",
    ],
  },
  {
    slug: "ethiopia-the-first-hijra",
    title: "Ethiopia: The Land of the First Hijra",
    excerpt:
      "When the early Muslims fled persecution, the Prophet ﷺ sent them to a king who was just. That king ruled Abyssinia.",
    category: "History",
    date: "January 22, 2026",
    readTime: "10 min read",
    body: [
      "Before Madinah, there was Abyssinia. The Negus, Ashama ibn Abjar, welcomed the persecuted believers and refused to hand them over to their enemies.",
      "This article traces the deep and beautiful history of Islam in the Horn of Africa, and the responsibility this legacy places on Ethiopian Muslims today.",
    ],
  },
  {
    slug: "the-art-of-dua",
    title: "The Art of Du'a: Speaking to the One Who Listens",
    excerpt:
      "Du'a is the marrow of worship. A reflection on its etiquettes, its times, and its quiet power.",
    category: "Worship",
    date: "January 5, 2026",
    readTime: "7 min read",
    body: [
      "We often treat du'a as a last resort. The Prophet ﷺ treated it as a first refuge.",
      "Here we explore the conditions of acceptance, the moments most likely to be answered, and how to make du'a a living conversation rather than a recited formula.",
    ],
  },
  {
    slug: "raising-children-with-iman",
    title: "Raising Children With Iman, Not Fear",
    excerpt:
      "How do we plant the love of Allah in young hearts in an age of constant distraction?",
    category: "Family",
    date: "December 18, 2025",
    readTime: "9 min read",
    body: [
      "Children do not learn iman from lectures. They learn it from witnessing it lived — in the calm of the father at prayer, in the patience of the mother in trial.",
      "This piece offers practical reflections for parents navigating modern challenges without losing the heart of the tradition.",
    ],
  },
];

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  description: string;
  topics: string[];
};

export const courses: Course[] = [
  {
    id: "aqeedah-foundations",
    title: "Foundations of Aqeedah",
    subtitle: "The pillars of belief, taught from the classical texts",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 24,
    description:
      "A structured introduction to the six pillars of faith, based on the writings of the early scholars and rooted in the Qur'an and Sunnah.",
    topics: [
      "Belief in Allah and His Names",
      "The Angels and the Unseen",
      "The Revealed Books",
      "The Messengers, peace be upon them",
      "The Last Day",
      "Divine Decree (Qadr)",
    ],
  },
  {
    id: "tafsir-juz-amma",
    title: "Tafsir of Juz 'Amma",
    subtitle: "A verse-by-verse exegesis of the final juz of the Qur'an",
    level: "Beginner",
    duration: "12 weeks",
    lessons: 37,
    description:
      "Walk through every surah from An-Naba to An-Nas with classical commentary, linguistic notes, and practical application.",
    topics: [
      "Surah An-Naba",
      "Surah An-Nazi'at",
      "Surah Abasa",
      "Surahs of the Heart",
      "The Short Surahs",
    ],
  },
  {
    id: "fiqh-of-worship",
    title: "Fiqh of Worship",
    subtitle: "Purification, prayer, fasting, zakat and hajj",
    level: "Intermediate",
    duration: "16 weeks",
    lessons: 48,
    description:
      "A practical course covering the rulings every Muslim needs for daily acts of worship, taught with evidence and ease.",
    topics: ["Taharah", "Salah", "Zakat", "Sawm", "Hajj & Umrah"],
  },
  {
    id: "seerah",
    title: "The Life of the Prophet ﷺ",
    subtitle: "A journey through the Seerah from Makkah to Madinah",
    level: "Beginner",
    duration: "20 weeks",
    lessons: 60,
    description:
      "Live the story of the most beloved of creation, with lessons drawn for the believer of today.",
    topics: ["The Makkan Period", "The Hijra", "The Madinan Society", "The Final Days"],
  },
  {
    id: "arabic-for-quran",
    title: "Arabic for Understanding the Qur'an",
    subtitle: "Grammar and vocabulary to unlock the Book of Allah",
    level: "Intermediate",
    duration: "24 weeks",
    lessons: 72,
    description:
      "A focused Arabic program designed not to make you a poet, but to bring you closer to the meanings of the Qur'an.",
    topics: ["Verbs and tenses", "Sentence structure", "Qur'anic vocabulary", "Reading practice"],
  },
  {
    id: "purification-of-the-heart",
    title: "Purification of the Heart",
    subtitle: "Diseases of the heart and their cures",
    level: "Advanced",
    duration: "10 weeks",
    lessons: 30,
    description:
      "Drawn from the works of Ibn al-Qayyim and al-Ghazali, this course addresses arrogance, envy, love of the world, and how to heal them.",
    topics: ["Sincerity", "Reliance", "Patience", "Gratitude", "Repentance"],
  },
];

export type Lecture = {
  id: string;
  title: string;
  topic: string;
  duration: string;
  date: string;
  platform: "TikTok" | "Facebook" | "Telegram";
  description: string;
};

export const lectures: Lecture[] = [
  {
    id: "1",
    title: "The Mercy of Allah Encompasses All Things",
    topic: "Tafsir",
    duration: "32 min",
    date: "March 18, 2026",
    platform: "Facebook",
    description:
      "A reflection on Surah Al-A'raf 7:156 — what it means for the believer drowning in sin, and the door that never closes.",
  },
  {
    id: "2",
    title: "Three Habits That Soften the Hardest Heart",
    topic: "Tazkiyah",
    duration: "8 min",
    date: "March 12, 2026",
    platform: "TikTok",
    description:
      "Short reminder on the practical acts of worship that, when done consistently, return life to a heart grown distant from Allah.",
  },
  {
    id: "3",
    title: "Why Did the Sahaba Cry When They Heard the Qur'an?",
    topic: "Seerah",
    duration: "24 min",
    date: "March 4, 2026",
    platform: "Facebook",
    description:
      "Examining the relationship the companions had with the words of Allah — and how we might begin to recover it.",
  },
  {
    id: "4",
    title: "The Etiquettes of Disagreement Among Muslims",
    topic: "Fiqh",
    duration: "47 min",
    date: "February 22, 2026",
    platform: "Facebook",
    description:
      "How the early scholars disagreed without breaking the bonds of brotherhood, and what we have forgotten.",
  },
  {
    id: "5",
    title: "A Du'a for Anxiety from the Sunnah",
    topic: "Worship",
    duration: "6 min",
    date: "February 14, 2026",
    platform: "TikTok",
    description:
      "A short authentic supplication that the Prophet ﷺ taught for moments of distress.",
  },
  {
    id: "6",
    title: "Friday Khutbah — Holding Fast to the Rope",
    topic: "Khutbah",
    duration: "38 min",
    date: "February 7, 2026",
    platform: "Facebook",
    description:
      "On Surah Al-Imran 3:103 and the obligation of unity upon the truth in a fractured time.",
  },
];

export type BioEntry = { year: string; title: string; place?: string; detail: string };

export const biography: BioEntry[] = [
  {
    year: "Early years",
    title: "Birth and upbringing",
    place: "Ethiopia",
    detail:
      "Born in Ethiopia and raised in a household where the Book of Allah was recited daily, the foundations of love for the deen were planted from the earliest years.",
  },
  {
    year: "Formative study",
    title: "Memorization of the Qur'an",
    detail:
      "Completed the memorization of the noble Qur'an at the hands of teachers in the traditional Ethiopian madrasah system.",
  },
  {
    year: "Advanced study",
    title: "Classical sciences",
    detail:
      "Studied aqeedah, fiqh, usool, hadith and the Arabic language under a chain of Ethiopian and Arab scholars, with an emphasis on the works of the early generations.",
  },
  {
    year: "Teaching",
    title: "Twenty years in the service of knowledge",
    detail:
      "For more than two decades, has taught students across Ethiopia in mosques, study circles, and seminary classrooms — focusing on tafsir, aqeedah, and the inner sciences.",
  },
  {
    year: "Today",
    title: "Da'wah on every platform",
    detail:
      "Reaches thousands of seekers weekly through Facebook, TikTok, Telegram, and now through this structured online learning platform.",
  },
];

export const specialties: string[] = [
  "Tafsir of the Noble Qur'an",
  "Aqeedah of Ahl as-Sunnah",
  "Fiqh of worship and daily life",
  "Seerah of the Prophet ﷺ",
  "Tazkiyah and the inner sciences",
  "Da'wah in the African context",
];
