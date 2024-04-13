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
import { TodayIssueCount } from "./TodayIssueCount";

type GroupCardProps = {
  name: string;
  description: string;
  group_id: number;
  issue_count: number;
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
      <Card w={w} h='300px' bg='#fffeee' border='solid 1px #ddd'>
        <CardHeader h='100px' display='flex' justifyContent='space-between'>
          <Text mt='-12px' isTruncated as='b' fontSize='20px'>
            {props.name}
          </Text>
          {/* <TodayIssueCount issue_count={props.issue_count} /> */}
        </CardHeader>

        <Card zIndex='50' h='200px' bg='#fffccc'>
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
            <Link href={`/groups/${props.group_id}`}>
              <Button p='30px' bg='#fff' fontSize='20px' variant='solid'>
                一覧
              </Button>
            </Link>
            <Link href={`/groups/${props.group_id}/issues/1`}>
              <Indicator p='4px 10px 4px 10px' label={props.issue_count} ping>
                <Button p='30px' bg='#fff' fontSize='20px' variant='solid'>
                  解く
                </Button>
              </Indicator>
            </Link>
            {/* </Indicator> */}
          </CardFooter>
        </Card>
      </Card>
    </>
  );
}
