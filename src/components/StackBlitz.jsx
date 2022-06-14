import React from 'react'

export default function StackBlitz() {
 function handleKeyDown(e) {
    const vocales = "aeiou"

    console.log(e)
    if (vocales.includes(e.key)){ //Esto lo que hace es sacar la informacion del evento y asi sabemos que lo que necesitamos para saber que tecla se presiona es "e.key"
        //Lo que hace este if es, si la tecla que presionamos (e.key) incluye alguina de las vocales (las reconoce como array), entonces se hace el prevent default (no se presiona) y un alert
        e.preventDefault(); //Esto cancela el evento por defecto (el onkeydown), si asignas otro evento eso no se cancela.
        alert(`presionaste la ${e.key} que no se puede usar! `)
    }
 }

  return (
    <div>
        <input type= "text"onKeyDown={handleKeyDown} />
    </div>
  )
}
