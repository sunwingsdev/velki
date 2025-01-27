import React from "react";
import AccountTabs from "../AccountTabs/AccountTabs";
import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";

const userProfile = {
  firstName: "Adirgaj",
  lastName: "Md",
  birthday: "--",
  email: "Adirhassan63883@gmail.com",
  password: "*********************",
  timeZone: "Asia/Dhaka",
};

const Profile = () => {
  return (
    <div>
      <CommonNavMenu></CommonNavMenu>
      <div>
        <div className="bg-adminBackground min-h-screen flex flex-col md:flex-row lg:flex-row place-items-baseline space-y-4 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-4 px-4">
          <AccountTabs></AccountTabs>
          <div className="font-sans space-y-4 md:space-y-6 lg:space-y-6">
            <h3 className="text-lg font-bold sm:text-xl text-gray-800">
              Profile
            </h3>
            <div className="flex  flex-col w-full lg:flex-row gap-3">
              <div className="max-w-lg mx-auto  bg-white shadow-lg rounded-lg border border-gray-300 ">
                <h3 className="text-lg bg-profileHeaderColor text-white font-bold px-6 ">
                  About You
                </h3>
                <div className="px-6 py-2 grid items-center m   grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-0.5 lg:gap-y-4 text-sm">
                  {Object.entries(userProfile).map(([label, value]) => (
                    <React.Fragment key={label}>
                      <div className="font-bold text-gray-600 capitalize">
                        {label.replace(/([A-Z])/g, " $1")}
                      </div>
                      <div className="flex items-center md:gap-1  justify-between text-gray-900">
                        <span>{value}</span>
                        {label === "password" && (
                          <div className="relative">
                            {/* Button to Open Modal */}
                            <button
                              onClick={() =>
                                document
                                  .getElementById("admin-modal")
                                  .classList.remove("hidden")
                              }
                              className="  px-2 py-2 flex items-center"
                            >
                              <div className="flex  items-center gap-2 justify-between">
                                <button className="text-blue-600 hover:underline text-md">
                                  Edit
                                </button>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 text-blue-600 cursor-pointer"
                                  >
                                    <path d="M11 21H4a2 2 0 0 1-2-2v-7" />
                                    <path d="M18.4 2.6a2.83 2.83 0 1 1 4 4L9.5 19.5l-4.2.7.7-4.2L18.4 2.6z" />
                                  </svg>
                                </span>
                              </div>
                            </button>

                            {/* Modal */}
                            <div
                              id="admin-modal"
                              className="hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                              role="dialog"
                              onClick={(e) => {
                                if (e.target.id === "admin-modal") {
                                  document
                                    .getElementById("admin-modal")
                                    .classList.add("hidden");
                                }
                              }}
                            >
                              <div className="bg-headerGray w-full md:w-auto text-headingTextColor rounded-lg shadow-lg mx-4 md:mx-8 lg:mx-auto ">
                                <div className="flex flex-row items-center justify-center">
                                  <h3 className="text-lg w-full h-16 text-black  font-bold p-4">
                                    Change Password
                                  </h3>
                                  <button
                                    onClick={() =>
                                      document
                                        .getElementById("admin-modal")
                                        .classList.add("hidden")
                                    }
                                    className=" text-black p-4     flex items-center space-x-2"
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
                                </div>
                                <div className="mx-2">
                                  <div className="space-y-6 p-0 md:p-6 lg:p-6  rounded  w-full max-w-xl">
                                    
                                    <div className="flex items-center gap-4">
                                      <label className="w-40 text-right pr-5 md:pr-0 lg:pr-0 font-medium text-gray-700 whitespace-nowrap">
                                        New Password
                                      </label>
                                      <input
                                        type="password"
                                        placeholder="Enter"
                                        className="flex-1 h-8 border border-gray-300 hover:bg-red-200 p-2 rounded placeholder:text-sm outline-none focus:ring focus:ring-blue-200"
                                      />
                                      <span className="text-red-400 text-2xl ">
                                        *
                                      </span>
                                    </div>

                                    
                                    <div className="flex items-center  md:gap-4 lg:gap-4">
                                      <label className="w-40 text-right pr-3 md:pr-0 lg:pr-0   font-medium text-gray-700 whitespace-nowrap">
                                        Confirm Password 
                                      </label>
                                      <input
                                        type="password"
                                        placeholder="Enter"
                                        className="flex-1 h-8 border border-gray-300 hover:bg-red-200 p-2 rounded placeholder:text-sm outline-none focus:ring focus:ring-blue-200"
                                      />
                                      <span className="text-red-400 text-2xl ">
                                        *
                                      </span>
                                    </div>

                                   
                                    <div className="flex items-center gap-4">
                                      <label className="w-40 text-right pr-5 md:pr-0 lg:pr-0 font-medium text-gray-700 whitespace-nowrap">
                                        Your Password
                                      </label>
                                      <input
                                        type="password"
                                        placeholder="Enter"
                                        className="flex-1 h-8 border border-gray-300 hover:bg-red-200 p-2 rounded placeholder:text-sm outline-none focus:ring focus:ring-blue-200"
                                      />
                                      <span className="text-red-400 text-2xl ">
                                        *
                                      </span>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                      <button className="bg-yellow-400 border border-black px-12 py-2 font-bold rounded shadow hover:bg-yellow-500 transition">
                                        Change Password
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 max-w-lg w-full mx-auto bg-white rounded-sm    gap-y-1 text-sm">
                  <h3 className="text-lg bg-profileHeaderColor text-white font-bold px-6  col-span-2 ">
                    Contact Details
                  </h3>

                  
                  <div className="px-6 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 text-sm">
                    {[
                      { label: "Primary number", value: "1979373527" },
                     
                    ].map(({ label, value }) => (
                      <React.Fragment key={label}>
                        <div className="font-bold whitespace-nowrap text-gray-600 capitalize">
                          {label}
                        </div>
                        <div className="flex items-center justify-between text-gray-900">
                          <span>{value}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
