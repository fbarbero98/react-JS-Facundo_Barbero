import logo from '.././logo.svg';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#inicio"><img src={logo} width="40 rem" height="40 rem" alt='logo'/>Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#nada" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#item1">Item 1</a></li>
                <li><a className="dropdown-item" href="#item2">Item 2</a></li>
                <li><a className="dropdown-item" href="#item3">Item 3</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#item4">Item 4</a></li>
                <li><a className="dropdown-item" href="#item5">Item 5</a></li>
              </ul>
            </li>
            <a className="nav-link" href="#carrito"> <CartWidget items={4}/></a>
          </ul>
        </div>
      </div>
    </nav>);
}

export default NavBar;
