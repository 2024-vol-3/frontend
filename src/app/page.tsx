import { Button, Link, Text, Heading, Center, Box, Flex, Card } from "@yamada-ui/react";

export default function Home() {
  return (
    <>
      <Box h='5vh' pl='5vw' bg='#fff'>
      </Box>
      <Box pl='5vw' pr='5vw' bg='#fff'>
        <Box h='30vh' bg='#fff'>
        </Box>
        <Box h='30vh' bg='#fff'>
          <Center>
            <Text as='b' fontSize='80px' pt='5vh' pb='5vh' isTruncated>
              目に見える忘却曲線。<br/>
            </Text>
          </Center>
          <Center>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' as='b' fontSize='3xl' isTruncated>
              1, 2, 8, 29
            </Text>
            <Text as='b' fontSize='3xl' isTruncated>
              日ごとに、忘却曲線に挑戦して単語を覚える新感覚アプリが登場!<br/>
            </Text>
          </Center>
          <Center>
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' as='b' fontSize='3xl' isTruncated>
              色とりどりの付箋
            </Text>
            <Text as='b' fontSize='3xl' isTruncated>
              が、学習の進捗を視覚的に示し、一目で確認できます!<br/>
            </Text>
          </Center>
          {/* <Link href='/categories'>
            <Button variant='solid'>単語帳一覧はコチラ!</Button>
          </Link> */}
        </Box>
        <Box h='25vh' roundedTopRight='10px' roundedTopLeft='10px' bg='#fffeee'>
          <Flex pt='calc(25vh - 230px)'>
            <Box w='60vw'>
              <Link href='/categories'>
                <Text as='b' fontSize='48px' color='#000' pl='300px' decoration='none' isTruncated>
                  単語帳一覧はコララから!
                </Text>
              </Link>
            </Box>
            <Flex minW='450px' pl='calc(30vw - 510px)' g='30px'>
              <Box zIndex='400' w='100px' h='250px' pt='10px' rounded='md' bg='#FF6060' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>1</p>
              </Box>
              <Box zIndex='300' w='100px' h='200px' pt='10px' mt='50px' rounded='md' bg='#FFa070' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>2</p>
              </Box>
              <Box zIndex='200' w='100px' h='150px' pt='10px' mt='100px' rounded='md' bg='#10E070' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>8</p>
              </Box>
              <Box zIndex='400' w='100px' h='100px' pt='10px' mt='150px' rounded='md' bg='#00B0FF' color='white' fontSize='48px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'>
                <p>29</p>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box h='10vh' roundedTopRight='10px' roundedTopLeft='10px' bg='#fffccc'>
        </Box>
      </Box>
    </>
  );
}