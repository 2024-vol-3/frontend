"use client";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
};

export function InputField(props: Props) {
  const { name, label } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...register(name)} />
      {errors.username && <p>{errors.username.message as string} </p>}
    </div>
  );
}
