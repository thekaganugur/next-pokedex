import { Header } from "@/components/header"
import { PokemonCardSkeleton } from "@/components/pokemon"
import { Shell } from "@/components/shell"

export default function Loading() {
  return (
    <Shell>
      <Header title="Pokemons" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <PokemonCardSkeleton key={i} />
        ))}
      </div>
    </Shell>
  )
}
