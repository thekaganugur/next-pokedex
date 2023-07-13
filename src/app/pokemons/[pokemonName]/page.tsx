import PokemonTypes from "@/components/pokemon-types";
import { getPokemons } from "@/lib/api";
import { getPokemon } from "@/lib/getPokemon";
import { getPokemonSpecies } from "@/lib/getSpecies";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import Link from "next/link";

interface PageProps {
  params: {
    pokemonName: string;
  };
}

export async function generateStaticParams() {
  const pokemons = await getPokemons();

  if (!pokemons) {
    notFound();
  }

  return pokemons.results.map(({ name }) => ({ pokemonName: name }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const pokemon = await getPokemon(params.pokemonName);

  if (!pokemon?.name) {
    return {
      title: "Pokemon not found",
    };
  }

  return {
    title: capitalize(pokemon.name),
  };
}

export default async function PokemonPage({ params }: PageProps) {
  const pokemon = await getPokemon(params.pokemonName);

  if (!pokemon) {
    notFound();
  }

  const pokemonSpecies = await getPokemonSpecies(pokemon.species.name);

  if (!pokemonSpecies) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{pokemon.name}</h1>
      <div>
        <img
          src={pokemon.sprites.front_default}
          alt="Pokemon"
          width="150px"
          height="150px"
        />

        {pokemonSpecies.flavor_text_entries[0].flavor_text}

        <div>
          <div>
            <span>Height</span>
            <span>{pokemon.height}</span>
          </div>
          <div>
            <span>Weight</span>
            <span>{pokemon.weight}</span>
          </div>
        </div>

        <div>
          <div>Abilites</div>
          {pokemon.abilities.map(({ ability }) => (
            <div key={ability.name}>{ability.name}</div>
          ))}
        </div>

        <PokemonTypes types={pokemon.types.map(({ type }) => type.name)} />
      </div>
    </main>
  );
}
