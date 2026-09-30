import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDuration(seconds: number | null): string {
  if (!seconds) return "";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m.toString().padStart(2, "0")}m`;
  return `${m} min`;
}

export function formatDate(dateString: string | null, locale: string = "en"): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "ar" ? "ar-SA" : locale === "am" ? "am-ET" : locale === "om" ? "om-ET" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(dateString: string | null, timezone?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone ?? "Africa/Addis_Ababa",
  });
}
