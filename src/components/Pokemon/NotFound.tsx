import Link from "next/link";

const PokemonNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="text-red-500 text-6xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Pokemon Not Found</h1>
        <p className="text-gray-600 mb-6">The Pokemon you're looking for doesn't exist or has fled!</p>
        <Link href="/">
          <span className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Return to Pokedex
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PokemonNotFound;
