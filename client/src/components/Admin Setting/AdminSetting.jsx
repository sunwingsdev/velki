import HeadingNavbar from "../HeadingNavbar/HeadingNavbar";
import velkiLogo from "../../assets/velki.webp";

const fieldNames = [
  "All User Bonus add: ",
  "Monthly sub master Bonus:",
  "Monthly sub admin Bonus:",
  "Monthly sub admin Bonus:",
  "Monthly senior Supper Bonus:",
  "Change Mother Admin Password:",
  " Change Mother Admin User ID:",
  "Currency Set:",
  "Whats App Number:",
  "Monthly sub Master Bonus:",
  "Site Maintain Mode:",
  "Telegram Link:",
  "Monthly Sub Supper Bonus:",
  "Site Title:",
  "Facebook Link:",
];

const AdminSetting = () => {
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
      <div className="min-h-screen bg-adminBackground mt-2">
        <h1 className="text-center text-2xl pt-1 font-bold bg-yellow-500 h-10">
          Admin Setting
        </h1>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 mx-10 lg:mx-60 mt-10  ">
            {fieldNames.map((fieldName, index) => (
              <div
                key={index}
                className={`pl-0 lg:pl-0 mb-2 sm:mb-0 w-full sm:w-auto 
                                ${index === 7 || index === 10 ? "mr-16" : ""}`}
              >
                {/* Label */}
                <label
                  htmlFor={`input-${index}`}
                  className="block text-sm font-bold text-black mb-1"
                >
                  {fieldName}
                </label>
                <div className="flex flex-row items-center space-x-1 relative">
                  {/* Input */}
                  <input
                    id={`input-${index}`}
                    className={`w-40 lg:w-[600px]   rounded-lg h-6 border border-black placeholder:text-xs lg:placeholder:text-sm p-2 outline-none pr-8 
            ${
              [2, 5].includes(index)
                ? "placeholder:font-bold placeholder:text-black"
                : ""
            }
            ${
              [8, 11, 14].includes(index)
                ? "placeholder:font-semibold placeholder:text-black"
                : ""
            }
          `}
                    type={
                      index === 2
                        ? "text"
                        : index === 5
                        ? "password"
                        : index === 8
                        ? "tel"
                        : index === 11 || index === 14
                        ? "url"
                        : index === 7 || index === 10
                        ? "select"
                        : "text"
                    }
                    placeholder={
                      index === 2
                        ? "Admin"
                        : index === 5
                        ? "Password"
                        : index === 8
                        ? "+8801700000000"
                        : index === 11
                        ? "@velki123"
                        : index === 14
                        ? "facebook.com/velki123"
                        : index === 7 || index === 10
                        ? ""
                        : "0"
                    }
                  />
                  {/* Dropdown */}
                  {(index === 7 || index === 10) && (
                    <div className="absolute left-0 top-0 flex items-center ">
                      <select
                        className={`w-full bg-transparent  text-purple-700 font-bold outline-none     ${
                          index === 7 ? "pr-40" : index === 10 ? "pr-36" : ""
                        }`}
                      >
                        {index === 7 ? (
                          <>
                            <option
                              className="text-black text-center  font-semibold bg-yellow-500     "
                              value="USDT"
                            >
                              USDT
                            </option>
                            <option
                              className="text-black text-center font-semibold bg-yellow-500 hover:bg-black !important transition duration-300 "
                              value="BDT"
                            >
                              BDT
                            </option>
                            <option
                              className="text-black text-center font-semibold bg-yellow-500 hover:bg-black !important transition duration-300 "
                              value="PVU"
                            >
                              PVU
                            </option>
                          </>
                        ) : index === 10 ? (
                          <>
                            <option
                              className="text-black text-center font-semibold bg-yellow-500"
                              value="active"
                            >
                              Active
                            </option>
                            <option
                              className="text-black text-center font-semibold bg-yellow-500"
                              value="inactive"
                            >
                              Inactive
                            </option>
                          </>
                        ) : null}
                      </select>
                    </div>
                  )}
                  {/* Button */}
                  {!(index === 7 || index === 10) && (
                    <button
                      type="button"
                      className="ml-2  px-2 pb-1 border border-black bg-yellow-500 text-black  font-semibold rounded-2xl"
                    >
                      Add+
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gray-800 text-white rounded-xl mt-4 mb-1 py-1 px-12">
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSetting;
