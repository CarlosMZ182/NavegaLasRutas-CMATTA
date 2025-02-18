import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Deck Yu-Gi-Oh!", category: "cartas", price: 15000 },
  { id: 2, name: "Figura Goku", category: "figuras", price: 4500 },
  { id: 3, name: "Manga One Piece Vol. 1", category: "mangas", price: 12000 },
  { id: 4, name: "Catan", category: "juegos-de-mesa", price: 7000 }
];

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? mockProducts.filter(p => p.category === categoryId) : mockProducts);
      }, 1000);
    }).then(setProducts);
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <Link to={`/product/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" },
  card: { border: "1px solid #ccc", padding: "10px", textAlign: "center" }
};

export default ItemListContainer;
