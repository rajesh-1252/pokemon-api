"use client";
import PokemonList from "@/components/Pokemon/PokemonList";
import SearchBar from "@/components/Pokemon/SearchBar";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            Pokemon Explorer
          </h1>
          <p className="text-gray-600 text-center max-w-md">
            Search and discover your favorite Pokémon.
          </p>
        </div>
        <SearchBar onSearch={setSearchTerm} />
        <PokemonList searchTerm={searchTerm} />
      </div>
    </main>
  );
}
