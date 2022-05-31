import React from 'react'

export default function ItemListContainer({greeting , tutora , mensaje}) {
  return (
    <>
    <p>{greeting}, {tutora}! {mensaje}</p>
    </>
  )
}
