import React from 'react'

export default function ListadoMostrar({ alumnos }) {
  const { nombre, edad } = alumnos
  console.log(alumnos)
  return (
    <>
      {alumnos.map((alumno) => (
        <p>Nombre del alumno :{nombre}, Edad del alumno :{edad}</p>
      ))}
    </>
  );
}
