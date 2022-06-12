import React from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer({productos}) {
  return (
    <div>{productos?.map(producto => <ItemDetail key={producto.id} producto={producto}/>)} </div>
  )
}
