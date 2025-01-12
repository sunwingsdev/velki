import Footer from "@/components/shared/Footer";
import Marquee from "react-fast-marquee";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { FaStar, FaSearch, FaTrophy } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { GiSoccerBall } from "react-icons/gi";
import { BiSolidCricketBall } from "react-icons/bi";
import { IoTennisball } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const Sports = () => {
  const subcategories = [
    {
      icon: BiSolidCricketBall,
      title: "cricket",
    },
    {
      icon: GiSoccerBall,
      title: "soccer",
    },
    {
      icon: IoTennisball,
      title: "tennis",
    },
  ];
  return (
    <div className="mt-14">
      <div className="px-3 opacity-90 text-black bg-white w-full py-1">
        <div className="flex items-center gap-4">
          <HiOutlineMicrophone className="text-xl md:text-2xl" />
          <Marquee className="text-xs md:text-sm">
            <ul className="flex items-center justify-between gap-20 font-bold">
              <li>লটারী! লটারী!! লটারী!!! জয়েন করুন www.velki.club</li>
              <li>অফিসিয়াল এজেন্ট লিষ্ট https://allagentlist.com/ma.php</li>
              <li>
                Once player account found with fraudulent ticket, the respective
                market will be voided and the player account will be locked.
              </li>
              <li>
                WELCOME TO VELKI ! ENJOY BETTING IN MATCH ODDS, FANCY & LIVE
                CASINO
              </li>
            </ul>
          </Marquee>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 bg-[#1B1F23] text-[#6F8898] text-xs sm:text-base font-bold">
        <div className="w-1/4 flex items-center justify-center gap-2 py-2">
          <Switch className=" bg-black" />
          <Label className="text-xs font-bold">Parlay</Label>
        </div>
        <div className="w-3/4 px-4 flex items-center justify-between gap-2 py-2 bg-black">
          <p className="border-b-2 border-transparent hover:border-white">
            In-Play
          </p>
          <p className="border-b-2 border-transparent hover:border-white">
            Today
          </p>
          <p className="border-b-2 border-transparent hover:border-white">
            Tomorrow
          </p>
          <FaStar />
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center justify-center md:gap-10 px-2 py-1 bg-[#333333] text-white text-sm sm:text-base font-bold">
        <div className="flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 hover:bg-yellow-400 hover:text-black rounded-full">
          <FaTrophy className="text-xl" />
          <p>All</p>
        </div>
        {subcategories &&
          subcategories.map(({ icon: Icon, title }) => (
            <div
              className="flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 hover:bg-yellow-400 hover:text-black rounded-full"
              key={title}
            >
              <Icon className="text-xl" />
              <p className="capitalize">{title}</p>
            </div>
          ))}
      </div>
      <div className="px-3 py-4 space-y-2">
        <div className="rounded-lg shadow">
          <div className="bg-black flex items-center justify-between px-2 rounded-t-lg">
            <div className="flex items-center gap-2 py-2">
              <p className="px-3 py-0.5 bg-yellow-400 text-black rounded-3xl">
                1
              </p>
              <p className="text-yellow-400">ICC Cricket World Cup League 2</p>
            </div>
            <FaAngleUp className="text-yellow-400" />
          </div>
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center justify-center gap-2">
              <CiStar className="text-2xl" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/live.svg"
                    alt=""
                  />
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/fancybet.svg"
                    alt=""
                  />
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/bookmaker.svg"
                    alt=""
                  />
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/sportsbook.svg"
                    alt=""
                  />
                  <p className="bg-green-500 text-xs text-white px-0.5">
                    In-Play
                  </p>
                </div>
                <p>USA-Nepal</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <TfiStatsUp className="text-2xl" />
              <MdKeyboardArrowRight className="text-2xl" />
            </div>
          </div>
          <div className="rounded-lg px-2 py-1">
            <div className="bg-[#ffc800] text-[#8b6b05] flex items-center justify-between px-2 py-2 rounded-t-lg">
              <p className="text-lg font-bold">
                Match Odds{" "}
                <span className="text-sm font-normal">
                  Matched <span className="font-bold">198,777</span>
                </span>
              </p>
              <div className="flex items-center justify-center gap-3 text-black border-s border-black">
                <p className="px-4">Back</p>
                <p className="px-4">Lay</p>
              </div>
            </div>
            <div className="flex justify-between items-center ps-2 py-0.5 mb-0.5 bg-[#dae1e6]">
              <p className="text-xl font-bold">USA</p>
              <div className="flex items-center justify-center gap-0.5 text-black">
                <div className="px-4 text-center bg-[#7CC3F5] rounded-lg">
                  <p className="text-xl font-bold">1.45</p>
                  <p>2.52</p>
                </div>
                <div className="px-4 text-center bg-[#FAA9BA] rounded-lg">
                  <p className="text-xl font-bold">1.25</p>
                  <p>2.92</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center ps-2 py-0.5 bg-[#dae1e6] rounded-b-lg">
              <p className="text-xl font-bold">Nepal</p>
              <div className="flex items-center justify-center gap-0.5 text-black">
                <div className="px-4 text-center bg-[#7CC3F5] rounded-lg">
                  <p className="text-xl font-bold">1.75</p>
                  <p>2.72</p>
                </div>
                <div className="px-4 text-center bg-[#FAA9BA] rounded-lg">
                  <p className="text-xl font-bold">1.59</p>
                  <p>3.52</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow">
          <div className="bg-black flex items-center justify-between px-2 rounded-t-lg">
            <div className="flex items-center gap-2 py-2">
              <p className="px-3 py-0.5 bg-yellow-400 text-black rounded-3xl">
                1
              </p>
              <p className="text-yellow-400">ICC Cricket World Cup League</p>
            </div>
            <FaAngleUp className="text-yellow-400" />
          </div>
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center justify-center gap-2">
              <CiStar className="text-2xl" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/live.svg"
                    alt=""
                  />
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/fancybet.svg"
                    alt=""
                  />
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/bookmaker.svg"
                    alt=""
                  />
                  <img
                    className="w-5"
                    src="https://www.wickspin24.live/images/sportsbook.svg"
                    alt=""
                  />
                  <p className="bg-green-500 text-xs text-white px-0.5">
                    In-Play
                  </p>
                </div>
                <p>USA-Nepal</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <TfiStatsUp className="text-2xl" />
              <MdKeyboardArrowRight className="text-2xl" />
            </div>
          </div>
          <div className="rounded-lg px-2 py-1">
            <div className="bg-[#ffc800] text-[#8b6b05] flex items-center justify-between px-2 py-2 rounded-t-lg">
              <p className="text-lg font-bold">
                Match Odds{" "}
                <span className="text-sm font-normal">
                  Matched <span className="font-bold">198,777</span>
                </span>
              </p>
              <div className="flex items-center justify-center gap-3 text-black border-s border-black">
                <p className="px-4">Back</p>
                <p className="px-4">Lay</p>
              </div>
            </div>
            <div className="flex justify-between items-center ps-2 py-0.5 mb-0.5 bg-[#dae1e6]">
              <p className="text-xl font-bold">West Indies</p>
              <div className="flex items-center justify-center gap-0.5 text-black">
                <div className="px-4 text-center bg-[#7CC3F5] rounded-lg">
                  <p className="text-xl font-bold">1.45</p>
                  <p>2.52</p>
                </div>
                <div className="px-4 text-center bg-[#FAA9BA] rounded-lg">
                  <p className="text-xl font-bold">1.45</p>
                  <p>2.52</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center ps-2 py-0.5 bg-[#dae1e6] rounded-b-lg">
              <p className="text-xl font-bold">England</p>
              <div className="flex items-center justify-center gap-0.5 text-black">
                <div className="px-4 text-center bg-[#7CC3F5] rounded-lg">
                  <p className="text-xl font-bold">1.35</p>
                  <p>7.52</p>
                </div>
                <div className="px-4 text-center bg-[#FAA9BA] rounded-lg">
                  <p className="text-xl font-bold">1.85</p>
                  <p>2.54</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sports;
