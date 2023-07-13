import { pokemonClient } from "./api"

export interface PokemonSpecies {
  base_happiness: number
  capture_rate: number
  color: Color
  egg_groups: EggGroup[]
  evolution_chain: EvolutionChain
  evolves_from_species: any
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: any[]
  forms_switchable: boolean
  gender_rate: number
  genera: Genera[]
  generation: Generation
  growth_rate: GrowthRate
  habitat: Habitat
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: Name[]
  order: number
  pal_park_encounters: PalParkEncounter[]
  pokedex_numbers: PokedexNumber[]
  shape: Shape
  varieties: Variety[]
}

export interface Color {
  name: string
  url: string
}

export interface EggGroup {
  name: string
  url: string
}

export interface EvolutionChain {
  url: string
}

export interface FlavorTextEntry {
  flavor_text: string
  language: {
    name: string
    url: string
  }
  version: {
    name: string
    url: string
  }
}

export interface Genera {
  genus: string
  language: {
    name: string
    url: string
  }
}

export interface Generation {
  name: string
  url: string
}

export interface GrowthRate {
  name: string
  url: string
}

export interface Habitat {
  name: string
  url: string
}

export interface Name {
  language: {
    name: string
    url: string
  }
  name: string
}

export interface PalParkEncounter {
  area: {
    name: string
    url: string
  }
  base_score: number
  rate: number
}

export interface PokedexNumber {
  entry_number: number
  pokedex: Pokedex
}

export interface Pokedex {
  name: string
  url: string
}

export interface Shape {
  name: string
  url: string
}

export interface Variety {
  is_default: boolean
  pokemon: {
    name: string
    url: string
  }
}

export function getPokemonSpecies(pokemonSpecies: string) {
  return pokemonClient<PokemonSpecies>(`pokemon-species/${pokemonSpecies}`)
}
