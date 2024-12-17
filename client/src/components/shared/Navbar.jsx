import PrimaryButton from "./PrimaryButton";
import { FiPlusCircle } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { IoMdLogIn } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="fixed top-0 z-20 w-full md:w-[60%] lg:w-[40%] xl:w-[35%]">
      <div className="relative">
        {isSidebarOpen && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        )}
        <div className="bg-[#ffc800] flex items-center justify-between px-3 py-2 ">
          <div className="flex flex-row items-center gap-2">
            {token && user && (
              <IoMenu
                className="text-black text-3xl cursor-pointer"
                onClick={toggleSidebar}
              />
            )}
            <Link to="/">
              <img
                className="w-[84px] h-[26px]"
                src="https://www.wickspin24.live/images/velki-logo.webp"
                alt=""
              />
            </Link>
          </div>

          {token && user && (
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col items-start">
                <p>@{user?.user.username}</p>
                <div className="flex flex-row items-center gap-1 text-sm">
                  <p>USD 0.00</p>
                  <p className="text-red-500">
                    <span className="font-semibold text-black">Exp</span> (0.00)
                  </p>
                </div>
              </div>
              <TfiReload className="text-lg" />
            </div>
          )}

          {!token && !user && (
            <div className="flex items-center justify-center gap-3">
              <Link to="/signup">
                <PrimaryButton icon={FiPlusCircle} background={""}>
                  SignUp
                </PrimaryButton>
              </Link>
              <Link to="/login">
                <PrimaryButton icon={IoMdLogIn} background={"red"}>
                  Login
                </PrimaryButton>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
