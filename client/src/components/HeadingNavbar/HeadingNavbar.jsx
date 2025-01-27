import { useState } from "react";
import { Link } from "react-router-dom";

function HeadingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="">
      <div className="bg-yellow-500 h-auto w-full">
        <nav className="pb-1">
          {/* Hamburger Menu Button */}
          <div className="lg:hidden flex justify-between items-center p-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Slide-In Menu for Small Devices */}
          <div
            className={`fixed top-0 left-0 h-full bg-yellow-500 w-64 z-50 transform ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="p-4 text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="text-sm ">
              <li
                className={`border-b font-medium px-4 py-2 border-black ${
                  activeTab === "/admindashboard"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link
                  to="/adminDashboard"
                  className="block hover:bg-yellow-300"
                  onClick={() => handleTabClick("/admindshboard")}
                >
                  Dashboard
                </Link>
              </li>
              <li
                className={`text-black flex relative font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r-0 lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group ${
                  activeTab === "#user" ? "bg-yellow-300" : "text-black"
                }`}
              >
                <Link
                  to="#user"
                  className="flex items-center"
                  onclick={() => handleTabClick("/user")}
                >
                  user
                  <span className="ml-2">
                    {/* Bold Dropdown Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </Link>

                <ul className="absolute left-0 mt-6 hidden w-32 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                  <li className="border-b">
                    <Link
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                      onClick={() => handleTabClick("#agent")}
                    >
                      Agent
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                      onClick={() => handleTabClick("#sub-agent")}
                    >
                      Sub Agent
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                      onClick={() => handleTabClick("#admin")}
                    >
                      admin
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                      onClick={() => handleTabClick("#subadmin")}
                    >
                      Sub admin
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                      onClick={() => handleTabClick("#master")}
                    >
                      master
                    </Link>
                  </li>
                </ul>
              </li>
              <ul className="text-sm">
                <li
                  className={`text-black flex relative font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0 border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group ${
                    location.pathname === "/setting"
                      ? "bg-yellow-300"
                      : "text-black"
                  }`}
                >
                  <Link to="/setting" className="flex items-center">
                    Setting
                    <span className="ml-2">
                      {/* Bold Dropdown Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-4 text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </Link>

                  {/* Dropdown Menu */}
                  <ul className="absolute left-0 mt-6 hidden w-56 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                    <li className="border-b">
                      <Link
                        to="/generalsetting"
                        className={`block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400 ${
                          location.pathname === "/generalsetting"
                            ? "bg-yellow-300"
                            : "text-black"
                        }`}
                      >
                        General Setting
                      </Link>
                    </li>

                    <li className="border-b">
                      <Link
                        to="/adminsetting"
                        className={`block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400 ${
                          location.pathname === "/adminsetting"
                            ? "bg-yellow-300"
                            : "text-black"
                        }`}
                      >
                        Admin Setting
                      </Link>
                    </li>

                    <li className="border-b">
                      <Link
                        to="/gameapi"
                        className={`block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400 ${
                          location.pathname === "/gameapi"
                            ? "bg-yellow-300"
                            : "text-black"
                        }`}
                      >
                        Game Api Key
                      </Link>
                    </li>

                    <li className="border-b">
                      <Link
                        to="/homecontrol"
                        className={`block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400 ${
                          location.pathname === "/homecontrol"
                            ? "bg-yellow-300"
                            : "text-black"
                        }`}
                      >
                        Home Control
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <li
                className={`border-b font-semibold border-black ${
                  location.pathname === "/myaccount"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link
                  to="/myaccount"
                  className="block px-4 py-2 text-black hover:bg-yellow-300"
                >
                  My Account
                </Link>
              </li>
              <li
                className={`border-b font-semibold border-black ${
                  location.pathname === "/betlist"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link
                  to="/betlist"
                  className="block px-4 py-2 text-black hover:bg-yellow-300"
                >
                  BetList
                </Link>
              </li>
              <li
                className={`border-b font-semibold border-black ${
                  location.pathname === "/betlive"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link
                  to="/betlive"
                  className="block px-4 py-2 text-black hover:bg-yellow-300"
                >
                  BetListLive
                </Link>
              </li>
              <li
                className={`text-black font-medium border-b lg:border-b-0 border-r-0 lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition ${
                  location.pathname === "/banking"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link to="/banking">Banking</Link>
              </li>
              <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300  border-b lg:border-b-0  border-r-0 lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group">
                <Link to="#casino" className="flex items-center">
                  Casino
                  <span className="ml-2">
                    {/* Bold Dropdown Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </Link>

                <ul className="absolute left-0 mt-6 hidden w-32 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                  <li className="border-b">
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Pragmatice Play
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Evolution
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      BGaming
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Amusnet
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      PG Soft
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Play and GO
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Playtech
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Nolimit City
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Hacksaw
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`text-black font-medium  border-b lg:border-b-0  border-r-0 lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition ${
                  location.pathname === "#MM" ? "bg-yellow-300" : "text-black"
                }`}
              >
                <Link to="#MM">MM</Link>
              </li>
              <li
                className={`text-black   flex relative font-medium cursor-pointer hover:bg-yellow-300  border-b lg:border-b-0  border-r-0 lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group ${
                  location.pathname === "#import"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link to="#import" className="flex items-center">
                  Import
                  <span className="ml-2">
                    {/* Bold Dropdown Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </Link>
                <ul className="absolute left-0 mt-6 hidden w-72 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                  <li
                    className={`border-b${
                      location.pathname === "gamefileimport"
                        ? "bg-yellow-300"
                        : "text-black"
                    }`}
                  >
                    <Link
                      to="gamefileimport"
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                    >
                      Game file Import
                    </Link>
                  </li>
                  <li
                    className={`border-b ${
                      location.pathname === "apifileformat"
                        ? "bg-yellow-300"
                        : "text-black"
                    }`}
                  >
                    <Link
                      to="apifileformat"
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                    >
                      Api file import
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`text-black font-medium   lg:border-opacity-15  border-b lg:border-b-0  border-r-0 lg:border-r border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition ${
                  location.pathname === "#message"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link to="#message">Message</Link>
              </li>
              <li
                className={`text-black flex relative font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group ${
                  location.pathname === "#gamecenter"
                    ? "bg-yellow-300"
                    : "text-black"
                }`}
              >
                <Link to="#gamecenter" classname="flex items-center">
                  Game Center
                  <span className="ml-2">
                    {/* Bold Dropdown Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </Link>

                <ul className="absolute left-0 mt-6 hidden w-56 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                  <li
                    className={`border-b ${
                      location.pathname === "/activegame"
                        ? "bg-yellow-300"
                        : "text-black"
                    }`}
                  >
                    <Link
                      to="/activegame"
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                    >
                      Active Game
                    </Link>
                  </li>
                  <li
                    className={`border-b ${
                      location.pathname === "/deactivegame"
                        ? "bg-yellow-300"
                        : "text-black"
                    }`}
                  >
                    <Link
                      t0="/deactivegame"
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                    >
                      Deactive Game
                    </Link>
                  </li>
                  <li
                    className={`border-b ${
                      location.pathname === "/livegame"
                        ? "bg-yellow-300"
                        : "text-black"
                    }`}
                  >
                    <Link
                      to="/livegame"
                      className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                    >
                      Live Game
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center whitespace-nowrap text-sm">
            <li
              className={`text-black px-3 py-2 font-medium hover:bg-yellow-300 ${
                location.pathname === "/admindashboard"
                  ? "bg-yellow-300"
                  : "text-black"
              }`}
            >
              <Link to="/admindashboard" className="">
                Dashboard
              </Link>
            </li>
            <li className="text-black font-medium hover:bg-yellow-300 px-3 py-2 flex relative  cursor-pointer  border-b lg:border-b-0   border-opacity-60 lg:border-opacity-20 border-black transition group">
              <a href="#home" className="flex items-center">
                user
                <span className="ml-2">
                  {/* Bold Dropdown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-6 hidden w-32 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    agent
                  </a>
                </li>
                <li className="border-b">
                  <Link className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    sub agent
                  </Link>
                </li>
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    admin
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    sub admin
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    master
                  </a>
                </li>
              </ul>
            </li>
            <li className="text-black font-medium hover:bg-yellow-300 px-3 py-2 flex relative  cursor-pointer  border-b lg:border-b-0   border-opacity-60 lg:border-opacity-20 border-black  transition group">
              <Link className="flex items-center">
                Setting
                <span className="ml-2">
                  {/* Bold Dropdown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </Link>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-6 hidden w-auto bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50 ">
                <li
                  className={`border-b ${
                    location.pathname === "/generalsetting"
                      ? "bg-yellow-300"
                      : "text-black"
                  }`}
                >
                  <Link
                    to="/generalsetting"
                    className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400"
                  >
                    General Setting
                  </Link>
                </li>
                <Link to="/adminsetting">
                  <li className="border-b">
                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Admin Setting
                    </a>
                  </li>
                </Link>

                <Link to="/gameapi">
                  <li className="border-b">
                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      game Api Key
                    </a>
                  </li>
                </Link>
                <Link to="/homecontrol">
                  <li className="border-b">
                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Home Control
                    </a>
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <Link
                to="/myaccount"
                className="text-black font-medium hover:bg-yellow-300 px-3 py-2"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                to="/betlist"
                className="text-black font-medium hover:bg-yellow-300 px-3 py-2"
              >
                BetList
              </Link>
            </li>
            <li>
              <Link
                to="/betlive"
                className="text-black font-medium hover:bg-yellow-300 px-3 py-2 "
              >
                BetListLive
              </Link>
            </li>
            <Link to="/banking">
              <li className="text-black font-medium hover:bg-yellow-300 px-3 py-2  ">
                Banking
              </li>
            </Link>
            <li className="text-black font-medium hover:bg-yellow-300 px-3 py-2 flex relative  cursor-pointer   border-b lg:border-b-0   border-opacity-60 lg:border-opacity-20 border-black  transition group">
              <a href="#home" className="flex items-center">
                Casino
                <span className="ml-2">
                  {/* Bold Dropdown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-6 hidden w-32 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Pragmatice Play
                  </a>
                </li>
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Evolution
                  </a>
                </li>
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    BGaming
                  </a>
                </li>
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Amusnet
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    PG Soft
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Play and GO
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Playtech
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Nolimit City
                  </a>
                </li>
                <li>
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Hacksaw
                  </a>
                </li>
              </ul>
            </li>
            <li className="text-black font-medium hover:bg-yellow-300 px-3 py-2  border-b lg:border-b-0  border-opacity-60 lg:border-opacity-20 border-black  font-sm hover:text-black transition">
              <a href="#faq">MM</a>
            </li>
            <li className="text-black font-medium hover:bg-yellow-300 px-3 py-2   flex relative  cursor-pointer   border-b lg:border-b-0   border-opacity-60 lg:border-opacity-20 border-black  transition group  ">
              <a href="#home" className="flex items-center">
                Import
                <span className="ml-2">
                  {/* Bold Dropdown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 mt-6 hidden w-52 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Game file Import
                  </a>
                </li>
                <li className="border-b">
                  <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                    Api file import
                  </a>
                </li>
              </ul>
            </li>
            <li className="text-black font-medium hover:bg-yellow-300 px-3 py-2 lg:border-opacity-15 border-b lg:border-b-0 border-black  font-sm hover:text-black transition">
              <a href="#login">Messages</a>
            </li>
            <li className="text-black font-medium hover:bg-yellow-300 py-2 flex relative cursor-pointer border-b lg:border-b-0 border-opacity-60 lg:border-opacity-20 border-black  transition group">
              <a href="#home" className="flex items-center">
                Game Center
                <span className="ml-2">
                  {/* Bold Dropdown Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul className="absolute right-0  mt-6 hidden w-36 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                <Link to="/activegame">
                  <li className="border-b">
                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Active Game
                    </a>
                  </li>
                </Link>
                <Link to="/deactivegame">
                  <li className="border-b">
                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Deactive Game
                    </a>
                  </li>
                </Link>

                <Link to="/livegame">
                  <li className="border-b">
                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-yellow-400">
                      Live Game
                    </a>
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeadingNavbar;
