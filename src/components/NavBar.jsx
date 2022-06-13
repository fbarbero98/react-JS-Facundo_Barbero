import logo from '.././logo.svg';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to={`/home`} className="navbar-brand" ><img src={logo} width="40 rem" height="40 rem" alt='logo'/>Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={`/home`} className="nav-link active" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link  to={`/home`} className="nav-link" >Nosotros</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={`/producto`} className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><Link to={`/producto`} className="dropdown-item" >Item 1</Link></li>
                <li><Link to={`/producto`}className="dropdown-item" >Item 2</Link></li>
                <li><Link to={`/producto`} className="dropdown-item" >Item 3</Link></li>
                <li className="dropdown-divider"></li>
                <li><Link to={`/producto`} className="dropdown-item">Item 4</Link></li>
                <li><Link to={`/producto`} className="dropdown-item" >Item 5</Link></li>
              </ul>
            </li>
            <Link to={`/producto`} className="nav-link" > <CartWidget items={4}/></Link>
          </ul>
        </div>
      </div>
    </nav>);
}

export default NavBar;
