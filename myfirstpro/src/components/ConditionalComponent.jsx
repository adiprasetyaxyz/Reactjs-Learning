import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
