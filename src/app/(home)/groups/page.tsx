"use client";
import GroupCard from "@/app/(home)/groups/_components/groupCard";
import { Avatar, Box, Button, Center, Link, Text } from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PageTitle from "../../_components/pageTitle";
import { testGroup } from "@/mock/data/mock_data";
import { fetchGroupResponse } from "@/mock/interface/testInterface";
import { useParams } from "next/navigation";
const Page = () => {
  const { group_id } = useParams();
  return (
    <>
      <Box m='auto' w='90%'>
        <Box>
          <Text h='50px' m='50px 0 50px 20px' fontSize='36px' fontWeight='bold'>
            グループカード一覧
          </Text>
        </Box>
        <Box display='flex' flexWrap='wrap' gap='20px' pl='20px' pb='20px'>
          {testGroup.map((data: fetchGroupResponse) => (
            <GroupCard
              key={data.group_id}
              group_id={data.group_id}
              name={data.group_name}
              description={data.group_description}
              issue_count={data.issue_count}
            />
          ))}
        </Box>
      </Box>

      <Link href='/groups/create'>
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
          グループ作成
        </Button>
      </Link>
    </>
  );
};

export default Page;
