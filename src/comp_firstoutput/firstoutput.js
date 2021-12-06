import { Card } from "../comp_card/card";
import pikachu from "./pikachu.png";
import graveler from "./graveler.png";
import squirtle from "./squirtle.png";
import bulbasaur from "./bulbasaur.png";
import charmander from "./charmander.png";
import gastly from "./gastly.png";
import "./firstoutput.css";

export function FirstOutput() {
  const array = ["electric"];
  const array2 = ["rock", "ground"];
  return (
    <div className="firstOutputContainer">
      <Card
        typeOne={"grass"}
        name={"bulbasaur"}
        id={1}
        height={0.7}
        weight={6.9}
        imgUrl={bulbasaur}
        array={["grass", "poison"]}
      />
      <Card
        typeOne={"fire"}
        name={"charmander"}
        id={4}
        height={0.6}
        weight={8.5}
        imgUrl={charmander}
        array={["fire"]}
      />
      <Card
        typeOne={"water"}
        name={"squirtle"}
        id={7}
        height={0.5}
        weight={9.0}
        imgUrl={squirtle}
        array={["water"]}
      />

      <Card
        typeOne={"rock"}
        name={"graveler"}
        id={75}
        height={10}
        weight={1050}
        imgUrl={graveler}
        array={array2}
      />
      <Card
        typeOne={"electric"}
        name={"pikachu"}
        id={25}
        height={1}
        weight={5}
        imgUrl={pikachu}
        array={array}
      />
      <Card
        typeOne={"ghost"}
        name={"gastly"}
        id={92}
        height={1.3}
        weight={0.1}
        imgUrl={gastly}
        array={["ghost", "poison"]}
      />
    </div>
  );
}
