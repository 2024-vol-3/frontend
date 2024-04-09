import React from "react";
import { IssueForm } from "@/app/(category)/categories/[category_id]/issues/[issue_id]/edit/_components/IssueForm";
import { Box, Center } from "@yamada-ui/react";
import PageTitle from "@/app/_components/pageTitle";

const page = () => {
  return (
    <>
      <Center>
        <Box w="1000px" m="20px">
          <PageTitle title="問題編集" />
          <IssueForm />
        </Box>
      </Center>
    </>
  );
};

export default page;
