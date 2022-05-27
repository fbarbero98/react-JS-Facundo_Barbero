import React from 'react'


export default function ListadoMostrar({ alumnos }) {
  console.log(alumnos)
  const { nombre, edad } = alumno
  return (
    <>
      {alumnos.map((alumno) => {
       
        return <>Nombre del alumno : {nombre}, Edad del alumno : {edad}</p>
      })}
    </>
  );
}
/*export default function ListadoMostrar({ alumnos }) {
  const { nombre, edad } = alumnos
  console.log(alumnos)
  return (
    <>
      {alumnos.map((alumno) => {
      const {nombre, edad} = alumno

      <p>"Nombre del alumno :{nombre}, Edad del alumno :{edad}"</p>
})}
    </>
  );
}
*/
