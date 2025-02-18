import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Sempai Store" style={styles.logo} />
        <h1>Sempai Store</h1>
      </div>
      <ul style={styles.menu}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/cartas">Cartas</Link></li>
        <li><Link to="/category/figuras">Figuras</Link></li>
        <li><Link to="/category/mangas">Mangas</Link></li>
        <li><Link to="/category/juegos-de-mesa">Juegos de Mesa</Link></li>
      </ul>
      <div style={styles.cart}>
        <Link to="/cart">
          🛒
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" },
  logoContainer: { display: "flex", alignItems: "center" },
  logo: { width: "40px", marginRight: "10px" },
  menu: { display: "flex", listStyle: "none", gap: "15px" },
  cart: { fontSize: "20px" }
};

export default NavBar;
