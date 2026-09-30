import { bunyan } from "./client";
import type { ListResponse, SearchResult } from "./types";
import { AUTHENTIC_LECTURES } from "./lectures";
import { AUTHENTIC_ARTICLES } from "./articles";
import { AUTHENTIC_BOOKS } from "./library";

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
