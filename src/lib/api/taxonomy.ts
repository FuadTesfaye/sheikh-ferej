import { bunyan } from "./client";
import type { ListResponse, PublicCategory, PublicTag } from "./types";

export async function getCategories(): Promise<ListResponse<PublicCategory>> {
  return bunyan<ListResponse<PublicCategory>>({
    path: "/categories",
    tags: ["categories"],
    revalidate: 3600,
  });
}

export async function getTags(): Promise<ListResponse<PublicTag>> {
  return bunyan<ListResponse<PublicTag>>({
    path: "/tags",
    tags: ["tags"],
    revalidate: 3600,
  });
}
