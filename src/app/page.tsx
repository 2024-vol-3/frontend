import { Button, Link, Text, Heading, Center, Box, Flex } from "@yamada-ui/react";

export default function Home() {
  return (
    <>
      <Box h='5vh' pl='xl' bg='#ddd'>
        ロゴ{/* ロゴを入れないといけない xBlackTea */}
      </Box>
      <Box h='35vh' bg='#eee'>
        <Flex>
          <Box w='1395px'>
            <Heading as='h1' size='4xl' p='xl' isTruncated>
              目に見える忘却曲線。
            </Heading>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' as='b' fontSize='3xl' pl='xl' isTruncated>
              1, 2, 8, 29
            </Text>
            <Text as='b' fontSize='3xl' isTruncated>
              日ごとに、忘却曲線に挑戦して単語を覚える新感覚アプリが登場!<br/>
            </Text>

            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' as='b' fontSize='3xl' pl='xl' isTruncated>
              色とりどりの付箋
            </Text>
            <Text as='b' fontSize='3xl' isTruncated>
              が、学習の進捗を視覚的に示し、一目で確認できます!<br/>
            </Text>

            <Link href='/categories' pl='xl'>
              <Button variant='solid'>単語帳一覧はコチラ!</Button>
            </Link>
          </Box>
          <Box mt='12px'>
            <Text pl='170px' as='b' fontSize='xl' isTruncated>
              付箋をクリック!{/* これだとダサいから変更が必要 xBlackTea */}
            </Text>
            <Center p='20px' g='md'>
              <Box w='100px' h='300px' pt='10px' rounded='md' bg='#ff001a' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>1</p>
              </Box>
              <Box w='100px' h='250px' pt='10px' mb='-50px' rounded='md' bg='#ff7300' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>2</p>
              </Box>
              <Box w='100px' h='200px' pt='10px' mb='-100px' rounded='md' bg='#4fe000' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>8</p>
              </Box>
              <Box w='100px' h='150px' pt='10px' mb='-150px' rounded='md' bg='#00e2e6' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>29</p>
              </Box>
            </Center>
          </Box>
        </Flex>
      </Box>
        {/* 付箋をclickすることでここの中身に変化を与える xBlackTea */}
      <Box h='60vh' pl='xl' pr='xl' pt='20px' bg='#ddd'>
        <Box w='100%' h='80px' rounded='md' textAlign='center' bg='#ccc' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
        </Box>
        <Box w='100%' h='460px' mt='20px' rounded='md' bg='#ccc'shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
        </Box>
      </Box>
    </>
  );
}