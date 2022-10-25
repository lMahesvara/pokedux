import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const StarButton = ({ onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClick = () => {
    setIsFavorite(!isFavorite)
    onClick()
  }

  const icon = isFavorite ? (
    <AiFillStar className='absolute top-2 right-2 h-7 w-7 md:h-7 md:w-7' />
  ) : (
    <AiOutlineStar className='absolute top-2 right-2 h-7 w-7 md:h-7 md:w-7' />
  )
  return <button onClick={handleClick}>{icon}</button>
}

export default StarButton
