"use client";
import { useFormContext } from "react-hook-form";

type Props = {
  id: string;
  label: string;
};

export function InputField(props: Props) {
  const { id, label } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(id)} />
      {errors.id && <p>{errors.id.message as string} </p>}
    </div>
  );
}
