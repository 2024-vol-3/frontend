"use client";
import React from "react";
import { Box, Center } from "@yamada-ui/react";
import PageTitle from "@/app/_components/pageTitle";
import SolveForm from "./_components/SolveForm";
// import { useParams } from "next/navigation";
import { SolveContextProvider } from "./provider/SolveProvider";
import { testGroup } from "@/mock/data/mock_data";

const Page = () => {
  const group = testGroup[1];

  return (
    <>
      <SolveContextProvider>
        <Center>
          <Box w="1000px" m="20px">
            <PageTitle title={`${group.group_name}`} />
            <SolveForm />
          </Box>
        </Center>
      </SolveContextProvider>
    </>
  );
};

export default Page;
