import GroupCard from '@/component/groupCard'
import { Avatar, Box, Center, Link, Text } from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import PageTitle from '../../../component/pageTitle'

const page = () => {
    return (
        <>
        <PageTitle title="保存済みのグループカード一覧 (NaN件)" />
        <Box display="flex" flexWrap="wrap" gap="20px" pl="20px">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
        </Box>

        <Link href="/categories/create">
            <Avatar bg="sky.300" size="lg" style={{position: "fixed", bottom: "3vh", right: "3vw", zIndex: 100, cursor: "pointer"}} icon={<FontAwesomeIcon icon={faPlus} />} />
        </Link>
        </>
    )
}

export default page