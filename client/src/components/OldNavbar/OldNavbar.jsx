import { useState } from "react";
import { Link } from "react-router-dom";

function HeadingNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="bg-yellow-500  h-auto w-auto">
                <nav className=" pb-1 ">
                    {/* Hamburger Menu Button */}
                    <div className="lg:hidden flex justify-between items-center">

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
                                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <ul
                        className={`lg:flex  gap-x-[-4px] lg:items-center text-sm ${menuOpen ? "block" : "hidden"}`}

                    >
                        <li className="text-black font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0 border-r lg:border-r lg:border-opacity-15 border-black">
                            <Link
                                to="/adminDashboard"
                                className=" block px-4 py-2 lg:py-0 w-full h-full"
                            >
                                Analysis
                            </Link>
                        </li>
                        <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group">
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
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        agent
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        sub agent
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        admin
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        sub admin
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        master
                                    </a>
                                </li>
                            </ul>

                        </li>

                        <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group">
                            <a href="#home" className="flex items-center">
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
                            </a>
                            {/* Dropdown Menu */}
                            <ul className="absolute left-0 mt-6 hidden w-56 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                                <Link to='/setting1234'>
                                    <li className="border-b">
                                        <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                            General Setting
                                        </a>
                                    </li>
                                </Link>
                                <Link to='/adminSetting'>
                                    <li className="border-b">
                                        <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                            Admin Setting
                                        </a>
                                    </li>
                                </Link>

                                <Link to='/gameApi'>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        game Api Key
                                    </a>
                                </li>
                                </Link>
                                <Link to='/homeControl'>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Home Control
                                    </a>
                                </li>
                                </Link>
                                

                                
                            </ul>

                        </li>

                        <Link to="/myAccount">
                            <li className="text-black font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r lg:border-r lg:border-opacity-15 border-black px-4 py-2 lg:py-0">
                                My Account
                            </li>
                        </Link>
                        <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300  border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group  ">
                            <a href="#home" className="flex items-center">
                                My Report
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
                            <ul className="absolute left-0 mt-6 hidden w-72 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Profile/Loss Report by Downtime
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Profile/Loss Report by Market
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Profile/Loss Report by SNCCasino
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Login Logout Report
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Recently Created Account
                                    </a>
                                </li>
                            </ul>

                        </li>
                        <Link to="/betList">
                            <li className="text-black font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r lg:border-r lg:border-opacity-15 border-black px-4 py-2 lg:py-0">
                                BetList
                            </li>
                        </Link>
                        <Link to="/betLive">
                            <li className="text-black font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r lg:border-r lg:border-opacity-15 border-black px-4 py-2 lg:py-0">
                                BetListLive
                            </li>
                        </Link>
                        <Link to='/banking'>
                            <li className="text-black font-medium  border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition ">
                                <a href="#blog">Banking</a>
                            </li>
                        </Link>
                        <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300  border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group">
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
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                       Pragmatice Play
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Evolution
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        BGaming
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Amusnet
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        PG Soft
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                       Play and GO
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Playtech
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Nolimit City
                                    </a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Hacksaw
                                    </a>
                                </li>
                            </ul>

                        </li>
                        <li className="text-black font-medium  border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition">
                            <a href="#faq">MM</a>
                        </li>
                        <li className="text-black   flex relative font-medium cursor-pointer hover:bg-yellow-300  border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group  ">
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
                            <ul className="absolute left-0 mt-6 hidden w-72 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Game file Import
                                    </a>
                                </li>
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                        Api file import
                                    </a>
                                </li>
                                
                            </ul>

                        </li>
                        <li className="text-black font-medium   lg:border-opacity-15  border-b lg:border-b-0  border-r lg:border-r border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition">
                            <a href="#login">Messages</a>
                        </li>
                        <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300 border-b lg:border-b-0  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group">
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
                            <ul className="absolute left-0 mt-6 hidden w-56 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded group-hover:block shadow-lg z-50">
                                <Link to='/activeGame'>
                                    <li className="border-b">
                                        <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                            Active Game
                                        </a>
                                    </li>
                                </Link>
                                <Link to='/deactiveGame'>
                                    <li className="border-b">
                                        <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
                                            Deactive Game
                                        </a>
                                    </li>
                                </Link>

                                
                                <Link to='/liveGame'>
                                    <li className="border-b">
                                        <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">
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
