"use client";
import React from "react";
import { Box, Center } from "@yamada-ui/react";
import PageTitle from "@/app/_components/pageTitle";
import SolveForm from "./_components/SolveForm";
import { useParams } from "next/navigation";
import { SolveContextProvider } from "./provider/SolveProvider";
import { testIssue, testGroup } from "@/mock/data/mock_data";

// params:ブラウザのパスがそのままとれる

const Page = () => {
  const params = useParams();
  const { group_id, issue_id } = params;
  const dummy_group_id = Number(group_id) - 1;
  const group = testGroup[dummy_group_id];
  const dummy_issue_id = Number(issue_id) - 1;
  const issue = testIssue[dummy_issue_id];
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
