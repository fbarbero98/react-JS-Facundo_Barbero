import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
  const mySwal = withReactContent(Swal);

  function handleKeyDown(e) {
    const numeros = "1234567890"
    if (numeros.includes(e.key)){ //Esto lo que hace es sacar la informacion del evento y asi sabemos que lo que necesitamos para saber que tecla se presiona es "e.key"
        //Lo que hace este if es, si la tecla que presionamos (e.key) incluye alguino de los numeros (los reconoce como array), entonces se hace el prevent default (no se presiona) y un alert
        e.preventDefault(); //Esto cancela el evento por defecto (el onkeydown), si asignas otro evento eso no se cancela.
        mySwal.fire({
          title: "Error!",
          text: "No puedes completar este campo con numeros!",
          icon: "error",
          confirmButtonText: "Volver",
        });
    }
 }


  function handleClick() {
    if (userName === "" || userEmail === "" || userPhone === "") {
      mySwal.fire({
        title: "Error!",
        text: "Debe completar todos los campos",
        icon: "error",
        confirmButtonText: "Volver",
      });

    } else if (userPhone.length < 7) {

        mySwal.fire({
          title: "Error!",
          text: "Introduzca un telefono valido (minimo 7 caracteres)",
          icon: "error",
          confirmButtonText: "Volver",
        });
      return
    }
    else if (!userEmail.includes("@")) {

      mySwal.fire({
        title: "Error!",
        text: "Introduzca un e-mail valido",
        icon: "error",
        confirmButtonText: "Volver",
      });
    return
  }
    else {
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
      setCart([]);
    }
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
      <div className="container w-auto bg-dark">
        <form className="row text-light m-5 ">
          <div className="col-md-12 m-2">
            <label htmlFor="inputUserName" className="form-label">
              Nombre :{" "}
            </label>
            <input
              type={"text"}
              required
              className="form-control"
              aria-label="Nombre"
              placeholder="Ingrese su nombre"
              onKeyDown={handleKeyDown} 
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>

          {/*Accedemos al evento y del evento extraemos el value (target es porque el valor que necesitamos esta dentro de la prop target) */}
          <div className="col-sm-12 m-2">
            <label htmlFor="inputEmail4" className="form-label">
              Email :{" "}
            </label>
            <input
              type={"email"}
              required
              className="form-control"
              id="inputEmail4"
              placeholder="Ingrese su e-mail"
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
          </div>

          <div className="col-sm-12 m-2">
            <label htmlFor="inputPhone4" className="form-label">
              {" "}
              Telefono :{" "}
            </label>
            <input
              type={"number"}
              required
              className="form-control"
              id="inputPhone4"
              placeholder="Ingrese su telefono"
              onChange={(e) => setUserPhone(e.target.value)}
            ></input>
          </div>

          <div className="d-flex justify-content-center">
            <div className="col-sm-12 m-3 align-content-center">
              <input
                type={"submit"}
                className="btn btn-success"
                onClick={() => handleClick()}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/*<form class="row g-3">
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="Ingrese su e-mail" onChange={(e) => setUserEmail(e.target.value)}> </input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form> */
