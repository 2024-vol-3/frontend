"use client";
import { Box, Button, Link } from "@yamada-ui/react";

export default function Header() {
    return (
        <>
        <Box display="flex" justifyContent="space-between" alignItems="center" w="full" h="50px" p="0 20px" bg="neutral.900">
            <div style={{color: "#fff"}}>サイトロゴ(仮)</div>
            <Box display="flex" alignItems="center" gap="10px" h="100%">
                <Link h="65%" href="/categories/create">
                    <Button h="100%" bg="sky.300">作成</Button>
                </Link>
                <Button h="65%">ログイン</Button>
            </Box>
        </Box>
        </>
    );
}