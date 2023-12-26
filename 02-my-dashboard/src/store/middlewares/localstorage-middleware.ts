// import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";



// export const localStorageMiddleware = ( state: MiddlewareAPI ) => {

//     return ( next: Dispatch ) => ( action: Action) => {
//         next(action)

//         if(action.type === 'pokemons/toggleFavorite') {
//             localStorage.setItem('favorites-pokemons', JSON.stringify(state.getState().favorites))
//         }
//         // console.log({ state: state.getState()  });
        
//     }

// }

import { Action, Middleware } from "@reduxjs/toolkit";

import { RootState } from "..";

export const localStorageMiddleware: Middleware = (store) => {

  return (next) => (action) => {

    const result = next(action);

    const { type } = action as Action;

    if (type === "pokemons/toggleFavorite") {

      const { pokemons } = store.getState() as RootState;

      localStorage.setItem("favoritePokemons", JSON.stringify(pokemons));

      return;

    }

    return result;

  };

};
