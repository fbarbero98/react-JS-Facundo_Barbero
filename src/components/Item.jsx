import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

export default function Item({producto}) { //Por cada producto del map de ItemList, Item recibe ese producto como parametro
  
  const onAdd = (count) => { //Se hace una funcion para que ItemCount reciba como parametro "onAdd", la cual suma los productos al carrito
    count == 1 ? alert(`Se agregó ${count} producto al carrito`) : alert(`Se agregaron ${count} productos al carrito`)
  }
  const {name , imagen , precio, id} = producto //Desestructuramos el producto que recibimos como param, para mejor entendimiento.

  console.log(name) //Ilustrativo para ver el juego que sale por consola
  
  return (
  <div className="card w-auto">
    <img className="card-img-top img-thumbnail" src={imagen} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">$ {precio}</p>
    </div>
    <div className="card-footer">
    <Link to={`/producto/${id}`} className="btn btn-primary" role="button">Ver Detalles</Link>  {/*Este link lo que hace es cambiar el :id del useParams de ItemDetailContainer, entonces, cuando el id cambia se ejecuta el useEffect */}
    </div>
  </div>

  )
}
 //Y por cada producto del map se ve este return, que es una card en la que se veria su precio, foto, nombre y su botonera para añadirlo al carrito

 //ItemCount simula que lo añadimos al carrito, recibe como parametros los numeros inicial y de stock que nosotros definimos, y la funcion onAdd.

 