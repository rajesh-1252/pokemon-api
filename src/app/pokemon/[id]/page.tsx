import { fetchPokemonById } from "@/app/actions";
import Header from "@/components/Pokemon/Header";
import PokemonNotFound from "@/components/Pokemon/NotFound";
import PokemonAbilities from "@/components/Pokemon/PokemonAbility";
import PokemonImages from "@/components/Pokemon/PokemonImages";
import PokemonMoves from "@/components/Pokemon/PokemonMoves";
import PokemonSize from "@/components/Pokemon/PokemonSize";
import PokemonStats from "@/components/Pokemon/PokemonStat";
import PokemonTypes from "@/components/Pokemon/PokemonTypes";
import Link from "next/link";

export default async function PokemonDetails({ params }: { params: { id: string } }) {
  const { id } = await params;
  const pokemon = await fetchPokemonById(id);
  console.log('server side rendered')

  if (!pokemon) {
    return (
      <PokemonNotFound />
    );
  }

  const primaryType = pokemon.types[0]?.type.name || "normal";
  const secondaryType = pokemon.types[1]?.type.name || primaryType;

  return (
    <div className={`min-h-screen bg-gradient-to-b from-${primaryType}-100 to-${secondaryType}-50 pt-8 pb-16`}>
      <div className="container mx-auto p-4">
        <Link href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Pokemon list
        </Link>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <Header id={id} pokemon={pokemon} />
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <PokemonImages
                  frontImage={pokemon.sprites.front_default}
                  backImage={pokemon.sprites.back_default}
                  name={pokemon.name}
                />
                <PokemonTypes types={pokemon.types} />
                <PokemonAbilities abilities={pokemon.abilities} />
              </div>

              <div>
                <PokemonStats stats={pokemon.stats} />
                <PokemonSize height={pokemon.height} weight={pokemon.weight} />
                <PokemonMoves moves={pokemon.moves} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
