"use client";
import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
import { Button } from "@/components/ui/button";

export default function TodoForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = e.target.todo.value;

    if (!task.trim()) return; // prevent empty todos

    setLoading(true);

    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: task }),
      });

      if (!res.ok) {
        console.log(res);
        throw new Error("Failed to save todo");
      }

      window.refresh();
      e.target.reset(); // clear input
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add todo" name="todo" />
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </Button>
      </form>
    </div>
  );
}
