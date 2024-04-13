"use client";
import StickyPaper from "@/app/(home)/groups/[group_id]/issues/[issue_id]/_components/stickyPaper";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Indicator,
  Link,
  Text,
  useBreakpointValue,
  Flex,
  CardFooter,
} from "@yamada-ui/react";

type GroupCardProps = {
  name: string;
  description: string;
  group_id: number;
  paper_num: number;
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
              <Text pt='12px' lineClamp={1} as='b'>
                {props.name}
              </Text>
            </CardHeader>
          </Box>
          <StickyPaper paper_num={props.paper_num} />
        </Flex>
        <Card zIndex='50' h='200px' gap='20px' bg='#fffccc'>
          <CardBody gap='20px'>
            <Text lineClamp={2} pt='12px' color='#555'>
              {props.description}
            </Text>
          </CardBody>
          <CardFooter
            w='full'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Link href={`/categories/${props.group_id}`}>
              <Button bg='#fff' variant='solid'>
                一覧
              </Button>
            </Link>
            <Link href={`/categories/${props.group_id}/issues/1`}>
              <Button bg='#fff' variant='solid'>
                解く
              </Button>
            </Link>
            {/* </Indicator> */}
          </CardFooter>
        </Card>
      </Card>
    </>
  );
}
