import GroupCard from "@/app/(category)/categories/_components/groupCard";
import { Avatar, Box, Center, Link, Text } from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PageTitle from "../../_components/pageTitle";

const page = () => {
  const data = [
    {
      id: 1,
      name: "グループ名",
      description: "説明説明説明説明説明説明説明説明説明説明説明説明",
    },
    {
      id: 2,
      name: "グループ名",
      description: "説明説明説明説明説明説明説明説明説明説明説明",
    },
    {
      id: 3,
      name: "グループ名",
      description: "説明説明説明説明説明説明説明説明説明説明説明",
    },
    {
      id: 4,
      name: "グループ名",
      description: "説明説明説明説明説明説明説明説明説明説明説明",
    },
    {
      id: 5,
      name: "グループ名",
      description: "説明説明説明説明説明説明説明説明説明説明説明",
    },
    {
      id: 6,
      name: "グループ名",
      description: "説明説明説明説明説明説明説明説明説明説明説明",
    },
  ];
  return (
    <>
      <PageTitle title='保存済みのグループカード一覧 (NaN件)' />
      <Box display='flex' flexWrap='wrap' gap='20px' pl='20px'>
        {data.map((d) => (
          <GroupCard key={d.id} />
        ))}
      </Box>

      <Link href='/categories/create'>
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
