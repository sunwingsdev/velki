import { IoMdHome } from "react-icons/io";
import { CgCardHearts } from "react-icons/cg";
import { MdSportsCricket } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { PiNotebookFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation(); // Get the current route
  const navItems = [
    {
      icon: IoMdHome,
      title: "Home",
      route: "/",
    },
    {
      icon: CgCardHearts,
      title: "Casino",
      route: "/casino",
    },
    {
      icon: MdSportsCricket,
      title: "Sports",
      route: "/sports",
    },
    {
      icon: FaTrophy,
      title: "Leagues",
      route: "/leagues",
    },
    {
      icon: PiNotebookFill,
      title: "My Bets",
      route: "/login",
    },
  ];

  return (
    <div className="flex items-center justify-between sm:gap-3 bg-white px-2 py-1 border-t">
      {navItems.map(({ icon: Icon, title, route }) => (
        <Link
          to={route}
          key={title}
          className={`flex w-20 h-16 flex-col items-center justify-center gap-1 py-1 sm:py-3 sm:px-3 px-1.5 rounded-xl ${
            location.pathname === route
              ? "bg-yellow-400"
              : "hover:bg-yellow-400"
          }`}
        >
          <Icon className="text-xl sm:text-3xl" />
          <p className="font-medium text-xs">{title}</p>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavbar;
