import { TodoData } from "./types/types";
import TodoList from "./components/todolist";
import FormArea from "./components/formArea";
import { getAllTodo } from "./actions/postTodoAction";

export default async function Home() {
  async function getTodoAllData() {
    const response = await fetch("http://localhost:3000/api/post", {
      cache: "no-store",
    });

    const todoAllData: TodoData[] = await response.json();
    return todoAllData;
  }

  const todoAllData = await getAllTodo();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96">
        <FormArea />
        <TodoList todoAllData={todoAllData} />
      </div>
    </div>
  );
}
