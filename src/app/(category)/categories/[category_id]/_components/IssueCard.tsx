"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Indicator,
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
      <Card w={w} h="220px" gap="20px" bg="neutral.200">
        <CardHeader>
          <Text
            fontSize="lg"
            isTruncated
            width="100%"
            as="b"
            textAlign="center"
          >
            {props.name}
          </Text>
        </CardHeader>
        <CardBody gap="20px">
          <Text textOverflow="ellipsis" lineClamp={4}>
            解説：{props.description}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}
