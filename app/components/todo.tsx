import { CircleIcon } from "@/components/ui/CircleIcon";
import { TrashIcon } from "../../components/ui/trashIcon";
import React from "react";
import { Button } from "../../components/ui/button";
import { TodoData } from "@/app/types/types";
import styled from "styled-components";
import { Checkbox } from "@/components/ui/checkbox";
import  Link  from "next/link";
import { deleteTodo } from "../actions/postTodoAction";

interface TodoDataProps {
  todoData: TodoData;
}

const Todo = ({ todoData }: TodoDataProps) => {
  const { id, username, content, createdAt } = todoData;
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <div className="mb-2.5 flex items-center justify-between rounded border bg-slate-100 p-2.5 dark:bg-slate-900">
      <div className="mr-5">{content}</div>
      <form action={deleteTodoWithId}>
        <button className="ml-3">
          <TrashIcon />
        </button>
      </form>

      {/* <Link href={`/todo/${id}`} className="text-blue-500">
          Read More
      </Link> */}
    </div>
  );
};

export default Todo;
