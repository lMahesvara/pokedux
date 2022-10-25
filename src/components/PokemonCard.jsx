import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../actions'
import StarButton from './StarButton'

const PokemonCard = ({ name, image, types = [], id }) => {
  const dispatch = useDispatch()

  const handleFavorite = () => {
    dispatch(setFavorite(id))
  }

  return (
    <article className='relative bg-green-400 text-center '>
      <img
        className='h-48 w-full px-4'
        src={
          image ||
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        }
        alt={name}
      />
      <StarButton onClick={() => handleFavorite()} />
      <h2>{name}</h2>
      <p>{types.join(', ') || 'Grass'}</p>
    </article>
  )
}

PokemonCard.defaultProps = {
  pokemon: {
    name: 'Bulbasaur',
    types: ['Grass'],
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
  }
}

export default PokemonCard
