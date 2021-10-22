import React from "react";
import lupa from "./lupa.png";
import "./buscar.css";

export const Search = (props) => (
  <>
    <img className="page__search--icon" src={lupa} alt="lupa"></img>
    <input
      type={props.type}
      className="page__search--input"
      onChange={props.inputfunc}
    />
    <button onClick={props.clicfunc}>buscar</button>
  </>
);
