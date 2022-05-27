import NavBar from'./components/NavBar.jsx';
import ListadoContainer from './components/ListadoContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';


function App() {
  return (
<>
  <NavBar /> 
  <ListadoContainer />
  <ItemListContainer greeting ="Hola como estas"/>
</>);
}

export default App;
