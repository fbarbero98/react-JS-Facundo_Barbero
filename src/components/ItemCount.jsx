import React from "react";

export default function ItemCount({ inicial, stock, onAdd }) {
  //Estos son los parametros que le pasamos a la funcion (los recibe desestructurados)

  const [count, setCount] = useState(inicial);

  const suma = () => { //"Suma" se le asigna al boton "+" con onClick, entonces cuando se clickea, se suma 1 al "count" que es el contador que luego deberia añadirse al carrito
    if (count < stock) {
      setCount = count + 1;
    }
    else{
        alert("No hay mas stock disponible")
    }
  }
    
const resta = () =>{
        if (count > inicial) {
            setCount = count - 1;
          }
          else{
              alert("Tiene que haber al menos 1 producto")
    }
};
const reset = () => {
    setCount = inicial
}



  return (
    <div>
      <h2>{count}</h2>
      <button onClick={suma}>+</button> 
      <button onClick={resta}>-</button>
      <button onClick={() => {onAdd(count); reset }}>Agregar al carrito</button>
    </div>
  );
}
//En suma y resta las funciones se pasan sin() xq sino se ejecutarian sin hacer el boton.
//En onAdd si se pasan con () xq tenemos que pasarle un parametro. Entonces primero hacemos un callback () => (...) y ahi pasamos onAdd
