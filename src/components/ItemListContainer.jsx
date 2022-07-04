import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer({ props }) {
  const [productos, setProductos] = useState([]); //Este es el estado de los productos, el cual es un array vacio hasta que se complete el fetch
  const [loading, setLoading] = useState(false); //Este es un loading, el cual esta para que se muestre mientras se hace el fetch, este loading cuando se hace el useEffect, pasa a estar en true.
  const { idCategory } = useParams();
  console.log(idCategory);

  useEffect(() => {
    setProductos([]);
    setLoading(true); //Hacemos que el loading este en "true"

    const db = getFirestore(); //Esto es la conexion a la base de datos, dentro de la const db (funciona xq ya importamos todo)
    const productsCollection = collection(db, "productos"); //al metodo collection le pasamos la dataBase que queremos, y la coleccion que queremos de esa DB (productos en este caso)

    if (idCategory) { //Aca hacemos un if, Si el idCategory del useParams == undefined, entonces set productos son todos los productos, si tiene un idCategory entonces se muestran solo los productos que la category coincida con el idCategory
      const q = query(productsCollection, where("category", "==", idCategory));
      getDocs(q)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          
        })
        .catch((error) => console.error("Error: ", error))
        .finally(setLoading(false)); //El finally lo que hace es que cuando se termine la promesa, el "loading" vuelva a false
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          //el metodo getDocs nos trae una coleccion (la que guardamos en collection), y es una promesa, x lo que se le pone un .then
          //La promesa devuelve muchos datos, de esos datos solo necesitamos el "data" y el "ID" que estan en .docs
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          //Hacemos un map a cada doc de "docs", y por cada uno hacemos un "spread" para sumar el ID dentro del objeto.
        })
        .catch((error) => console.error("Error: ", error))
        .finally(setLoading(false)); //El finally lo que hace es que cuando se termine la promesa, el "loading" vuelva a false
    }
  }, [idCategory]); //Cada vez que el id de la ruta cambie, se ejecuta el useEffect

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center">
          Loading Videogames...
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
      {/*si el loading es true, se muestra el div, sino se ejecuta el ItemList */}
    </>
  );
}

//Aca mientras el "loading" sea true, se muestra ese div. DOM dinamico
//Tambien, a ItemList, se le pasa como parametro el valor del estado "productos"
