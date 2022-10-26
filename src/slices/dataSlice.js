import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetails } from '../api'
import { setLoading } from './uiSlice'

const initialState = {
  pokemons: [],
  favorite: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    const pokemonsRes = await getPokemon()
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
    )
    dispatch(setPokemons(pokemonsDetailed))
    dispatch(setLoading(false))
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      if (state.favorite.includes(action.payload)) {
        state.favorite = state.favorite.filter(
          pokemon => pokemon !== action.payload
        )
      } else {
        state.favorite = [...state.favorite, action.payload]
      }
    }
  }
})

export const { setPokemons, setFavorite } = dataSlice.actions

export default dataSlice.reducer
