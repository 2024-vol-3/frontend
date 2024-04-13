import GroupCard from "@/app/(home)/groups/_components/groupCard";
import { Avatar, Box, Center, Link, Text } from "@yamada-ui/react";
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
        <PageTitle title='グループカード一覧' />
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

      <Link href={`/groups/${group_id}/issues/create`}>
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
