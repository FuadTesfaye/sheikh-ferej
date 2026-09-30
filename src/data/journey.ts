export interface JourneyEntry {
  year: string;
  title: string;
  institution?: string;
  description: string;
  type: "education" | "qualification" | "teaching" | "current";
}

export const journeyData: JourneyEntry[] = [
  {
    year: "Traditional",
    title: "Traditional Islamic Circles (Halaqat)",
    institution: "Scholars of Silti & Jimma Regions",
    description: "Rigorous study in traditional knowledge circles mastering Shafi'i jurisprudence, Quranic exegesis (Tafsir), Hadith, Usul al-Fiqh, and classical Arabic linguistics under senior local scholars.",
    type: "education",
  },
  {
    year: "2001",
    title: "Diploma in Islamic Sciences",
    institution: "Al-Ansar Sharia Institute (1422H)",
    description: "Graduated with an Excellent Grade in foundational Islamic jurisprudence, theology, and prophetic traditions.",
    type: "qualification",
  },
  {
    year: "2003",
    title: "Projects & Preachers Supervisor",
    institution: "Al-Ansar Dawah Center",
    description: "Commenced supervising charitable development projects, community welfare, and coordinating field efforts of regional preachers.",
    type: "teaching",
  },
  {
    year: "2004",
    title: "Diploma in Management",
    institution: "Noor Salam Academic College",
    description: "Completed professional studies in organizational management and institutional administration.",
    type: "qualification",
  },
  {
    year: "2008",
    title: "Diploma in Arabic Language",
    institution: "Khartoum International Arabic Institute / Sindbad Center (1429H)",
    description: "Advanced certification in Arabic grammar, rhetoric, and classical literature.",
    type: "qualification",
  },
  {
    year: "2008",
    title: "Media & Broadcast Preacher",
    institution: "Africa TV, Zawiya TV & Noor Al-Huda TV",
    description: "Began presenting televised educational Islamic programs, delivering live fatwas, and broadcasting scholarly lectures across the Horn of Africa.",
    type: "teaching",
  },
  {
    year: "2023",
    title: "Certified Sharia Auditor (AAOIFI)",
    institution: "Max Breg Foundation",
    description: "Earned Certified Sharia Auditor and Controller diploma with Excellent Grade adhering to global AAOIFI Sharia accounting and governance standards.",
    type: "qualification",
  },
  {
    year: "2023",
    title: "Sharia Banking Consultant",
    institution: "Wegagen Bank — Islamic Banking Window",
    description: "Providing Sharia governance, compliance auditing, and structuring advisory for Islamic financial windows and digital banking frameworks.",
    type: "current",
  },
  {
    year: "2025",
    title: "Bachelor's in Sharia and Law",
    institution: "Islamic University of Minnesota",
    description: "Graduated with Excellent Grade in Islamic Jurisprudence, Comparative Law, and Legal Foundations.",
    type: "qualification",
  },
  {
    year: "2026",
    title: "Master’s in Islamic Studies",
    institution: "Islamic University of Minnesota",
    description: "Completing postgraduate degree in advanced Islamic sciences with high distinction, focusing on contemporary Islamic issues.",
    type: "current",
  },
];
