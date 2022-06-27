import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  
  const {cart , getItemPrice , deleteItem} =  useContext(CartContext)

  return (
    <>
    {
      cart.length > 0
      ? 
      <div className="m-2">
      <table className="table table-dark table-hover  border">
        <thead>
        <tr>
              <th scope="col">Item</th>
              <th scope='col'>Imagen</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Total</th>
        </tr>

        {cart.map((item, index) => {return (<tr className="align-middle" key={index}>
            <td>{item.name}</td>
            <td><img width="200" height="100"src={item.imagen}></img></td>
            <td>{item.quantity}</td>
            <td>$ {item.precio}</td>
            <td><button onClick={() => deleteItem(item.id)} type="button" className="btn btn-danger">Eliminar</button></td>
            <td>$ {item.precio * item.quantity}</td>
            </tr>
             )})}
         </thead>
         <thead>
          <tr className="table-success m-2">
            <th scope='row'colSpan={2}> PRECIO TOTAL: </th>
              <td colSpan={4}> ${getItemPrice()}</td>
          </tr>
         </thead>

        </table>
        </div>
        
      :
      <div>El carrito esta vacio</div>



    }
    
    </>
  )
}
