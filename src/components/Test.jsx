import React, { useState , useEffect } from 'react'

export default function Test({ desde, hasta }) {
    /*let x = 0  */
    console.log("render")
    const [x, setX] = useState(desde); //Este es el hook, devuelve el valor y una funcion para poder cambiar el valor
    let y = 2


    //CICLOS DE VIDA:
    //PRIMERO

    useEffect(() => {

        alert("Este mensaje sale solo con el montaje (1 vez) ")

    }, []) //Se deja el array vacio entonces este mensaje se muestra solo la primera vez que carguemos la pag

    //SEGUNDO

    useEffect(() => {
        if (x === 10) {
            alert("10 es mucho")
        }

    }
    ) //No se deja el array, este alert se ejecuta la primera vez y despues de cada render
    //El if aca hace que solo se muestre si el estado X es === 10

//TERCERO
    useEffect(() => {
        if (x === 10) {
            alert("10 es mucho")
        }
 
    }, [x]) // Se pone el estado que quiero "seguir", entonces este ciclo va a monitorear solo el estado asignado.
    //en este caso, solo se vaa ver el alert si x es ==10, pero si yo renderizo otro estado, no se vuelve a mostrar
    


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
