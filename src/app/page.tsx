import { Button, Link, Text, Heading, Center, Box } from "@yamada-ui/react";
import Header from "@/component/header";

export default function Home() {
  return (
    <>
    <Header />
    <Center>
      <Heading as="h1" size="4xl" p="xl" isTruncated>目に見える忘却曲線。</Heading>
    </Center>
    <Center>
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" as="b" fontSize="3xl" lineClamp={1} isTruncated>1, 2, 8, 29</Text>
      <Text as="b" fontSize="3xl" lineClamp={1} isTruncated>日ごとに、忘却曲線に挑戦して単語を覚える新感覚アプリが登場!</Text>
    </Center>
    <Center>
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" as="b" fontSize="3xl" lineClamp={1} isTruncated>色とりどりの付箋</Text>
      <Text as="b" fontSize="3xl" lineClamp={1} isTruncated>が、学習の進捗を視覚的に示し、一目で確認できます!</Text>
    </Center>
    
    <Center p="sm" g="md">
      <Link href="/categories">
        <Button variant="solid">単語帳一覧はコチラ!</Button>
      </Link>
      <Link href="/">
        <Button variant="solid">いますぐ使ってみる!</Button>
      </Link>
    </Center>

    <Center p="20px" g="md">
      <Box w="52px" h="160px" pt="4px" rounded="sm" shadow="rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px" bg="#ff001a" color="white" fontSize="3xl" textAlign="center">
        <p>1</p>
      </Box>
      <Box w="52px" h="130px" pt="4px" mb="-30px" rounded="sm" shadow="rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px" bg="#ff7300" color="white" fontSize="3xl" textAlign="center">
        <p>2</p>
      </Box>
      <Box w="52px" h="100px" pt="4px" mb="-60px" rounded="sm" shadow="rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px" bg="#4fe000" color="white" fontSize="3xl" textAlign="center">
        <p>8</p>
      </Box>
      <Box w="52px" h="70px" pt="4px" mb="-90px" rounded="sm" shadow="rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px" bg="#00e2e6" color="white" fontSize="3xl" textAlign="center">
        <p>29</p>
      </Box>
    </Center>
    </>
  );
}
