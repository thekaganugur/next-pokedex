import { getPokemons } from "@/lib/api";
import { notFound } from "next/navigation";
import { getPokemon } from "@/lib/getPokemon";
import Link from "next/link";
import { Shell } from "@/components/shell";
// import Image from "next/image";

async function Pokemon({ pokemonName }: { pokemonName: string }) {
  const pokemon = await getPokemon(pokemonName);

  if (!pokemon) {
    return null;
  }

  return (
    <Link
      key={pokemonName}
      href={`/pokemons/${pokemonName}`}
      className="flex flex-col items-center gap-1"
    >
      <img
        src={pokemon.sprites.front_default}
        alt="Pokemon"
        width="150px"
        height="150px"
      />
      <span className="capitalize">{pokemon.name}</span>
    </Link>
  );
}

export default async function Pokemons() {
  const pokemons = await getPokemons();

  if (!pokemons) {
    notFound();
  }

  return (
    <Shell>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemons.results.map(({ name }) => (
          <Pokemon key={name} pokemonName={name} />
        ))}
        {pokemons.results.map(({ name }) => (
          <Pokemon key={name} pokemonName={name} />
        ))}
      </div>
    </Shell>
  );
}
