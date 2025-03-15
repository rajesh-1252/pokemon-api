/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { fetchPokemons } from "@/app/actions";
import PokemonCard from "./PokemonCard";

const getPokemonId = (url: string) => url.split("/").at(-2);

const PokemonList: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchMorePokemons = async () => {
    if (loading) return;
    setLoading(true);
    const newPokemons = await fetchPokemons(20, offset);
    setPokemons(() => [...pokemons, ...newPokemons]);
    setOffset(() => {
      console.log({ offset })
      return offset + 20
    });
    console.log({ outside: offset })
    setLoading(false);
  };

  useEffect(() => {
    if (pokemons.length === 0) fetchMorePokemons();
  }, []);

  const lastPokemonRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => entries[0].isIntersecting && fetchMorePokemons(),
        { threshold: 1.0 }
      );
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filteredPokemons.map((pokemon, index) => {
        const id = getPokemonId(pokemon.url);
        return (
          <PokemonCard
            key={id}
            id={id!}
            name={pokemon.name}
            refProp={index === pokemons.length - 1 ? lastPokemonRef : undefined}
          />
        );
      })}
      {loading && <p className="text-center w-full">Loading more Pokémon...</p>}
    </div>
  );
};

export default PokemonList;
