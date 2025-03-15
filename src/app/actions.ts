"use server";

import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
export type Pokemon = {
  name: string;
  url: string;
};

export async function fetchPokemons(limit: number, offset: number = 0): Promise<Pokemon[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json();
  return data.results;
}

export async function fetchPokemonById(id: string) {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
}
