"use client";
import {
  SelectItem,
  VStack,
  FormControl,
  Select,
  Input,
  Button,
} from "@yamada-ui/react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
export const IssueForm = () => {
  const items: SelectItem[] = [
    {
      label: "Naruto",
      value: "naruto",
    },
    {
      label: "Sasuke",
      value: "sasuke",
    },
  ];

  type Data = {
    select: string;
    name: string;
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data);

  // console.log("watch:", watch());

  return (
    // Formタグとして認識
    // ボタンが押されたら発火
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      {/* 値を入力するfield */}
      <FormControl
        //isInvalid はエラーがある場合は true、エラーがない場合は false を返します。
        //trueの場合、エラーメッセージが表示されます。
        isInvalid={!!errors.select}
        errorMessage={errors.select?.message}
      >
        {/* name: フィールドの名前 */}
        {/* control: React Hook Formのコントロールオブジェクト */}
        {/* rules: バリデーションルール */}
        {/* render: フィールドのレンダリング関数 */}
        <Controller
          name='select'
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Select placeholder='カテゴリーを選択' {...field} items={items} />
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.name}
        label='問題'
        errorMessage={errors.name?.message}
      >
        <Input
          placeholder='孫悟空'
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

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  );
};
