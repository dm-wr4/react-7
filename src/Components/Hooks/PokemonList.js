import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = (props) => {
  const [pokemon, setPokemon] = useState([])
  const [number, setNumber] = useState(0)
  const [pokemonName, setPokemonName] = useState('')

  /*
    componentDidMount(){
      axios.get('http://pokeapi.co/api/v2/pokemon').then(res => {
        this.setState({
          pokemon: res.data.results
        })
      })
    }
  */

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokemon(res.data.results)
    })
  }, [])

  useEffect(() => {
    if (number) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`).then((res) => {
        setPokemonName(res.data.name)
      })
    }
  }, [number])

  return (
    <div>
      <h2>Your pokemon is: {pokemonName}</h2>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <br />
      {JSON.stringify(pokemon)}
    </div>
  )
}

export default PokemonList
