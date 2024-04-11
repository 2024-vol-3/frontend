"use client"
import { Accordion, AccordionItem, Box, Button, Card, CardBody, CardHeader, Center, Flex, Heading, Text, VStack } from '@yamada-ui/react'
import React from 'react'
import { useForm, SubmitHandler, Controller, FieldErrors, } from "react-hook-form";
import { SolveType } from './solveType';

const SolveForm = () => {

    const { register, control, handleSubmit, formState: { errors } } = useForm<SolveType>();

    const onSubmit: SubmitHandler<SolveType> = (data) =>
        console.log("submit:", data);

    return (
        <>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)}>

        <Card>
            <CardHeader>
                <Heading size="md">問題名</Heading>
            </CardHeader>

            <CardBody>
                <Text>
                    問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示問題文を表示
                </Text>
            </CardBody>

            <Accordion variant="card" isToggle>
                <AccordionItem label="解説を表示">
                    答えがここに表示されます。答えがここに表示されます。答えがここに表示されます。答えがここに表示されます。
                </AccordionItem>
            </Accordion>
        </Card>

            <Flex justify="space-between" marginTop="20px">
                <Button w="200px" type="submit">
                戻る
                </Button>

                <Button w="200px" type="submit">
                次の問題
                </Button>
            </Flex>
        </VStack>
        </>
    )
}

export default SolveForm