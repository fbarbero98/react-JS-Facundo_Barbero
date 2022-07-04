import React, { useState } from "react";

export default function ItemCount({ sumar, restar, quantity, onAdd }) {


  return (
    <div>
      <button type="button" className="js-cart-quantity-btn cart-item-btn btn btn-danger" style={{margin:20}}onClick={restar}> - </button>
      <span>{quantity}</span>
      <button type="button" className="js-cart-quantity-btn cart-item-btn btn btn-success" style={{margin:20}} onClick={sumar}> +</button>
      <br />
      <button onClick={() => {onAdd(quantity);}} className="btn btn-success">Agregar al carrito</button>
    </div>
  );
}
//En suma y resta las funciones se pasan sin() xq sino se ejecutarian sin hacer el boton.
//En onAdd si se pasan con () xq tenemos que pasarle un parametro. Entonces primero hacemos un callback () => (...) y ahi pasamos onAdd
