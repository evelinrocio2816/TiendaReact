import Cartwidget from "../CartWidget/Cartwidget";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <header>
      <>
      <Logo/>
       <nav> 
         <Link to="/">
        <h4>Home</h4>
        </Link>
          <ul>
            <li className="rutas"> <NavLink to="/categoria/2"> Alimentos</NavLink> </li>
            <li className="rutas"> <NavLink to="/categoria/3"> Accesorios</NavLink> </li>
            <li className="rutas"> <NavLink to="/categoria/4"> Juguetes</NavLink> </li>
          </ul>
      
      </nav>
          
      </>
      
      <Cartwidget />
    </header>
  );
}

export default NavBar;
