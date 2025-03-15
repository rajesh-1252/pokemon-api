interface PokemonAbility {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

interface PokemonAbilitiesProps {
  abilities: PokemonAbility[];
}

const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ abilities }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800">Abilities</h2>
      <div className="grid grid-cols-2 gap-2">
        {abilities?.map((ability) => (
          <div key={ability.ability.name} className="bg-gray-100 px-4 py-2 rounded-lg">
            <div className="capitalize font-medium text-black">
              {ability.ability.name.replace(/-/g, " ")}
            </div>
            {ability.is_hidden && <span className="text-xs text-black">Hidden Ability</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonAbilities;
