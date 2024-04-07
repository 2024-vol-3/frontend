"use client";

import { Option, Select } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";

type Option = {
  key: string;
  value: string;
};

type Props = {
  id: string;
  label: string;
  option: Option[];
};

export function SelectField(props: Props) {
  const { id, label, option } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // registerからonChangeを取り出し、残りのプロパティをfieldに格納
  const { onChange, ...field } = register(id);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Select
        placeholder="カテゴリーを選択"
        w="1000px"
        id={id}
        {...field}
        // カスタム onChange ハンドラー
        onChange={(e: any) => onChange(e)} // Provide the correct type for the event parameter
      >
        {option.map((option) => (
          <>
            <Option key={option.key} value={option.value}>
              {option.value}
            </Option>
          </>
        ))}
      </Select>
      {errors[id] && <p>{errors[id]?.message as string}</p>}
    </div>
  );
}
