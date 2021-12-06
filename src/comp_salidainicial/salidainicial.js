import { useEffect, useState } from "react";
import { Card } from "../comp_card/card";

let pokeId = 0;
let pokeImg = "";
let pokeWeight = 0;
let pokeHeight = 0;
let pokeType = [];
let firstType = "";

export function Salidainicial() {
  const [pokeName, setPokename] = useState("");

  const fetchPok = async (name) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let pokeArray = await data.json();
    pokeId = pokeArray.id;
    pokeHeight = pokeArray.height;
    pokeWeight = pokeArray.weight;
    pokeType = [];
    pokeArray.types.map((i) => {
      return pokeType.push(i.type.name);
    });
    firstType = pokeType[0];
    pokeImg = pokeArray.sprites.other["official-artwork"].front_default;
    setPokename(pokeArray.name);
  };

  useEffect(() => {
    let randNum = Math.round(Math.random() * 100 + Math.random() * 10);
    fetchPok(randNum);
  }, []);

  return (
    <div>
      <ul>
        <li>
          {
            <Card
              typeOne={firstType}
              name={pokeName}
              id={pokeId}
              height={pokeHeight}
              weight={pokeWeight}
              imgUrl={pokeImg}
              array={pokeType}
            />
          }
        </li>
      </ul>
    </div>
  );
}
