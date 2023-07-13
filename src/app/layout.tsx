import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-40 w-full border-b bg-white">
          <div className="container h-16 flex items-center">
            <Link href="/" className="text-xl text-red-400 select-none">
              Pokedex
            </Link>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
