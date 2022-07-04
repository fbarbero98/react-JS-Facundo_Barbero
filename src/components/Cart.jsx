import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, getItemPrice, deleteItem } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <div className="m-2">
          <div className="table-responsive">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Eliminar</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr className="align-middle" key={index}>
                      <td>{item.name}</td>
                      <td>
                        <img width="200" height="100" src={item.imagen}></img>
                      </td>
                      <td>{item.quantity}</td>
                      <td>$ {item.precio}</td>
                      <td>
                        <button
                          onClick={() => deleteItem(item.id)}
                          type="button"
                          className="btn btn-danger"
                        >
                          Eliminar
                        </button>
                      </td>
                      <td>$ {item.precio * item.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tbody>
              <tr className="table-success m-2">
                <th colSpan={2}> PRECIO TOTAL : </th>
                <th colSpan={4}> ${getItemPrice()}</th>
              </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <Link to="/checkout" className="btn btn-primary" role="button">
            Finalizar Compra
          </Link>
        </div>
      ) : (
        <div>
        <h1 style={{margin: 100}}>¡El carrito esta vacio!</h1>
        <Link to="/" className="btn btn-primary">¡Presione aqui para ver nuestro catalogo!</Link>
        </div>
      )}
    </>
  );
}
