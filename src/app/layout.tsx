import { cn } from "@/lib/utils"
import "./globals.css"
import { PokeBall } from "@/components/poke-ball"
import { ThemeToggle } from "@/components/theme-toggle"
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
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Providers>
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between gap-4">
              <Link href="/" className="select-none font-bold">
                Pokedex
              </Link>
              <PokeBall />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t py-6 md:px-8 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <section>
                <div className="text-left text-sm leading-loose text-muted-foreground">
                  Built by{" "}
                  <Link
                    href="https://www.linkedin.com/in/thekaganugur"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold transition-colors hover:text-foreground"
                  >
                    Kagan Ugur
                  </Link>
                  . Source code is available on{" "}
                  <Link
                    href="https://github.com/thekaganugur/next-reddit"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold transition-colors hover:text-foreground"
                  >
                    GitHub
                  </Link>
                  .
                </div>
              </section>

              <section>
                <ThemeToggle />
              </section>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
