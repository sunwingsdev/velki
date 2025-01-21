import velkiLogo from "../../assets/velki.webp";
import HeadingNavbar from "../HeadingNavbar/HeadingNavbar";

const Setting = () => {
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
        <div className="bg-slate-800 pt-0  ">
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
      <div className="space-y-4 bg-adminBackground min-h-screen  font-semibold">
        <h2 className="pl-2">General settings</h2>
        <div className="space-y-10 lg:space-y-3">
          <ul className=" pl-2 flex flex-row  overflow-x-auto lg:flex-row sm:text-left  items-center gap-6">
            <span className="flex flex-row items-center gap-1 ">
              <li>Default span</li>
              <button className="w-4 h-4   text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Sport Wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Compettition wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Event Wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Market wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>
          </ul>
          <ul className="pl-2 flex flex-row overflow-x-auto  lg:flex-row  gap-6">
            <span className="flex flex-row items-center space-x-1">
              <li>Default span</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Sport Wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Compettition wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Event Wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>

            <span className="flex flex-row items-center space-x-1">
              <li>Market wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>
            <span className="flex flex-row items-center space-x-1">
              <li>Market wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>
            <span className="flex flex-row items-center space-x-1">
              <li>Market wise</li>
              <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
            </span>
          </ul>
        </div>
        <div className="m-0 md:m-4 lg:m-20">
          <div className="flex flex-col items-center justify-center   md:flex-row lg:flex-row space-y-4 md:space-y-0 lg:space-y-0 md:space-x-5 lg:space-x-5">
            <div className="w-9/12 lg:w-1/3 md:h-80  lg:h-64 border  border-black border-opacity-15">
              <div>
                <h3 className="text-center">Limit Setting</h3>
                <div className=" flex flex-col lg:flex-row justify-center space-x-3">
                  <div className="pl-3 lg:pl-0">
                    <h3>Exposure limit</h3>
                    <div className="flex flex-row  space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs "
                        type="search"
                        name=""
                        id=""
                        placeholder="10000"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                  <div>
                    <h3>Bookmaking Commission</h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="0"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col  lg:flex-row justify-center space-x-3">
                  <div className="pl-3 lg:pl-0">
                    <h3>Exchange Commission </h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="2"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                  <div>
                    <h3>Bet Delay</h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="5"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col pl-3   lg:pl-2">
                <h3 className="">
                  No of Minutes in <br /> play
                </h3>
                <div className="flex flex-row  space-x-1">
                  <input
                    className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                    type="search"
                    name=""
                    id=""
                    placeholder="0"
                  />
                  <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                </div>
              </div>
            </div>
            <div className="w-9/12 lg:w-1/3 h-80 lg:h-64 border   border-black border-opacity-15">
              <div>
                <h3 className="text-center">Market Setting</h3>
                <div className=" flex flex-col lg:flex-row justify-center space-x-3">
                  <div className="pl-3 lg:pl-0">
                    <h3>Bet min rate</h3>
                    <div className="flex flex-row  space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="20"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                  <div>
                    <h3>Bet max rate</h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="20"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col  lg:flex-row justify-center space-x-3">
                  <div className="pl-3 lg:pl-0">
                    <h3>Volume Multiplier </h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="20"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                  <div>
                    <h3>Min stake</h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="10000"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  lg:flex-row justify-center space-x-3">
                <div className="pl-3 lg:pl-0">
                  <h3>Max Stake </h3>
                  <div className="flex flex-row space-x-1">
                    <input
                      className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                      type="search"
                      name=""
                      id=""
                      placeholder="20000"
                    />
                    <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                  </div>
                </div>
                <div>
                  <h3>Max Profit</h3>
                  <div className="flex flex-row space-x-1">
                    <input
                      className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                      type="search"
                      name=""
                      id=""
                      placeholder="30000"
                    />
                    <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                  </div>
                </div>
              </div>

              <div>
                <div className=" flex flex-col pl-3 lg:pl-2  ">
                  <h3 className="">Max loss</h3>
                  <div className="flex flex-row  space-x-1">
                    <input
                      className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                      type="search"
                      name=""
                      id=""
                      placeholder="100000"
                    />
                    <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-9/12 lg:w-1/3 h-80 lg:h-64 border  border-black border-opacity-15">
              <div>
                <h3 className="text-center">Session Setting</h3>
                <div className=" flex flex-col lg:flex-row justify-center space-x-3">
                  <div className="pl-3 lg:pl-0">
                    <h3>Min stake</h3>
                    <div className="flex flex-row  space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="1"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                  <div>
                    <h3> max stake</h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="500000"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col  lg:flex-row justify-center space-x-3">
                  <div className="pl-3 lg:pl-0">
                    <h3>Max loss </h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="200000"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                  <div>
                    <h3>Max profit</h3>
                    <div className="flex flex-row space-x-1">
                      <input
                        className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                        type="search"
                        name=""
                        id=""
                        placeholder="30000"
                      />
                      <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  flex-col lg:flex-row justify-center space-x-3">
                <div className="pl-3 lg:pl-0">
                  <h3>per rate max stake </h3>
                  <div className="flex flex-row space-x-1">
                    <input
                      className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                      type="search"
                      name=""
                      id=""
                      placeholder="2"
                    />
                    <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                  </div>
                </div>
                <div>
                  <h3>Commission %</h3>
                  <div className="flex flex-row space-x-1">
                    <input
                      className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                      type="search"
                      name=""
                      id=""
                      placeholder="5"
                    />
                    <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                  </div>
                </div>
              </div>

              <div>
                <div className=" flex flex-col pl-3 lg:pl-2 ">
                  <h3 className="">Bet Delay</h3>
                  <div className="flex flex-row  space-x-1">
                    <input
                      className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                      type="search"
                      name=""
                      id=""
                      placeholder=""
                    />
                    <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 mx-10 pr-6 md:pr-0 lg:pr-0 md:mx-0 lg:mx-0 mb-4  md:mb-4     border border-black border-opacity-15">
            <div className="text-center md:text-start md:pl-10 lg:text-center  ">
              <h3>Bookmaking Setting</h3>
            </div>
            <div className=" w-9/12 md:w-4/12 lg:w-auto lg:space-x-4 ml-8 md:ml-1 lg:ml-0 mb-0 md:mb-4 lg:mb-0 flex mt-6 flex-col lg:flex-row md:justify-center lg:justify-start  items-center  p-4">
              <div className="pl-0 lg:pl-0">
                <h3>Bet Delay</h3>
                <div className="flex flex-row  space-x-1">
                  <input
                    className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                    type="search"
                    name=""
                    id=""
                    placeholder="20000"
                  />
                  <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                </div>
              </div>
              <div className="pl-0 lg:pl-0">
                <h3>Max stake</h3>
                <div className="flex flex-row  space-x-1">
                  <input
                    className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                    type="search"
                    name=""
                    id=""
                    placeholder="10000"
                  />
                  <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                </div>
              </div>
              <div className="pl-0 lg:pl-0">
                <h3>Min stake</h3>
                <div className="flex flex-row  space-x-1">
                  <input
                    className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                    type="search"
                    name=""
                    id=""
                    placeholder="5"
                  />
                  <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                </div>
              </div>
              <div className="pl-0 lg:pl-0">
                <h3>Max profit</h3>
                <div className="flex flex-row  space-x-1">
                  <input
                    className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                    type="search"
                    name=""
                    id=""
                    placeholder="3"
                  />
                  <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                </div>
              </div>
              <div className="pl-0 lg:pl-0">
                <h3>Max loss</h3>
                <div className="flex flex-row  space-x-1">
                  <input
                    className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                    type="search"
                    name=""
                    id=""
                    placeholder="2"
                  />
                  <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                </div>
              </div>
              <div className="pl-0 lg:pl-0">
                <h3>Max stake per rate</h3>
                <div className="flex flex-row  space-x-1">
                  <input
                    className="w-40 h-4 border border-black pl-1 placeholder:text-xs"
                    type="search"
                    name=""
                    id=""
                    placeholder=""
                  />
                  <button className="w-4 h-4  text-white rounded-full border border-black flex items-center justify-center hover:bg-blue-600 transition duration-300"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
