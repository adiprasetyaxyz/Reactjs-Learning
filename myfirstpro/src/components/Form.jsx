import { useState } from "react";

export default function Form() {
  let [name, setName] = useState("");

  return (
    <div>
      <form action="">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
