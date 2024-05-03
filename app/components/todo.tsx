import { CircleIcon } from "@/components/ui/CircleIcon";
import { TrashIcon } from "../../components/ui/trashIcon";
import React from "react";
import { Button } from "../../components/ui/button";
import { TodoData } from "@/app/types/types";
import styled from "styled-components";
import { Checkbox } from "@/components/ui/checkbox";
import  Link  from "next/link";

interface TodoDataProps {
  todoData: TodoData;
}

const Todo = ({ todoData }: TodoDataProps) => {
  const { id, username, content, createdAt } = todoData;
  return (
    <div className="bg-white p-4 flex items-center ">
      <div className="mr-5 font-bold">{content}</div>
      <Checkbox />
      <a  className="ml-3" href="">
        <TrashIcon />
      </a>
      <Link href={`/todo/${id}`} className="text-blue-500">
          Read More
      </Link>
    </div>
  );
};

export default Todo;
