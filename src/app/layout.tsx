import { cn } from "@/lib/utils"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import pokeBall from "../../public/ball-game-poke-sport-sports-svgrepo-com.svg"
import pokemons from "../data/pokemons.json"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pokedex",
}

function PokeBall() {
  return (
    <Link
      href={`/pokemons/${
        pokemons[Math.floor(Math.random() * pokemons.length + 1)]
      }`}
    >
      <Image
        priority
        src={pokeBall}
        alt="Explore a random pokemon"
        className="h-8 w-8 hover:animate-shake"
      />
    </Link>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <header className="sticky top-0 z-40 w-full border-b bg-white">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="select-none font-bold">
              Pokedex
            </Link>
            <PokeBall />
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
