import { PokemonCard } from "@/components/pokemon"
import { Shell } from "@/components/shell"
import { getPokemons } from "@/lib/api"
import { getPokemon } from "@/lib/getPokemon"
import Link from "next/link"
import { notFound } from "next/navigation"

// import Image from "next/image";

export default async function Pokemons() {
  const pokemons = await getPokemons({})

  if (!pokemons) {
    notFound()
  }

  const pokemonsWithDetails = await Promise.all(
    pokemons.results.map(({ name }) => getPokemon(name))
  )

  return (
    <Shell>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemons.results.map(({ name }, i) => (
          <PokemonCard key={name} pokemon={pokemonsWithDetails[i]} />
        ))}
      </div>
    </Shell>
  )
}
