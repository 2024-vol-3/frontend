import { z } from "zod";

export const IssueSchema = z.object({
  issue: z.string().min(1, { message: "問題を入力してください" }),
  answer: z.string().min(1, { message: "解答を入力してください" }),
});
