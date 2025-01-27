import { useState } from "react";
import { BsStopwatchFill, BsHddRackFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { FaCalendarDays, FaTrophy } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SportsCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("in-play");

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

  return (
    <div className="flex gap-1 sm:gap-2 px-1 sm:px-3">
      <div className="w-[20%] bg-white rounded-lg sm:p-2 h-fit">
        {subcategories.map(({ icon: Icon, title, value, route }) => (
          <>
            {route ? (
              <Link to={route} key={title}>
                <div
                  className="flex flex-col group gap-2 p-2 sm:p-3 justify-center items-center hover:bg-yellow-400 rounded-lg"
                  onClick={() => setSelectedCategory(value)}
                >
                  <Icon className="text-3xl text-[#5a5e62] group-hover:text-black" />
                  <p className="text-xs sm:text-sm">{title}</p>
                </div>
              </Link>
            ) : (
              <div
                key={title}
                className="flex flex-col group gap-2 p-2 sm:p-3 justify-center items-center hover:bg-yellow-400 rounded-lg"
                onClick={() => setSelectedCategory(value)}
              >
                <Icon className="text-3xl text-[#5a5e62] group-hover:text-black" />
                <p className="text-xs sm:text-sm">{title}</p>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="w-[80%] flex flex-col gap-3">
        <div className="relative rounded-lg">
          <img
            className="rounded-lg h-[120px] w-full"
            src="https://www.wickspin24.live/images/velki-sport-all.webp"
            alt="All"
          />
          <div className="absolute top-5 left-7">
            <h2 className="text-xl font-bold text-[#5A5E62]">All</h2>
            <h2 className="text-5xl font-bold text-[#0A0A0A]">
              {counts[selectedCategory].all}
            </h2>
          </div>
        </div>
        <div className="relative rounded-lg">
          <img
            className="rounded-lg h-[120px] w-full"
            src="https://www.wickspin24.live/images/velki-sport-cricket.webp"
            alt="Cricket"
          />
          <div className="absolute top-5 left-7">
            <h2 className="text-xl font-bold text-[#5A5E62]">Cricket</h2>
            <h2 className="text-5xl font-bold text-[#0A0A0A]">
              {counts[selectedCategory].cricket}
            </h2>
          </div>
        </div>
        <div className="relative rounded-lg">
          <img
            className="rounded-lg h-[120px] w-full"
            src="https://www.wickspin24.live/images/velki-sport-soccer.webp"
            alt="Soccer"
          />
          <div className="absolute top-5 left-7">
            <h2 className="text-xl font-bold text-[#5A5E62]">Soccer</h2>
            <h2 className="text-5xl font-bold text-[#0A0A0A]">
              {counts[selectedCategory].soccer}
            </h2>
          </div>
        </div>
        <div className="relative rounded-lg">
          <img
            className="rounded-lg h-[120px] w-full"
            src="https://www.wickspin24.live/images/velki-sport-tennis.webp"
            alt="Tennis"
          />
          <div className="absolute top-5 left-7">
            <h2 className="text-xl font-bold text-[#5A5E62]">Tennis</h2>
            <h2 className="text-5xl font-bold text-[#0A0A0A]">
              {counts[selectedCategory].tennis}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCategory;
