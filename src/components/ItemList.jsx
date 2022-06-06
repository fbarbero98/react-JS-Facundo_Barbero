import React from 'react'
import Item from './Item'


export default function ItemList({productos}) {
  return (
    <div className='d-flex flex-wrap'>
        {productos?.map(producto => <Item key={producto.id} producto={producto}/>)}
    </div>
  )
}
