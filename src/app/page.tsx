import Card from "@/component/card";
import Top from "@/component/home";
import { Flex, Center } from "@yamada-ui/react";

export default function Home() {
  return (
    <div>
      <Center>
        <Top />
      </Center>

      <Flex justify="space-around">
        <Card />
        <Card />
        <Card />
      </Flex>
    </div>
  );
}
