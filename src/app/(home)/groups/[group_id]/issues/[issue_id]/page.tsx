"use client";
import React from "react";
import { Box, Center } from "@yamada-ui/react";
import PageTitle from "@/app/_components/pageTitle";
import SolveForm from "./_components/SolveForm";
import { useParams } from "next/navigation";
import { SolveContextProvider } from "./provider/SolveProvider";
import { testIssue, testGroup } from "@/mock/data/mock_data";
import { fetchIssueResponse } from "@/api/interface/issueInterface";

// params:ブラウザのパスがそのままとれる

const Page = () => {
  const params = useParams();
  const { category_id, issue_id } = params;
  const group_id = Number(category_id) - 1;
  const group = testGroup[group_id];
  const data_id = Number(issue_id) - 1;
  const issue = testIssue[data_id];
  return (
    <>
      <SolveContextProvider>
        <Center>
          <Box w='1000px' m='20px'>
            <PageTitle title={`${group.group_name}`} />
            {issue && <SolveForm issue={issue} />}
          </Box>
        </Center>
      </SolveContextProvider>
    </>
  );
};

export default Page;
