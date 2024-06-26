import { useState } from "react";

export default function Form() {
  let [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    console.log(name.firstName + name.lastName);
    e.preventDefault();
  }
  return (
    <div>
      {name.firstName + name.lastName}
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button>Submit</button>
      </form>
    </div>
  );
}
