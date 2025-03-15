import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (limit = 20) => {
  const response = await axios.get(`${API_URL}?limit=${limit}`);
  return response.data.results;
};

export const getPokemonById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
