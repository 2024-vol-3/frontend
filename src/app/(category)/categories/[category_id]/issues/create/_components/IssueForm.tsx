"use client";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { InputField } from "../../../../../../_components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "ユーザー名は必須です" }),
  password: z
    .string()
    .min(8, { message: "パスワードは8文字以上である必要があります" }),
});

export function IssueForm() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <InputField id={"issue"} label={"問題"} />
        <InputField id={"answer"} label={"解説"} />
        <button type="submit">送信</button>
      </form>
    </FormProvider>
  );
}
