export interface Qualification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  type: "certificate" | "ijazah" | "academic" | "other";
  description: string;
}

export const qualifications: Qualification[] = [
  {
    id: "masters-islamic-studies",
    title: "Master's in Islamic Studies (Distinction)",
    issuer: "Islamic University of Minnesota",
    year: "2026",
    type: "academic",
    description: "Postgraduate thesis focusing on contemporary Islamic issues, Sharia governance, and classical legal reasoning.",
  },
  {
    id: "bachelor-sharia-law",
    title: "Bachelor's in Sharia and Law (Excellent Grade)",
    issuer: "Islamic University of Minnesota",
    year: "2025",
    type: "academic",
    description: "Rigorous academic study in Islamic Jurisprudence (Fiqh), Usul al-Fiqh, and comparative legal systems with top honors.",
  },
  {
    id: "aaoifi-sharia-auditor",
    title: "Diploma in Sharia Standards (AAOIFI)",
    issuer: "Max Breg Foundation",
    year: "2023",
    type: "certificate",
    description: "Certified Sharia Auditor and Controller diploma with Excellent Grade, accredited for Islamic finance compliance and governance.",
  },
  {
    id: "arabic-institute-diploma",
    title: "Diploma in Arabic Language",
    issuer: "Khartoum International Arabic Institute & Sindbad Center",
    year: "2008",
    type: "certificate",
    description: "Comprehensive qualification in classical Arabic morphology, syntax, rhetoric, and Arabic literary translation.",
  },
  {
    id: "diploma-management",
    title: "Diploma in Management",
    issuer: "Noor Salam Academic College",
    year: "2004",
    type: "academic",
    description: "Specialized in administrative leadership, institutional management, and organizational coordination.",
  },
  {
    id: "islamic-sciences-diploma",
    title: "Diploma in Islamic Sciences (Excellent Grade)",
    issuer: "Al-Ansar Sharia Institute (1422H)",
    year: "2001",
    type: "certificate",
    description: "Foundational mastery in Islamic sciences, Hadith classification, and Shafi'i legal manuals.",
  },
  {
    id: "tot-educators",
    title: "Trainer of Trainers (ToT) Certification",
    issuer: "Islamic Preaching & Mosque Development Board",
    year: "Certified",
    type: "certificate",
    description: "Specialized certification for training mosque Imams, public preachers, educators, and community scholars.",
  },
  {
    id: "traditional-ijazah",
    title: "Traditional Knowledge Transmission (Sanad & Halaqat)",
    issuer: "Senior Traditional Scholars of Silti & Jimma",
    year: "Traditional",
    type: "ijazah",
    description: "Connected chains of knowledge transmission across Quranic Tafsir, Sahih collections, and classical Shafi'i jurisprudence.",
  },
];
