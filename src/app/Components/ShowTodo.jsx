import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'

export default async function ShowTodo() {

  const data =await fetch("http://localhost:3000/api/todo",{method:"GET"});

  const todos =await data.json();

  return (
    <div>
      <h1  className='text-center text-2xl font-bold mb-5'>Todos</h1>
        <div className='grid grid-cols-3 gap-4 mx-auto px-4'>
          {todos.map((todo)=>
        <Card key={todo._id}>
          <CardHeader>
            <CardTitle>{todo.todo}</CardTitle>
            <div>
              <p>{todo.userEmail}</p>
              <p>{todo.date}</p>
              <p>{todo.status}</p>
            </div>
          </CardHeader>
        </Card>)}
        </div>

        <Link href="/todo"><Button className='mx-auto mt-5 block'>Add Todo</Button></Link>
    </div>
  )
}
