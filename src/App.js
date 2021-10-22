/*--PENDIENTE------------------------------------------
Mayúscula primera letra nombre.
Imagen decente.
Salida inicial con 6 pokemons.
Tipos - colores (TODOS).
Ceros delante del Id.
Buscar con mayúsculas o minúsculas.
Quitar el botón buscar. Búsqueda automática.

COMPONENTES
---------------------------------------------------------*/

import React, { useState, useEffect } from "react";
import "./App.css";
//import {pokelist} from './pokelist.js';
import peso from "./weight.png";
import altura from "./height.png";
import pokeball from "./Pokeball.png";
import lupa from "./comp_buscador/lupa.png";
import giticon from "./giticon.png";
import pokeapi from "./pokeapi.png";
//import Buscador from "./comp_buscador/buscar.js";
//import pokName from "./comp_buscador/buscar.js"

function App() {
  //------------------------------------------------------
  let pokUrl = "";
  let arrayfin = [];

  const [pokListArr, setPokListArr] = useState([]);
  const [pokName, setPokName] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [pokeId, setPokeId] = useState();
  const [pokeWeight, setPokeWeight] = useState();
  const [pokeHeight, setPokeHeight] = useState();
  const [pokeImg, setPokeImg] = useState("");
  const [pokeType, setPokeType] = useState([]);

  useEffect(() => {
    fetchInitialData();
    //console.log('useEffect ejecutado')
  }, []);

  const fetchInitialData = async () => {
    const initialData = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1120&offset=0"
    );
    const initialPok = await initialData.json();
    setPokListArr(initialPok.results);
  };

  /*-------Buscador input----------------*/

  /*---------------------------------*/

  const fetchPok = async () => {
    const data = await fetch(pokUrl);
    const pokeArray = await data.json();
    setPokeName(pokeArray.name);
    setPokeId(pokeArray.id);
    setPokeHeight(pokeArray.height);
    setPokeWeight(pokeArray.weight);
    setPokeType(pokeArray.types);
    setPokeImg(pokeArray.sprites.front_default);
  };

  const obtenerDatos = () => {
    //console.log(`obtener datos de ${pokName}`);
    for (let n = 0; n <= 1118; n++) {
      if (pokListArr[n].name === pokName) {
        pokUrl = pokListArr[n].url;
        //console.log(pokUrl);
        fetchPok();
        break;
      }
    }
  };

  const typeArray = (array) => {
    array.map((i) => {
      return (
        //console.log(i.type.name)
        arrayfin.push(i.type.name)
      );
    });
  };
  typeArray(pokeType);

  //------------------------------------------------------------
  return (
    <div className="page">
      <div className="page__title">
        <img className="page__title--icon" src={pokeball} alt="pokeball"></img>
        <div className="page__title--title">My Pokédex</div>
      </div>
      <div className="page__line"></div>
      <div className="page__search">
        <img className="page__search--icon" src={lupa} alt="lupa"></img>
        <input
          type="text"
          className="page__search--input"
          onChange={(event) => setPokName(event.target.value)}
        />
        {/*<Buscador name={setPokName}/>*/}
        <button onClick={obtenerDatos}>buscar</button>
      </div>
      <div className="main__cards">
        <div className={`card ${arrayfin[0]}`}>
          <div className="card-name-number">
            <div className="name">{pokeName}</div>
            <div className="number">{`#${pokeId}`}</div>
          </div>
          <div className="card-information">
            <div class="hole"></div>
            <img className="image" src={`${pokeImg}`} alt="imagen"></img>
            <div className="content">
              <div className="type">
                {arrayfin.map((poketype) => {
                  return (
                    <div className={`${poketype} type-card`}>{poketype}</div>
                  );
                })}
              </div>
              <div className="info-about">About</div>
              <div className="measures">
                <div className="weight">
                  <div className="weight-icon-number">
                    <img className="icon" src={peso} alt="pesoicono"></img>
                    <div className="value">{`${pokeWeight} kg`}</div>
                  </div>
                  <div className="weight-name">Weight</div>
                </div>
                <div className="line"></div>
                <div className="weight">
                  <div className="weight-icon-number">
                    <img className="icon" src={altura} alt="alturaicono"></img>
                    <div className="value">{`${pokeHeight} m`}</div>
                  </div>
                  <div className="weight-name">Height</div>
                </div>
              </div>
              <div className="text">
                {"Aquí va la descripción de cada Pokemon"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page__line--2"></div>
      <div className="page__footer">
        <img className="page__footer--giticon" src={giticon} alt="git"></img>
        <div className="page__footer--line"></div>
        <img className="page__footer--pokeiapi" src={pokeapi} alt="pok"></img>
      </div>
    </div>
  );
}

export default App;
