import React, { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";
import {Routes, Route } from "react-router-dom";

export default function ItemListContainer({ props }) {
  const [productos, setProductos] = useState([]);  //Este es el estado de los productos, el cual es un array vacio hasta que se complete el fetch
  const [loading, setLoading] = useState(false); //Este es un loading, el cual esta para que se muestre mientras se hace el fetch, este loading cuando se hace el useEffect, pasa a estar en true.

  useEffect(() => {
    setLoading(true); //Hacemos que el loading este en "true"
    const getProductos = () => {
      fetch(
        "games.json" //Aca esta e fetch, el cual recopila datos de una API
      )
        .then((res) => res.json()) //res es el "result" de la promesa, el cual hay que transformar en un json
        .then((data) => setProductos(data)) // luego de que lo transfomramos en json, ya podemos manipular los datos de ese "result", en este caso, los datos de la API
        .catch((error) => console.error("Error:", error))
        .finally(setLoading(false)); //El finally lo que hace es que cuando se termine la promesa, el "loading" vuelva a false
        
    };
    setTimeout(() => {
      // para simular MAS el delay del servidor, ya que la API responde rapido, SACAR esta linea para un uso real.
      getProductos()
    }, 2500);
  }, []);

  



  return (
    <>
    {loading && <div className="d-flex align-items-center justify-content-center">Loading Videogames...</div>}
      <ItemList productos={productos} />
    </>
  );
}


//Aca mientras el "loading" sea true, se muestra ese div. DOM dinamico
//Tambien, a ItemList, se le pasa como parametro el valor del estado "productos"