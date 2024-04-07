"use client";
import { Textarea } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";

type Props = {
  id: string;
  label: string;
};

export function TextAreaField(props: Props) {
  const { id, label } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <Textarea
          w="1000px"
          h="350px"
          m="5px 0"
          placeholder="解答を入力"
          id={id}
          {...register(id)}
        />
      </div>
      {errors[id] && <p>{errors[id]?.message as string}</p>}
    </div>
  );
}
