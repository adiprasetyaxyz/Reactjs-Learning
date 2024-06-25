import { useState } from "react";
import Todo from "./Todo";
export default function Todos() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  function submitHandle(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={(e) => submitHandle(e)}>add</button>
      </form>
      <h3>
        {todos.map((item) => (
          <Todo key={item} item={item} />
        ))}
      </h3>
      {console.log(todos)}
    </div>
  );
}
