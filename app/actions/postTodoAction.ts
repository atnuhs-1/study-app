"use server"

import {z} from "zod"
import { formSchema } from "../components/formArea";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postTodo = async ({
    content,
  }: z.infer<typeof formSchema>) => {
    const username = "test"

    await prisma.post.create({
      data: {
        username,
        content,
      },
    });
  
    revalidatePath("/");
  
    redirect("/");
  };