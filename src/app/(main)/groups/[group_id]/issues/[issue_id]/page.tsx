"use client";
import React from "react";
import { Box, Center, Text } from "@yamada-ui/react";
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
  const issue_length = testIssue.length;
  return (
    <>
      <SolveContextProvider>
        <Center>
          <Box w='calc(90% - 40px)'>
            <Text h='50px' m='50px 0 50px 0' fontSize='36px' fontWeight='bold'>
              {group.group_name}
            </Text>
            {issue && <SolveForm issue={issue} issue_length={issue_length} />}
          </Box>
        </Center>
      </SolveContextProvider>
    </>
  );
};

export default Page;
