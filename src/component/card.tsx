"use client";
import { Box, Button, Flex, Text } from "@yamada-ui/react";

export default function Card() {
  return (
    <>
      <Box rounded="10" m="md" w="300px" h="200px" bg="gray">
        <Text fontWeight="bold" p="5px">
          title
        </Text>
        <Text height="90px" p="5px">
          ここはグループ名が表示される場所です。このテキストはテスト用になります。
        </Text>
        <Flex justify="center" align="end">
          <Button p="25px" w="100px" m="10px">
            学習
          </Button>
          <Button p="25px" w="100px" m="10px">
            単語帳
          </Button>
        </Flex>
      </Box>
    </>
  );
}
