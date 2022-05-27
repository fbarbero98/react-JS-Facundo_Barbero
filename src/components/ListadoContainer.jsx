import React from 'react'
import ListadoMostrar from './ListadoMostrar'

export default function ListadoContainer() {
  const alumnos = [{ id: 0,  nombre: "alumno 1", edad: 20 }, {id: 1, nombre: "alumno 2", edad: 22 }, { id: 2, nombre: "alumno 3", edad: 24 }]
  alumnos.push({ id: 3, nombre: "alumno 4", edad: 26 })
  return (<ListadoMostrar alumnos={alumnos} />)

}
