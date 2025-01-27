import { useState } from "react";
import { BiSolidCricketBall } from "react-icons/bi";
import { GiSoccerBall } from "react-icons/gi";
import { IoTennisball } from "react-icons/io5";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdArrowBack } from "react-icons/md";

const Leagues = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const leagueCategories = [
    { label: "Cricket", value: "cricket", icon: BiSolidCricketBall },
    { label: "Soccer", value: "soccer", icon: GiSoccerBall },
    { label: "Tennis", value: "tennis", icon: IoTennisball },
  ];

  const accordions = [
    {
      title: "ICC Cricket World Cup League 2",
      match: "USA-Scotland",
      time: "Oct 20 21:00",
      matchNo: "2",
      link: "",
    },
    {
      title: "South Africa T20 Challenge",
      match: "Titans-Western Province",
      time: "Oct 25 21:30",
      matchNo: "2",
      link: "",
    },
  ];

  const handleAccordionClick = (accordion) => {
    setSelectedAccordion(accordion);
  };

  const handleBackClick = () => {
    setSelectedAccordion(null);
  };

  return (
    <div className="mt-14">
      {/* Conditionally render the leagueCategories only when no accordion is selected */}
      {!selectedAccordion && (
        <div className="bg-[#333333] flex items-center gap-3 p-3">
          {leagueCategories &&
            leagueCategories.map(({ label, value, icon: Icon }) => (
              <div
                className="flex items-center justify-center gap-1 px-3 py-2 hover:bg-yellow-300 text-white hover:text-black rounded-3xl"
                key={value}
              >
                <Icon />
                <p>{label}</p>
              </div>
            ))}
        </div>
      )}

      <div className="bg-[#eef6fb]">
        {!selectedAccordion ? (
          <>
            <h3 className="text-xl font-bold p-1 sm:p-2">Popular</h3>
            <div className="px-2 sm:px-4 py-2 text-lg space-y-2">
              {accordions &&
                accordions.map((accordion) => (
                  <div
                    className="flex items-center justify-between cursor-pointer bg-white rounded-md py-3 px-1 shadow-sm"
                    key={accordion.title}
                    onClick={() => handleAccordionClick(accordion)}
                  >
                    <div className="flex items-center gap-2">
                      <FaRegArrowAltCircleUp />
                      <h3 className="text-sm sm:text-base font-medium">{accordion.title}</h3>
                    </div>
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                  </div>
                ))}
            </div>
          </>
        ) : (
          <div className="space-y-4 rounded shadow-md">
            <div className="flex items-center gap-3 bg-black text-white py-3 px-1">
              <MdArrowBack
                onClick={handleBackClick}
                className="text-2xl cursor-pointer"
              />
              <span className="text-xl font-medium">
                {selectedAccordion.title}
              </span>
            </div>

            <div className="">
              <p>
                <strong>Match:</strong> {selectedAccordion.match}
              </p>
              <p>
                <strong>Time:</strong> {selectedAccordion.time}
              </p>
              <p>
                <strong>Match No:</strong> {selectedAccordion.matchNo}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leagues;
