import { useState } from "react";

export default function Form() {
  let [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      {name.firstName + name.lastName}
      <form action="">
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
      </form>
    </div>
  );
}
