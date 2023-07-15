import { Header } from "@/components/header"
import PaginationButton from "@/components/pagination-button"
import { PokemonCard } from "@/components/pokemon"
import { Shell } from "@/components/shell"
import { getPokemons } from "@/lib/api"
import { getPokemon } from "@/lib/getPokemon"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Explore pokemons!",
}

export default async function Pokemons({ searchParams }: Props) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1
  const limit =
    typeof searchParams.per_page === "string"
      ? Number(searchParams.per_page)
      : 12

  const pokemons = await getPokemons({ page, limit })

  if (!pokemons) {
    notFound()
  }

  const pokemonsWithDetails = await Promise.all(
    pokemons.results.map(({ name }) => getPokemon(name))
  )

  return (
    <Shell>
      <Header title="Pokemons" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemons.results.map(({ name }, i) => (
          <PokemonCard key={name} pokemon={pokemonsWithDetails[i]} />
        ))}
      </div>
      <PaginationButton
        page={page}
        pageCount={Math.ceil(pokemons.count / limit)}
      />
    </Shell>
  )
}
