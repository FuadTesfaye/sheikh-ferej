# Sheikh Muhammed Ferej Megeno — Official Scholarly Portal
### የኡስታዝ ሼክ ሙሐመድ ፈረጅ መጀኖ ይፋዊ የእውቀትና ዳዕዋ መድረክ

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.8-black?logo=next.js)](https://nextjs.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Ready-blueviolet)](https://turbo.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![AAOIFI Certified](https://img.shields.io/badge/AAOIFI-Certified_Sharia_Auditor-1B5E20)](https://aaoifi.com/)

A modern, high-performance, editorial digital library and scholar portal for **Sheikh Muhammed Ferej Megeno (الشيخ محمد فرج مجنو)** — renowned Ethiopian Islamic scholar, educator, Sharia consultant at Wegagen Bank, African Scholars Union member, and President of Al-Fajr Islamic Foundation.

---

## 🏛️ Architecture & Philosophy

The portal strictly implements the **Scholarly Digital Library Architecture**:
- **Application Shell**: A clean, distraction-free navigation shell across desktop and mobile.
- **Deep Routing (No Giant Scrolling Homepage)**: Every content domain lives in its own dedicated, purpose-built route with natural scrolling and faceted filtering.
- **Scholarly Editorial Theme**: Warm paper parchment backgrounds (`#FAF8F5`), Deep Forest Green (`#1B5E20`), Warm Gold accents (`#B8860B`), Charcoal Typography (`#2D3436`), and serif headings.
- **Full Multilingual Foundation**: English, Arabic (العربية with full RTL support), Amharic (አማርኛ), and Afaan Oromoo.

---

## 🧭 Routes & Digital Library Modules

| Route | Description | Highlights |
| :--- | :--- | :--- |
| `/` | **Scholar Dashboard** | Hero portrait, identity, featured lecture video player, latest media |
| `/about` | **Biography & Profile** | 35+ years of scholarly journey, Halaqat roots, institutional positions |
| `/journey` | **Educational Timeline** | Scholarly milestones from Jimma/Silti Halaqat to university degrees |
| `/qualifications` | **Academic & Traditional Sanad** | BA in Sharia & Law, MA in Islamic Studies, AAOIFI Auditor Diploma |
| `/lectures` | **Lecture Archives** | 7 HD YouTube lectures + 32 Kitab At-Tawheed lessons + Friday Khutbah |
| `/lectures/[slug]` | **Lecture Application** | Responsive embedded YouTube/HTML5 player, synchronized transcripts |
| `/series` | **Course & Lecture Series** | Complete 32-chapter *Kitab At-Tawheed (ኪታቡ አተውሂድ)* curriculum |
| `/articles` | **Writings & Exegesis** | Tafsir of Surah Al-Fath & Al-Ahqaf, Spiritual Purity, Islamic Parenting |
| `/fatwas` | **Practical Q&A** | Zakat al-Fitr, AAOIFI digital banking fees, travel Salah, business Zakat |
| `/courses` | **Structured Academics** | Kitab At-Tawheed, Fiqh of Salah & Wudu, Islamic Banking Standards |
| `/library` | **Public Kitab & Documents** | **Complete 132-page Kitab At-Tawheed PDF**, Mukhtasar Tafsir, Official CV |
| `/events` | **Conferences & Khutbahs** | Al-Fajr Friday Khutbah, Annual Tawheed Intensive, AAOIFI Workshop |
| `/media` | **Unified Media Gallery** | Audio lessons, 17 archival photos, PDF documents, YouTube, TikTok showcase |
| `/ask` | **Ask the Sheikh** | Dedicated interactive question submission form |
| `/search` | **Omni-Search** | Instant faceted search across lectures, kitabs, fatwas, and articles |
| `/contact` | **Scholarly Office** | Institutional inquiries, booking, and Al-Fajr Foundation contacts |

---

## 📖 Public Kitab (የመጻሕፍት ማዕከል)

The portal features full downloadable and readable classical treatises:
1. **Kitab At-Tawheed — The Book of Monotheism (كتاب التوحيد — ኪታቡ አተውሂድ)**:
   - Full 132-page classical treatise (`/documents/kitabu-tawhid-complete.pdf`).
   - 2-page English/Amharic study syllabus & curriculum guide (`/documents/kitab-at-tawheed-syllabus.pdf`).
   - 32 accompanying audio lessons delivered by Sheikh Muhammed Ferej.
2. **Official Scholarly Curriculum Vitae**:
   - Authenticated PDF resume (`/documents/My CV.pdf`).
3. **Summary Interpretation of the Holy Quran (ሙኽተሰር ተፍሲር)**:
   - Authorized Amharic co-translation.
4. **AAOIFI Sharia Governance and Ethical Finance Framework**.

---

## 📱 Official Channels

- **TikTok**: [@ustazmuhammadferej0](https://www.tiktok.com/@ustazmuhammadferej0) *(297.5K+ Followers · 2.3M+ Likes)*
- **YouTube**: [Official Lecture Playlist](https://www.youtube.com/playlist?list=PLzRqlK40SdT6R8jYsWIxMf44Hdl8q3pt3)
- **Facebook**: [Ustaz Muhammad ferej](https://web.facebook.com/p/Ustaz-Muhammad-ferej-100064605885257/?_rdc=1&_rdr#) *(330,000+ Followers)*
- **Telegram**: [@ustazmuhammadferej](https://t.me/ustazmuhammadferej)

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16.3.8 with Turbopack
- **Language**: TypeScript 5.x
- **Internationalization**: `next-intl` (en, ar, am, om)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Audio/Video**: Native HTML5 player with YouTube iframe fallback and media detection
- **Content API**: Bunyan Content Client with full offline fallback resilience

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run TypeScript validation
npm run check-types

# Build production bundle
npm run build

# Start local server
npm run start
```
