
import './App.css';
import Bulbasaur from "./bulbasaur.png";
import Squirtle from "./squirtle.png";
import Pikachu from "./pikachu.png";
import peso from "./weight.png";
import altura from "./height.png";
import pokeball from "./Pokeball.png";
import lupa from "./lupa.png";
import giticon from "./giticon.png";
import pokeapi from "./pokeapi.png";

const pokelist = [
   {
      "name": "Bulbasaur",
      "id": 1,
      "weight": 6.9,
      "height": 0.7,
      "image": Bulbasaur,
      "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      "types": [
         {
            "name": "grass"
         },
         {
            "name": "poison"
         }
      ]
   },
   {
      "name": "Pikachu",
      "id": 25,
      "weight": 6.0,
      "height": 0.4,
      "image": Pikachu,
      "description": "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
      "types": [
         {
            "name": "electric"
         }
      ]
   },
   {
      "name": "Squirtle",
      "id": 7,
      "weight": 9.0,
      "height": 0.5,
      "image": Squirtle,
      "description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      "types": [
         {
            "name": "water"
         }
      ]
   }
]

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
         <input type="text" className="page__search--input"/>
      </div>
      <div className="main__cards">
         {pokelist.map( (poke) => {
            const firstpoketype = poke.types[0].name
            return(
               <div className={`card ${firstpoketype}`} >
                  <div className="card-name-number">
                     <div className="name">{poke.name}</div>
                     <div className="number">{`#${poke.id}`}</div>
                  </div>
                  <div className="card-information">
                     <div class="hole"></div>
                     <img className="image" src={`${poke.image}`} alt="imagen"></img>
                     <div className="content">
                     <div className="type">
                           {poke.types.map((poketype) => {
                              return (
                                 <div className={`${poketype.name} type-card`}>{poketype.name}</div>    
                              )
                           })}                      
                     </div>   
                     <div className="info-about">About</div>    
                        <div className="measures">
                           <div className="weight">
                              <div className="weight-icon-number">
                                 <img className="icon" src={peso} alt="pesoicono"></img>
                                 <div className="value">{`${poke.weight} kg`}</div>
                              </div>
                              <div className="weight-name">Weight</div>
                           </div>
                           <div className="line"></div>
                           <div className="weight">
                              <div className="weight-icon-number">
                                 <img className="icon" src={altura} alt="alturaicono"></img>
                                 <div className="value">{`${poke.height} m`}</div>
                              </div>
                              <div className="weight-name">Height</div>
                           </div>
                        </div>
                        <div className="text">{poke.description}</div>
                     </div>
                  </div>
               </div>
            
            
            )
         })} 
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
