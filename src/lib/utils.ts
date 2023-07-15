import pokemons from "@/data/pokemons.json"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Pokemon } from "./getPokemon"
import { PokemonSpecies } from "./getSpecies"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getRandomPokemonId() {
  return Math.floor(Math.random() * pokemons.length + 1)
}

export function createQueryString(
  params: Record<string, string | number | null>,
  searchParams?: string
) {
  const newSearchParams = new URLSearchParams(searchParams?.toString())

  for (const [key, value] of Object.entries(params)) {
    if (value === null) {
      newSearchParams.delete(key)
    } else {
      newSearchParams.set(key, String(value))
    }
  }

  return newSearchParams.toString()
}

export const getStats = ({
  species,
  pokemon,
}: {
  species: PokemonSpecies
  pokemon: Pokemon
}) => ({
  species: species?.genera?.find((l) => l.language.name === "en")?.genus,
  habitat: capitalize(species?.habitat?.name),
  height: pokemon?.height?.toString().padEnd(1, ".0") + " m",
  weight: (pokemon?.weight / 10).toFixed(1) + " kg",
  abilities: pokemon?.abilities?.map(({ ability }) => capitalize(ability.name)),
  baseExperience: pokemon?.base_experience.toString(),
  catchRate: ((species?.capture_rate / 255) * 100).toFixed(1) + "%",
  growthRate: capitalize(species?.growth_rate.name),
})
