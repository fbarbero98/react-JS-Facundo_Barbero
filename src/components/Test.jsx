import React from 'react'

export default function Test({desde}) {
    let x = 0
    console.log("render")
    return (


    <> <div style={{ border: "1px solid red" , height: "200px" }}>
        DESDE = {x}

        <button onClick={() => {
        x = x + 1
        console.log(x)
        }}> SUMAR</button>
        </div></>
  )
}
