import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {
  
  const {cart , getItemPrice} =  useContext(CartContext)

  return (
    <>
    {
      cart.length > 0
      ? 
     
      <div>
        {cart.map((item, index) => {return (<div key={index}> <ul>{item.name}
        
        <li>Precio:{item.precio}</li>
        <li>Cantidad:{item.quantity}</li>
        <li>Total: $ {item.precio * item.quantity}</li>
        </ul> </div>)})}
         <p>PRECIO FINAL : ${getItemPrice()}</p>
        </div>
        
      :
      <div>El carrito esta vacio</div>



    }
    
    </>
  )
}
