export default function Fruit({ name, price }) {
  return (
    <div>
      <li>
        {name}: Rp.{price}
      </li>
    </div>
  );
}
