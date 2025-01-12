import BottomNavbar from "@/components/shared/BottomNavbar";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const SportsLeaguesLayout = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.wickspin24.live/images/velki-desktop-bg.webp')",
        backgroundSize: "cover",
      }}
      className="h-screen flex justify-center"
    >
      <div className="hidden lg:flex w-[30%] md:w-[20%] items-center justify-center">
        <img
          src="https://www.wickspin24.live/images/velki-logo-desktop.webp"
          alt=""
        />
      </div>
      <div className="w-full md:w-[60%] lg:w-[40%] xl:w-[30%] bg-[#eef6fb] overflow-y-auto">
        {/* content goes here */}
        <div className="relative h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow overflow-auto">
            <Outlet />
          </div>
          <BottomNavbar />
        </div>
      </div>
      <div className="hidden lg:block md:w-[20%] w-[30%]"></div>
    </div>
  );
};

export default SportsLeaguesLayout;
