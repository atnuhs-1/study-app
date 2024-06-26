/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/96rkqv4catx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TodoData } from "@/app/types/types";
import Todo from "../app/components/todo";

interface TodoAllDataProps {
  todoAllData: TodoData[];
}

export function TodoLayout({ todoAllData }: TodoAllDataProps) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 flex flex-col">
        <div className="mx-auto max-w-6xl flex-1 flex flex-col gap-6 p-6 md:p-8 lg:p-10">
          <div className="flex gap-4 items-center">
            <Input
              className="rounded-lg border-gray-200 flex-1 shadow-sm h-12"
              placeholder="What needs to be done?"
              type="text"
            />
            <Button className="h-12">Add</Button>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden shadow sm:divide-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {todoAllData.map((todoData: TodoData) => (
                <Todo key={todoData.id} todoData={todoData} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center gap-2 h-14 border-t px-4">
        <p className="text-xs text-gray-500">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="ml-auto flex gap-2 text-xs">
          <Link className="hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
