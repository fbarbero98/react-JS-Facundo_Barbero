import React from 'react'
import ItemCount from './ItemCount'

export default function Item({producto}) {
  
  const onAdd = (count) => {
    count == 1 ? alert(`Se agregó ${count} producto al carrito`) : alert(`Se agregaron ${count} productos al carrito`)
  }
  const {name , background_image , suggestions_count} = producto

  console.log(name)
  
  return (
    <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={background_image} alt="Card image cap" width="347px" height="197px" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">$ {suggestions_count}</p>
    </div>
    <div className="card-footer">
    <ItemCount inicial={1} stock={5} onAdd={onAdd}></ItemCount>
    </div>
  </div>
</div>
  )
}
