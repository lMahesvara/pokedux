import {
  SET_FAVORITE,
  SET_LOADING,
  SET_POKEMONS
} from '../actions/types'

const initialState = {
  pokemons: [],
  loading: true,
  favorite: []
}

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }
    case SET_FAVORITE:
      if (state.favorite.includes(action.payload)) {
        return {
          ...state,
          favorite: state.favorite.filter(
            pokemon => pokemon !== action.payload
          )
        }
      }
      return {
        ...state,
        favorite: [...state.favorite, action.payload]
      }

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state
  }
}
