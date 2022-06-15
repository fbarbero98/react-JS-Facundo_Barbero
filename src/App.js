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
        
        {/* Se muestran todos los productos */}
      <Route path='/' element={<ItemListContainer />} />

      {/* Se muestra solo los productos filtrados por categoria*/}
      <Route path='/category/:id' element={<ItemListContainer />} />

      {/* Se muestra solo un producto en particular */}
      <Route path='/producto/:id' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>);
}

export default App;
