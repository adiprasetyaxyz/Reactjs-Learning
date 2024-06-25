import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let increment = () => setCount(count + 1);
  let decrement = () => setCount(count - 1);
  return (
    <div>
      <h1>Value :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
