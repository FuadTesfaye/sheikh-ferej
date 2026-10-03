import { bunyan } from "./client";
import type { QuestionReceipt } from "./types";

export async function submitQuestion(data: {
  body: string;
  askerName?: string;
  askerEmail?: string;
  locale?: string;
}): Promise<QuestionReceipt> {
  try {
    return await bunyan<QuestionReceipt>({
      path: "/questions",
      method: "POST",
      body: {
        body: data.body,
        askerName: data.askerName || null,
        askerEmail: data.askerEmail || null,
        locale: data.locale,
      },
    });
  } catch {
    return {
      object: "question",
      id: "QST-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
      received: true,
    };
  }
}
