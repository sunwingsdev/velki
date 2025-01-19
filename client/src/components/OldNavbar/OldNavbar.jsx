import { Link } from "react-router-dom";


const OldNavbar = () => {
    return (
        <div className="bg-yellow-500 h-auto md:h-auto lg:h-6 md:w-auto lg:w-auto ">
            <nav className=" mx-auto  pb-1">
                <ul className="flex flex-wrap justify-start    items-center space-y-2 lg:space-y-0 lg:space-x-0  w-full">
                    <Link to='/adminDashboard'>
                        <li className="text-black  font-medium pt-2 lg:pt-0 cursor-pointer hover:bg-yellow-300  border-r lg:border-r border-opacity-60 lg:border-opacity-20   border-black px-4  font-sm transition ">
                            <a href="#home">Analysis</a>
                        </li>
                    </Link>



                    <div>
                        <li className="text-black  flex relative font-medium cursor-pointer hover:bg-yellow-300  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group">
                            <a href="#home" className="flex items-center">
                                Users
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
                            <ul className="absolute left-0 mt-6 hidden w-32  bg-gray-200 border-black border-b lg:border-b-0 border-r rounded  group-hover:block">
                                <li className="border-b">
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">user</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">agent</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">sub agent</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">admin</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">sub admin</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">master</a>
                                </li>
                            </ul>
                        </li>

                    </div>
                    <Link to='/setting1234'>
                        <li className="text-black font-medium  border-r lg:border-r border-opacity-60 lg:border-opacity-20 px-4 hover:bg-yellow-300  border-black pr-2 font-sm hover:text-black transition ">
                            <a href="#tab1">Settings</a>
                        </li>

                    </Link>




                    <Link to='/myAccount'>
                        <li className="text-black font-medium  border-r lg:border-r border-opacity-60 lg:border-opacity-20lg:border-b-0  hover:bg-yellow-300 border-black px-4 pr-2 font-sm hover:text-black transition">
                            <a href="#portfolio">My Account</a>
                        </li>
                    </Link>
                    <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group  ">
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
                        <ul className="absolute left-0 mt-6 hidden w-72 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded  group-hover:block">
                            <li className="border-b">
                                <a className="block px-4 py-2  font-sans border-b border-black  text-black hover:bg-gray-100">Profile/Loss Report by Downtime</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">Profile/Loss Report by Market</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">Profile/Loss Report by SNCCasino</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">Login Logout Report</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">Recently Created Account</a>
                            </li>

                        </ul>
                    </li>
                    <Link to='/betList'>
                        <li className="text-black font-medium  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition">
                            <a href="#pricing">BetList</a>
                        </li>
                    </Link>

                    <Link to='/betLive'>
                        <li className="text-black font-medium  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition">
                            <a href="#pricing">BetListLive</a>
                        </li>
                    </Link>
                    <li className="text-black font-medium  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition ">
                        <a href="#blog">Banking</a>
                    </li>
                    <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group">
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
                        <ul className="absolute left-0 mt-6 hidden w-32 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded  group-hover:block">
                            <li className="border-b">
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">user</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">agent</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">sub agent</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">admin</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">sub admin</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">master</a>
                            </li>
                        </ul>
                    </li>
                    <li className="text-black font-medium  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition">
                        <a href="#faq">MM</a>
                    </li>
                    <li className="text-black flex relative font-medium cursor-pointer hover:bg-yellow-300  border-r lg:border-r border-opacity-60 lg:border-opacity-20 border-black px-4 transition group  ">
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
                        <ul className="absolute left-0 mt-6 hidden w-32 bg-gray-200 border-black border-b lg:border-b-0 border-r rounded  group-hover:block">
                            <li className="border-b">
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">user</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">agent</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">sub agent</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">admin</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">sub admin</a>
                            </li>
                            <li>
                                <a className="block px-4 py-2 font-sans border-b border-black text-black hover:bg-gray-100">master</a>
                            </li>
                        </ul>
                    </li>
                    <li className="text-black font-medium   lg:border-opacity-20  border-r lg:border-r border-black px-4 hover:bg-yellow-300 font-sm hover:text-black transition">
                        <a href="#login">Messages</a>
                    </li>
                </ul>
            </nav>


        </div>
    );
};

export default OldNavbar;