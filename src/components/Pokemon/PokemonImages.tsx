
import Image from "next/image";

interface PokemonImageProps {
  frontImage: string;
  backImage?: string;
  name: string;
}

const PokemonImages: React.FC<PokemonImageProps> = ({ frontImage, backImage, name }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-6 mb-6 flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {/* Front Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40">
            <Image src={frontImage} alt={name} fill className="object-contain" sizes="160px" priority />
          </div>
          <span className="text-sm text-gray-500 mt-2">Front</span>
        </div>

        {/* Back Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40">
            {backImage ? (
              <Image src={backImage} alt={`${name} back`} fill className="object-contain" sizes="160px" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No back image</div>
            )}
          </div>
          <span className="text-sm text-gray-500 mt-2">Back</span>
        </div>
      </div>
    </div>
  );
};

export default PokemonImages;
