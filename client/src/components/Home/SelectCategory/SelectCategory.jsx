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
<<<<<<< HEAD
import { useGetColorControlsQuery } from "@/redux/features/allApis/colorControlApi/colorControlApi";
=======
>>>>>>> de8524db8b301f42261442a39e8fa0617d5eebb0

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
export function SelectCategory() {
  const { data: games } = useGetGamesQuery();
<<<<<<< HEAD
  const { data: colorControls } = useGetColorControlsQuery();
  const activatedGames = games?.filter((game) => game.isActive);
=======
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

>>>>>>> de8524db8b301f42261442a39e8fa0617d5eebb0
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const categoryContainerRef = useRef(null);

<<<<<<< HEAD
  const categorySelectControl = colorControls?.find(
    (colorControl) => colorControl.section === "home-category-select"
  );

  const navbarColorControl = colorControls?.find(
    (colorControl) => colorControl.section === "home-navbar"
  );

=======
>>>>>>> de8524db8b301f42261442a39e8fa0617d5eebb0
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
          style={{
            backgroundColor: categorySelectControl?.backgroundColor,
            color: categorySelectControl?.textColor,
            fontSize: categorySelectControl?.fontSize
              ? categorySelectControl?.fontSize
              : "14px",
          }}
          ref={categoryContainerRef}
          className="flex justify-start px-2 pt-2 pb-8 gap-2 w-full overflow-x-auto no-scrollbar h-auto bg-[#333333] scroll-smooth"
        >
          {categories.map((category) => (
            <button
              style={{
                backgroundColor:
                  selectedCategory.value === category.value ? "#1b1f23" : "",
                color:
                  selectedCategory.value === category.value
                    ? navbarColorControl?.backgroundColor
                    : "",
              }}
              key={category.value}
              className={`min-w-20 categoryButton min-h-20 p-4 text-lg flex flex-col items-center justify-center gap-1 text-[#828486] hover:text-[#f4c004] hover:bg-[#1b1f23] rounded-lg ${
                selectedCategory.value === category.value
                  ? "bg-[#1b1f23] text-[#f4c004]"
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
        <div className="flex justify-center p-2 absolute w-full bottom-2">
          {Array.from({
            length:
              Math.ceil(
                categoryContainerRef.current?.scrollWidth /
                  categoryContainerRef.current?.clientWidth
              ) || 0,
          }).map((_, index) => (
            <button
              style={{
                backgroundColor:
                  currentPage === index
                    ? navbarColorControl?.backgroundColor
                    : "#474a4e",
              }}
              key={index}
              className={`h-2 mx-1 rounded-full ${
                currentPage === index ? "bg-[#f4c004] w-7" : "bg-black w-2"
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
