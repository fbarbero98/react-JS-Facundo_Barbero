import React from 'react'

export default function ItemListContainer({greeting , tutora , mensaje}) {
  return (
    <>
    <p className='text-align center'>{greeting}, {tutora}! {mensaje}</p>
    </>
  )
}
