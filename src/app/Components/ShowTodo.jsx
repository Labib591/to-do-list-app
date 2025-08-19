import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

export default async function ShowTodo() {

  const data =await fetch("http://localhost:3000/api/todo",{method:"GET"});

  const todos =await data.json();


    console.log(todos);
  return (
    <div>
        {todos.map((todo)=>
        <Card key={todo._id}>
          <CardHeader>
            <CardTitle>{todo.todo}</CardTitle>
          </CardHeader>
        </Card>)}
    </div>
  )
}
