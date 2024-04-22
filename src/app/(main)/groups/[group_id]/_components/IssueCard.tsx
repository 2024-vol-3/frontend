"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Text,
  useBreakpointValue,
} from "@yamada-ui/react";
import StickyPaper from "../issues/[issue_id]/_components/stickyPaper";

type IssueCardProps = {
  paper_num: number;
  name: string;
  description: string;
};
export default function IssueCard(props: IssueCardProps) {
  const w = useBreakpointValue({
    base: "calc(25% - 20px)",
    xl: "calc(33.3333% - 20px)",
    lg: "calc(33.3333% - 20px)",
    md: "calc(50% - 20px)",
    sm: "calc(100% - 20px)",
  });

  return (
    <>
      <Card w={w} h='300px' bg='#fffeee' border='solid 1px #ddd'>
        <CardHeader h='100px'>
          <Text mt='-12px' isTruncated width='100%' fontSize='20px' as='b'>
            {props.name}
          </Text>
          <StickyPaper paper_num={props.paper_num} />
        </CardHeader>

        <Card zIndex='50' h='200px' bg='#fffccc'>
          <CardBody gap='20px'>
            <Text pt='12px' color='#555' textOverflow='ellipsis' lineClamp={4}>
              解答：{props.description}
            </Text>
          </CardBody>
          <CardFooter justifyContent='flex-end'>
            <Link href={`/groups/1/issues/1/edit`}>
              <Button p='30px' bg='#fff' fontSize='20px' variant='solid'>
                編集
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Card>
    </>
  );
}
