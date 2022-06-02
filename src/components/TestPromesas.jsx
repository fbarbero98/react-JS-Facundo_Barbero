import React, {useEffect} from 'react'

export default function TestPromesas() {

    //no suelto codigo xq se renderiza muchas veces, asi que le meto un ciclo de vida.

    useEffect(() => { //Uso el useEffect xq estoy seguro que se va a ejecutar una sola vez (la primera)

        const pagara = new Promise ((resolve , reject) => { //Esta es la forma de hacer una promesa
        setTimeout(() => {
            
            resolve('Salio bien la promesa')
        }, 2000);
        })
        console.log(pagara)
        setTimeout(() => {
            console.log(pagara)
        }, 3000);
    }, []) //Esto es para que solo se ejecute una sola vez


    return (
        <>
        </>
    )
}
