import { bunyan } from "./client";
import type { QuestionReceipt } from "./types";

export async function submitQuestion(data: {
  body: string;
  askerName?: string;
  askerEmail?: string;
  locale?: string;
}): Promise<QuestionReceipt> {
  return bunyan<QuestionReceipt>({
    path: "/questions",
    method: "POST",
    body: {
      body: data.body,
      askerName: data.askerName || null,
      askerEmail: data.askerEmail || null,
      locale: data.locale,
    },
  });
}
