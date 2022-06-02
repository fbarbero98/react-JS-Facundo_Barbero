import React, { useEffect, useState } from 'react'

export default function TestPromesas() {

    //no suelto codigo xq se renderiza muchas veces, asi que le meto un ciclo de vida.


    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [resultado, setResultado] = useState()


    useEffect(() => { //Uso el useEffect xq estoy seguro que se va a ejecutar una sola vez (la primera)

        setLoading(true)
        setError(false)
        setResultado()
        const pagara = new Promise((resolve, reject) => { //Esta es la forma de hacer una promesa
            setTimeout(() => {

                resolve('Salio bien la promesa') //Esto devuelve si la promesa se cumple
                reject('Salio mal la promesa') //Esto devuelve si la promesa se cumple
            }, 5000);
        })


        pagara
            .then((result) => {
                setResultado(result);
                setLoading(false)
                console.log('entro el then');
            })
            .catch((error) => { //Cuando se resuelva, fijate que resultado hay y mostra
                setError(true);
                setLoading(false);
                console.log(error);
                console.log('entro el catch')
            })
    }, []) //Esto es para que solo se ejecute una sola vez


    return (
        <>
            <div>{loading && 'Loading...'}</div>
            <div>{resultado && 'Salio bien'}</div>
            <div>{error && 'hubo un error'}</div>
        </>
    )
}
