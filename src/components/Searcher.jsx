import React from 'react'

const Searcher = () => {
  return (
    <section className="flex justify-center items-center">
      <input
        type="search"
        placeholder="Buscar ..."
        className=" mx-auto p-2 border-2 border-gray-300 rounded-md my-4"
      />
    </section>
  )
}

export default Searcher
