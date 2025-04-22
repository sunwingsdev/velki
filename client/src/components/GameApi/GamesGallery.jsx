import { useGetGamesQuery } from "@/redux/features/allApis/gameApi/gameApi";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const apis = [
  { value: "sports-live-tv", label: "Sports Live TV" },
  { value: "kambi", label: "Kambi" },
  { value: "playtech", label: "Playtech" },
  { value: "betfair", label: "BetFair" },
  { value: "pinnacle", label: "Pinnacle" },
  { value: "etent", label: "Etent" },
  { value: "sports-radar", label: "Sports Radar" },
  { value: "softswiss", label: "SoftSwiss" },
  { value: "saba-sports", label: "SABA Sports" },
  { value: "odds-jam", label: "Odds Jam" },
  { value: "evolution", label: "Evolution" },
  { value: "obs", label: "OBS" },
  { value: "bet-construct", label: "Bet Construct" },
  { value: "pragmatic-play", label: "Pragmatic Play" },
  { value: "in-sports", label: "In Sports" },
];

const GamesGallery = () => {
  const { data: games = [] } = useGetGamesQuery();
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedApi, setSelectedApi] = useState("All");

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  const handleFilter = (apiValue) => {
    setSelectedApi(apiValue);
    if (apiValue === "All") {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter((game) => game.api === apiValue));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Filter Buttons */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <button
          className={`px-4 py-2 text-black font-medium ${
            selectedApi === "All"
              ? "border-b-2 border-yellow-500"
              : "border-b-2 border-transparent"
          }`}
          onClick={() => handleFilter("All")}
        >
          All
        </button>
        {apis.map(({ value, label }) => (
          <button
            key={value}
            className={`px-4 py-2 text-black font-medium ${
              selectedApi === value
                ? "border-b-2 border-yellow-500"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => handleFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Game Cards with Transition */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <AnimatePresence>
          {filteredGames?.map((game) => (
            <motion.div
              key={game.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow rounded overflow-hidden"
            >
              <img
                src={`${import.meta.env.VITE_BASE_API_URL}${game.image}`}
                alt={game.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h4 className="font-bold text-sm">{game.title}</h4>
                <p className="text-xs text-gray-500 capitalize">{game.api}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GamesGallery;
