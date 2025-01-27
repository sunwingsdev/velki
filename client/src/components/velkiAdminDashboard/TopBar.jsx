import velkiLogo from "../../assets/velki.webp";
import { CgMenuGridR } from "react-icons/cg";

const TopBar = () => {
  return (
    <div className="px-3 py-3 flex justify-between gap-1 bg-gray-800">
      <button className="md:hidden text-yellow-500">
        <CgMenuGridR size={30} />
      </button>
      <img className="w-20 lg:w-28 h-8 lg:h-12" src={velkiLogo} alt="" />
      <div className="flex justify-between items-center gap-1.5 lg:gap-2">
        <p className="hidden md:block text-sm md:text-base lg:text-xl font-bold">
          <span className="text-white">Admin</span>{" "}
          <span className="text-yellow-500 font-semibold">
            - Main Balence :
          </span>{" "}
          <span className="text-gray-100 text-xs">USD 3,37,173.73</span>{" "}
        </p>
        <button className="hidden md:block pl-1 w-6 h-6 bg-gray-900 rounded-sm hover:bg-black border border-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-4 text-gray-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M21 12a9 9 0 11-6.219-8.56m.219-2.44V5m4-4H16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="pl-1 w-6 h-6 bg-gray-900 rounded-sm hover:bg-black border border-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-4 text-yellow-500"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M160 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v384zm32-200h235.5l-73.6-72.5c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l73.6-72.5H192c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
