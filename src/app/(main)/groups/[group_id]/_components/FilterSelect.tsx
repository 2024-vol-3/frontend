import { Option, Select } from "@yamada-ui/react";

export default function FilterSelect() {
  type OptionType = {
    value: string;
    label: string;
  };
  const options: OptionType[] = [
    {
      value: "全ての問題",
      label: "全ての問題",
    },
    {
      value: "今日解く問題",
      label: "今日解く問題",
    },
    {
      value: "カテゴリー",
      label: "カテゴリー",
    },
  ];
  const initialValue = "全ての問題";

  return (
    <>
      <Select
        w='320px'
        border='2px solid #555'
        zIndex='999'
        p='20px'
        defaultValue={initialValue}
      >
        {options.map((data) => (
          <Option key={data.value} value={data.value}>
            {data.label}
          </Option>
        ))}
      </Select>
    </>
  );
}
