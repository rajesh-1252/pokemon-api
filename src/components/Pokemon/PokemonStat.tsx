interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface PokemonStatsProps {
  stats: PokemonStat[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats, }) => {
  const formatStatName = (statName: string) => {
    const statNameMap: Record<string, string> = {
      "hp": "HP",
      "attack": "Attack",
      "defense": "Defense",
      "special-attack": "Sp. Atk",
      "special-defense": "Sp. Def",
      "speed": "Speed"
    };

    return statNameMap[statName] || statName.replace(/-/g, " ");
  };

  const getMaxStatValue = () => 255;
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-3 text-gray-800">Base Stats</h2>
      <div className="space-y-3">
        {stats?.map((stat) => {
          const percentage = (stat.base_stat / getMaxStatValue()) * 100;
          let barColor = "bg-blue-500";

          // Color coding based on stat value
          if (stat.base_stat < 50) barColor = "bg-red-500";
          else if (stat.base_stat < 80) barColor = "bg-orange-500";
          else if (stat.base_stat < 100) barColor = "bg-yellow-500";
          else if (stat.base_stat < 120) barColor = "bg-green-500";
          else barColor = "bg-indigo-500";

          return (
            <div key={stat.stat.name}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-black">{formatStatName(stat.stat.name)}</span>
                <span className="text-black font-bold">{stat.base_stat}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 text-black">
                <div className={`${barColor} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonStats;
