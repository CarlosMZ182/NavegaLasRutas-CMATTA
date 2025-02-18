import { Link } from "react-router-dom";
import './NavBar.css'; // Asegúrate de importar el archivo CSS

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logoContainer">
      <img src="./src/assets/logo.jpg" alt="Sempai Store" className="logo" />
        <h1>Sempai Store</h1>
      </div>
      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/cartas">Cartas</Link></li>
        <li><Link to="/category/figuras">Figuras</Link></li>
        <li><Link to="/category/mangas">Mangas</Link></li>
        <li><Link to="/category/juegos-de-mesa">Juegos de Mesa</Link></li>
      </ul>
      <div className="cart">
        <Link to="/cart">
          🛒
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

