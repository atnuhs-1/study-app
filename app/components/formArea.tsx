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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postTodo } from "../actions/postTodoAction";

export const formSchema = z.object({
  content: z.string().min(1, { message: "1文字以上で入力してください" }),
});

const FormArea = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const {content} = value
    postTodo({content})
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-8"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>content</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage className="text-red-500"/>
            </FormItem>
          )}
        />
        <Button variant="outline" type="submit" className="mt-2 rounded">submit</Button>
      </form>
    </Form>
  );
};

export default FormArea;
