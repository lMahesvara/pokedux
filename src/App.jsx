import { useEffect } from 'react'
import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Loader from './components/loader/Loader'
import { fetchPokemonsWithDetails } from './slices/dataSlice'

function App() {
  const pokemons = useSelector(
    state => state.data.pokemons,
    shallowEqual
  )
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <>
      <img
        className='mx-auto my-4 w-64'
        src='https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg'
        alt='Pokedux'
      />
      <Searcher />
      {loading ? (
        <Loader />
      ) : (
        <main className='m-4 flex max-w-screen-dk flex-1 flex-col md:mx-auto md:w-11/12'>
          <PokemonList pokemons={pokemons} />
        </main>
      )}
    </>
  )
}

export default App
