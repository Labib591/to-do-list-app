import Navbar from "./Components/Navbar";
import ShowTodo from "./Components/ShowTodo";
import TodoForm from "./Components/todoForm";


export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div>
      <div>
        <ShowTodo></ShowTodo>
      </div>
    </div>
    </main>
  );
}
