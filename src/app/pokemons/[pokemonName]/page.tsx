import { Header } from "@/components/header"
import PokemonTypes from "@/components/pokemon-types"
import { Shell } from "@/components/shell"
import { getPokemons } from "@/lib/api"
import { getPokemon } from "@/lib/getPokemon"
import { getPokemonSpecies } from "@/lib/getSpecies"
import { capitalize } from "@/lib/utils"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    pokemonName: string
  }
}

export async function generateStaticParams() {
  const pokemons = await getPokemons({})

  if (!pokemons) {
    notFound()
  }

  return pokemons.results.map(({ name }) => ({ pokemonName: name }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const pokemon = await getPokemon(params.pokemonName)

  if (!pokemon?.name) {
    return {
      title: "Pokemon not found",
    }
  }

  return {
    title: capitalize(pokemon.name),
  }
}

export default async function PokemonPage({ params }: PageProps) {
  const pokemon = await getPokemon(params.pokemonName)

  if (!pokemon) {
    notFound()
  }

  const pokemonSpecies = await getPokemonSpecies(pokemon.species.name)

  if (!pokemonSpecies) {
    notFound()
  }

  return (
    <Shell>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <img
          src={pokemon.sprites.front_default}
          alt="Pokemon"
          width="150px"
          height="150px"
        />

        <div className="flex flex-col gap-6 ">
          <Header title={capitalize(pokemon.name)} />

          <div>{pokemonSpecies.flavor_text_entries[0].flavor_text}</div>

          <div>
            <div>
              <span>Height</span>
              <span>{pokemon.height}</span>
            </div>
            <div>
              <span>Weight</span>
              <span>{pokemon.weight}</span>
            </div>
          </div>

          <div>
            <div>Abilites</div>
            {pokemon.abilities.map(({ ability }) => (
              <div key={ability.name}>{ability.name}</div>
            ))}
          </div>

          <PokemonTypes types={pokemon.types.map(({ type }) => type.name)} />
        </div>
      </div>
    </Shell>
  )
}
