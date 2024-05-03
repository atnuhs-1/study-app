import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { todoId: string } }
) {
    const postId = params.todoId;
  const todoDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });
  return NextResponse.json(todoDetailData);
}