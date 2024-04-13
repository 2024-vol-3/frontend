"use client";
import { Box, Text } from "@yamada-ui/react";

interface PageTitleProps {
  title: string;
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <>
      <Box
        w='full'
        h='100px'
        display='flex'
        alignItems='center'
        p='0 20px 30px 0'
      >
        <Text fontSize='xl' as='b'>
          {props.title}
        </Text>
      </Box>
    </>
  );
}
