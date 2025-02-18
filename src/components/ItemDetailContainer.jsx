import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const mockProducts = [
  { id: 1, name: "Deck Yu-Gi-Oh!", description: "Deck oficial de Yu-Gi-Oh!", category: "cartas", price: 15000 },
  { id: 2, name: "Figura Goku", description: "Figura coleccionable de Goku", category: "figuras", price: 4500 },
  { id: 3, name: "Manga One Piece Vol. 1", description: "Primer volumen de One Piece", category: "mangas", price: 12000 },
  { id: 4, name: "Catan", description: "Juego de mesa Catan", category: "juegos-de-mesa", price: 7000 }
];

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts.find(p => p.id === Number(productId)));
      }, 1000);
    }).then(setProduct);
  }, [productId]);

  if (!product) return <h2>Cargando...</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount />
    </div>
  );
}

export default ItemDetailContainer;
