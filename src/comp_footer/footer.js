import giticon from "./giticon.png";
import pokeapi from "./pokeapi.png";
import "./footer.css";

export const Footer = () => (
  <>
    <div className="page__footer">
      <img className="page__footer--giticon" src={giticon} alt="git"></img>
      <div className="page__footer--line"></div>
      <img src={pokeapi} alt="pok"></img>
    </div>
  </>
);
