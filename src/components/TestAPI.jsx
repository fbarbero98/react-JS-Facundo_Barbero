import React, { useEffect } from "react";

export default function TestAPI() {
  useEffect(() => {
    fetch("https://api.coder.com.ar/user/1234") //El fetch no responde directamente con el resultado, sino que a su vez viene con otra promesa.
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

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

  return <div>TestAPI</div>;
}
