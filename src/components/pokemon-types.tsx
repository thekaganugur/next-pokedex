import { PokemonType } from "@/lib/getPokemon";

type Props = { types: PokemonType[] };

const PokemonTypeColors: Record<PokemonType, string> = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#68A090",
  shadow: "#493963",
};

export default function PokemonTypes({ types }: Props) {
  return types.map((type) => (
    <div
      key={type}
      style={{ color: PokemonTypeColors[type] }}
      className={`border rounded-xl border-current py-0.5 px-1 flex justify-center capitalize`}
    >
      {type}
    </div>
  ));
}
