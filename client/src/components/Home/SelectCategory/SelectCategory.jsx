import { useState, useRef, useEffect } from "react";
import SportsCategory from "../SportsCategory/SportsCategory";
import GamesCategory from "../GamesCategory/GamesCategory";
import sportsIcon from "@/assets/icons/sports.svg";
import fishingIcon from "@/assets/icons/fishing.svg";
import liveIcon from "@/assets/icons/live.svg";
import slotIcon from "@/assets/icons/slot.svg";
import tableIcon from "@/assets/icons/table.svg";
import endgameIcon from "@/assets/icons/endgame.svg";
import { useGetGamesQuery } from "@/redux/features/allApis/gameApi/gameApi";

export function SelectCategory() {
  const { data: games } = useGetGamesQuery();
  const activatedGames = games?.filter((game) => game.isActive);
  const categories = [
    {
      title: "Sports",
      image: sportsIcon,
      value: "sports",
      description: "Manage your sports preferences here.",
    },
    {
      title: "Live",
      image: liveIcon,
      value: "live",
      description: "Live streaming and events can be managed here.",
    },
    {
      title: "Table",
      image: tableIcon,
      value: "table",
      description: "Manage table games and settings here.",
    },
    {
      title: "Slot",
      image: slotIcon,
      value: "slot",
      description: "Slots games management and preferences.",
    },
    {
      title: "Fishing",
      image: fishingIcon,
      value: "fishing",
      description: "Manage fishing game settings.",
    },
    {
      title: "Egame",
      image: endgameIcon,
      value: "egame",
      description: "Egames management and preferences.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const categoryContainerRef = useRef(null);

  const filteredGames = activatedGames?.filter(
    (game) => game.category === selectedCategory.value
  );

  const handleScroll = () => {
    const scrollLeft = categoryContainerRef.current.scrollLeft;
    const scrollWidth =
      categoryContainerRef.current.scrollWidth -
      categoryContainerRef.current.clientWidth;
    const dots = Math.ceil(
      scrollWidth / categoryContainerRef.current.clientWidth
    );
    setCurrentPage(Math.round((scrollLeft / scrollWidth) * dots));
  };

  useEffect(() => {
    const container = categoryContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPage = (page) => {
    const container = categoryContainerRef.current;
    const pageWidth = container.clientWidth;
    container.scrollTo({ left: page * pageWidth, behavior: "smooth" });
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={categoryContainerRef}
          className="flex justify-start px-2 pt-2 pb-8 gap-2 w-full overflow-x-auto h-auto bg-[#1b1f23] scroll-smooth"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              className={`min-w-20 categoryButton min-h-20 p-4 text-lg flex flex-col items-center justify-center gap-1 text-[#828486] hover:text-[#f4c004] hover:bg-[#474a4e] rounded-lg ${
                selectedCategory.value === category.value
                  ? "bg-[#474a4e] text-[#f4c004]"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <p className="font-medium"> {category.title}</p>
              <img
                className={`w-12 ${
                  selectedCategory.value === category.value
                    ? "filter-yellow"
                    : ""
                }`}
                src={category.image}
                alt=""
              />
            </button>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center p-2 bg-[#1b1f23] absolute w-full bottom-2">
          {Array.from({
            length:
              Math.ceil(
                categoryContainerRef.current?.scrollWidth /
                  categoryContainerRef.current?.clientWidth
              ) || 0,
          }).map((_, index) => (
            <button
              key={index}
              className={`h-2 mx-1 rounded-full ${
                currentPage === index ? "bg-[#f4c004] w-7" : "bg-[#828486] w-2"
              }`}
              onClick={() => scrollToPage(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="transition-opacity duration-500 ease-in-out opacity-100 mt-5">
        {selectedCategory.value === "sports" ? (
          <div className="animate-fade-in">
            <SportsCategory />
          </div>
        ) : (
          <div className="animate-fade-in">
            <GamesCategory selectedGames={filteredGames} />
          </div>
        )}
      </div>
    </div>
  );
}
