import React from "react";
import fs from "fs";
import path from "path";
import MarkdownSection from "./components/markdown-section";


const todos = [
  { id: 0, text: "a" },
  { id: 0, text: "a" },
  { id: 0, text: "a" },
  { id: 0, text: "a" },
];

const items = ["item1", "item2", "item3", "item4", "item5", "item6"];

const getMdData = async () => {
  console.log(process.cwd());
  const fullPath = path.join(process.cwd(), "/public/mds/test.md");
  console.log(fullPath);
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

      <main className="flex h-screen items-center justify-center">
        <div className="w-96">
          <h1 className="sr-only">Todos</h1>
          <div className="text-right"></div>
          {/* <AddForm /> */}
          <button className="my-2 w-full border-red-500">add</button>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="mb-2.5 flex items-center justify-between rounded border bg-slate-100 p-2.5 dark:bg-slate-900"
              >
                <span className="mr-4">{todo.text}</span>
                {/* <DeleteForm id={todo.id} todo={todo.text} /> */}
                <button>delete</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div>
        <h1>grid grid-cols-3</h1>
        <div className="p-4 grid grid-cols-4">
          {items.map((item) => (
            <div key={item}>{item}</div>
          ))}
          <div className="grid-cols-subgrid">item8</div>
        </div>
      </div>
    </>
  );
};

export default TestPage;
