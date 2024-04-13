import React from "react";
import IssueCard from "./_components/IssueCard";
import { Avatar, Box, Link, Text } from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FilterSelect from "./_components/FilterSelect";
import { testGroup, testIssue } from "@/mock/data/mock_data";
import { fetchIssueResponse } from "@/mock/interface/testInterface";

const page = () => {
  const groupName = testGroup[0];
  return (
    <>
      <Box m='auto' w='90%'>
        <Box display='flex' mb='20px'>
          <Text fontSize='lg' fontWeight='bold' m='20px'>
            {groupName.group_name}
          </Text>
          <FilterSelect />
        </Box>
        <Box display='flex' p='20px 0' flexWrap='wrap' gap='20px' pl='20px'>
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

      <Link href='/groups/create'>
        <Avatar
          bg='sky.300'
          size='lg'
          style={{
            position: "fixed",
            bottom: "3vh",
            right: "3vw",
            zIndex: 100,
            cursor: "pointer",
          }}
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
      </Link>
    </>
  );
};

export default page;
