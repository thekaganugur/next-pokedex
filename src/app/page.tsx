import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="https://github.com/thekaganugur">View in Github</Link>
      <h1>A Pokedex App built with everything new in Next.js 13</h1>

      <Link href="/pokemons">Explore pokemons!</Link>
    </div>
  );
}
