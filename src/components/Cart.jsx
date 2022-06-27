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
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Eliminar</th>
              <th scope="col">Total</th>
        </tr>
        {cart.map((item, index) => {return (<tr key={index}>
            <td className='text-center'>{item.name}</td> {/* Poner el src='' para poder ver la imagen */}
            <td>{item.quantity}</td>
            <td>$ {item.precio}</td>
            <td><button onClick={() => deleteItem(item.id)} type="button" className="btn btn-danger btn-sm">Eliminar</button></td>
            <td>$ {item.precio * item.quantity}</td>
            </tr>
             )})}
         </thead>
         <thead>
          <tr className="table-success m-2">
            <th scope='row'colSpan={3}> PRECIO TOTAL: </th>
              <td colSpan={2}> ${getItemPrice()}</td>
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
