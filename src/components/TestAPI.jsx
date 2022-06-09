import React, { useState, useEffect } from "react";
export default function TestAPI() {
 
  
  const [poke, setPoke] = useState([])
  useEffect( () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2&offset=0") //El fetch no responde directamente con el resultado, sino que a su vez viene con otra promesa.
      .then((response) => response.json())
      .then((response) => setPoke(response.results))
      .catch(error => console.error('Error: ', error))
      .finally(console.log(poke))

    //Es como escribir esto aca abajo:
    /*fetch('https://api.coder.com.ar/user/1234')
  .then(function(response) {
    return response.json();
  })
  .then(function(user) {
    console.log(user);
  });
*/

  }, []);

  
  return (

<>
<div>{poke}</div>
</>


  );
}
