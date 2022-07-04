import React from 'react'
import Item from './Item'
import "./ItemList.css"

export default function ItemList({productos}) { //ItemList recibe como parametro el estado "productos" de ItemListContainer
  return (
    <div className='gridAuto justify-content-center'>
        {productos?.map(producto => <Item key={producto.id} producto={producto}/>)} 
    </div>
  )
}
//Hacemos un MAP a lo que recibe ItemList como parametros, y hacemos que por cada producto, se pase el componente "Item" alcual le asignamos una key unica (el id del prod) 
// Y le pasamos como parametro cada producto que se va mapeando