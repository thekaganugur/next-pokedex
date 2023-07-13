"use client";
import { getPokemon } from "@/lib/getPokemon";
import Link from "next/link";
import useSWR from "swr";

export function Pokemon({ pokemonName }: { pokemonName: string }) {
  const { data, isLoading, error } = useSWR("pokemons", () =>
    getPokemon(pokemonName)
  );

  if (error) {
    return null;
  }
  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <Link
      key={pokemonName}
      href={`/pokemon/${pokemonName}`}
      className="flex flex-col items-center gap-1"
    >
      <img
        src={data.sprites.front_default}
        alt="Pokemon"
        width="150px"
        height="150px"
      />
      <span className="capitalize">{data.name}</span>
    </Link>
  );
}
