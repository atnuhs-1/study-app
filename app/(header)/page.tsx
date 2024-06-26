import { auth } from "@/auth";
import { getAllTodo } from "../actions/postTodoAction";
import FormArea from "../components/formArea";
import TodoList from "../components/todolist";

export default async function Home() {
  // async function getTodoAllData() {
  //   const response = await fetch("http://localhost:3000/api/post", {
  //     cache: "no-store",
  //   });

  //   const todoAllData: TodoData[] = await response.json();
  //   return todoAllData;
  // }

  const todoAllData = await getAllTodo();
  const session = await auth();
  // console.log(session);



  return (
    <>
      {/* <Image src="/amamori1.jpeg" width={2048} height={500} alt="" className="flex justify-center items-center"/> */}
      <div className="flex h-screen justify-center">
        <div className="w-96">
          <FormArea />
          {/* <TodoList todoAllData={todoAllData} /> */}
        </div>
      </div>
    </>
  );
}
