import React from "react";
import { TodoData } from "../types/types";
import Todo from "@/app/components/todo";

interface TodoAllDataProps {
  todoAllData: TodoData[];
}

const TodoList = ({ todoAllData }: TodoAllDataProps) => {
  return (
    <div>
      {todoAllData.map((todoData: TodoData) => (
        <Todo key={todoData.id} todoData={todoData} />
      ))}
    </div>
  );
};

export default TodoList;
