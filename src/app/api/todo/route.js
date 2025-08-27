import dbConnect from "../../../../lib/mongoose";
import Todo from "../../../../model/Todo";

export async function GET() {
  try {
    await dbConnect();
    const todos = await Todo.find({});
    return Response.json(todos, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const newTodo = await Todo.create(body);

    return Response.json(newTodo, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error.message }, { status: 400 });
  }
}
