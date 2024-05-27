import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Button className="fixed top-1 left-1" variant="outline" asChild>
        <Link href="/">Home</Link>
      </Button>
      {children}
    </div>
  );
}
