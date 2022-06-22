import React from "react";
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useContext } from "react";
import {CartContext} from "../context/CartContext"

export default function ItemDetail({ producto }) {


  const { name, imagen, precio, stock, id} = producto; //Desestructuramos el producto que recibimos como param, para mejor entendimiento.

  const [quantity, setQuantity] = useState(1);
  const [display, setDisplay] = useState(true);
  const {isInCart , addItem} = useContext(CartContext)




  const sumar = () => {
    quantity < stock
      ? setQuantity(quantity + 1)
      : alert("No puedes agregar más productos");
  };

  const restar = () => {
    quantity > 1
      ? setQuantity(quantity - 1)
      : alert("No puedes solicitar menos de 1 producto");
  };

  const reset = () => {
    setQuantity(1);
  };

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos al carrito`);
    isInCart(id)
    addItem(producto , quantity)
    setDisplay(false);
  };


  return (
    <>
      <div className="row g-0 border rounded overflow-hidden flex-row mb-4 h-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{name}</h3>
          <hr/>
          <p className="card-text mb-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            dolorum? Quisquam dignissimos id quia laudantium labore perferendis
            ad dolore facere nulla placeat, minima exercitationem officiis,
            incidunt aut ipsum accusamus dolorem.
          </p>
          <p>$ {precio}</p>
          { 
          display 
          ?
          <ItemCount sumar={sumar} restar={restar} reset={reset} quantity={quantity} onAdd={onAdd}></ItemCount>
          :
          <Link to='/cart' className="btn btn-primary" role="button">Finalizar compra</Link>
          }
          <hr/>
          <Link to='/' className="btn btn-primary" role="button">Volver Atras</Link>
          

          
        </div>
        <div className="col-auto d-block">
          <img
            className="img-thumbnail"
            width="700"
            height="500"
            src={imagen}
          />
        </div>
      </div>
    </>
  );
}

