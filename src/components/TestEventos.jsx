import React from "react";
import { Link } from "react-router-dom";

export default function TestEventos() {
  function handleClickDiv(e, id) {
    alert("Clickeaste handleClickDiv " + id);
    console.log(e);
  }

  return (
    <>
      <div onClick={(e) => handleClickDiv(e, 1)} style={{ border: "1px solid red" }}>
        TestEventos 1<br />
        <Link to="/home">Volver al home bro</Link>
      </div>
      <div onClick={(e) => handleClickDiv(e, 2)} style={{ border: "1px solid red" }}>
        TestEventos 2<br />
        <Link to="/home">Volver al home bro</Link>
      </div>
    </>
  );
}
