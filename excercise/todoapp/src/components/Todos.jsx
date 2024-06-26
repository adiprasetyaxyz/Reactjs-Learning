import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
export default function Todos() {
  let [todos, setTodos] = useState([]);

  return (
    <div>
      <div id="header">
        <h1>My Todo List</h1>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

      {console.log(todos)}
    </div>
  );
}
