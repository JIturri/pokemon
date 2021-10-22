import React from "react";
import lupa from "./lupa.png";
import "./buscar.css";

function Buscador(func) {
  //const [pokName, setPokName] = useState("")

  return (
    <>
      <img className="page__search--icon" src={lupa} alt="lupa"></img>
      <input type="text" className="page__search--input" onChange={func()} />
    </>
  );
}

export default Buscador;
