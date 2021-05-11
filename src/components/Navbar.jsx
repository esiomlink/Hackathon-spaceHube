import { Link } from 'react-router-dom';
import './assets/Navbar.css';

export default function Navbar(){
  return(
    <nav className="navbar-left">
      <ul className="left-menu"> 
        <li><Link className="left-text-white" to="/">Catégories <i className="fas fa-sort-down fas-arrow"></i></Link ></li>
        <li><Link className="left-text-white" to="/">Dernières Vidéos<i className="fas fa-sort-down fas-arrow"></i></Link ></li>
        <li><Link className="left-text-white" to="/">Vidéos Premium<i className="fas fa-sort-down fas-arrow"></i></Link ></li>
        <li><Link className="left-text-white" to="/">Acteurs<i className="fas fa-sort-down fas-arrow"></i></Link ></li>
      </ul>
    </nav>
  )
}