import { getAlltodos } from "../api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default async function Home() {

const todos   = await getAlltodos()
console.log(todos)

  return (
    <main className="Home-main">
      <h1>to do app with Next.js</h1>
      <div className="Home-container">
        <div className="Home-container2">
          <AddTask />
          <ToDoList todos={todos}/>
        </div>
      </div>
    </main>
  )
}
