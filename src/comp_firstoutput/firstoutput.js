import { Card } from "../comp_card/card";
import pikachu from "./pikachu.png";
import graveler from "./graveler.png";
import "./firstoutput.css";

export function FirstOutput() {
  const array = ["electric"];
  const array2 = ["rock", "ground"];
  return (
    <div className="firstOutputContainer">
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
        typeOne={"rock"}
        name={"graveler"}
        id={75}
        height={10}
        weight={1050}
        imgUrl={graveler}
        array={array2}
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
        typeOne={"rock"}
        name={"graveler"}
        id={75}
        height={10}
        weight={1050}
        imgUrl={graveler}
        array={array2}
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
        typeOne={"rock"}
        name={"graveler"}
        id={75}
        height={10}
        weight={1050}
        imgUrl={graveler}
        array={array2}
      />
    </div>
  );
}
