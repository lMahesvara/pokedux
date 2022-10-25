import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons = [] }) => {
  return (
    <section className='grid flex-1 grid-cols-auto-fit gap-4 '>
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          types={pokemon.types.map(type => type.type.name)}
          id={pokemon.id}
        />
      ))}
    </section>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill({
    id: 1,
    name: 'Bulbasaur',
    types: ['Grass'],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  })
}

export default PokemonList
