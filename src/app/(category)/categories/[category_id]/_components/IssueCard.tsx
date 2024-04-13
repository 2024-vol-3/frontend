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

type IssueCardProps = {
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
      <Card w={w} h='240px' bg='#fffeee' border='solid 1px #ddd'>
        <CardHeader h='100px'>
          <Text mt='-12px' isTruncated width='100%' as='b' textAlign='center'>
            {props.name}
          </Text>
        </CardHeader>
        <Card zIndex='50' h='200px' gap='20px' bg='#fffccc'>
          <CardBody gap='20px'>
            <Text pt='12px' color='#555' textOverflow='ellipsis' lineClamp={4}>
              解説：{props.description}
            </Text>
          </CardBody>
          <CardFooter justifyContent='flex-end'>
            <Link href={`/categories/1/issues/1/edit`}>
              <Button bg='#fff'>編集</Button>
            </Link>
          </CardFooter>
        </Card>
      </Card>
    </>
  );
}
