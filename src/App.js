import NavBar from './components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Test from './components/Test.jsx';
import TestPromesas from './components/TestPromesas.jsx';
import TestAPI from './components/TestAPI.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx';
import Contacto from './components/Contacto.jsx';
import TestEventos from './components/TestEventos.jsx';
import StackBlitz from './components/StackBlitz.jsx';

function App() {
  return (
    <>
     {/*
      <Test  desde={0} hasta={5} />
      <TestPromesas />
      <TestAPI /> */} 

      <BrowserRouter>
      <NavBar /> {/*Yo quiero que se vea siempre, sin importar en que ruta este. Asi que lo dejo afuera de los routes*/ }
        <Routes>
          <Route path='/' element={<Home />} /> {/*Este es el predeterminado */ }
          <Route path='/home' element={<Home />} />  {/*Este es particular de home */}
          <Route  path='/contacto' element={<Contacto />} />
          <Route path='/testEventos' element={<TestEventos />} />
          <Route path='/testStack' element={<StackBlitz />} />
          



        </Routes>
      </BrowserRouter>
    </>);
}

export default App;


//Adentro de Routes van las rutas, y despues tenes la ruta home, contacto, etc.


