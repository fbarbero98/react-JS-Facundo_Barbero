import logo from '.././logo.svg';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" ><img src={logo} width="40 rem" height="40 rem" alt='logo'/>JS GAMING</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={`/producto`} className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><Link to='/category/Aventura' className="dropdown-item" >Aventura</Link></li>
                <li><Link to='/category/Accion' className="dropdown-item" >Accion</Link></li>
                <li><Link to='/category/Family' className="dropdown-item" >Family</Link></li>
                <li className="dropdown-divider"></li>
                <li><Link to='/category/Arcade' className="dropdown-item">Arcade</Link></li>
                <li><Link to='/category/Deportes' className="dropdown-item" >Deportes</Link></li>
                <li><Link to='/category/Ciencia Ficcion' className="dropdown-item" >Ciencia Ficcion</Link></li>
              </ul>
            </li>
            <Link to={`/cart`} className="nav-link" > <CartWidget /></Link>
          </ul>
        </div>
      </div>
    </nav>);
}

export default NavBar;
