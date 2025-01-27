import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";

const items = [
  "Casino",
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
];

// const placeholderTexts = [
//   "Select user",
//   "Search Event",
//   "Select Market",
//   "Select Currency",
// ];
const options = [
  [ "Select UserA", "Select UserB", "Select UserC"],
  [ "Select MarketA", "Select MarketB", "Select MarketC"],
  [ "Select EventA", "Select EventB", "Select EventC"],
  [ "Select CurrencyA", "Select CurrencyB", "Select CurrencyC"],
];

const BetListLive = () => {
  return (
    <div>
      <CommonNavMenu></CommonNavMenu>
      <div className="bg-adminBackground min-h-screen">
        <h2 className="font-serif font-semibold ml-1 text-sm sm:text-base">
          Bet List Live
        </h2>
        <div className="bg-navbarBackground mt-3 ml-2">
          <div className="m-0 space-y-2    px-1 py-1 border-b border-black">
            <ul className="flex flex-row overflow-x-auto gap-3 md:flex-row lg:flex-row sm:text-left text-xs items-start">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex font-bold flex-row md:w-1/2 lg:w-auto items-center gap-1 mb-2"
                >
                  
                  <label
                    htmlFor={`radio-${item}`}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      className="w-3 h-3 mr-1 text-white rounded-full border border-black hover:bg-blue-600 transition duration-300"
                      type="radio"
                      name="example"
                      id={`radio-${item}`}
                    />
                    <span className="break-words">{item}</span>
                  </label>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <div className="w-full sm:w-9/12 md:w-6/12 lg:w-auto md:space-y-2 lg:space-x-4 ml-1 md:ml-1 lg:ml-0 mb-4 flex flex-col md:flex-wrap lg:flex-row md:justify-center lg:justify-start items-start lg:items-center">
                <div className="mb-2  sm:mb-0">
                  <input
                    className="text-xs sm:text-sm mt-2 lg:w-36  w-[300px] md:w-[500px]  h-7 p-2 rounded-sm outline-none placeholder:text-gray-400"
                    type="search"
                    placeholder="search here"
                  />
                </div>
                {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          className="pl-0 lg:pl-0 mb-2 sm:mb-0 w-full sm:w-auto"
                        >
                          <div className="flex flex-row space-x-1 relative">
                           
                            <select className="w-full md:w-[500px] h-10 p-2 text-sm font-bold text-gray-500 lg:w-full rounded-lg pr-10 outline-none">
                              {options[index].map((option, optIndex) => (
                                <option  key={optIndex} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>

                            {/* Bold Cross Icon */}
                            <span className="absolute right-5 top-1/2 transform -translate-y-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 9l8.5-8.5a1 1 0 011.415 1.415L11.415 10l8.5 8.5a1 1 0 11-1.415 1.415L10 11.415l-8.5 8.5a1 1 0 11-1.415-1.415L8.585 10 0.085 1.5a1 1 0 111.415-1.415L10 9z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            {/* Bold Dropdown Icon */}
                          </div>
                        </div>
                      ))}
                <div className="flex flex-row items-center gap-1 w-full sm:w-auto mb-2 sm:mb-0">
                  <h3 className="text-xs font-bold sm:text-sm">Last:</h3>
                  <select className="lg:text-xs text-gray-400 text-sm w-full md:w-[465px] lg:w-[100px]  h-10 p-2 rounded-sm outline-none">
                    <option value="100 tanx">100 tanx</option>
                    <option value="200 tanx">200 tavx</option>
                  </select>
                </div>
                <div className="flex flex-row items-center gap-1  ">
                  <h3 className="text-xs font-bold sm:text-sm">Stack&gt;=</h3>
                  <input
                    className="text-xs sm:text-sm w-full md:w-[440px] lg:w-full  h-10 p-2 rounded-sm outline-none"
                    type="search"
                    placeholder="search here"
                  />
                </div>
                <div className="mt-2 sm:mt-0">
                  <p className="text-xs text-gray-400 font-bold lg:text-xs">
                    Total Records: 113
                  </p>
                </div>
              </div>
              <button className="bg-black font-bold text-yellow-500 p-2 rounded-sm mt-2 sm:mt-4">
                Refresh
              </button>
            </div>
          </div>

          <div className="font-sans ">
            <ul className="py-4">
              <li className="w-full pl-2 font-bold py-1 bg-textBackground text-white">
                UnMatched
              </li>
              <li className="bg-white  text-black pl-2 py-1">
                You have no bets in this time period
              </li>
            </ul>
          </div>
        </div>

        <div className="pb-16 mx-3 bg-navbarBackground">
          <ul>
            <li className="w-full font-bold  pl-2 py-1 bg-textBackground text-white ">
              Matched
            </li>
          </ul>
          <ul className="flex flex-row font-semibold bg-gray-300  overflow-x-auto whitespace-nowrap">
            <li className="pr-2 flex items-center">
              <input type="checkbox" className="" />
            </li>
            <li className="pr-16">PL ID</li>
            <li className="pr-5">BET ID</li>
            <li className="pr-5">BET placed</li>
            <li className="pr-5">IP Address</li>
            <li className="pr-14">Market</li>
            <li className="pr-5">Selection</li>
            <li className="pr-5">Type</li>
            <li className="pr-44">Odds req</li>
            <li className="pr-4">Stack</li>
            <li> Liability</li>
          </ul>
          <ul>
            <li className="bg-white text-black  pl-2 py-1">
              You have no bets in this time period
            </li>
          </ul>
        </div>
        <div className="bg-navbarBackground mx-3 flex flex-col items-center justify-center  ">
          <div className="mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24 rounded-full text-white bg-red-600"
            >
              <path d="M18.364 5.636a1.5 1.5 0 0 0-2.121 0L12 9.879 7.757 5.636a1.5 1.5 0 0 0-2.121 2.121L9.879 12l-4.243 4.243a1.5 1.5 0 1 0 2.121 2.121L12 14.121l4.243 4.243a1.5 1.5 0 1 0 2.121-2.121L14.121 12l4.243-4.243a1.5 1.5 0 0 0 0-2.121z" />
            </svg>
          </div>

          <div className="text-center">
            <h1 className="text-4xl  font-bold text-red-500 mb-1">405 Error</h1>
            <p className="text-lg font-bold text-gray-700">
              Games not found. Please include API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetListLive;
