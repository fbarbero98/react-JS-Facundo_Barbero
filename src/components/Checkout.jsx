import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Checkout() {
  //! Estados
  //Los estados son para que se setee el nombre, celular o mail, dependiendo lo que manden a los inputs
  const [userName, setUserName] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [userPhone, setUserPhone] = useState(undefined);
  const [idOrder, setIdOrder] = useState(false);

  //Items lo vamos a usar para crear un array de objetos, que solo contengan ciertas cosas que queremos del cart
  const [items, setItems] = useState([]);

  //! --------------------------------- cierre Estados

  //! Context y sweet alert
  //Traemos cart y la funcion que nos da el precio total del CartContext
  const { cart, setCart, getItemPrice } = useContext(CartContext);

  const db = getFirestore(); //Con esto llamamos a firestore para conectarnos con el server
  const orderCollection = collection(db, "orders"); //Con esto armamos una coleccion que nosotros queremos guardar en la variable
  //Si la coleccion ya existe, la busca, sino la crea.
  const mySwal = withReactContent(Swal);

  //! -------------------------------  cierre context y sweet alert

  //! Verificaciones y valor de los formularios
  // La funcion form value le asigna los valores de los formularios a los useStates cuando se cumpla el evento (onClick en el submit)
  function formValues(e) {
    setUserName(formik.values.name);
    setUserEmail(formik.values.email);
    setUserPhone(formik.values.phone);
  }

  //Funcion lo que va a hacer es que, si dentro del input "nombre" nosotros presionamos un numero, se cancele el evento (onKeyDown) y se dispare un sweet alert
  function handleKeyDown(e) {
    const numeros = "1234567890";
    if (numeros.includes(e.key)) {
      //Esto lo que hace es sacar la informacion del evento y asi sabemos que lo que necesitamos para saber que tecla se presiona es "e.key"
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

  // TODO: Validaciones:

  // ? Const que se les asignan valores para las validaciones

  const validatePhone =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  //? Validaciones del formik:

  const formik = useFormik({
    initialValues: { name: undefined, email: undefined, phone: undefined },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio") //Esto son las validaciones, y si no se dan, se manda ese mensaje como error
        .min(6, "Debe tener como minimo 6 caracteres")
        .max(30, "Debe tener como maximo 30 caracteres"),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("El formato del email es incorrecto"),

      phone: Yup.string()

        .required("Este campo es obligatorio")
        .matches(validatePhone, "Numero de telefono invalido"),
    }),
    //Una vez hechas las validaciones, el onSubmit ejecuta lo siguiente

    onSubmit: (values) => {
      console.log(values);

      if (userName && userEmail && userPhone) {
        handleClick();
      }
    },
  });

  //! --------------------  cierre validaciones y formularios

  //! Creacion de la orden
  //handleClick genera la orden, con sus datos y vacia el cart

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
    setCart([]);
    //}
  }

  //? useEffect

  useEffect(() => {
    //Usamos un useEffect para que Items muestre de cart, solo los nombres de los videojuegos, el precio y la cantidad que se quiere.
    setItems(
      cart.map((doc) => ({
        videogame: doc.name,
        price: doc.precio,
        quantity: doc.quantity,
      }))
    );
    setTimeout(() => {
      console.log(items)
      console.log(cart)
    }, 1000);
  }, []); //recordemos que si [] esta vacio entonces el useEffect se aplica solo cuando se renderiza la pag por primera vez

  //!------------------------------- fin de la orden

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
        <form className="row text-light m-5 " onSubmit={formik.handleSubmit}>
          {" "}
          {/*Esto hace que formik sea el que se encargue de la validacion del fomrulario */}
          <div className="col-md-12 m-2">
            <label htmlFor="name" className="form-label">
              Nombre :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre"
              name="name"
              id="name"
              onKeyDown={handleKeyDown}
              onChange={formik.handleChange}
              value={formik.values.name}
            ></input>
            {formik.errors.name && <div>{formik.errors.name}</div>}{" "}
            {/*Esto hace que si hay un error, se muestre el error */}
          </div>
          <div className="col-sm-12 m-2">
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ingrese su e-mail"
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
            {formik.errors.email && <div>{formik.errors.email}</div>}
          </div>
          <div className="col-sm-12 m-2">
            <label htmlFor="phone" className="form-label">
              Telefono :
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Ingrese su telefono"
              onChange={formik.handleChange}
              value={formik.values.phone}
            ></input>
            {formik.errors.phone && <div color="red">{formik.errors.phone}</div>}
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-sm-12 m-3 align-content-center">
              <input
                type="submit"
                className="btn btn-success"
                onClick={formValues}
                onChange={formik.handleChange}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
