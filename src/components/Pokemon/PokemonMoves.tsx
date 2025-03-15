"use client"
import { useState } from "react";

interface PokemonMove {
  move: {
    name: string;
  };
}

interface PokemonMovesProps {
  moves: PokemonMove[];
}

const PokemonMoves: React.FC<PokemonMovesProps> = ({ moves }) => {
  const [showAllMoves, setShowAllMoves] = useState(false);
  const initialMoveCount = 9;

  const toggleShowAllMoves = () => {
    setShowAllMoves(prev => !prev);
  };

  const displayedMoves = showAllMoves ? moves : moves?.slice(0, initialMoveCount);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3 text-gray-800">Featured Moves</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {displayedMoves.map((move) => (
          <div key={move.move.name} className="bg-blue-50 px-3 py-2 rounded-lg text-center">
            <span className="text-sm font-medium capitalize text-black">{move.move.name.replace(/-/g, " ")}</span>
          </div>
        ))}
      </div>

      {moves.length > initialMoveCount && (
        <div
          className="mt-4 text-sm text-blue-600 text-center cursor-pointer hover:underline font-medium"
          onClick={toggleShowAllMoves}
        >
          {showAllMoves ?
            "Show fewer moves" :
            `+ ${moves.length - initialMoveCount} more moves`}
        </div>
      )}
    </div>
  );
};

export default PokemonMoves;
