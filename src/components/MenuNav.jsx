import { useState } from "react";
import Link from "next/link"; // Importa Link
import "../css/navbar.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const openMenu = isActive ? "active" : "";

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Usa el componente Link en lugar de <a> */}
        <Link href="/" className="navbar-logo">
          Waffles Snack's
        </Link>
        <ul className={`navbar-menu ${openMenu}`}>
          {/* Usa el componente Link en lugar de <a> */}
          <li className="navbar-item">
            <a href="#info" className="navbar-link">
              ¿Quienes somos?
            </a>
          </li>
          <li className="navbar-item">
            <Link href="#catalogo" className="navbar-link">
              Catálogo de productos
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="#menu" className="navbar-link">
              Menú
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="#mision" className="navbar-link">
              Misión
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="#vision" className="navbar-link">
              Visión
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="#propuesta" className="navbar-link">
              Propuesta de Valor
            </Link>
          </li>
        </ul>
        <div className={`navbar-toggle ${openMenu}`} onClick={handleToggle}>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
