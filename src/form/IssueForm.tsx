"use client";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { InputField } from "./InputField";
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
        <InputField name={"username"} label={"ユーザー名"} />
        <InputField name={"password"} label={"パスワード"} />
        <button type='submit'>送信</button>
      </form>
    </FormProvider>
  );
}
