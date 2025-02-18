import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => alert(`Agregado ${count} al carrito`)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
