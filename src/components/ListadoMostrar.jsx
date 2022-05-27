import React from 'react'


export default function ListadoMostrar({ alumnos }) {
  console.log(alumnos)
  return (
    <>
      {alumnos.map((alumno, index) => {
        const { nombre, edad } = alumno
        return <p key={index}>Nombre del alumno : {nombre}, Edad del alumno : {edad}</p>
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