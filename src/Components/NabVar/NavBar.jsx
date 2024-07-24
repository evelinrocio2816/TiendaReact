import Cartwidget from "../CartWidget/Cartwidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="Rutas">Home</Link>
          </li>
          <li>
            <NavLink to="/categoria/2" className="Rutas" activeClassName="active">Alimentos</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3" className="Rutas" activeClassName="active">Accesorios</NavLink>
          </li>
          <li>
            <NavLink to="/categoria/4" className="Rutas" activeClassName="active">Juguetes</NavLink>
          </li>
        </ul>
      </nav>
      <Cartwidget className="cart-widget" />
    </header>
  );
}

export default NavBar;

