import { CalendarIcon} from "@/components/ui/calenderIcon";
import Link from "next/link";
import React from 'react'


const Header = () => {
  return (
    <header className="flex items-center h-14 px-4 border-b">
        <Link className="flex items-center gap-2" href="#">
          <CalendarIcon className="h-6 w-6" />
          <span className="font-semibold">Todos</span>
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tasks
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Completed
          </Link>
        </nav>
      </header>
  )
}

export default Header