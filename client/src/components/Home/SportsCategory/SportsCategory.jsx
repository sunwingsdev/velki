import { useGetColorControlsQuery } from "@/redux/features/allApis/colorControlApi/colorControlApi";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { useState } from "react";
import { BsStopwatchFill, BsHddRackFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { FaCalendarDays, FaTrophy } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SportsCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("in-play");
  const { data: homeControls } = useGetHomeControlsQuery();
  const { data: colorControls } = useGetColorControlsQuery();
  const [isHoveredValue, setIsHoveredValue] = useState("");

  const subcategorySelectControl = colorControls?.find(
    (colorControl) => colorControl.section === "home-subcategory-select"
  );

  const allControl = homeControls?.find(
    (control) => control.category === "banner-all" && control.isSelected
  );
  const soccerControl = homeControls?.find(
    (control) => control.category === "banner-soccer" && control.isSelected
  );
  const cricketControl = homeControls?.find(
    (control) => control.category === "banner-cricket" && control.isSelected
  );
  const tennisControl = homeControls?.find(
    (control) => control.category === "banner-tennis" && control.isSelected
  );

  const bannerTitleControl = colorControls?.find(
    (control) => control.section === "home-banner-title"
  );
  const bannerCountControl = colorControls?.find(
    (control) => control.section === "home-banner-count"
  );

  const subcategories = [
    { icon: BsStopwatchFill, title: "In-Play", value: "in-play", route: "" },
    { icon: FaCalendarDay, title: "Today", value: "today", route: "" },
    { icon: FaCalendarDays, title: "Tomorrow", value: "tomorrow", route: "" },
    { icon: FaTrophy, title: "Leagues", value: "leagues", route: "/leagues" },
    { icon: BsHddRackFill, title: "Parlay", value: "parlay", route: "/sports" },
  ];

  const counts = {
    "in-play": { all: 19, cricket: 11, soccer: 3, tennis: 7 },
    today: { all: 10, cricket: 5, soccer: 2, tennis: 1 },
    tomorrow: { all: 12, cricket: 6, soccer: 4, tennis: 2 },
    leagues: { all: 14, cricket: 8, soccer: 5, tennis: 3 },
    parlay: { all: 9, cricket: 7, soccer: 3, tennis: 2 },
  };

  const banners = [
    {
      image: allControl?.image,
      title: "All",
      value: "all",
      count: counts["in-play"].all,
    },
    {
      image: cricketControl?.image,
      title: "Cricket",
      value: "cricket",
      count: counts["in-play"].cricket,
    },
    {
      image: soccerControl?.image,
      title: "Soccer",
      value: "soccer",
      count: counts["in-play"].soccer,
    },
    {
      image: tennisControl?.image,
      title: "Tennis",
      value: "tennis",
      count: counts["in-play"].tennis,
    },
  ];

  return (
    <div className="flex gap-1 sm:gap-2 px-1 sm:px-3">
      {/* Subcategories Sidebar */}
      <div
        style={{
          backgroundColor: subcategorySelectControl?.backgroundColor,
          color: subcategorySelectControl?.textColor,
          fontSize: subcategorySelectControl?.fontSize
            ? subcategorySelectControl?.fontSize
            : "12px",
        }}
        className="w-[20%] rounded-lg sm:p-2 h-fit"
      >
        {subcategories.map(({ icon: Icon, title, value, route }) => (
          <div
            key={title}
            className={`group relative mb-1 last:mb-0 rounded-lg transition-all duration-200 `}
          >
            {route ? (
              <Link to={route}>
                <div
                  className={`flex flex-col gap-2 p-2 sm:p-3 justify-center items-center rounded-lg transition-all duration-200 `}
                  style={{
                    backgroundColor:
                      value === isHoveredValue
                        ? subcategorySelectControl?.hoverBackgroundColor
                        : value === selectedCategory
                        ? subcategorySelectControl?.hoverBackgroundColor
                        : "transparent",
                    color:
                      value === selectedCategory || value === isHoveredValue
                        ? subcategorySelectControl?.hoverTextColor
                        : subcategorySelectControl?.textColor,
                  }}
                  onMouseEnter={() => setIsHoveredValue(value)}
                  onMouseLeave={() => setIsHoveredValue("")}
                  onClick={() => setSelectedCategory(value)}
                >
                  <Icon
                    className="text-3xl transition-colors duration-200"
                    style={{
                      color:
                        value === selectedCategory
                          ? subcategorySelectControl?.hoverTextColor
                          : subcategorySelectControl?.textColor,
                    }}
                  />
                  <p className="text-xs sm:text-sm">{title}</p>
                </div>
              </Link>
            ) : (
              <div
                className={`flex flex-col gap-2 p-2 sm:p-3 justify-center items-center rounded-lg cursor-pointer transition-all duration-200 `}
                style={{
                  backgroundColor:
                    value === isHoveredValue
                      ? subcategorySelectControl?.hoverBackgroundColor
                      : value === selectedCategory
                      ? subcategorySelectControl?.hoverBackgroundColor
                      : "transparent",
                  color:
                    value === selectedCategory || value === isHoveredValue
                      ? subcategorySelectControl?.hoverTextColor
                      : subcategorySelectControl?.textColor,
                }}
                onMouseEnter={() => setIsHoveredValue(value)}
                onMouseLeave={() => setIsHoveredValue("")}
                onClick={() => setSelectedCategory(value)}
              >
                <Icon
                  className="text-3xl transition-colors duration-200"
                  style={{
                    color:
                      value === selectedCategory
                        ? subcategorySelectControl?.hoverTextColor
                        : subcategorySelectControl?.textColor,
                  }}
                />
                <p className="text-xs sm:text-sm">{title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sports Banners */}
      <div className="w-[80%] flex flex-col gap-3">
        {banners?.map((banner) => (
          <div
            key={banner.value}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              className="rounded-lg h-[120px] w-full object-cover"
              src={`${import.meta.env.VITE_BASE_API_URL}${banner.image}`}
              alt={banner.title}
            />
            <div className="absolute top-5 left-7">
              <h2
                style={{
                  color: bannerTitleControl?.textColor,
                  fontSize: bannerTitleControl?.fontSize,
                }}
                className="text-xl font-bold text-[#5A5E62]"
              >
                {banner.title}
              </h2>
              <h2
                style={{
                  color: bannerCountControl?.textColor,
                  fontSize: bannerCountControl?.fontSize,
                }}
                className="text-5xl font-bold text-[#0A0A0A]"
              >
                {banner.count}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsCategory;
