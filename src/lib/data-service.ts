import { posts, courses, lectures, type Post, type Course, type Lecture } from "./content";

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

export const dataService = {
  // Posts
  getPosts: () => getStorageItem<Post[]>(STORAGE_KEYS.POSTS, posts),
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
  getCourses: () => getStorageItem<Course[]>(STORAGE_KEYS.COURSES, courses),
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
  getLectures: () => getStorageItem<Lecture[]>(STORAGE_KEYS.LECTURES, lectures),
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
