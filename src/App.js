import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar  from 'react-bootstrap/Navbar';
import { NavDropdown, NavLink } from 'react-bootstrap';
import {Nav} from 'react-bootstrap'


function App() {
  return (
    <div className='App'>
    <Navbar bg="dark" variant="dark" position="fixed" expand= "sm">
      <Navbar.Brand href="#inicio">
        <img src={logo} width="40 rem" height="40 rem"/>
        Logo
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav>
        <NavDropdown title="Productos">
          <NavDropdown.Item href='#productos/item1'> Item 1</NavDropdown.Item>
          <NavDropdown.Item href='#productos/item2'> Item 2</NavDropdown.Item>
          <NavDropdown.Item href='#productos/item3'> Item 3</NavDropdown.Item>
          <NavDropdown.Divider title="ofertas" />
          <NavDropdown.Item href='#productos/item4'> Item 4</NavDropdown.Item>
          <NavDropdown.Item href='#productos/item5'> Item 5</NavDropdown.Item>
        </NavDropdown>
        <NavLink href='#carrito'>Carrito</NavLink>
        <NavLink href='#aboutUs'>Sobre Nosotros</NavLink>
        <NavLink href='#contact'>Contacto</NavLink>
      </Nav>
      </Navbar.Collapse>

    </Navbar>
    <div>
      un texto
    </div>
    </div> );
}

export default App;
