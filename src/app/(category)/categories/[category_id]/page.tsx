import React from "react";
import IssueCard from "./_components/IssueCard";
import { Avatar, Box, Center, Link, Text } from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import FilterSelect from "./_components/FilterSelect";

const data = [
  {
    id: 1,
    name: "test",
    description:
      "ああああああああああああああああああああああああああああああああああああああああああああああああ",
  },
  {
    id: 2,
    name: "test",
    description: "test",
  },
  {
    id: 3,
    name: "test",
    description: "test",
  },
  {
    id: 4,
    name: "test",
    description: "test",
  },
  {
    id: 5,
    name: "test",
    description: "test",
  },
];

const page = () => {
  return (
    <>
      <Box m="auto" w="1200px">
        <Text fontSize="lg" fontWeight="bold" m="20px">
          カテゴリー名
        </Text>
        <FilterSelect />
        <Center>
          <Box display="flex" p="20px 0" flexWrap="wrap" gap="20px" pl="20px">
            {data.map((d) => (
              <IssueCard key={d.id} name={d.name} description={d.description} />
            ))}
          </Box>
        </Center>
      </Box>

      <Link href="/categories/create">
        <Avatar
          bg="sky.300"
          size="lg"
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
