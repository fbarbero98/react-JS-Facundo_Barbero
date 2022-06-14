import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function ItemDetailContainer() {
  
  
  const [producto, setProducto] = useState({}); //Este es el estado de los productos, el cual es un array vacio hasta que se complete el fetch
  const [loading, setLoading] = useState(false); //Este es un loading, el cual esta para que se muestre mientras se hace el fetch, este loading cuando se hace el useEffect, pasa a estar en true.
  
  const { id } = useParams();


  useEffect(() => {
    setLoading(true);  
    const getProductos = () => {
    fetch(
        "../../games.json" //Aca esta e fetch, el cual recopila datos de una API
      )
        .then((res) => res.json())
        .then((data) => setProducto(data.find(prod => prod.id == id)))
        .catch((error) => console.error("Error:", error))
        .finally(setLoading(false))
    }
    setTimeout(() => {
      // para simular MAS el delay del servidor, ya que la API responde rapido, SACAR esta linea para un uso real.
      getProductos()
    }, 2500);
  }, [id]);

  return (
    <div>
      {loading 
      ? 
      <div className="d-flex align-items-center justify-content-center">Loading Videogame...</div> 
      : 
      <ItemDetail key={producto.id} producto={producto} /> }
      
      </div>

  );
}
