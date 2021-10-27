import pokeball from "./Pokeball.png";
import "./title.css";

export const Title = () => (
  <>
    <div className="page__title">
      <img className="page__title--icon" src={pokeball} alt="pokeball"></img>
      <div className="page__title--title">My Pokédex</div>
    </div>
  </>
);
