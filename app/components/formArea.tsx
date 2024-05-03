"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postTodo } from "../actions/postTodoAction";

export const formSchema = z.object({
  content: z.string().min(1, { message: "1文字以上で入力してください" }),
});

const FormArea = () => {
  const ref = useRef<HTMLFormElement>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const { content } = value;
    postTodo({ content });
  }

  return (
    <Form {...form}>
      <form
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-8 flex"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="" {...field} className="rounded" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button variant="outline" type="submit" className="ml-4 rounded">
          add
        </Button>
      </form>
    </Form>
  );
};

export default FormArea;
