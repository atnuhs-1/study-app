import { TodoLayout } from "@/components/todo-layout";
import { Button } from "@/components/ui/button";
import { TodoData } from "./types/types";
import TodoList from "./components/todolist";
import FormArea from "./components/formArea";


export default async function Home() {
  async function getTodoAllData() {
    const response = await fetch("http://localhost:3000/api/post", {
      cache: "no-store",
    });

    const todoAllData: TodoData[] = await response.json();
    return todoAllData;
  }

  const todoAllData = await getTodoAllData();

  return (
    <div>
      <FormArea />
      <TodoList todoAllData={todoAllData}/>
    </div>
  );
}
