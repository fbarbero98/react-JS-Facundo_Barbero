import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#inicio"><img src={logo} width="40 rem" height="40 rem"/>Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carrito">Carrito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Item 1</a></li>
                <li><a className="dropdown-item" href="#">Item 2</a></li>
                <li><a className="dropdown-item" href="#">Item 3</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#">Item 4</a></li>
                <li><a className="dropdown-item" href="#">Item 5</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
}

export default App;
