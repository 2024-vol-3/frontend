"use client";
import {
  SelectItem,
  VStack,
  FormControl,
  Select,
  Input,
  Button,
  Textarea,
  Flex,
} from "@yamada-ui/react";
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldErrors,
} from "react-hook-form";
import type { IssueFormType } from "../types/issueFormType";

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

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormType>();

  const onSubmit: SubmitHandler<IssueFormType> = (data) =>
    console.log("submit:", data);

  // console.log("watch:", watch());

  return (
    // Formタグとして認識
    // ボタンが押されたら発火
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      {/* 値を入力するfield */}
      <FormControl
        //isInvalid はエラーがある場合は true、エラーがない場合は false を返します。
        //trueの場合、エラーメッセージが表示されます。
        isInvalid={!!errors.select}
        errorMessage={errors.select?.message}
        label="カテゴリー"
      >
        {/* name: フィールドの名前 */}
        {/* control: React Hook Formのコントロールオブジェクト */}
        {/* rules: バリデーションルール */}
        {/* render: フィールドのレンダリング関数 */}
        <Controller
          name="select"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Select placeholder="カテゴリーを選択" {...field} items={items} />
          )}
        />
      </FormControl>

      <FormControl
        isInvalid={!!errors.name}
        label="問題"
        errorMessage={
          errors.name?.message as FieldErrors<IssueFormType> as string
        }
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

      <FormControl
        isInvalid={!!errors.name}
        label="答え"
        errorMessage={errors.name?.message}
      >
        <Textarea
          h="250px"
          placeholder="答えを入力してください"
          // register: フィールドを登録するための関数
          {...register("answer", {
            required: {
              // valueは入力が必要かどうかを示す真偽値です。
              value: true,
              message: "This is required.",
            },
          })}
        />
      </FormControl>

      <Flex justify="space-between" marginTop="20px">
        <Button w="200px" type="submit">
          戻る
        </Button>

        <Button w="200px" type="submit">
          作成
        </Button>
      </Flex>
    </VStack>
  );
};
