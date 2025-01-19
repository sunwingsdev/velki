
import velkiLogo from '../../assets/velki.webp';
import HeadingNavbar from "../HeadingNavbar/HeadingNavbar";

const items = [
    "Asino", "Premium", "Horseracing", "Greyhoundracing", "Xjames",
    "kabaddi", "Election", "Basketball", "Bollyball", "Snoker",
    "Motorsport", "Icehockey", "Golf", "Esports", "Drafts",
    "Cycling", "Boxing", "Americanfootball", "Gaelocgames",
    "Asino", "Premium", "Horseracing", "Greyhoundracing", "Xjames",
    "kabaddi", "Election", "Basketball", "Bollyball", "Snoker",
    "Motorsport", "Icehockey", "Golf", "Esports", "Drafts",
    "Cycling", "Boxing", "Americanfootball", "Gaelocgames"
];

const placeholderTexts = ['Select user', 'Search for user', 'Pick a user', 'Find a user'];

const BetListLive = () => {
    return (
        <div>
            <div>
                <div className='flex flex-row md:justify-between  lg:justify-between  bg-gray-800'>
                    <div className="pt-4 pb-4">
                        <img src={velkiLogo} alt="" className="w-8 lg:w-full lg:max-w-full h-6 lg:h-12" />
                    </div>
                    <div className='md:pl-4 lg:pl-0 ml-1 md:ml-0 lg:ml-0 pt-0 lg:pt-6 flex flex-wrap lg:flex-row  justify-center items-center pr-2 space-x-2'>
                        <p><span className='text-white text-xs lg:text-xl  '>Admin</span>  <span className='text-yellow-500 text-xs lg:text-xl'>- Main Balence:</span> <span className='text-gray-100  text-xs'>USD 3,37,173.73</span> </p>
                        <button className="   pl-1 mt-2 w-6 h-6  bg-gray-900  hover:bg-gray-300">
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
                        <button className=" pl-1 mt-2 w-6 h-6 bg-gray-900 rounded-sm hover:bg-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-4 text-gray-100"
                                viewBox="0 0 512 512"
                                fill="currentColor">
                                <path d="M160 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v384zm32-200h235.5l-73.6-72.5c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l73.6-72.5H192c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                            </svg>

                        </button>


                    </div>
                </div>
                <div className=" bg-gray-800  ">


                    <HeadingNavbar></HeadingNavbar>

                </div>
                <div className='bg-slate-800 pt-0  '>

                    <div className="pl-0 lg:pl-4 flex items-center space-x-4">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-6 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 0014 0h-2zm-4 6v3h-2v-3h-2a4 4 0 008 0h-2z" />
                        </svg>


                        <div className="w-6 h-6 b border-r  pr-5 rounded-full   flex items-center justify-center ">
                            <p className="transform text-white  text-xs">News</p>
                        </div>
                    </div>


                    <div>




                    </div>
                </div>
            </div>
            <div className="bg-adminBackground min-h-screen">
                <h2 className="font-serif font-semibold ml-1 text-sm sm:text-base">Bet List Live</h2>
                <div className="m-0 space-y-2 bg-navbarBackground  px-1 py-1 border-b border-black">
                    <ul className="flex flex-row overflow-x-auto md:flex-row lg:flex-row sm:text-left text-xs items-start">
                        {items.map((item, index) => (
                            <li key={index} className="flex flex-row md:w-1/2 lg:w-auto items-center gap-1 mb-2">
                                <span className="break-words">{item}</span>
                                <button className="w-3 h-3 mr-1 text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4">
                        <div className="w-full sm:w-9/12 md:w-6/12 lg:w-auto md:space-y-2 lg:space-x-4 ml-1 md:ml-1 lg:ml-0 mb-4 flex flex-col md:flex-wrap lg:flex-row md:justify-center lg:justify-start items-start lg:items-center">
                            <div className="mb-2  sm:mb-0">
                                <input className="text-xs sm:text-sm md:w-28 lg:w-full  sm:w-24 h-10 p-2 rounded-sm outline-none" type="search" placeholder="search here" />
                            </div>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="pl-0 lg:pl-0 mb-2 sm:mb-0 w-full sm:w-auto">
                                    <div className="flex flex-row space-x-1 relative">
                                        <input
                                            className="w-full sm:w-40 h-10 placeholder:text-xs sm:placeholder:text-sm p-2 outline-none pr-8"
                                            type="search"
                                            placeholder={placeholderTexts[index]}
                                        />
                                        {/* Bold Cross Icon */}
                                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 9l8.5-8.5a1 1 0 011.415 1.415L11.415 10l8.5 8.5a1 1 0 11-1.415 1.415L10 11.415l-8.5 8.5a1 1 0 11-1.415-1.415L8.585 10 0.085 1.5a1 1 0 111.415-1.415L10 9z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        {/* Bold Dropdown Icon */}
                                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 ml-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 text-black" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-row items-center gap-1 w-full sm:w-auto mb-2 sm:mb-0">
                                <h3 className="text-xs sm:text-sm">Last:</h3>
                                <input className="text-xs sm:text-sm w-full sm:w-24 h-10 p-2 rounded-sm outline-none" type="search" placeholder="search here" />
                            </div>
                            <div className="flex flex-row items-center gap-1 w-full sm:w-auto">
                                <h3 className="text-xs sm:text-sm">Stack&gt;=</h3>
                                <input className="text-xs sm:text-sm w-full sm:w-36 h-10 p-2 rounded-sm outline-none" type="search" placeholder="search here" />
                            </div>
                            <div className="mt-2 sm:mt-0">
                                <p className="text-xs sm:text-sm">total Records: 113</p>
                            </div>
                        </div>
                        <button className="bg-black text-yellow-500 p-2 rounded-sm mt-2 sm:mt-4">Refresh</button>
                    </div>
                </div>

                <div className="font-sans ">
                    <ul className="py-4">
                        <li className="w-full pl-2 py-1 bg-textBackground text-white">UnMatched</li>
                        <li className="bg-navbarBackground text-black pl-2 py-1">You have no bets in this time period</li>
                    </ul>
                </div>



                <div className="mb-16">
                    <ul>
                        <li className="w-full  pl-2 py-1 bg-textBackground text-white ">Matched</li>
                    </ul>
                    <ul className="flex flex-nowrap lg:flex- whitespace-nowrap bg-gray-400 overflow-x-auto">
                        <li className="pr-16">PL ID</li>
                        <li className="pr-5">BET ID</li>
                        <li className="pr-5">BET placed</li>
                        <li className="pr-5">IP Address</li>
                        <li className="pr-96">Market</li>
                        <li className="pr-5">Selection</li>
                        <li className="pr-5">Type</li>
                        <li className="pr-56">Odds req</li>
                        <li className="pr-4">Stack</li>
                        <li> Avaiability</li>
                    </ul>
                    <ul>
                        <li className="bg-navbarBackground text-black pl-2 py-1">You have no bets in this time period</li>

                    </ul>
                </div>
                <div className="  flex flex-col items-center justify-center  bg-gray-100">

                    <div className="mb-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-24 h-24 text-white bg-red-600"
                        >
                            <path
                                d="M18.364 5.636a1.5 1.5 0 0 0-2.121 0L12 9.879 7.757 5.636a1.5 1.5 0 0 0-2.121 2.121L9.879 12l-4.243 4.243a1.5 1.5 0 1 0 2.121 2.121L12 14.121l4.243 4.243a1.5 1.5 0 1 0 2.121-2.121L14.121 12l4.243-4.243a1.5 1.5 0 0 0 0-2.121z"
                            />
                        </svg>
                    </div>


                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-red-500 mb-4">405 Error</h1>
                        <p className="text-lg text-gray-700">Games not found. Please include API.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BetListLive;