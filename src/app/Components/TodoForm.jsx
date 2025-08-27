"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function TodoForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {data: session} = useSession();

  const handleSubmit = async (e) => {

    console.log(session);


    e.preventDefault();
    const task = e.target.todo.value;

    if (!task.trim()) return; // prevent empty todos

    setLoading(true);

    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: task,
          userEmail: session.user.email
         }),
      });

      if (!res.ok) {
        console.log(res);
        throw new Error("Failed to save todo");
      }
      e.target.reset(); // clear input
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input type="text" placeholder="add todo" name="todo" />
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </Button>
      </form>

    </div>
  );
}
