import React from 'react'
import { SimplePokemon } from '..'
import { PokemonCard } from './PokemonCard'

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {
      pokemons && pokemons.map((pokemons) => (
        <PokemonCard key={pokemons.id} pokemons={pokemons} />
      ))
    }
  </div>
  )
}
