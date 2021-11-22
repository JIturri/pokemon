/*--PENDIENTE------------------------------------------
Mayúscula primera letra nombre. OK
Imagen decente. OK
Salida inicial con 6 pokemons.
Tipos - colores (TODOS).
Ceros delante del Id.OK
Buscar con mayúsculas o minúsculas. OK
Quitar el botón buscar. Búsqueda automática. OK

COMPONENTES
  -título OK
  -buscador OK
  -main cards OK
  -card OK
  -footer OK

11_11 TAREAS
  -Manejar busqueda errónea - Componente Error
---------------------------------------------------------*/

import React, { useState, useEffect } from "react";
import "./App.css";
import { Search } from "./comp_search/buscar";
import { Title } from "./comp_title/title";
import { Card } from "./comp_card/card";
import { Footer } from "./comp_footer/footer";
import { FirstOutput } from "./comp_firstoutput/firstoutput";

let pokeName = "o";
let pokeId = 0;
let pokeImg;
let pokeWeight;
let pokeHeight;
let pokeType = [];

function App() {
  let arrayfin = [];

  const [pokName, setPokName] = useState("");

  const handleEvent = (e) => {
    setPokName(e.target.value.toLowerCase());
  };

  useEffect(() => {
    console.log("render");
    if (pokName.length > 3) {
      fetchPok(pokName);
    }
    console.log(pokName);
  }, [pokName]);

  const fetchPok = async (name) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokeArray = await data.json();
    pokeName = pokeArray.name;
    pokeId = pokeArray.id;
    pokeHeight = pokeArray.height;
    pokeWeight = pokeArray.weight;
    pokeType = pokeArray.types;
    pokeImg = pokeArray.sprites.other["official-artwork"].front_default;
    setPokName("I");
    console.log(pokName);
  };

  const typeArray = (array) => {
    array.map((i) => {
      return arrayfin.push(i.type.name);
    });
  };
  typeArray(pokeType);

  return (
    <div className="page">
      <Title />
      <div className="page__line"></div>
      <Search type="text" inputfunc={handleEvent} />
      <div className="main__cards">
        {pokName === "" ? (
          <FirstOutput />
        ) : pokName !== "" ? (
          <>
            <Card
              typeOne={arrayfin[0]}
              name={pokeName}
              id={pokeId}
              height={pokeHeight}
              weight={pokeWeight}
              imgUrl={pokeImg}
              array={arrayfin}
            />
          </>
        ) : (
          <h1>Error</h1>
        )}
      </div>
      <div className="page__line--2"></div>
      <Footer />
    </div>
  );
}

export default App;
