import Bulbasaur from "./bulbasaur.png";
import Squirtle from "./squirtle.png";
import Pikachu from "./pikachu.png";

export const pokelist = [
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