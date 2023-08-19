import { useState } from "react";
import logo from "/public/assets/logo.jpeg";
import Image from "next/image";
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
        <a href="/" className="navbar-logo">
          Waffles Snack's
        </a>
        <Image width={100} height={100} src={logo} />
        <ul className={`navbar-menu ${openMenu}`}>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Menú
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Acerca de
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about-me" className="navbar-link">
              Contacto
            </a>
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
