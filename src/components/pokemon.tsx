import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pokemon } from "@/lib/getPokemon"
import { ImageOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PokemonTypes from "./pokemon-types"
import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"

type Props = {
  pokemon: Pokemon
}

export function PokemonCardSkeleton() {
  return (
    <Card className="rounded-sm">
      <CardHeader>
        <Skeleton className="mx-auto h-[150px] w-[150px]" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-8 w-full rounded-sm" />
        <Skeleton className="h-8 w-full rounded-sm" />
      </CardFooter>
    </Card>
  )
}

export function PokemonCard(props: Props) {
  const { pokemon } = props

  return (
    <Card>
      <Link href={`/pokemons/${pokemon.name}`}>
        <CardHeader>
          <AspectRatio
            ratio={4 / 3}
            className="flex items-center justify-center"
          >
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
        </CardHeader>
      </Link>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="flex items-baseline gap-1">
          <CardDescription>#{pokemon.id}</CardDescription>
          <span className="capitalize">{pokemon.name}</span>
        </CardTitle>
        <div>
          <PokemonTypes types={pokemon.types.map(({ type }) => type.name)} />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="h-8 w-full rounded-sm"
        >
          <Link href={`/pokemons/${pokemon.name}`}>Preview</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
