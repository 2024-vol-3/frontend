"use client";
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
} from "@yamada-ui/react";

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
      <Card w={w} h='220px' gap='20px' bg='neutral.200'>
        <CardHeader>
          <Text isTruncated width='100%' as='b'>
            {props.name}
          </Text>
        </CardHeader>
        <CardBody gap='20px'>
          <Text lineClamp={3}>{props.description}</Text>
          <Box
            w='full'
            display='flex'
            justifyContent='space-around'
            alignItems='center'
          >
            <Link href={`/categories/${props.d}/issues/1/edit`}>
              <Button variant='outline'>編集</Button>
            </Link>
            <Indicator showZero={false} withBorder label={90} variant='solid'>
              <Link href={`/categories/${props.d}/solve`}>
                <Button variant='solid'>解く</Button>
              </Link>
            </Indicator>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
