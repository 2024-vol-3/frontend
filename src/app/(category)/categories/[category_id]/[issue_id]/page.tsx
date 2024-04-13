"use client"
import React from "react";
import { Box, Center } from "@yamada-ui/react";
import PageTitle from "@/app/_components/pageTitle";
import SolveForm from "./_components/SolveForm";
import { useParams } from "next/navigation";
import { SolveContextProvider } from "./provider/SolveProvider";

const Page = () => {

    const params = useParams();
    const { issue_id } = params;

return (
    <>
    <SolveContextProvider>
        <Center>
            <Box w="1000px" m="20px">
            <PageTitle title={`カテゴリー名 (NaN / ${issue_id}問目)`} />
            <SolveForm />
            </Box>
        </Center>
    </SolveContextProvider>
    </>
);
};

export default Page;
