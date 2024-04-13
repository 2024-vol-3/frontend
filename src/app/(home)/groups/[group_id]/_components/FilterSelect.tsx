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

  return (
    <>
      <Select w='320px' p='20px' defaultValue='全ての問題' zIndex='999'>
        {options.map((data) => (
          <Option key={data.value} value={data.value}>
            {data.label}
          </Option>
        ))}
      </Select>
    </>
  );
}
