import {
  Button,
  Link,
  Text,
  Heading,
  Center,
  Box,
  Flex,
  Card,
} from "@yamada-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box bg='#fff'>
        <Box
          h='30vh'
          minH='300px'
          w='1500px'
          m='0 auto'
          bg='#fff'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Image
            src='/Recallllll_BlackLogo2.png'
            width={800}
            height={400}
            alt='Recallllll_BlackLogo2'
          />
        </Box>
        <Box
          h='30vh'
          minH='300px'
          w='1500px'
          m='0 auto'
          bg='#fff'
          textAlign='center'
          alignItems='center'
          justifyContent='center'
        >
          <Box pb='30px'>
            <Text as='b' fontSize='80px' isTruncated>
              最小限の学習で最大限の成果を
              <br />
            </Text>
          </Box>
          <Text as='b' fontSize='40px' isTruncated>
            エビングハウスの忘却曲線に基いたアプローチであなたの暗記学習をサポート
          </Text>
        </Box>
        <Box
          h='30vh'
          minH='300px'
          w='90vw'
          minW='1500px'
          m='0 auto'
          roundedTopRight='10px'
          roundedTopLeft='10px'
          bg='#fffeee'
        >
          <Flex>
            <Box
              h='30vh'
              minH='300px'
              w='70%'
              display='flex'
              alignItems='center'
              justifyContent='space-around'
            >
              <Link href='/groups'>
                <Button
                  size='lg'
                  color='#fff'
                  fontSize='36px'
                  pt='46px'
                  pb='46px'
                  pr='30px'
                  pl='30px'
                  bgColor='#222'
                  variant='solid'
                  colorScheme='gray'
                  shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'
                >
                  単語帳一覧はコチラから!
                </Button>
              </Link>
            </Box>
            <Box
              minW='450px'
              g='30px'
              pr='20px'
              display='flex'
              alignItems='end'
              margin='0 0 0 auto'
            >
              <Box
                zIndex='400'
                w='100px'
                h='250px'
                pt='10px'
                rounded='md'
                bg='#FF6060'
                color='white'
                fontSize='48px'
                textAlign='center'
                shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'
              >
                <p>1</p>
              </Box>
              <Box
                zIndex='300'
                w='100px'
                h='200px'
                pt='10px'
                mt='50px'
                rounded='md'
                bg='#FFa070'
                color='white'
                fontSize='48px'
                textAlign='center'
                shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'
              >
                <p>7</p>
              </Box>
              <Box
                zIndex='200'
                w='100px'
                h='150px'
                pt='10px'
                mt='100px'
                rounded='md'
                bg='#10E070'
                color='white'
                fontSize='48px'
                textAlign='center'
                shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'
              >
                <p>16</p>
              </Box>
              <Box
                zIndex='400'
                w='100px'
                h='100px'
                pt='10px'
                mt='150px'
                rounded='md'
                bg='#00B0FF'
                color='white'
                fontSize='48px'
                textAlign='center'
                shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 10px 15px'
              >
                <p>35</p>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box
          h='10vh'
          minH='100px'
          w='90vw'
          minW='1500px'
          m='0 auto'
          roundedTopRight='10px'
          roundedTopLeft='10px'
          bg='#fffccc'
        ></Box>
      </Box>
    </>
  );
}
