import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/**
 * { 
 *   favorites: {
 *     '1': {id: 1, name: 'bulbasaur'}, 
 *   }
 * }
 * 
 */

interface PokemonsFavoriteState {
    favorites : {
      [key: string]: SimplePokemon
    }
}

// const getInitialState = (): PokemonsFavoriteState => {
  
//     // if ( typeof localStorage === 'undefined') return {}

//     const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}')
//     return favorites
// }

const initialState: PokemonsFavoriteState = {
    // ...getInitialState(),
    favorites: {}
    // '1': {id: '1', name: 'bulbasaur'},
    // '2': {id: '2', name: 'ivysaur'},
    // '4': {id: '4', name: 'charmander'},
    // '9': {id: '9', name: 'blastoise'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {

        const pokemon = action.payload;
        const { id } = pokemon;
      if (state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = action.payload;
      }
    
      // TODO: No se debe hacer asi en Redux
      localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ))
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer