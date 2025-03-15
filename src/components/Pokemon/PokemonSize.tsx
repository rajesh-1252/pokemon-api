
interface PokemonSizeProps {
  height: number;
  weight: number;
}

const PokemonSize: React.FC<PokemonSizeProps> = ({ height, weight }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <span className="block text-sm text-black">Height</span>
        <span className="text-lg font-bold text-black">{(height / 10).toFixed(1)} m</span>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <span className="block text-sm text-black">Weight</span>
        <span className="text-lg font-bold text-black">{(weight / 10).toFixed(1)} kg</span>
      </div>
    </div>
  );
};

export default PokemonSize;
