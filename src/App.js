
import './App.css';
import imagen from "./bulbasaur.png";
import peso from "./weight.png";
import altura from "./height.png";
import pokeball from "./Pokeball.png";
import lupa from "./lupa.png";
import giticon from "./giticon.png";
import pokeapi from "./pokeapi.png";

function App() {
  return (
   <div className="page">
      <div className="page__title">
         <img className="page__title--icon" src={pokeball} alt="pokeball"></img>
         <div className="page__title--title">My Pokédex</div>
      </div>
      <div className="page__line"></div>
      <div className="page__search">
         <img className="page__search--icon" src={lupa} alt="lupa"></img>
         <div className="page__search--input">buscar</div>
      </div>
      <div className="main__cards">
         <div className="card">
            <div className="card-name-number">
               <div className="name">Bulbasaur</div>
               <div className="number">#001</div>
            </div>
            <div className="card-information">
               <div class="hole"></div>
               <img className="image" src={imagen} alt="imagen"></img>
               <div className="content">
                  <div className="type">
                     <div className="type-1">Grass</div>
                     <div className="type-2">Poison</div>
                  </div>
                  <div className="info-about">About</div>
                  <div className="measures">
                     <div className="weight">
                        <div className="weight-icon-number">
                           <img className="icon" src={peso} alt="pesoicono"></img>
                           <div className="value">6,9 kg</div>
                        </div>
                        <div className="weight-name">Weight</div>
                     </div>
                     <div className="line"></div>
                     <div className="weight">
                        <div className="weight-icon-number">
                           <img className="icon" src={altura} alt="alturaicono"></img>
                           <div className="value">0,7 m</div>
                        </div>
                        <div className="weight-name">Height</div>
                     </div>
                  </div>
                  <div className="text">There is a plant seed on its back right 
                  from the day this Pokémon is born. The seed slowly grows larger.
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
