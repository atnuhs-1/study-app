"use client";
import { SheetSide } from "@/app/(header)/test/components/sheet-side";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <div>
        <nav className="space-x-5 flex items-start">
          <SheetSide />

          <Link href="/flask">
            <Image src="/play.png" alt="a" width="20" height="20" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
