"use client"
import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Flex, FormControl, Heading, Text, Textarea, VStack } from '@yamada-ui/react'
import React from 'react'
import { SolveType } from './solveType';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AnswerModal from './AnswerModal';
import { useModal } from '../hooks/useModal';

const SolveForm = () => {

    const { setIsOpen } = useModal();
    const params = useParams();
    const { category_id, issue_id } = params;

    const handleNext = () : void => {
        setIsOpen(true);
    }

    return (
        <>
        <VStack>

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

            <Flex justify="space-around" marginTop="20px">
                <Link href={issue_id === "1" ? "/categories" : `/categories/${category_id}/issues/${Number(issue_id) - 1}`}>
                    <Button w="200px">
                    {issue_id === "1" ? "カテゴリー一覧" : "前の問題"}
                    </Button>
                </Link>
                <Button w="200px" onClick={handleNext}>
                    回答を送信
                </Button>
            </Flex>
        </VStack>

        <AnswerModal />
        </>
    )
}

export default SolveForm