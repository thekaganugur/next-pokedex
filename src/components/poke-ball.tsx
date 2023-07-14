"use client"

import pokemons from "@/data/pokemons.json"
import { getRandomPokemonId } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import pokeBall from "../../public/ball-game-poke-sport-sports-svgrepo-com.svg"

export function PokeBall() {
  const [pokemonId, setPokemonId] = useState<number>()

  React.useEffect(() => {
    setPokemonId(getRandomPokemonId())
  }, [])

  if (!pokemonId) {
    return (
      <Image
        priority
        src={pokeBall}
        alt="Loading"
        className="h-8 w-8"
        onClick={() => {
          setPokemonId(getRandomPokemonId())
        }}
      />
    )
  }

  return (
    <Link href={`/pokemons/${pokemons[pokemonId]}`}>
      <Image
        priority
        src={pokeBall}
        alt="Explore a random pokemon"
        className="h-8 w-8 hover:animate-shake"
        onClick={() => {
          setPokemonId(getRandomPokemonId())
        }}
      />
    </Link>
  )
}
