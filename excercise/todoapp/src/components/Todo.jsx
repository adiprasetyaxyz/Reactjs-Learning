export default function Todo({ item, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((list) => list !== item));
  }
  function handleDone(name) {
    console.log("item done" + item.name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  }
  let classDone = item.done ? "completed" : "";
  return (
    <div>
      <div onClick={() => handleDone(item.name)} className={classDone}>
        {item.name}{" "}
      </div>
      <span>
        <button onClick={() => handleDelete()}>X</button>
      </span>
    </div>
  );
}
