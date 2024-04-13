"use client"
import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Flex, FormControl, Heading, Text, Textarea, VStack } from '@yamada-ui/react'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { SolveType } from './solveType';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AnswerModal from './AnswerModal';
import { useModal } from '../hooks/useModal';

const SolveForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<SolveType>();
    const { isOpen, setIsOpen } = useModal();
    const params = useParams();
    const { category_id, issue_id } = params;

    const onSubmit: SubmitHandler<SolveType> = (data) => {
        setIsOpen(true);
    };

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

                <FormControl w="95%" m="30px auto" isInvalid={!!errors.answer} errorMessage={errors.answer?.message}>
                    <Textarea h="150px" placeholder="回答を入力してください" {...register("answer", {required: {value: true, message: "回答を入力してください"}})}/>
                </FormControl>

                <Accordion variant="card" isToggle>
                    <AccordionItem label="解説を表示">
                        答えがここに表示されます。答えがここに表示されます。答えがここに表示されます。答えがここに表示されます。
                    </AccordionItem>
                </Accordion>
            </Card>

            <Flex justify="space-around" marginTop="20px">
                <Link href={issue_id === "1" ? "/categories" : `/categories/${category_id}/${Number(issue_id) - 1}`}>
                    <Button w="200px">
                    {issue_id === "1" ? "カテゴリー一覧" : "前の問題"}
                    </Button>
                </Link>
                <Button w="200px" type="submit">
                    回答を送信
                </Button>
            </Flex>
        </VStack>

        <AnswerModal />
        </>
    )
}

export default SolveForm