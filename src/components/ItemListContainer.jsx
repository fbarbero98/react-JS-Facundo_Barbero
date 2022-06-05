import React, { useEffect, useState } from 'react'

export default function ItemListContainer({ greeting, tutora, mensaje }) {

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then(res => res.json())
      .catch(error => console.error("Error: ", error))
      .then(res => setPersonajes(res.results))
  },[])
console.log(personajes)


  return (

    <>
      <p className='text-align center'>{greeting}, {tutora}! {mensaje}</p>
    </>
  )
}
