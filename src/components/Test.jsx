import React, { useState } from 'react'

export default function Test({ desde , hasta }) {
    /*let x = 0  */
    console.log("render")
    const [x, setX] = useState(desde); //Este es el hook, devuelve el valor y una funcion para poder cambiar el valor
    let y = 2
    return (

        <>
            <div style={{ border: "1px solid red", height: "200px" }}>
                DESDE = {x}
                HASTA = {y}

                <button onClick={() => {
                    // x = x + 1  (esta linea ya no va);
                    y = y++
                    setX(x + 1);           
                    console.log(x)
                    console.log(y)
                }}> SUMAR</button>
            </div>
        </>
    )
}
