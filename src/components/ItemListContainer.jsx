import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export default function ItemListContainer({ props }) {
  const [productos, setProductos] = useState([]);  //Este es el estado de los productos, el cual es un array vacio hasta que se complete el fetch
  const [loading, setLoading] = useState(false); //Este es un loading, el cual esta para que se muestre mientras se hace el fetch, este loading cuando se hace el useEffect, pasa a estar en true.
  const {id} = useParams();
  console.log(id)


  useEffect(() => {
    setProductos([]);
    setLoading(true); //Hacemos que el loading este en "true"
    const getProductos = () => {
      fetch(
        "../../games.json" //Aca esta el fetch, el cual recopila datos de un json
      )
        .then((res) => res.json()) //res es el "result" de la promesa, el cual hay que transformar en un json
        .then((data) => (!id) ? setProductos(data) : setProductos(data.filter(prod => prod.category == id))) //Si el id del useParams == undefined, entonces set productos son todos los productos, si tiene un id entonces los productos se muestran solo los que la categoria coincida con el id
        .catch((error) => console.error("Error:", error))
        .finally(setLoading(false)); //El finally lo que hace es que cuando se termine la promesa, el "loading" vuelva a false
        
    };
    setTimeout(() => {
      // para simular MAS el delay del servidor, ya que el json responde rapido, SACAR esta linea para un uso real.
      getProductos()
    }, 2500);
  }, [id]); //Cada vez que el id de la ruta cambie, se ejecuta el useEffect

  



  return (
    <>
    {loading 
    ? 
    <div className="d-flex align-items-center justify-content-center">Loading Videogames...</div>
    :
    <ItemList productos={productos} />}   {/*si el loading es true, se muestra el div, sino se ejecuta el ItemList */}
    </>
  );
}


//Aca mientras el "loading" sea true, se muestra ese div. DOM dinamico
//Tambien, a ItemList, se le pasa como parametro el valor del estado "productos"