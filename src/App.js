import './App.css'
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount.jsx';

function App() {

  const onAdd = (count) => {
    count == 1 ? alert(`Se agregó ${count} producto al carrito`) : alert(`Se agregaron ${count} productos al carrito`)
  }
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={"Hola"} tutora={"a todos"} mensaje={"bienvenidos a mi e-commerce"} />
      <ItemCount inicial={1} stock={5} onAdd={onAdd} />
    </div>);
}

export default App;
