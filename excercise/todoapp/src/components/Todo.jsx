export default function Todo({ item, todos, setTodos }) {
  function handleDelete() {
    console.log(item);
    setTodos(
      todos.filter((value) => {
        return value !== item;
      })
    );
  }
  return (
    <div>
      <div>{item}</div>
      <span>
        <button onClick={() => handleDelete()}>X</button>
      </span>
    </div>
  );
}
