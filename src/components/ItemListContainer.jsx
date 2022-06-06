import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

export default function ItemListContainer({ props }) {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=7b0351bed28c4404a425c47f250e3169&dates=2021-10-10,2021-10-30&platforms=18,1,7")
    .then(res => res.json())
    .then(res => setProductos(res.results))
    .catch(error => console.error('Error:', error))
    .finally(console.log(productos))
  }, [])
  

  return (

    <>
      <ItemList productos={productos} />
    </>
  )
}
