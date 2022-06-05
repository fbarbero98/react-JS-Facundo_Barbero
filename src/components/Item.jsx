import React from 'react'

export default function Item({producto}) {
  
  const {cosa , precio , specs , imagen} = producto

  console.log(cosa)
  
  return (
    <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={imagen} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{cosa}</h5>
      <p className="card-text">{specs}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">$ {precio}</small>
    </div>
  </div>
</div>
  )
}
