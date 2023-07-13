import { pokemonClient } from "./api"

export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}
export interface Ability {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}
export interface Form {
  name: string
  url: string
}
export interface Index {
  game_index: number
  version: {
    name: string
    url: string
  }
}
export interface HeldItem {
  item: {
    name: string
    url: string
  }
  version_details: VersionDetail[]
}
export interface VersionDetail {
  rarity: number
  version: {
    name: string
    url: string
  }
}
export interface Mfe {
  move: {
    name: string
    url: string
  }
  version_group_details: {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    version_group: VersionGroup
  }[]
}
export interface MoveLearnMethod {
  name: string
  url: string
}
export interface VersionGroup {
  name: string
  url: string
}
export interface Species {
  name: string
  url: string
}
export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  other: Other
  versions: Versions
}
export interface Other {
  dream_world: {
    front_default: string
    front_female: any
  }
  home: {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  "official-artwork": {
    front_default: string
    front_shiny: string
  }
}
export interface Versions {
  "generation-i": GenerationI
  "generation-ii": GenerationIi
  "generation-iii": GenerationIii
  "generation-iv": GenerationIv
  "generation-v": GenerationV
  "generation-vi": GenerationVi
  "generation-vii": GenerationVii
  "generation-viii": GenerationViii
}
export interface GenerationI {
  "red-blue": RedBlue
  yellow: Yellow
}
export interface RedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface Yellow {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Silver
}
export interface Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}
export interface Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}
export interface Silver {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}
export interface GenerationIii {
  emerald: {
    front_default: string
    front_shiny: string
  }
  "firered-leafgreen": {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  "ruby-sapphire": {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
}

export interface GenerationIv {
  "diamond-pearl": {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  "heartgold-soulsilver": {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  platinum: {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
}

export interface GenerationV {
  "black-white": {
    animated: {
      back_default: string
      back_female: any
      back_shiny: string
      back_shiny_female: any
      front_default: string
      front_female: any
      front_shiny: string
      front_shiny_female: any
    }
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
}

export interface GenerationVi {
  "omegaruby-alphasapphire": {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  "x-y": {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
}

export interface GenerationVii {
  icons: {
    front_default: string
    front_female: any
  }
  "ultra-sun-ultra-moon": {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
}

export interface GenerationViii {
  icons: {
    front_default: string
    front_female: any
  }
}

export interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface Type {
  slot: number
  type: {
    name: PokemonType
    url: string
  }
}

export const pokemonTypes = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "unknown",
  "shadow",
] as const

export type PokemonType = (typeof pokemonTypes)[number]

export function getPokemon(pokemon: string) {
  return pokemonClient<Pokemon>(`pokemon/${pokemon}`)
}
