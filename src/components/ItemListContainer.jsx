import React, { useEffect, useState } from 'react'

export default function ItemListContainer({ greeting, tutora, mensaje }) {

  const [productos, setProductos] = useState(["inicial"])

  useEffect(() => {
    fetch('./products/products.json')
      .then(res => JSON.stringify(res))
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
