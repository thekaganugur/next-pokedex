import { PokemonCard, PokemonCardSkeleton } from "@/components/pokemon"
import { Shell } from "@/components/shell"
import { Button } from "@/components/ui/button"
import pokemonsData from "@/data/pokemons.json"
import { getPokemons } from "@/lib/api"
import { getPokemon } from "@/lib/getPokemon"
import { Github } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

function HighlightedPokemonsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <PokemonCardSkeleton key={i} />
      ))}
    </div>
  )
}

async function HighlightedPokemons() {
  const limit = 4
  const pageCount = Math.ceil(pokemonsData.length / limit)
  const pokemons = await getPokemons(
    { page: Math.floor(Math.random() * pageCount), limit },
    { cache: "no-cache" }
  )

  if (!pokemons) {
    notFound()
  }

  const pokemonsWithDetails = await Promise.all(
    pokemons.results.map(({ name }) => getPokemon(name))
  )

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {pokemons.results.slice(undefined, 4).map(({ name }, i) => (
        <PokemonCard key={name} pokemon={pokemonsWithDetails[i]} />
      ))}
    </div>
  )
}

export default async function HomePage() {
  return (
    <Shell as="div">
      <section className="mx-auto flex max-w-[64rem] flex-col items-center justify-center gap-10 py-6 text-center md:py-12 lg:py-32">
        <Button variant="link" size="lg" asChild>
          <Link
            href="https://github.com/thekaganugur/next-pokedex"
            className="flex gap-1"
            target="_blank"
            rel="noreferrer"
          >
            View in <Github className="h-4 w-4" /> Github
          </Link>
        </Button>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          A Pokedex App built with everything new in Next.js 13
        </h1>

        <Button asChild>
          <Link href="/pokemons">Explore pokemons!</Link>
        </Button>
      </section>

      <section className="space-y-6 py-6 md:pt-10 lg:pt-32">
        <div className="flex justify-between">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Highligted Pokemons
          </h2>
          <Button asChild>
            <Link href="/pokemons">View all</Link>
          </Button>
        </div>
        <Suspense fallback={<HighlightedPokemonsSkeleton />}>
          <HighlightedPokemons />
        </Suspense>
      </section>
    </Shell>
  )
}
