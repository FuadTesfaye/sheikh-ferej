import { bunyan } from "./client";
import type { ListResponse, SearchResult } from "./types";

export async function searchContent(params: { q: string; type?: string[]; limit?: string; locale?: string }): Promise<ListResponse<SearchResult>> {
  return bunyan<ListResponse<SearchResult>>({
    path: "/search",
    params: {
      q: params.q,
      type: params.type,
      limit: params.limit ?? "20",
      locale: params.locale,
    },
    revalidate: false,
  });
}
