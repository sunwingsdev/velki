import { useState } from "react";
import { Link } from "react-router-dom";

function HeadingNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
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
                                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Slide-In Menu for Small Devices */}
                    <div
                        className={`fixed top-0 left-0 h-full bg-gray-200 w-64 z-50 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
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
                        <ul className="text-sm">
                            <li className="border-b border-black">
                                <Link
                                    to="/adminDashboard"
                                    className="block px-4 py-2 text-black hover:bg-yellow-300"
                                >
                                    Analysis
                                </Link>
                            </li>
                            {/* Add other menu items here */}
                            <li className="border-b border-black">
                                <Link
                                    to="/myAccount"
                                    className="block px-4 py-2 text-black hover:bg-yellow-300"
                                >
                                    My Account
                                </Link>
                            </li>
                            <li className="border-b border-black">
                                <Link
                                    to="/betList"
                                    className="block px-4 py-2 text-black hover:bg-yellow-300"
                                >
                                    BetList
                                </Link>
                            </li>
                            <li className="border-b border-black">
                                <Link
                                    to="/betLive"
                                    className="block px-4 py-2 text-black hover:bg-yellow-300"
                                >
                                    BetListLive
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-x-4 text-sm">
                        <li>
                            <Link
                                to="/adminDashboard"
                                className="text-black font-medium hover:bg-yellow-300 px-4 py-2"
                            >
                                Analysis
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/myAccount"
                                className="text-black font-medium hover:bg-yellow-300 px-4 py-2"
                            >
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/betList"
                                className="text-black font-medium hover:bg-yellow-300 px-4 py-2"
                            >
                                BetList
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/betLive"
                                className="text-black font-medium hover:bg-yellow-300 px-4 py-2"
                            >
                                BetListLive
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeadingNavbar;
