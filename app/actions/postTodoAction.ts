"use server";

import { z } from "zod";
import { formSchema } from "../components/formArea";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export const getAllTodo = async () => {
  // これは fetch(..., {cache: 'no-store'}) と同じです
  noStore();

  const allTodoPosts = await prisma.post.findMany();

  // 返し方
  // const nextresponse = await NextResponse.json(allTodoPosts);
  // console.log("-----Next.Response.jsonで返すと---");
  // console.log(nextresponse);
  // console.log("---そのまま返すと---");
  // console.log(allTodoPosts);

  return allTodoPosts;
};

export const postTodo = async ({ content }: z.infer<typeof formSchema>) => {
  const username = "test";


  await prisma.post.create({
    data: {
      username,
      content,
    },
  });

  revalidatePath("/");

  redirect("/");
};

export const deleteTodo = async (id: number) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
