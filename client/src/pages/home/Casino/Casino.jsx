import CasinoGamesCategory from "@/components/Home/CasinoGamesCategory/CasinoGamesCategory";
import { useState, useRef, useEffect } from "react";

const Casino = () => {
  const categories = [
    {
      title: "Popular",
      value: "popular",
      image: "https://www.wickspin24.live/casino/nav/popular.svg",
      hoverImage: "https://www.wickspin24.live/casino/nav/hover-popular.svg",
    },
    {
      title: "Live",
      value: "live",
      image: "https://www.wickspin24.live/casino/nav/live.svg",
      hoverImage: "https://www.wickspin24.live/casino/nav/hover-live.svg",
    },
    {
      title: "Table",
      value: "table",
      image: "https://www.wickspin24.live/casino/nav/table.svg",
      hoverImage: "https://www.wickspin24.live/casino/nav/hover-table.svg",
    },
    {
      title: "Slot",
      value: "slot",
      image: "https://www.wickspin24.live/casino/nav/slot.svg",
      hoverImage: "https://www.wickspin24.live/casino/nav/hover-slot.svg",
    },
    {
      title: "Fishing",
      value: "fishing",
      image: "https://www.wickspin24.live/casino/nav/fishing.svg",
      hoverImage: "https://www.wickspin24.live/casino/nav/hover-fishing.svg",
    },
    {
      title: "Egame",
      value: "egame",
      image: "https://www.wickspin24.live/casino/nav/egame.svg",
      hoverImage: "https://www.wickspin24.live/casino/nav/hover-egame.svg",
    },
  ];

  const games = [
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-205.png",
      category: "sports",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-175.png",
      category: "live",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-183.png",
      category: "table",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-176.png",
      category: "slot",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-006.png",
      category: "fishing",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-011.png",
      category: "egame",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-040.png",
      category: "sports",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-176.png",
      category: "live",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-007.png",
      category: "table",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-018.png",
      category: "slot",
    },
    {
      image:
        "https://www.wickspin24.live/gameIcon/EVOLUTION/EVOLUTION-LIVE-025.png",
      category: "fishing",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const categoryContainerRef = useRef(null);

  // Adjusted filtering logic
  const filteredGames =
    selectedCategory.value === "popular"
      ? games // Show all games if "Popular" is selected
      : games.filter((game) => game.category === selectedCategory.value);

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
      <div className="relative mt-14">
        <div
          ref={categoryContainerRef}
          className="flex justify-start px-2 pt-2 pb-8 gap-2 w-full overflow-x-auto h-auto"
          style={{
            backgroundImage:
              "url('https://www.wickspin24.live/images/nav_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {categories.map((category) => (
            <div
              key={category.value}
              className={`min-w-20 min-h-20 flex flex-col items-center justify-center gap-1 p-4 text-lg text-[#946F3B] hover:text-[#CCB386] hover:bg-[#474a4e] rounded-lg ${
                selectedCategory.value === category.value
                  ? "bg-[#474a4e] text-[#CCB386]"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <p className="font-semibold">{category.title}</p>
              <img
                src={
                  selectedCategory.value === category.value
                    ? category.hoverImage
                    : category.image
                }
                alt={category.title}
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center p-2 bg-black absolute w-full bottom-2">
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

      <div className="transition-opacity duration-500 ease-in-out opacity-100">
        <div className="animate-fade-in">
          <CasinoGamesCategory selectedGames={filteredGames} />
        </div>
      </div>
    </div>
  );
};

export default Casino;
