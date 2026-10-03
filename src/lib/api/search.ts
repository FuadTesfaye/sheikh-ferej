import { bunyan } from "./client";
import type { ListResponse, SearchResult } from "./types";
import { AUTHENTIC_LECTURES } from "./lectures";
import { AUTHENTIC_ARTICLES } from "./articles";
import { AUTHENTIC_BOOKS } from "./library";
import { AUTHENTIC_FATWAS } from "./fatwas";
import { AUTHENTIC_COURSES } from "./courses";
import { AUTHENTIC_EVENTS } from "./events";
import { AUTHENTIC_SERIES } from "./series";

export async function searchContent(params: { q: string; type?: string[]; limit?: string; locale?: string }): Promise<ListResponse<SearchResult>> {
  try {
    const res = await bunyan<ListResponse<SearchResult>>({
      path: "/search",
      params: {
        q: params.q,
        type: params.type,
        limit: params.limit ?? "20",
        locale: params.locale,
      },
      revalidate: false,
    });
    if (res && res.data && res.data.length > 0) {
      return res;
    }
  } catch {
    // fallback
  }

  const q = params.q.toLowerCase().trim();
  const results: SearchResult[] = [];

  for (const lec of AUTHENTIC_LECTURES) {
    if (lec.title.toLowerCase().includes(q) || (lec.summary && lec.summary.toLowerCase().includes(q))) {
      results.push({
        object: "lecture",
        id: lec.id,
        title: lec.title,
        slug: lec.slug,
        summary: lec.summary,
        locale: lec.locale,
        score: 1.0,
        published_at: lec.published_at,
      });
    }
  }

  for (const art of AUTHENTIC_ARTICLES) {
    if (art.title.toLowerCase().includes(q) || (art.summary && art.summary.toLowerCase().includes(q))) {
      results.push({
        object: "article",
        id: art.id,
        title: art.title,
        slug: art.slug,
        summary: art.summary,
        locale: art.locale,
        score: 1.0,
        published_at: art.published_at,
      });
    }
  }

  for (const book of AUTHENTIC_BOOKS) {
    if (book.title.toLowerCase().includes(q) || (book.summary && book.summary.toLowerCase().includes(q))) {
      results.push({
        object: "book",
        id: book.id,
        title: book.title,
        slug: book.slug,
        summary: book.summary,
        locale: book.locale,
        score: 1.0,
        published_at: book.published_at,
      });
    }
  }

  for (const fatwa of AUTHENTIC_FATWAS) {
    if (
      fatwa.title.toLowerCase().includes(q) ||
      (fatwa.summary && fatwa.summary.toLowerCase().includes(q)) ||
      (fatwa.question && fatwa.question.toLowerCase().includes(q))
    ) {
      results.push({
        object: "fatwa",
        id: fatwa.id,
        title: fatwa.title,
        slug: fatwa.slug,
        summary: fatwa.summary,
        locale: fatwa.locale,
        score: 1.0,
        published_at: fatwa.published_at,
      });
    }
  }

  for (const course of AUTHENTIC_COURSES) {
    if (course.title.toLowerCase().includes(q) || (course.summary && course.summary.toLowerCase().includes(q))) {
      results.push({
        object: "course",
        id: course.id,
        title: course.title,
        slug: course.slug,
        summary: course.summary,
        locale: course.locale,
        score: 1.0,
        published_at: null,
      });
    }
  }

  for (const ser of AUTHENTIC_SERIES) {
    if (ser.title.toLowerCase().includes(q) || (ser.description && ser.description.toLowerCase().includes(q))) {
      results.push({
        object: "series",
        id: ser.id,
        title: ser.title,
        slug: ser.slug,
        summary: ser.description,
        locale: ser.locale,
        score: 1.0,
        published_at: ser.published_at,
      });
    }
  }

  for (const ev of AUTHENTIC_EVENTS) {
    if (ev.title.toLowerCase().includes(q) || (ev.summary && ev.summary.toLowerCase().includes(q))) {
      results.push({
        object: "event",
        id: ev.id,
        title: ev.title,
        slug: ev.slug,
        summary: ev.summary,
        locale: ev.locale,
        score: 1.0,
        published_at: ev.starts_at,
      });
    }
  }

  const filtered = params.type && params.type.length > 0
    ? results.filter(r => params.type!.includes(r.object))
    : results;

  return {
    object: "list",
    data: filtered.slice(0, Number(params.limit ?? 20)),
    has_more: false,
    next_cursor: null,
  };
}
