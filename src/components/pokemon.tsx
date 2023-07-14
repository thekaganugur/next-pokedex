import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Pokemon } from "@/lib/getPokemon"
import Link from "next/link"
import { Button } from "./ui/button"

type Props = {
  pokemon: Pokemon
}

export function PokemonCard(props: Props) {
  const { pokemon } = props
  return (
    <Card>
      <Link href={`/pokemons/${pokemon.name}`}>
        <CardHeader>
          <img
            src={pokemon.sprites.front_default}
            alt="Pokemon"
            width="150px"
            height="150px"
            className="mx-auto"
          />
        </CardHeader>
      </Link>
      <CardContent>
        <CardTitle className="capitalize">{pokemon.name}</CardTitle>
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
