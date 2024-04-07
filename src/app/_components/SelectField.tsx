"use client";
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

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(id)}>
        {option &&
          option.map((option) => {
            return (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            );
          })}
      </select>
      {errors[id] && <p>{errors[id]?.message as string}</p>}
    </div>
  );
}
