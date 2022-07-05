import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState([]); //Este es el estado de los productos, el cual es un array vacio hasta que se complete el fetch
  const [loading, setLoading] = useState(false); //Este es un loading, el cual esta para que se muestre mientras se hace el fetch, este loading cuando se hace el useEffect, pasa a estar en true.

  const { idProducto } = useParams(); //el id de useParams es el :id que figura en la url, si esta indefinido, entonces es undefined.

  useEffect(() => {
    setLoading(true);

    const db = getFirestore(); //Llamamos a la base de datos
    const productRef = doc(db, "productos", idProducto); //En productRef guardamos la referencia del producto, y le pasamos como parametros la DB, la coleccion, y el IdProducto del UseParams
    function getProducto() {
      getDoc(productRef) //el metodo getDoc nos trae un producto (el que guardamos en productRef), y es una promesa, x lo que se le pone un .then
      //La promesa devuelve muchos datos, de esos datos solo necesitamos el "data" y el "ID" que estan en .docs
      .then((snapshot) => {
        setProducto({ ...snapshot.data(), id: snapshot.id }); //A la data quue nos trae snapshot, le hacemos un spread para sumarle el ID del producto (que esta afuera)
      })
      .catch((error) => console.error("Error:", error))
    }
    //En ILC traemos una coleccion y de ahi tenemos que filtrar por categoria.  Aca estamos trayendo directamente un solo documento que coinicda con el idProducto. Por eso no hacemos nignun if
  setTimeout(() => {
    getProducto()
    setLoading(false)
  }, 1500);
  
  }, [idProducto]);

  return (
    <div>
      {loading ? 
             <div className="d-flex align-items-center justify-content-center">
             <h1 className="m-4">Cargando videojuego...</h1>
             <div className="spinner-grow bg-gradient shadow-lg " role="status"></div>
           </div>
       : (
        <ItemDetail key={producto.id} producto={producto} />
      )}
    </div>
  );
}
