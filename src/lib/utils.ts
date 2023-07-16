import pokemons from "@/data/pokemons.json"
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Stat } from "./getPokemon"

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

export function findStatValue(stats: Stat[], statName: string) {
  const stat = stats.find((stat) => stat.stat.name === statName)
  return stat ? stat.base_stat : null
}

export const getStats = (stats: Stat[]) => ({
  hp: findStatValue(stats, "hp"),
  attack: findStatValue(stats, "attack"),
  defense: findStatValue(stats, "defense"),
  specialAttack: findStatValue(stats, "special-attack"),
  specialDefense: findStatValue(stats, "special-defense"),
  speed: findStatValue(stats, "speed"),
})

export async function sleep(time = 3000) {
  await new Promise((resolve) => {
    return setTimeout(resolve, time)
  })
}
