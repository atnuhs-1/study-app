import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { CalendarIcon} from "@/components/ui/calenderIcon";
import Link from "next/link";
import React from 'react'
import UserButton from "./UserButton";
import { Button } from "@/components/ui/button";


const Header = () => {
  return (
    <header className="flex items-center h-14 px-4 border-b">
        <Link className="flex items-center gap-2" href="/">
          <CalendarIcon className="h-6 w-6" />
          <span className="font-semibold">Todos</span>
        </Link>
        <nav className="ml-auto flex gap-4 items-center pr-10">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/test">
            TestPage
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/docs">
            Docs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Completed
          </Link>
          <UserButton />
        </nav>
      </header>
  )
}

export default Header