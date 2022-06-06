import './App.css'
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer />
    </div>);
}

export default App;
