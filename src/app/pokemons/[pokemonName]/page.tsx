import { Header } from "@/components/header"
import { PokemonStat } from "@/components/pokemon-stat"
import PokemonTypes from "@/components/pokemon-types"
import { Shell } from "@/components/shell"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { getPokemon } from "@/lib/getPokemon"
import { getPokemonSpecies } from "@/lib/getSpecies"
import { capitalize, getStats } from "@/lib/utils"
import { ImageOff } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    pokemonName: string
  }
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

  const pokemonSpecies = await getPokemonSpecies(pokemon.species.name)

  return {
    title: capitalize(pokemon.name),
    description: pokemonSpecies.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    )?.flavor_text,

    openGraph: {
      images: [{ url: pokemon.sprites.front_default }],
    },
    twitter: {
      images: [pokemon.sprites.front_default],
    },
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

  const { hp, attack, defense, specialAttack, specialDefense, speed } =
    getStats(pokemon.stats)

  return (
    <Shell>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <AspectRatio ratio={4 / 3}>
            {pokemon.sprites.other.dream_world.front_default ??
            pokemon.sprites.front_default ? (
              <Image
                src={
                  pokemon.sprites.other.dream_world.front_default ??
                  pokemon.sprites.front_default
                }
                alt={pokemon.name}
                fill
                className="object-fill"
              />
            ) : (
              <ImageOff className="h-1/2 w-1/2" />
            )}
          </AspectRatio>
        </div>

        <div className="flex flex-col gap-6 ">
          <Header
            title={capitalize(pokemon.name)}
            description={`#${pokemon.id}`}
          />
          <PokemonTypes types={pokemon.types.map(({ type }) => type.name)} />

          <div>
            {
              pokemonSpecies.flavor_text_entries.find(
                (entry) => entry.language.name === "en"
              )?.flavor_text
            }
          </div>

          <div className="flex flex-col gap-2">
            <PokemonStat statName="Hp" value={hp} />
            <PokemonStat statName="Attack" value={attack} />
            <PokemonStat statName="Defense" value={defense} />
            <PokemonStat statName="Special Attack" value={specialAttack} />
            <PokemonStat statName="Special Defense" value={specialDefense} />
            <PokemonStat statName="Speed" value={speed} />
          </div>
        </div>
      </div>
    </Shell>
  )
}
