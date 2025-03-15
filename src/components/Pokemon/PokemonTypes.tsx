interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonTypesProps {
  types: PokemonType[];
}

const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => {
  const getTypeColor = (type: string) => {
    const typeColors: Record<string, string> = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-500",
      ice: "bg-blue-200",
      fighting: "bg-red-700",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-300",
      psychic: "bg-pink-500",
      bug: "bg-green-400",
      rock: "bg-yellow-700",
      ghost: "bg-purple-700",
      dragon: "bg-indigo-600",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
    };

    return typeColors[type] || "bg-gray-400";
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-3 text-gray-800">Types</h2>
      <div className="flex flex-wrap gap-2">
        {types?.map((type) => (
          <span
            key={type.type.name}
            className={`${getTypeColor(type.type.name)} px-4 py-1 rounded-full text-white font-medium capitalize`}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonTypes;
