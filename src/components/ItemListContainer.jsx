import React, { useEffect, useState } from 'react'
import productos from './products/products'

export default function ItemListContainer({ greeting, tutora, mensaje }) {

  const [productoss, setProductoss] = useState(["inicial"])

  useEffect(() => {
    fetch("products/products.js")
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.error(error))
  },[])
  console.log(productos)


  return (

    <>
      <p className='text-align center'>{greeting}, {tutora}! {mensaje}</p>
    </>
  )
}
