export default function Fruit({ name, price }) {
  return (
    <>
      {price >= 10000 ? (
        <li>
          {name}: Rp.{price}
        </li>
      ) : (
        ""
      )}
      {/* {name}: Rp.{price} */}
    </>
  );
}
