import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  const display = true;
  let message = "";
  return display ? <Welcome /> : <Code />;
}
