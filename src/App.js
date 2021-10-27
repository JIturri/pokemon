/*--PENDIENTE------------------------------------------
Mayúscula primera letra nombre.
Imagen decente.
Salida inicial con 6 pokemons.
Tipos - colores (TODOS).
Ceros delante del Id.
Buscar con mayúsculas o minúsculas.
Quitar el botón buscar. Búsqueda automática.

COMPONENTES
  -título OK
  -buscador OK
  -main cards OK
  -card OK
  -footer OK
---------------------------------------------------------*/

import React, { useState, useEffect } from "react";
import "./App.css";

import { Search } from "./comp_search/buscar";
import { Title } from "./comp_title/title";
import { Card } from "./comp_card/card";
import { Footer } from "./comp_footer/footer";

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

  const handleEvent = (e) => setPokName(e.target.value);

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
      <Title />
      <div className="page__line"></div>
      <Search type="text" inputfunc={handleEvent} clicfunc={obtenerDatos} />
      <div className="main__cards">
        <Card
          typeOne={arrayfin[0]}
          name={pokeName}
          id={pokeId}
          height={pokeHeight}
          weight={pokeWeight}
          imgUrl={pokeImg}
          array={arrayfin}
        />
        <Card
          typeOne={arrayfin[0]}
          name={pokeName}
          id={pokeId}
          height={pokeHeight}
          weight={pokeWeight}
          imgUrl={pokeImg}
          array={arrayfin}
        />
        <Card
          typeOne={arrayfin[0]}
          name={pokeName}
          id={pokeId}
          height={pokeHeight}
          weight={pokeWeight}
          imgUrl={pokeImg}
          array={arrayfin}
        />
        <Card
          typeOne={arrayfin[0]}
          name={pokeName}
          id={pokeId}
          height={pokeHeight}
          weight={pokeWeight}
          imgUrl={pokeImg}
          array={arrayfin}
        />
      </div>
      <div className="page__line--2"></div>
      <Footer />
    </div>
  );
}

export default App;
