import velkiLogo from "../../assets/velki.webp";
import HeadingNavbar from "../HeadingNavbar/HeadingNavbar";

const items = [
  "Asino",
  "Premium",
  "Horseracing",
  "Greyhoundracing",
  "Xjames",
  "kabaddi",
  "Election",
  "Basketball",
  "Bollyball",
  "Snoker",
  "Motorsport",
  "Icehockey",
  "Golf",
  "Esports",
  "Drafts",
  "Cycling",
  "Boxing",
  "Americanfootball",
  "Gaelocgames",
  "Asino",
  "Premium",
  "Horseracing",
  "Greyhoundracing",
  "Xjames",
];

const placeholderTexts = [
  "Select user",
  "Search for user",
  "Pick a user",
  "Find a user",
];

const ActiveGame = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row md:justify-between  lg:justify-between  bg-gray-800">
          <div className="pt-4 pb-4">
            <img
              src={velkiLogo}
              alt=""
              className="w-8 lg:w-full lg:max-w-full h-6 lg:h-12"
            />
          </div>
          <div className="md:pl-4 lg:pl-0 ml-1 md:ml-0 lg:ml-0 pt-0 lg:pt-6 flex flex-wrap lg:flex-row  justify-center items-center pr-2 space-x-2">
            <p>
              <span className="text-white text-xs lg:text-xl  ">Admin</span>{" "}
              <span className="text-yellow-500 text-xs lg:text-xl">
                - Main Balence:
              </span>{" "}
              <span className="text-gray-100  text-xs">USD 3,37,173.73</span>{" "}
            </p>
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
                fill="currentColor"
              >
                <path d="M160 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v384zm32-200h235.5l-73.6-72.5c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l73.6-72.5H192c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </button>
          </div>
        </div>
        <div className=" bg-gray-800  ">
          <HeadingNavbar></HeadingNavbar>
        </div>
        <div className="bg-slate-800   ">
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

          <div></div>
        </div>
      </div>
      <div className="min-h-screen font-sans ">
        <h1 className="text-center text-xl font-bold bg-yellow-500 h-10">
          Active Game
        </h1>

        <div className="min-h-screen bg-adminBackground font-sans ">
                
                <div className="mx-3 mt-2 bg-navbarBackground">

                    <div className=' '>
                        <ul className="flex flex-row overflow-x-auto mx-1  md:flex-row lg:flex-row sm:text-left font-bold text-xs items-start">
                            {items.map((item, index) => (
                                <li key={index} className="flex flex-row md:w-1/2 lg:w-auto items-center gap-1 mb-2">
                                    <span className="break-words">{item}</span>
                                    <button className="w-3 h-3 mr-1 text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-row overflow-x-auto lg:flex-row items-center gap-3">
                            <div className="flex flex-row items-center">
                                <h3 className="pr-1 font-bold">Bet status:</h3>
                                <input className="border border-black p-2 w-28 h-4 text-xs" type="search" name="" id="" placeholder="setteled" />
                            </div>
                            <h3 className="pr-1 font-bold">Period:</h3>
                            <input className="border border-black p-2 py-3 w-40 h-4 placeholder:text-xs " type="date" name="" id="" placeholder="2022/02/23" />
                            <p>to</p>
                            <input className="border border-black p-2 py-3 w-40 h-4 " type="date" name="" id="" placeholder="2022/02/23" />

                            <button className="border px-2   border-black ">just for today</button>


                            <button className="border px-2   border-black ">From Yesterday</button>
                            <button className="border p-2 bg-black text-yellow-400 font-bold border-black text-xs">Show Default</button>
                            <button className="border p-2 bg-black text-yellow-400 font-bold border-black text-xs">Get History</button>
                            <p className='font-bold'>last:</p>
                            <input className="border  border-black p-3 w-40 h-4 placeholder:text-xs" type="datetime" name="" id="" placeholder="10 tues" />
                        </div>
                        <div className="mx-1">
                            <div className="mt-4 gap-2 ">
                                <div className="w-full sm:w-9/12 lg:w-auto lg:space-x-4 ml-1 md:ml-1 lg:ml-0 mb-4 space-y-2 md:space-y-2 lg:space-y-0 flex flex-col md:flex-wrap lg:flex-row md:justify-center lg:justify-start items-start lg:items-center">
                                    <div className="mb-2 sm:mb-0">

                                        <input className="text-xs sm:text-sm border border-black w-full sm:w-24 h-10 p-2 rounded-sm outline-none placeholder:text-xs" type="search" placeholder="search here" />
                                    </div>

                                    <div className="flex flex-row items-center w-full sm:w-auto ">
                                        <h3 className="pr-1 font-bold">stack &gt;=</h3>
                                        <input className="border border-black p-2 w-28 h-10 text-xs" type="search" name="" id="" placeholder="0" />
                                    </div>
                                    {[...Array(4)].map((_, index) => (
                                        <div key={index} className="pl-0 lg:pl-0 mb-2 sm:mb-0 w-full sm:w-auto">
                                            <div className="flex flex-row space-x-1 relative">
                                                <input
                                                    className="w-full sm:w-40 h-10 border border-black placeholder:text-xs sm:placeholder:text-sm p-2 outline-none pr-8"
                                                    type="search"
                                                    placeholder={placeholderTexts[index]}
                                                />
                                                {/* Bold Cross Icon */}
                                                <span className="  absolute right-2 top-1/2 transform -translate-y-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 9l8.5-8.5a1 1 0 011.415 1.415L11.415 10l8.5 8.5a1 1 0 11-1.415 1.415L10 11.415l-8.5 8.5a1 1 0 11-1.415-1.415L8.585 10 0.085 1.5a1 1 0 111.415-1.415L10 9z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                {/* Bold Dropdown Icon */}
                                                <span className=" absolute right-4 top-1/2 transform -translate-y-1/2 ml-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4 text-black" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16 mx-3 bg-gray-100">

                    <ul className="flex flex-row font-semibold bg-gray-300  overflow-x-auto whitespace-nowrap">

                        <li className="pr-16">PL ID</li>
                        <li className="pr-5">BET ID</li>
                        <li className="pr-5">BET placed</li>
                        <li className="pr-5">IP Address</li>
                        <li className="pr-96">Market</li>
                        <li className="pr-5">Selection</li>
                        <li className="pr-5">Type</li>
                        <li className="pr-44">Odds req</li>
                        <li className="pr-4">Stack</li>
                        <li> Liability</li>
                    </ul>

                    <div className=" mt-12  flex flex-col items-center justify-center  ">

                        <div className="mb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-24 h-24 rounded-full text-white bg-red-600"
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
      </div>
    </div>
  );
};

export default ActiveGame;
