import { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/Navbar.css";

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <nav className='navbar-left'>
      <ul className='left-menu'>
        <li>
          <Link className='left-text-white' to='/category/2021'>
            Dernières Vidéos
          </Link>
        </li>
        <li>
          <a className='left-text-white' onClick={handleCategoriesClick}>
            Catégories <i className='fas fa-sort-down fas-arrow' />
          </a>
          {showCategories ? (
            <ul className='submenu'>
              <Link to='/category/tank'>
                <li>Gros Réservoirs</li>
              </Link>
              <Link to='/category/apollo%2011'>
                <li>RILF</li>
              </Link>
              <Link to='/category/engine'>
                <li>Joint de Culasse</li>
              </Link>
              <Link to='/category/planets'>
                <li>Uranus</li>
              </Link>
            </ul>
          ) : null}
        </li>

        <li>
          <Link className='left-text-white' to='/premium/perseverance'>
            Vidéos Premium
          </Link>
        </li>
        <li>
          <Link className='left-text-white' to='/Actors'>
            Acteurs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
