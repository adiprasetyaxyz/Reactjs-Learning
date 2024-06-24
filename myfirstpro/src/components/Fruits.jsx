import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Banana", "Orange", "Pineaple"]
  const fruits = [
    { name: "Apple", price: 10000 },
    { name: "Mango", price: 11000 },
    { name: "Orange", price: 9000 },
    { name: "Pineapple", price: 13000 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}>
          //     {fruit.name} : Rp.{fruit.price}
          //     </li>
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
