"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  Text,
  Box,
} from "@yamada-ui/react";
import React from "react";
import Link from "next/link";
import AnswerModal from "./AnswerModal";
import { useModal } from "../hooks/useModal";
import { fetchIssueResponse } from "@/api/interface/issueInterface";

type SolveFormProps = {
  issue: fetchIssueResponse;
  issue_length: number;
};
const SolveForm = (props: SolveFormProps) => {
  const { issue, issue_length } = props;
  const { setIsOpen } = useModal();

  const handleNext = (): void => {
    setIsOpen(true);
  };

  return (
    <>
      <Box m='auto' w='100%'>
        <Card border='solid 1px #ddd'>
          <CardHeader p='40px 0 40px 20px' bg='#fffeee'>
            <Text fontSize='20px' as='b'>
              {issue.issue_id}問目
            </Text>
          </CardHeader>

          <CardBody p='40px 0 40px 20px' bg='#fffccc'>
            <Text lineClamp={2}>{issue.title}</Text>
          </CardBody>

          <CardFooter bg='#fffccc'>
            <Accordion variant='card' isToggle>
              <AccordionItem bg='#fefefe' label='解答を表示'>
                {issue.contents}
              </AccordionItem>
            </Accordion>
          </CardFooter>
          <Flex bg='#fffccc' justify='space-between' p='15px'>
            {issue.issue_id === 1 ? (
              <Link href='/groups'>
                <Button bg='#fefefe' fontSize='20px' p='30px'>
                  グループ一覧へ
                </Button>
              </Link>
            ) : (
              <Link
                href={`/groups/${issue.group_id}/issues/${issue.issue_id - 1}`}
              >
                <Button bg='#fefefe' fontSize='20px' p='30px'>
                  前の問題
                </Button>
              </Link>
            )}

            {issue.issue_id === issue_length ? (
              <Link href={`/groups/${issue.group_id}/`}>
                <Button bg='#fefefe' fontSize='20px' p='30px'>
                  問題一覧へ
                </Button>
              </Link>
            ) : (
              <Button
                bg='#fefefe'
                fontSize='20px'
                p='30px'
                onClick={handleNext}
              >
                次の問題
              </Button>
            )}
          </Flex>
        </Card>
      </Box>

      <AnswerModal />
    </>
  );
};

export default SolveForm;
