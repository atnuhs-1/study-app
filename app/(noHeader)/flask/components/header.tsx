
import UserButton from "@/app/ui/UserButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "./nav";

export default function Header() {

  
  return (
    <header className="flex justify-between items-center h-14 px-4 border-b">
      <div>
        <Nav />
      </div>

      <div className="border-4 w-96 h-10 rounded-full"></div>

      <nav className="flex gap-4 items-center">
        <UserButton />
      </nav>
    </header>
  );
}
