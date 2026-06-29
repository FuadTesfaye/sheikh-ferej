import type { MultilingualText } from "./content";

import audio23 from "@/assets/audio/كتاب التوحيد (23) ኪታቡ አተውሂድ.mp3";
import audio24 from "@/assets/audio/كتاب التوحيد (24) ኪታቡ አተውሂድ.mp3";
import audio25 from "@/assets/audio/كتاب التوحيد (25) ኪታቡ አተውሂድ.mp3";
import audio26 from "@/assets/audio/كتاب التوحيد (26) ኪታቡ አተውሂድ.mp3";
import audio32 from "@/assets/audio/كتاب التوحيد (32) ኪታቡ አተውሂድ.mp3";

import video1 from "@/assets/video/video_2026-06-29_11-45-57.mp4";
import video2 from "@/assets/video/video_2026-06-29_11-46-04.mp4";
import video3 from "@/assets/video/video_2026-06-29_11-46-08.mp4";

export type AudioItem = {
  id: string;
  episode: number;
  title: MultilingualText;
  series: MultilingualText;
  src: string;
};

export type LocalVideoItem = {
  id: string;
  title: MultilingualText;
  topic: MultilingualText;
  date: string;
  src: string;
};

export const kitabTawhidSeries: AudioItem[] = [
  {
    id: "ktawhid-23",
    episode: 23,
    series: {
      en: "Kitab al-Tawhid",
      am: "ኪታቡ አተውሂድ",
      ar: "كتاب التوحيد",
      om: "Kitaaba Tawhiidaa",
    },
    title: {
      en: "Episode 23",
      am: "ክፍል 23",
      ar: "الحلقة 23",
      om: "Kutaa 23",
    },
    src: audio23,
  },
  {
    id: "ktawhid-24",
    episode: 24,
    series: {
      en: "Kitab al-Tawhid",
      am: "ኪታቡ አተውሂድ",
      ar: "كتاب التوحيد",
      om: "Kitaaba Tawhiidaa",
    },
    title: {
      en: "Episode 24",
      am: "ክፍል 24",
      ar: "الحلقة 24",
      om: "Kutaa 24",
    },
    src: audio24,
  },
  {
    id: "ktawhid-25",
    episode: 25,
    series: {
      en: "Kitab al-Tawhid",
      am: "ኪታቡ አተውሂድ",
      ar: "كتاب التوحيد",
      om: "Kitaaba Tawhiidaa",
    },
    title: {
      en: "Episode 25",
      am: "ክፍል 25",
      ar: "الحلقة 25",
      om: "Kutaa 25",
    },
    src: audio25,
  },
  {
    id: "ktawhid-26",
    episode: 26,
    series: {
      en: "Kitab al-Tawhid",
      am: "ኪታቡ አተውሂድ",
      ar: "كتاب التوحيد",
      om: "Kitaaba Tawhiidaa",
    },
    title: {
      en: "Episode 26",
      am: "ክፍል 26",
      ar: "الحلقة 26",
      om: "Kutaa 26",
    },
    src: audio26,
  },
  {
    id: "ktawhid-32",
    episode: 32,
    series: {
      en: "Kitab al-Tawhid",
      am: "ኪታቡ አተውሂድ",
      ar: "كتاب التوحيد",
      om: "Kitaaba Tawhiidaa",
    },
    title: {
      en: "Episode 32",
      am: "ክፍል 32",
      ar: "الحلقة 32",
      om: "Kutaa 32",
    },
    src: audio32,
  },
];

export const localVideos: LocalVideoItem[] = [
  {
    id: "reminder-1",
    title: {
      en: "Short Reminder — Part 1",
      am: "አጭር ማስታወሻ — ክፍል 1",
      ar: "تذكير قصير — الجزء الأول",
      om: "Yaadachiisa gabaabaa — Kutaa 1",
    },
    topic: {
      en: "Reminder",
      am: "ማስታወሻ",
      ar: "تذكير",
      om: "Yaadachiisa",
    },
    date: "June 29, 2026",
    src: video1,
  },
  {
    id: "reminder-2",
    title: {
      en: "Short Reminder — Part 2",
      am: "አጭር ማስታወሻ — ክፍል 2",
      ar: "تذكير قصير — الجزء الثاني",
      om: "Yaadachiisa gabaabaa — Kutaa 2",
    },
    topic: {
      en: "Reminder",
      am: "ማስታወሻ",
      ar: "تذكير",
      om: "Yaadachiisa",
    },
    date: "June 29, 2026",
    src: video2,
  },
  {
    id: "reminder-3",
    title: {
      en: "Short Reminder — Part 3",
      am: "አጭር ማስታወሻ — ክፍል 3",
      ar: "تذكير قصير — الجزء الثالث",
      om: "Yaadachiisa gabaabaa — Kutaa 3",
    },
    topic: {
      en: "Reminder",
      am: "ማስታወሻ",
      ar: "تذكير",
      om: "Yaadachiisa",
    },
    date: "June 29, 2026",
    src: video3,
  },
];
