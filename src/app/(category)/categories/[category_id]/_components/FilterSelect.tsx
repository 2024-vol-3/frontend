import { Option, Select } from "@yamada-ui/react";

export default function FilterSelect() {
  return (
    <>
      <Select w='320px' p='20px' variant='flushed' defaultValue='全ての問題'>
        <Option value='全ての問題'>全ての問題</Option>
        <Option value='今日解く問題'>今日解く問題</Option>
        <Option value='カテゴリー'>カテゴリー</Option>
      </Select>
    </>
  );
}
