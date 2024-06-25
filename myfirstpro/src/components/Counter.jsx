import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let increment = () => setCount(count + incrementValue);
  let decrement = () => setCount(count - incrementValue);

  let [incrementValue, setIncrementValue] = useState(1);
  let increaseIncrementValue = () => setIncrementValue(incrementValue + 1);
  let decreaseIncrementValue = () => setIncrementValue(incrementValue - 1);
  return (
    <div>
      <h1>Value :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <h1>Increment Value: {incrementValue}</h1>
      <button onClick={increaseIncrementValue}>Increase Increment Value</button>
      <button onClick={decreaseIncrementValue}>Decrease Increment Value</button>
    </div>
  );
}
