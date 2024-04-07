"use client";
import { useForm, FormProvider } from "react-hook-form";
import { InputField } from "../../../../../../_components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueSchema } from "./IssueSchema";
import { SelectField } from "@/app/_components/SelectField";
import { TextAreaField } from "@/app/_components/TextAreaField";

const optionData = [
  {
    key: "hoge",
    value: "hoge",
  },
  {
    key: "hogehoge",
    value: "hogehoge",
  },
];

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
        <SelectField id={"category"} label={"カテゴリー"} option={optionData} />
        <InputField id={"issues"} label={"問題"} />
        <TextAreaField id={"answer"} label={"解説"} />
        <button type="submit">送信</button>
      </form>
    </FormProvider>
  );
}
