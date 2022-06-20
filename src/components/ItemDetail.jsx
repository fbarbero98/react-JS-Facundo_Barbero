import React from "react";
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'
import { useState } from "react";

export default function ItemDetail({ producto }) {

  const [count, setCount] = useState(1);
  const [display, setDisplay] = useState(true);

  const sumar = () => {
    count < stock
      ? setCount(count + 1)
      : alert("No puedes agregar más productos");
  };

  const restar = () => {
    count > 1
      ? setCount(count - 1)
      : alert("No puedes solicitar menos de 1 producto");
  };

  const reset = () => {
    setCount(1);
  };

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos al carrito`);
    setDisplay(false);
  };

  const { name, imagen, precio, stock } = producto; //Desestructuramos el producto que recibimos como param, para mejor entendimiento.

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
          <ItemCount sumar={sumar} restar={restar} reset={reset} count={count} onAdd={onAdd}></ItemCount>
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
/*<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
<div className="col p-4 d-flex flex-column position-static">
  <strong className="d-inline-block mb-2 text-primary">World</strong>
  <h3 className="mb-0">Featured post</h3>
  <div className="mb-1 text-muted">Nov 12</div>
  <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
  <a href="#" className="stretched-link">Continue reading</a>
</div>
<div className="col-auto d-none d-lg-block">
  <img className="bd-placeholder-img" width="200" height="250" />

</div>
</div>
  );*/

/*      {background_image && (
        <div className="col-12 col-md-4">
          <img
            src={background_image}
            alt={name}
            className="img-thumbnail rounded mx-auto d-block"
          />
        </div>
      )}
      <div className="col-12 col-md-8">
        <h2>{name}</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt accusantium beatae eos perferendis eius cupiditate quaerat doloribus dolorum? Nulla quam nobis provident quae totam dolor eum error vel impedit?</p>
        <p>$ {suggestions_count}</p>
      </div>
    </>*/
