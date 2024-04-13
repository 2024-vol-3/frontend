"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  Heading,
  Text,
  Textarea,
  VStack,
} from "@yamada-ui/react";
import React from "react";
import Link from "next/link";
import AnswerModal from "./AnswerModal";
import { useModal } from "../hooks/useModal";
import { fetchIssueResponse } from "@/api/interface/issueInterface";

type SolveFormProps = {
  issue: fetchIssueResponse;
};
const SolveForm = (props: SolveFormProps) => {
  const { issue } = props;
  const { setIsOpen } = useModal();

  const handleNext = (): void => {
    setIsOpen(true);
  };

  return (
    <>
      <VStack>
        <Card>
          <CardHeader>
            <Heading size='md'>{issue.issue_id}問目</Heading>
          </CardHeader>

          <CardBody>
            <Text>{issue.title}</Text>
          </CardBody>

          <Accordion variant='card' isToggle>
            <AccordionItem label='解説を表示'>{issue.contents}</AccordionItem>
          </Accordion>
        </Card>

        <Flex justify='space-around' marginTop='20px'>
          <Link
            href={
              issue.issue_id.toString() === "1"
                ? "/groups"
                : `/groups/${issue.group_id}/issues/${
                    Number(issue.issue_id) - 1
                  }`
            }
          >
            <Button w='200px'>
              {issue.issue_id.toString() === "1"
                ? "カテゴリー一覧"
                : "前の問題"}
            </Button>
          </Link>
          <Button w='200px' onClick={handleNext}>
            次の問題
          </Button>
        </Flex>
      </VStack>

      <AnswerModal />
    </>
  );
};

export default SolveForm;
