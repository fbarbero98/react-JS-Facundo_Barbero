import './App.css'
import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItemListContainer from './components/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />

      <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/home' element={<ItemListContainer />} />
      <Route path='/producto/:id' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>);
}

export default App;
