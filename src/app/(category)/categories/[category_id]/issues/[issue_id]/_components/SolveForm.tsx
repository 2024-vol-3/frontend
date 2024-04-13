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
import { useParams } from "next/navigation";
import Link from "next/link";
import AnswerModal from "./AnswerModal";
import { useModal } from "../hooks/useModal";
import { testIssue } from "@/mock/data/mock_data";
// import { fetchIssueResponse } from "@/mock/interface/testInterface";

const SolveForm = () => {
  const { setIsOpen } = useModal();
  const params = useParams();
  const { category_id, issue_id } = params;

  const handleNext = (): void => {
    setIsOpen(true);
  };

  const issue = testIssue[0];

  return (
    <>
      <VStack>
        <Card>
          <CardHeader>
            <Heading size="md">{issue.issue_id}問目</Heading>
          </CardHeader>

          <CardBody>
            <Text>{issue.title}</Text>
          </CardBody>

          <Accordion variant="card" isToggle>
            <AccordionItem label="解説を表示">{issue.contents}</AccordionItem>
          </Accordion>
        </Card>

        <Flex justify="space-around" marginTop="20px">
          <Link
            href={
              issue_id === "1"
                ? "/categories"
                : `/categories/${category_id}/issues/${Number(issue_id) - 1}`
            }
          >
            <Button w="200px">
              {issue_id === "1" ? "カテゴリー一覧" : "前の問題"}
            </Button>
          </Link>
          <Button w="200px" onClick={handleNext}>
            次の問題
          </Button>
        </Flex>
      </VStack>

      <AnswerModal />
    </>
  );
};

export default SolveForm;
