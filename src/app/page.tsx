import { Button, Link } from "@yamada-ui/react";

export default function Home() {
  return (
    <>
    <div>トップページ(仮)</div>
    <Link href="/category">
      <Button variant="solid">単語帳一覧はコチラ</Button>
    </Link>
    </>
  );
}
