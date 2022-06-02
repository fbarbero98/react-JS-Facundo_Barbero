import React, {useEffect} from 'react'

export default function TestPromesas() {

    //no suelto codigo xq se renderiza muchas veces, asi que le meto un ciclo de vida.

    useEffect(() => { //Uso el useEffect xq estoy seguro que se va a ejecutar una sola vez (la primera)

        const pagara = new Promise ((resolve , reject) => { //Esta es la forma de hacer una promesa
        setTimeout(() => {
            
            resolve('Salio bien la promesa') //Esto devuelve si la promesa se cumple
        }, 2000);
        })
        console.log(pagara) //Este console.log se va a ver en pending xq no se completo todavia
        setTimeout(() => {
            console.log(pagara) //Este console.log se va a ver como fulfilled
        }, 6000); 


        pagara.then((result) =>{ //Cuando se resuelva, fijate que resultado hay y mostra
            
            console.log("El console.log de 'result' es " + result); //Se ve aca lo que dice en el resolve
            console.log("El console.log de 'pagara' es " + pagara) //se ve aca el object promise (Que seria la promesa)
        }) 
    }, []) //Esto es para que solo se ejecute una sola vez


    return (
        <>
        </>
    )
}
