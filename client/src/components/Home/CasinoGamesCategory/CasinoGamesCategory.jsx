import { useState } from "react";
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { BsFire } from "react-icons/bs";
import { TbSortAZ } from "react-icons/tb";

const CasinoGamesCategory = ({ selectedGames }) => {
  const [selectedCategory, setSelectedCategory] = useState("in-play");
  const subcategories = [
    { icon: ImBooks, title: "Catalog", value: "catalog", route: "" },
    { icon: BsFire, title: "Latest", value: "latest", route: "" },
    { icon: TbSortAZ, title: "A-Z", value: "a-z", route: "" },
  ];

  return (
    <div className="">
      <div className="flex w-full bg-white p-2 h-fit text-lg font-bold">
        {subcategories.map(({ title, value, route }) => (
          <>
            {route ? (
              <Link to={route} key={title}>
                <div
                  className="flex group gap-2 px-4 mr-2 py-1 justify-center items-center hover:bg-yellow-400 hover:rounded-xl border-r-2 hover:border-none border-gray-400"
                  onClick={() => setSelectedCategory(value)}
                >
                  {/* <Icon className="text-3xl text-[#5a5e62] group-hover:text-black" /> */}
                  <p className="text-sm sm:text-base">{title}</p>
                </div>
              </Link>
            ) : (
              <div
                key={title}
                className="flex group gap-2 px-4 mr-2 py-1 justify-center items-center hover:bg-yellow-400 hover:rounded-xl border-r-2 hover:border-none border-gray-400"
                onClick={() => setSelectedCategory(value)}
              >
                {/* <Icon className="text-3xl text-[#5a5e62] group-hover:text-black" /> */}
                <p className="text-sm sm:text-base">{title}</p>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="w-full px-2">
        <h2 className="text-lg font-bold px-3 border-s-4 border-blue-900 rounded-md my-4">
          Games
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {selectedGames?.map((game) => (
            <Link to={`/games/demo/${game._id}`} key={game.image}>
              <img
                className="rounded-tr-xl rounded-bl-xl w-full"
                src={`${import.meta.env.VITE_BASE_API_URL}${game.image}`}
                alt={game.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CasinoGamesCategory;
