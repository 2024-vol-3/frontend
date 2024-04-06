import GroupCard from '@/component/groupCard'
import { Box, Center, Text } from '@yamada-ui/react'
import React from 'react'

const page = () => {
    return (
        <>
        <Box w="full" h="100px" display="flex" alignItems="center" pl="20px">
            <Text fontSize="xl" as="b">保存済みのグループカード一覧 (NaN件)</Text>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="20px" p="20px 0 0 20px">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
        </Box>
        </>
    )
}

export default page