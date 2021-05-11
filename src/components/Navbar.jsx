import { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/Navbar.css";

export default function Navbar() {
  const [showcategories, setShowCategories] = useState(false);

  const handleCategoriesClick = () => {
    setShowCategories(!showcategories);
  };

  return (
    <nav className="navbar-left">
      <ul className="left-menu">
        <li>
          <a className="left-text-white" onClick={handleCategoriesClick}>
            Catégories <i className="fas fa-sort-down fas-arrow" />
          </a>
          {showcategories ? (
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
            Dernières Vidéos<i className="fas fa-sort-down fas-arrow"></i>
          </Link>
        </li>
        <li>
          <Link className="left-text-white" to="/">
            Vidéos Premium<i className="fas fa-sort-down fas-arrow"></i>
          </Link>
        </li>
        <li>
          <Link className="left-text-white" to="/Actors">
            Acteurs<i className="fas fa-sort-down fas-arrow"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
