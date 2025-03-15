import Link from "next/link";
import Image from "next/image";

interface PokemonCardProps {
  id: string;
  name: string;
  refProp?: (node: HTMLDivElement) => void;
}

const getPokemonImageUrl = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const getBackgroundColor = (name: string) => {
  const colors = [
    "bg-red-100", "bg-blue-100", "bg-green-100", "bg-yellow-100",
    "bg-purple-100", "bg-pink-100", "bg-indigo-100", "bg-teal-100"
  ];
  return colors[name.length % colors.length];
};

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, refProp }) => {
  return (
    < Link href={`/pokemon/${id}`}>
      <div
        ref={refProp || null}
        className={`${getBackgroundColor(name)} rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center cursor-pointer transform hover:scale-105`}
      >
        <div className="w-24 h-24 mb-2">
          <Image src={getPokemonImageUrl(id)} alt={name} width={100} height={100} />
        </div>
        <div className="text-center">
          <h3 className="font-medium text-gray-800 capitalize">{name}</h3>
          <span className="text-xs text-gray-500">#{id}</span>
        </div>
      </div>
    </Link >
  )
};

export default PokemonCard;
