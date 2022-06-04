import NavBar from'./components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount.jsx';

function App() {
  
  const onAdd = (count) =>{
    alert(`Se agregaron ${count} productos al carrito`)
  }
  
  return (
<>
  <NavBar />
  <ItemListContainer greeting={"Hola"} tutora={"Pia"} mensaje={"Espero que este bien el desafio jaja."} />
  <ItemCount  inicial={1} stock={5} onAdd={onAdd}/>
</>);
}

export default App;
