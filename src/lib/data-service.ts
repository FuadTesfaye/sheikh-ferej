import {
  posts,
  courses,
  lectures,
  type Post,
  type Course,
  type Lecture,
  type MultilingualText,
} from "./content";

const STORAGE_KEYS = {
  POSTS: "sheikh_posts",
  COURSES: "sheikh_courses",
  LECTURES: "sheikh_lectures",
};

function getStorageItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const item = localStorage.getItem(key);
  if (!item) return fallback;
  try {
    return JSON.parse(item);
  } catch (e) {
    console.error(`Error parsing ${key} from localStorage`, e);
    return fallback;
  }
}

function setStorageItem<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeText(obj: Partial<MultilingualText> & Record<string, string>): MultilingualText {
  const en = obj.en ?? "";
  return {
    en,
    am: obj.am ?? en,
    ar: obj.ar ?? en,
    om: obj.om ?? en,
  };
}

function normalizePost(post: Post): Post {
  return {
    ...post,
    title: normalizeText(post.title),
    excerpt: normalizeText(post.excerpt),
    category: normalizeText(post.category),
    readTime: normalizeText(post.readTime),
    body: post.body.map((p) => normalizeText(p)),
    blocks: post.blocks?.map((block) => {
      if (block.type === "paragraph" || block.type === "heading") {
        return { ...block, text: normalizeText(block.text) };
      }
      if (block.type === "hadith" && block.source) {
        return { ...block, source: normalizeText(block.source) };
      }
      if (block.type === "dua" && block.label) {
        return { ...block, label: normalizeText(block.label) };
      }
      return block;
    }),
  };
}

function normalizeCourse(course: Course): Course {
  return {
    ...course,
    title: normalizeText(course.title),
    subtitle: normalizeText(course.subtitle),
    level: {
      en: course.level.en,
      am: course.level.am ?? course.level.en,
      ar: course.level.ar ?? course.level.en,
      om: course.level.om ?? course.level.en,
    },
    duration: normalizeText(course.duration),
    description: normalizeText(course.description),
    topics: course.topics.map((t) => normalizeText(t)),
  };
}

function normalizeLecture(lecture: Lecture): Lecture {
  return {
    ...lecture,
    title: normalizeText(lecture.title),
    topic: normalizeText(lecture.topic),
    duration: normalizeText(lecture.duration),
    description: normalizeText(lecture.description),
  };
}

function normalizeList<T>(items: T[], normalize: (item: T) => T): T[] {
  return items.map(normalize);
}

export const dataService = {
  // Posts
  getPosts: () => normalizeList(getStorageItem<Post[]>(STORAGE_KEYS.POSTS, posts), normalizePost),
  savePost: (post: Post) => {
    const currentPosts = dataService.getPosts();
    const index = currentPosts.findIndex((p) => p.slug === post.slug);
    if (index >= 0) {
      currentPosts[index] = post;
    } else {
      currentPosts.unshift(post);
    }
    setStorageItem(STORAGE_KEYS.POSTS, currentPosts);
  },
  deletePost: (slug: string) => {
    const currentPosts = dataService.getPosts().filter((p) => p.slug !== slug);
    setStorageItem(STORAGE_KEYS.POSTS, currentPosts);
  },

  // Courses
  getCourses: () =>
    normalizeList(getStorageItem<Course[]>(STORAGE_KEYS.COURSES, courses), normalizeCourse),
  saveCourse: (course: Course) => {
    const currentCourses = dataService.getCourses();
    const index = currentCourses.findIndex((c) => c.id === course.id);
    if (index >= 0) {
      currentCourses[index] = course;
    } else {
      currentCourses.unshift(course);
    }
    setStorageItem(STORAGE_KEYS.COURSES, currentCourses);
  },
  deleteCourse: (id: string) => {
    const currentCourses = dataService.getCourses().filter((c) => c.id !== id);
    setStorageItem(STORAGE_KEYS.COURSES, currentCourses);
  },

  // Lectures
  getLectures: () =>
    normalizeList(getStorageItem<Lecture[]>(STORAGE_KEYS.LECTURES, lectures), normalizeLecture),
  saveLecture: (lecture: Lecture) => {
    const currentLectures = dataService.getLectures();
    const index = currentLectures.findIndex((l) => l.id === lecture.id);
    if (index >= 0) {
      currentLectures[index] = lecture;
    } else {
      currentLectures.unshift(lecture);
    }
    setStorageItem(STORAGE_KEYS.LECTURES, currentLectures);
  },
  deleteLecture: (id: string) => {
    const currentLectures = dataService.getLectures().filter((l) => l.id !== id);
    setStorageItem(STORAGE_KEYS.LECTURES, currentLectures);
  },
};
