import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Checkout() {
  //Los estados son para que se setee el nombre, celular o mail, dependiendo lo que manden a los inputs
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [idOrder, setIdOrder] = useState(false);

  //Items lo vamos a usar para crear un array de objetos, que solo contengan ciertas cosas que queremos del cart
  const [items, setItems] = useState([]);

  //Traemos cart y la funcion que nos da el precio total del CartContext
  const { cart, setCart, getItemPrice } = useContext(CartContext);

  const db = getFirestore(); //Con esto llamamos a firestore para conectarnos con el server
  const orderCollection = collection(db, "orders"); //Con esto armamos una coleccion que nosotros queremos guardar en la variable
  //Si la coleccion ya existe, la busca, sino la crea.

  function handleClick() {
    const order = {
      //Order va a tener los datos del "ticket"
      buyer: { name: userName, email: userEmail, phone: userPhone },
      items,
      total: getItemPrice(),
    };

    addDoc(orderCollection, order).then(({ id }) => {
      //Esto suma la order a la coleccion order collection, y despues (como es una promesa) si tiene id, entonces haces el console log y seteas el idOrder (para sacar el formulario)
      console.log(id);
      setIdOrder(id);
    });
    console.log(order);
    setCart([])
  }

  useEffect(() => {
    //Usamos un useEffect para que Items muestre de cart, solo los nombres de los videojuegos, el precio y la cantidad que se quiere.
    setItems(
      cart.map((doc) => ({
        videogame: doc.name,
        price: doc.precio,
        quantity: doc.quantity,
      }))
    );
    console.log(items);
  }, []); //recordemos que si [] esta vacio entonces el useEffect se aplica solo cuando se renderiza la pag por primera vez

  return idOrder ? (
    <div>
      <h1>¡Su orden ha sido realizada!</h1>
      <h2>Su orden de compra es : {idOrder}</h2>
      <hr />
      <Link to="/" className="btn btn-primary" role="button">
        Realizar una nueva orden
      </Link>
    </div>
  ) : (
    <div>
      <h1>Complete los siguientes datos para terminar su compra</h1>

      <input
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Ingrese su nombre"
      ></input>
      {/*Accedemos al evento y del evento extraemos el value (target es porque el valor que necesitamos esta dentro de la prop target) */}
      <hr />
      <input
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Ingrese su e-mail"
      ></input>
      <hr />
      <input
        onChange={(e) => setUserPhone(e.target.value)}
        placeholder="Ingrese su numero de telefono"
      ></input>
      <hr />
      <button onClick={() => handleClick()}> Enviar Formularios </button>
    </div>
  );
}
