import NavBar from'./components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
<>
  <NavBar />
  <ItemListContainer greeting={"Hola"} tutora={"Pia"} mensaje={"Espero que este bien el desafio jaja."} />
</>);
}

export default App;
