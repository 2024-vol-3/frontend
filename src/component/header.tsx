"use client";
import { Box, Button } from "@yamada-ui/react";

export default function Header() {
    return (
        <>
        <Box display="flex" justifyContent="space-between" alignItems="center" w="full" h="50px" p="0 20px" bg="neutral.900">
            <div style={{color: "#fff"}}>サイトロゴ(仮)</div>
            <Button h="70%">ログイン</Button>
        </Box>
        </>
    );
}