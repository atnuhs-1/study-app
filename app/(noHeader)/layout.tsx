import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Button className="fixed top-1 left-1" asChild>
        <Link href="/">ホーム</Link>
      </Button>
      {children}
    </>
  );
}
