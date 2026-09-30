import { getLectures } from "./lectures";
import { getLibrary } from "./library";

export interface MediaItem {
  id: string;
  title: string;
  kind: "video" | "audio" | "document" | "image";
  url: string | null;
  thumbnail_url: string | null;
  description?: string | null;
}

const PHOTO_FILES = [
  "photo_1_2026-09-30_23-42-17.jpg",
  "photo_2_2026-09-30_23-42-17.jpg",
  "photo_3_2026-09-30_23-42-17.jpg",
  "photo_4_2026-09-30_23-42-17.jpg",
  "photo_5_2026-09-30_23-42-17.jpg",
  "photo_6_2026-09-30_23-42-17.jpg",
  "photo_7_2026-09-30_23-42-17.jpg",
  "photo_8_2026-09-30_23-42-17.jpg",
  "photo_9_2026-09-30_23-42-17.jpg",
  "photo_10_2026-09-30_23-42-17.jpg",
  "photo_11_2026-09-30_23-42-17.jpg",
  "photo_12_2026-09-30_23-42-17.jpg",
  "photo_13_2026-09-30_23-42-17.jpg",
  "photo_14_2026-09-30_23-42-17.jpg",
  "photo_15_2026-09-30_23-42-17.jpg",
  "photo_16_2026-09-30_23-42-17.jpg",
  "photo_17_2026-09-30_23-42-17.jpg",
];

export async function getMedia(params?: { locale?: string }): Promise<MediaItem[]> {
  try {
    const [lecturesRes, libraryRes] = await Promise.all([
      getLectures({ limit: "20", locale: params?.locale }),
      getLibrary({ limit: "20", locale: params?.locale }),
    ]);

    const items: MediaItem[] = [];

    // Audio & Video from Lectures
    for (const lec of lecturesRes.data || []) {
      if (lec.media?.video) {
        items.push({
          id: `${lec.id}-video`,
          title: lec.title,
          kind: "video",
          url: lec.media.video,
          thumbnail_url: lec.cover?.url ?? null,
          description: lec.summary,
        });
      }
      if (lec.media?.audio) {
        items.push({
          id: `${lec.id}-audio`,
          title: lec.title,
          kind: "audio",
          url: lec.media.audio,
          thumbnail_url: lec.cover?.url ?? null,
          description: lec.summary,
        });
      }
    }

    // TikTok Short Video Reminders (@ustazmuhammadferej0)
    const TIKTOK_SHORTS = [
      {
        id: "tiktok-short-1",
        title: "የልብ ሰላምና የዚክር ሚስጥር — አጫጭር የቲክቶክ መልእክቶች (TikTok)",
        url: "https://www.tiktok.com/@ustazmuhammadferej0",
        thumbnail_url: "/images/photo_2_2026-09-30_23-42-17.jpg",
        description: "ከኡስታዝ ሙሐመድ ፈረጅ ኦፊሴላዊ የቲክቶክ ገጽ (@ustazmuhammadferej0) የተወሰደ አጭር መንፈሳዊ ማስታወሻ። 297K+ ተከታዮች።",
      },
      {
        id: "tiktok-short-2",
        title: "ዱዓእ ተቀባይነት እንዳያጣ የሚያደርጉ ቁልፍ ምክሮች (TikTok)",
        url: "https://www.tiktok.com/@ustazmuhammadferej0",
        thumbnail_url: "/images/photo_6_2026-09-30_23-42-17.jpg",
        description: "የእለት ተእለት ዱዓእ አደራረግ እና የኢኽላስ አስፈላጊነትን የሚዳስስ የቪዲዮ ትምህርት።",
      },
      {
        id: "tiktok-short-3",
        title: "የወላጆች ውለታ እና በአስቸጋሪ ወቅት መጽናት (TikTok)",
        url: "https://www.tiktok.com/@ustazmuhammadferej0",
        thumbnail_url: "/images/photo_10_2026-09-30_23-42-17.jpg",
        description: "ለወጣቶች የተዘጋጀ አነቃቂና አስተማሪ የቪዲዮ መልእክት በኡስታዝ ሙሐመድ ፈረጅ።",
      },
    ];

    for (const tt of TIKTOK_SHORTS) {
      items.push({
        id: tt.id,
        title: tt.title,
        kind: "video",
        url: tt.url,
        thumbnail_url: tt.thumbnail_url,
        description: tt.description,
      });
    }

    // Facebook Official Video Broadcasts
    const FACEBOOK_VIDEOS = [
      {
        id: "facebook-video-1",
        title: "የጁምዓ ኹጥባና ሳምንታዊ ምክር — ኦፊሴላዊ የፌስቡክ ስርጭት (Facebook)",
        url: "https://web.facebook.com/p/Ustaz-Muhammad-ferej-100064605885257/?_rdc=1&_rdr#",
        thumbnail_url: "/images/photo_4_2026-09-30_23-42-17.jpg",
        description: "ከኡስታዝ ሙሐመድ ፈረጅ ኦፊሴላዊ የፌስቡክ ገጽ (330,000+ ተከታዮች) የተላለፈ የቀጥታ የጁምዓ መልእክት።",
      },
      {
        id: "facebook-video-2",
        title: "የረመዳን ዝግጅትና የዒባዳ ማነቃቂያ ፕሮግራም (Facebook Live)",
        url: "https://web.facebook.com/p/Ustaz-Muhammad-ferej-100064605885257/?_rdc=1&_rdr#",
        thumbnail_url: "/images/photo_12_2026-09-30_23-42-17.jpg",
        description: "የቀጥታ ስርጭት ውይይት እና ለተመልካቾች የቀረበ ጥያቄና መልስ በፌስቡክ።",
      },
    ];

    for (const fb of FACEBOOK_VIDEOS) {
      items.push({
        id: fb.id,
        title: fb.title,
        kind: "video",
        url: fb.url,
        thumbnail_url: fb.thumbnail_url,
        description: fb.description,
      });
    }

    // Official Photographs
    PHOTO_FILES.forEach((file, idx) => {
      items.push({
        id: `photo-${idx + 1}`,
        title: `Scholarly Archive & Field Work — Image ${idx + 1}`,
        kind: "image",
        url: `/images/${file}`,
        thumbnail_url: `/images/${file}`,
        description: "Official photographic documentation from educational programs, community conferences, and scholarly assemblies.",
      });
    });

    // Documents from Library
    for (const book of libraryRes.data || []) {
      items.push({
        id: book.id,
        title: book.title,
        kind: "document",
        url: book.file?.url ?? book.external_url ?? null,
        thumbnail_url: book.cover?.url ?? null,
        description: book.summary,
      });
    }

    return items;
  } catch (err) {
    console.error("Failed to load media items:", err);
    return [];
  }
}
