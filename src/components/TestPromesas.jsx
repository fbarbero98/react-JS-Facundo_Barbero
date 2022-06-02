import React, {useEffect} from 'react'

export default function TestPromesas() {

    //no suelto codigo xq se renderiza muchas veces, asi que le meto un ciclo de vida.

    useEffect(() => { //Uso el useEffect xq estoy seguro que se va a ejecutar una sola vez (la primera)

        const pagara = new Promise ((resolve , reject) => { //Esta es la forma de hacer una promesa
        setTimeout(() => {
            
            reject('Salio mal la promesa') //Esto devuelve si la promesa se cumple
        }, 2000);
        })


        pagara
        
        .then((result) =>{
            console.log(result) //No se ve porque solo hay un reject
        })
        
        .catch((error) =>{ //Cuando se resuelva, fijate que resultado hay y mostra
            
            console.log("El console.log de 'catch' es " + error); //Se ve aca lo que dice en el reject
            console.log("El console.log de 'pagara' es " + pagara) //se ve aca el object promise (Que seria la promesa)
        }) 
    }, []) //Esto es para que solo se ejecute una sola vez


    return (
        <>
        </>
    )
}
