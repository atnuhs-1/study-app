import React from "react";
<<<<<<< HEAD:app/(header)/test/page.tsx
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeBlock from "@/components/CodeBlock";

=======
>>>>>>> parent of b1e41fa (add md, docs, example/nino):app/test/page.tsx
const todos = [
  { id: 0, text: "a" },
  { id: 0, text: "a" },
  { id: 0, text: "a" },
  { id: 0, text: "a" },
];

const items = ["item1", "item2", "item3", "item4", "item5", "item6"];

const TestPage = () => {
  return (
    <>
<<<<<<< HEAD:app/(header)/test/page.tsx
<<<<<<< HEAD:app/(header)/test/page.tsx
      <div className="container w-3/5 justify-start flex">
        <MarkDownSection data={data}/>
=======
      <div className="container">
        a
        <ReactMarkdown
          children={data}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={dark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
        {/* <ReactMarkdown source={data} renderers={{ code: CodeBlock }} /> */}
        {/* <SyntaxHighlighter language="javascript" style={vs2015}>
        {data}
      </SyntaxHighlighter> */}
>>>>>>> parent of 30a301c (broken):app/test/page.tsx
      </div>

=======
>>>>>>> parent of b1e41fa (add md, docs, example/nino):app/test/page.tsx
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
