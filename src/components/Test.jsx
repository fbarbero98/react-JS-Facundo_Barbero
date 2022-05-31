import React, { useState } from 'react'

export default function Test({ desde }) {
    /*let x = 0  */
    console.log("render")
    const [x, setX] = useState(desde); //Este es el hook, devuelve el valor y una funcion para poder cambiar el valor
    return (

        <>
            <div style={{ border: "1px solid red", height: "200px" }}>
                DESDE = {x}

                <button onClick={() => {
                    // x = x + 1  (esta linea ya no va);
                    setX(x + 1);
                    console.log(x)
                }}> SUMAR</button>
            </div>
        </>
    )
}
