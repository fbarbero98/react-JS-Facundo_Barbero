import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div><Link to="/contacto">Ir al contacto bro</Link> <br/>
    <Link to="/testEventos">Ir al testEv bro</Link></div>
  )
}
