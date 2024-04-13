import { Button, Link, Text, Heading, Center, Box, Flex, Card } from "@yamada-ui/react";
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Box bg='#fff'>
        <Box h='30vh' minH='300px' w='1500px' m='0 auto' bg='#fff'>

        </Box>
        <Box h='30vh' minH='300px' w='1500px' m='0 auto' bg='#fff' textAlign='center' alignItems='center' justifyContent='center'>
          <Box p='30px'>
            <Text as='b' fontSize='80px' isTruncated>
            目に見える忘却曲線。<br/>
            </Text>
          </Box>
          <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' as='b' fontSize='36px' isTruncated>
            1, 2, 8, 29
          </Text>
          <Text as='b' fontSize='36px' isTruncated>
            日ごとに、忘却曲線に挑戦して単語を覚える新感覚アプリが登場!<br/>
          </Text>
          <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' as='b' fontSize='36px' isTruncated>
            色とりどりの付箋
          </Text>
          <Text as='b' fontSize='36px' isTruncated>
            が、学習の進捗を視覚的に示し、一目で確認できます!<br/>
          </Text>
        </Box>
        <Box h='30vh' minH='300px' w='90vw' minW='1500px' m='0 auto' roundedTopRight='10px' roundedTopLeft='10px' bg='#fffeee'>
          <Flex>
            <Box h='30vh' minH='300px' w='70%' display='flex' alignItems='center' justifyContent='center'>
              <Link href='/categories'>
                <Text as='b' fontSize='48px' color='#000' isTruncated>
                  単語帳一覧はコララから!
                </Text>
              </Link>
            </Box>
            <Box minW='450px' g='30px' pr='20px' display='flex' alignItems='end' margin='0 0 0 auto'>
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
            </Box>
          </Flex>
        </Box>
        <Box h='10vh' minH='100px' w='90vw' minW='1500px' m='0 auto' roundedTopRight='10px' roundedTopLeft='10px' bg='#fffccc'>
        </Box>
      </Box>
    </>
  );
}