"use client";
import React from "react";
import IssueCard from "./_components/IssueCard";
import { Avatar, Box, Button, Link, Text } from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FilterSelect from "./_components/FilterSelect";
import { testGroup, testIssue } from "@/mock/data/mock_data";
import { fetchIssueResponse } from "@/mock/interface/testInterface";
import { useParams } from "next/navigation";

const Page = () => {
  const { group_id } = useParams();

  const groupName = testGroup[0];
  return (
    <>
      <Box m='auto' w='90%'>
        <Box display='flex' alignItems='center'>
          <Text h='50px' m='50px 0 50px 20px' fontSize='36px' fontWeight='bold'>
            {groupName.group_name}
          </Text>
          <FilterSelect />
        </Box>
        <Box display='flex' flexWrap='wrap' gap='20px' pl='20px' pb='20px'>
          {testIssue.map((data: fetchIssueResponse) => (
            <IssueCard
              key={data.issue_id}
              name={data.title}
              description={data.contents}
              paper_num={data.paper_num}
            />
          ))}
        </Box>
      </Box>

      <Link href={`/groups/${group_id}/issues/create`}>
        <Button
          bg='#222'
          color='#fff'
          fontSize='20px'
          p='30px'
          style={{
            position: "fixed",
            bottom: "3vh",
            right: "3vw",
            zIndex: 100,
            cursor: "pointer",
          }}
        >
          問題作成
        </Button>
      </Link>
    </>
  );
};

export default Page;
