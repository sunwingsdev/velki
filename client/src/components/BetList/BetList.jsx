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
];

const options = [
  ["Select UserA", "Select UserB", "Select UserC"],
  ["Select MarketA", "Select MarketB", "Select MarketC"],
  ["Select EventA", "Select EventB", "Select EventC"],
  ["Select CurrencyA", "Select CurrencyB", "Select CurrencyC"],
];

const BetList = () => {
  return (
    <div className="min-h-screen bg-adminBackground font-sans ">
      <div className=" ">
        <h3 className="font-serif mb-6 font-semibold ml-1">Bet List </h3>
      </div>
      <div className="min-h-screen font-sans ">
        <div className="min-h-screen mt-3 bg-adminBackground font-sans ">
          <div className="mx-3 bg-navbarBackground">
            <div className="pb-3 ">
              <ul className="flex flex-row overflow-x-auto mx-1 gap-2  md:flex-row lg:flex-row sm:text-left font-bold text-xs items-start">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row md:w-1/2 lg:w-auto items-center gap-1 mb-2"
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

              <div className="flex flex-row overflow-x-auto lg:flex-row items-center mt-3 gap-3">
                <div className="flex flex-row items-center">
                  <h3 className="pr-1 whitespace-nowrap font-bold">
                    Bet status:
                  </h3>
                  <select className="p-2 text-gray-400 font-semibold  text-xs outline-none border ">
                    <option className="" value="settled">
                      Settled
                    </option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <h3 className="pr-1 font-bold">Period:</h3>
                <input
                  className=" p-2 py-3 w-40 h-4 placeholder:text-xs  "
                  type="date"
                  name=""
                  id=""
                  placeholder=""
                />
                <p className="text-gray-400 font-semibold">to</p>
                <input
                  className=" p-2 py-3 w-40 h-4  "
                  type="date"
                  name=""
                  id=""
                  placeholder=""
                />

                <button className=" px-2 bg-white text-gray-400 font-semibold whitespace-nowrap    ">
                  Just for today
                </button>

                <button className=" px-2 bg-white text-gray-400 font-semibold whitespace-nowrap     ">
                  From Yesterday
                </button>
                <button className="border p-2 bg-black whitespace-nowrap text-yellow-400 font-bold border-black text-xs">
                  Show Default
                </button>
                <button className="border p-2 bg-black whitespace-nowrap text-yellow-400 font-bold border-black text-xs">
                  Get History
                </button>
                <p className="font-bold">last:</p>
                <select className=" text-gray-400 font-semibold p-3 text-xs outline-none">
                  <option value="10 tuesn">10 tuesn</option>
                  <option value="10 wedsn">10 wedsn</option>
                </select>
              </div>
              <div className="mx-1">
                <div className="mt-4 gap-2 ">
                  <div className="w-full sm:w-9/12 lg:w-auto lg:space-x-4 ml-1 md:ml-1 lg:ml-0 mb-4 space-y-2 md:space-y-2 lg:space-y-2 flex flex-col md:flex-wrap lg:flex-row md:justify-center lg:justify-start items-start lg:items-center">
                    <div className="mb-2 sm:mb-0">
                      <input
                        className="text-xs mt-3 sm:text-sm w-[290px] md:w-[500px] lg:w-full   sm:w-24 h-10 p-2 rounded-sm outline-none placeholder:text-xs placeholder:font-bold"
                        type="search"
                        placeholder="Search betId"
                      />
                    </div>

                    <div className="flex flex-row items-center w-full  sm:w-auto ">
                      <h3 className="pr-1 font-bold">stack &gt;=</h3>
                      <input
                        className=" outline-none rounded-lg  p-2 w-[250px] lg:w-28 md:w-[425px] h-10 text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="0"
                      />
                    </div>
                    {[...Array(4)].map((_, index) => (
                      <div
                        key={index}
                        className="pl-0 lg:pl-0 mb-2 sm:mb-0 w-full sm:w-auto"
                      >
                        <div className="flex flex-row space-x-1 relative">
                          <select className="w-full md:w-[500px] h-10 p-2 text-xs font-bold text-gray-500 lg:w-full rounded-lg pr-10 outline-none">
                            {options[index].map((option, optIndex) => (
                              <option key={optIndex} value={option}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 mx-3 bg-gray-100">
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

            <div className=" mt-12  flex flex-col items-center justify-center  ">
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

              <div className="text-center ">
                <h1 className="text-4xl font-bold  text-red-500 mb-1">
                  405 Error
                </h1>
                <p className="text-lg font-bold text-gray-700">
                  Games not found. Please include API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetList;
