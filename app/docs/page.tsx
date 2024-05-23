import { auth } from "@/auth";
import React from "react";

export default async function DocsPage() {
  const session = await auth();
  return (
    <>
      <div className="container mt-5">
        <p className="text-3xl">Font-size</p>
        <div className="border-2 border-slate-200 mt-5 p-4 rounded-lg bg-slate-100 shadow-lg">
          <ul className="space-y-4 divide-y divide-slate-300">
            <li className="text-xs">text-xs</li>
            <li className="text-sm">text-sm</li>
            <li className="text-base">text-base</li>
            <li className="text-lg">text-lg</li>
            <li className="text-2xl">text-2xl</li>
            <li className="text-3xl">text-3xl</li>
            <li className="text-9xl">text-9xl</li>
          </ul>
        </div>
      </div>
    </>
  );
}
