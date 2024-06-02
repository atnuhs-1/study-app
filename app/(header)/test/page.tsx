import React from "react";
import fs from "fs";
import path from "path";
import MarkdownSection from "./components/markdown-section";
import Flask from "@/app/components/flask";
import { SheetSide } from "./components/sheet-side";

const todos = [
  { id: 0, text: "a" },
  { id: 0, text: "a" },
  { id: 0, text: "a" },
  { id: 0, text: "a" },
];

const items = ["item1", "item2", "item3", "item4", "item5", "item6"];

const getMdData = async () => {
  const fullPath = path.join(process.cwd(), "/public/mds/test.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
};

const TestPage = async () => {
  const data = await getMdData();

  return (
    <>
      <div className="container w-2/3 justify-center flex">
        <MarkdownSection data={data} />
      </div>
      <SheetSide />


    </>
  );
};

export default TestPage;
