import ShowTodo from "./Components/ShowTodo";
import TodoForm from "./Components/todoForm";


export default function Home() {
  return (
    <main>
      <div>
      <h1>Home</h1>
      <div>
        <TodoForm></TodoForm>
        <ShowTodo></ShowTodo>
      </div>
    </div>
    </main>
  );
}
