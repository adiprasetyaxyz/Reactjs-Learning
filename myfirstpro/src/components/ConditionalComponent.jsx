import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  const display = true;
  let message = "";
  if (display) {
    message = <h1>Message 1</h1>;
  } else {
    message = <h1>Message 2</h1>;
  }
  return message;
}
