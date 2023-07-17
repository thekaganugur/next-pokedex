import { cn } from "@/lib/utils"
import "./globals.css"
import { PokeBall } from "@/components/poke-ball"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A Pokedex App built with everything new in Next.js 13",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // https://github.com/pacocoursey/next-themes#with-app
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Providers>
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="select-none font-bold">
                Pokedex
              </Link>
              <PokeBall />
            </div>
          </header>

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
