import { FormControl, Input } from "@yamada-ui/react";
import { FieldErrors, useForm } from "react-hook-form";
import type { IssueFormType } from "../(category)/categories/[category_id]/issues/create/types/issueFormType";

type inputFieldProps = {
  name: string;
};

export default function InputForm(props: inputFieldProps) {
  const { name } = props;
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <FormControl
        isInvalid={!!errors.name}
        label="問題"
        errorMessage={errors.name?.message}
      >
        <Input
          placeholder="問題を入力してください"
          // register: フィールドを登録するための関数
          {...register("name", {
            required: {
              // valueは入力が必要かどうかを示す真偽値です。
              value: true,
              message: "This is required.",
            },
          })}
        />
      </FormControl>
    </>
  );
}
