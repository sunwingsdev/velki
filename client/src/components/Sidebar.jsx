import { IoClose } from "react-icons/io5";
import menuItems from "../components/MenuItems";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsGlobe2 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { logout } from "@/redux/slices/authSlice";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Logout successful", {
      appearance: "success",
      autoDismiss: true,
    });
    navigate("/");
    toggleSidebar();
  };

  return (
    <div
      className={`absolute top-0 left-0 bg-[#eef6fb] z-40 w-3/4 h-screen ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out`}
    >
      <div className="flex flex-row items-center justify-between p-2">
        <h1 className="text-xl font-semibold text-black pl-4">Menu</h1>
        <IoClose
          className="text-4xl text-black cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <ul className=" bg-white mx-6">
        {menuItems.map(({ id, label, Icon, link, count }) => (
          <li
            key={id}
            className="flex items-center gap-2 p-3 border-b border-b-black border-opacity-10"
          >
            <Link
              to={link}
              className="flex items-center justify-between text-gray-800 w-full"
              onClick={toggleSidebar}
            >
              <div className="flex items-center gap-2">
                <Icon className="text-xl" />
                <span className="text-base whitespace-nowrap">{label}</span>
                {count !== undefined && (
                  <span className="text-lg font-semibold text-black bg-yellow-500 rounded-md px-2 ml-auto">
                    {count}
                  </span>
                )}
              </div>

              <IoIosArrowForward className="text-3xl" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <ul className="mx-6 flex flex-col gap-3">
          <li className=" bg-white flex items-center gap-2 p-3 rounded-2xl">
            <Link
              to="/setting"
              className="flex items-center justify-between text-gray-800 w-full"
            >
              <div className="flex items-center gap-2">
                <FaGear className="text-xl" />
                <span className="text-base whitespace-nowrap">Setting</span>
              </div>

              <IoIosArrowForward className="text-3xl" />
            </Link>
          </li>
          <li className=" bg-[#d4e0e5] flex items-center justify-between p-3 rounded-2xl">
            <button onClick={handleLogout} className="flex items-center gap-2">
              <RiLogoutCircleLine className="text-xl" />
              <span className="text-base whitespace-nowrap">Logout</span>
            </button>
            <IoIosArrowForward className="text-3xl" />
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 text-slate-500 py-7">
        <BsGlobe2 className="text-xl" />
        <h1 className="text-base font-semibold">Time Zone: GMT+5:30</h1>
      </div>
    </div>
  );
};

export default Sidebar;
