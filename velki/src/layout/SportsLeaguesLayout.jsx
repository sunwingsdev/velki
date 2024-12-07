import BottomNavbar from "@/components/shared/BottomNavbar";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const SportsLeaguesLayout = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default SportsLeaguesLayout;
