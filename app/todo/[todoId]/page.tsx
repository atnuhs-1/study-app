import { TodoData } from '@/app/types/types';
import Link from 'next/link';
import React from 'react'

async function getDetailTodoData(id: number) {
    const response = await fetch(`http://localhost:3000/api/post/${id}`, {
      cache: "no-store",
    });
  
    const todoDetailData: TodoData = await response.json();
  
    return todoDetailData;
  }

const TodoDetailPage = async ({params}: {params: {todoId: number}}) => {
    // console.log("--------------")
    // console.log(params.todoId);
    const todoDetailData = await getDetailTodoData(params.todoId);
    const {id, username, content, createdAt } = todoDetailData;
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{content}</h1>
        <p className="text-gray-700">username: {username}</p>
        {/* <p className="text-gray-700">{createdAt}</p> */}
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{}</p>
      </div>

      <Link href={"/"} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">戻る</Link>
    </div>
  );
}

export default TodoDetailPage