import React from "react";
import { Box, Center } from "@yamada-ui/react";
import PageTitle from "@/app/_components/pageTitle";
import SolveForm from "./_components/SolveForm";

const page = () => {
return (
    <>
    <Center>
        <Box w="1000px" m="20px">
        <PageTitle title="カテゴリー名 (NaN / NaN 問目)" />
        <SolveForm />
        </Box>
    </Center>
    </>
);
};

export default page;
