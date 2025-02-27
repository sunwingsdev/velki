import { useState } from "react";
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { BsFire } from "react-icons/bs";
import { TbSortAZ } from "react-icons/tb";

const GamesCategory = ({ selectedGames }) => {
  const [selectedCategory, setSelectedCategory] = useState("in-play");
  const subcategories = [
    { icon: ImBooks, title: "Catalog", value: "catalog", route: "" },
    { icon: BsFire, title: "Latest", value: "latest", route: "" },
    { icon: TbSortAZ, title: "A-Z", value: "a-z", route: "" },
  ];

  return (
    <div className="flex px-1 sm:px-3">
      <div className="w-[20%] bg-white rounded-lg p-2 h-fit">
        {subcategories.map(({ icon: Icon, title, value, route }) => (
          <>
            {route ? (
              <Link to={route} key={title}>
                <div
                  className="flex flex-col group gap-2 p-1 sm:p-3 justify-center items-center hover:bg-yellow-400 rounded-lg"
                  onClick={() => setSelectedCategory(value)}
                >
                  <Icon className="text-3xl text-[#5a5e62] group-hover:text-black" />
                  <p className="text-xs sm:text-sm">{title}</p>
                </div>
              </Link>
            ) : (
              <div
                key={title}
                className="flex flex-col group gap-2 p-1 sm:p-3 justify-center items-center hover:bg-yellow-400 rounded-lg"
                onClick={() => setSelectedCategory(value)}
              >
                <Icon className="text-3xl text-[#5a5e62] group-hover:text-black" />
                <p className="text-xs sm:text-sm">{title}</p>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="w-[80%] px-1 sm:px-2">
        <h2 className="text-lg font-bold px-3 border-s-4 border-blue-900 rounded-md my-4">
          Games
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {selectedGames.map((game) => (
            <Link to={`/games/demo/${game.id}`} key={game.image}>
              <img
                className="rounded-xl w-full h-[100px] md:h-[150px]"
                src={game.image}
                alt=""
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesCategory;
