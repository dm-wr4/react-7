import React, { useState } from 'react'

const MovieList = (props) => {
  const [list, setList] = useState([
    'Babe Pig in the City',
    'Pride and Prejudice',
    'Fury',
  ])
  const [userInput, setUserInput] = useState('')

  const addMovieToList = () => {
    const newList = [...list, userInput]
    setList(newList)
    setUserInput('')
  }

  return (
    <div>
      {list.map((movie) => (
        <h2>{movie}</h2>
      ))}
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={addMovieToList}>Add Movie</button>
    </div>
  )
}

export default MovieList
