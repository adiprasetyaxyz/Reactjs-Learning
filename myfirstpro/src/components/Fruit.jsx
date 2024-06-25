export default function Fruit({ name, price, soldout }) {
  return (
    <>
      <li>
        {name}: Rp.{price} {soldout ? "Sold Out" : ""}
      </li>
      {/* {name}: Rp.{price} */}
    </>
  );
}
