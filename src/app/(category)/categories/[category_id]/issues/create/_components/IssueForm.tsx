"use client";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../../../../../../_components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueSchema } from "./IssueSchema";

export function IssueForm() {
  const methods = useForm({
    resolver: zodResolver(IssueSchema),
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
