export default function Message() {
  let eventHandler = () => {
    console.log("clicked");
  };
  return <div>{<button onClick={eventHandler}>Click Here</button>}</div>;
}
