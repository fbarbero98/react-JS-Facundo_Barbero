import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import productosJS from './products/products'

export default function ItemListContainer({ greeting, tutora, mensaje }) {

  const [productos, setProductos] = useState(productosJS)

console.log(productos)

  return (

    <>
      <ItemList productos={productos} />
    </>
  )
}
