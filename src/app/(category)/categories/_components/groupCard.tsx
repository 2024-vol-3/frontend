"use client";
import StickyPaper from "@/app/(category)/categories/_components/stickyPaper";
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
          <StickyPaper/>
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
