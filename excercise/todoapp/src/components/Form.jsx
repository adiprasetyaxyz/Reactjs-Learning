import { useState } from "react";
export default function Form({ todos, setTodos }) {
  let [todo, setTodo] = useState({ name: "", done: false });
  function submitHandle(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "" });
    console.log(todo);
  }
  return (
    <form>
      <input
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
      />
      <button onClick={(e) => submitHandle(e)}>add</button>
    </form>
  );
}
