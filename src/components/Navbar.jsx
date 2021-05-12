import { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/Navbar.css";

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className="navbar-left">
      <ul className="left-menu">
        <li>
          <a className="left-text-white" onClick={handleCategoriesClick}>
            Catégories <i className="fas fa-sort-down fas-arrow" />
          </a>
          {showCategories ? (
            <ul className="submenu">
              <li>Gros Réservoirs</li>
              <li>RILF</li>
              <li>Joint de Culasse</li>
              <li>Uranus</li>
            </ul>
          ) : null}
        </li>
        <li>
          <Link className="left-text-white" to="/">
            Dernières Vidéos
          </Link>
        </li>
        <li>
          <Link className="left-text-white" to="/">
            Vidéos Premium
          </Link>
        </li>
        <li>

          <Link className="left-text-white" to="/">
            Acteurs

          </Link>
        </li>
      </ul>
    </nav>
  );
}
