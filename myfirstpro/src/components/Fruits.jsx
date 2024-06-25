import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Banana", "Orange", "Pineaple"]
  const fruits = [
    { name: "Apple", price: 10000, soldout: false },
    { name: "Mango", price: 11000, soldout: true },
    { name: "Orange", price: 9000, soldout: false },
    { name: "Pineapple", price: 13000, soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}>
          //     {fruit.name} : Rp.{fruit.price}
          //     </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
