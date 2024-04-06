"use client";
import { Box, Button, Card, CardBody, CardHeader, Indicator, Text, useBreakpointValue } from "@yamada-ui/react";

export default function GroupCard() {

    const w = useBreakpointValue({
        base: "calc(25% - 20px)",
        xl: "calc(33.3333% - 20px)",
        lg: "calc(33.3333% - 20px)",
        md: "calc(50% - 20px)",
        sm: "calc(100% - 20px)",
    })

    return (
        <>
        <Card w={w} h="220px" gap="20px" bg="neutral.200">
            <CardHeader>
                <Text isTruncated width="100%" as="b">グループ名グループ名グループ名グループ名グループ名グループ名グループ名グループ名グループ名グループ名</Text>
            </CardHeader>
            <CardBody gap="20px">
                <Text lineClamp={3}>説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明</Text>
                <Box w="full" display="flex" justifyContent="space-around" alignItems="center">
                    <Button variant="outline">編集</Button>
                    <Indicator showZero={false} withBorder label={90} variant="solid">
                        <Button variant="solid">解く</Button>
                    </Indicator>
                </Box>
            </CardBody>
        </Card>
        </>
    );
}