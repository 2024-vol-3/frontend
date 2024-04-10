"use client";
import {Box, Button, Card, CardBody, CardHeader, Indicator, Link, Text, useBreakpointValue, Center, Flex} from "@yamada-ui/react";

type GroupCardProps = {
  name: string;
  description: string;
  d: number;
};
export default function GroupCard(props: GroupCardProps) {
  const w = useBreakpointValue({
    base: "calc(25% - 20px)",
    xl: "calc(33.3333% - 20px)",
    lg: "calc(33.3333% - 20px)",
    md: "calc(50% - 20px)",
    sm: "calc(100% - 20px)",
  });

  return (
    <>
      <Card w={w} h='240px' bg='#fffeee' border='solid 1px #ddd'>
        <Flex>
          {/* 付箋が減る場合、1枚当たり-40pxで調整 xBlackTea */}
          <Box w='calc(100% - 155px)'>
            <CardHeader>
              <Text pt='12px' lineClamp={1} as='b' >
                {props.name}
              </Text>
            </CardHeader>
          </Box>
          <Box h='80px'>
            <Box display='flex' pr='auto' g='10px'>
              <Box zIndex='100' w='30px' h='85px' pt='5px' mt='5px' rounded='3px' bg='#FF6060' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
                <p>1</p>
              </Box>
              <Box zIndex='100' w='30px' h='70px' pt='5px' mt='20px' rounded='3px' bg='#FFa070' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
                <p>2</p>
              </Box>
              <Box zIndex='100' w='30px' h='55px' pt='5px' mt='35px' rounded='3px' bg='#10E070' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
                <p>8</p>
              </Box>
              <Box zIndex='100' w='30px' h='40px' pt='5px' mt='50px' rounded='3px' bg='#00B0FF' color='white' fontSize='20px' textAlign='center' shadow='rgba(0, 0, 0, 0.1) 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 5px 10px'>
                <p>29</p>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Card zIndex='50' h='200px' gap='20px' bg='#fffccc'>
          <CardBody gap='20px'>
            <Text lineClamp={2} pt='12px' color='#555'>{props.description}</Text>
            <Box w='full' display='flex' justifyContent='space-around' alignItems='center'>
              <Link href={`/categories/${props.d}/issues/1/edit`}>
                <Button bg='#fff' variant='solid'>編集</Button>
              </Link>
              <Indicator showZero={false} withBorder label={90} variant='solid'>
                <Link href={`/categories/${props.d}/solve`}>
                  <Button bg='#fff' variant='solid'>解く</Button>
                </Link>
              </Indicator>
            </Box>
          </CardBody>
        </Card>
      </Card>
    </>
  );
}
