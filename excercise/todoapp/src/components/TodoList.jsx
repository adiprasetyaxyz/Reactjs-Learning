import Todo from "./Todo";
export default function TodoList({ todos, setTodos }) {
  return (
    <h3>
      {todos.map((item) => (
        <Todo key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </h3>
  );
}
