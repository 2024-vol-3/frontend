import PageTitle from "@/app/_components/pageTitle";
import { Box, Button, Input } from "@yamada-ui/react";

export default function CreateGroup() {
  return (
    <>
      <PageTitle title='グループを作成する' />
      <Box
        w='80%'
        margin='100px auto 0 auto'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        gap='50px'
      >
        <Input variant='outline' placeholder='グループ名を入力' size='lg' />
        <Button variant='solid' bg='sky.300'>
          作成
        </Button>
      </Box>
    </>
  );
}
