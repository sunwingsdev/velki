
import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";

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
     <CommonNavMenu></CommonNavMenu>
      <div className="min-h-screen bg-adminBackground mt-2">
        <h1 className="text-center text-2xl pt-1 font-bold bg-yellow-500 h-10">
          Admin Setting
        </h1>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-10 mt-10">
            {fieldNames.map((fieldName, index) => (
              <div
                key={index}
                className={`pl-0 lg:pl-0 mb-2 sm:mb-0 w-full sm:w-auto ${
                  index === 7 || index === 10 ? "mr-16" : ""
                }`}
              >
                {/* Label */}
                <label
                  htmlFor={`input-${index}`}
                  className="block text-sm font-bold text-black mb-1"
                >
                  {fieldName}
                </label>
                <div className="flex flex-row items-center space-x-1  w-full">
                  {/* Render Dropdown for index 7 and 10 */}
                  {(index === 7 || index === 10) && (
                    <select
                      className={`font-bold outline-none border rounded-lg border-black text-purple-700 ${
                        index === 7
                          ? "w-40 lg:w-[600px] mr-20 md:mr-28 lg:mr-0"
                          : "w-40 lg:w-[600px] mr-20 md:mr-28 lg:mr-0"
                      }`}
                    >
                      {index === 7 ? (
                        <>
                          <option
                            className="text-black text-center font-semibold bg-yellow-500"
                            value="USDT"
                          >
                            USDT
                          </option>
                          <option
                            className="text-black text-center font-semibold bg-yellow-500"
                            value="BDT"
                          >
                            BDT
                          </option>
                          <option
                            className="text-black text-center font-semibold bg-yellow-500"
                            value="PVU"
                          >
                            PVU
                          </option>
                        </>
                      ) : (
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
                      )}
                    </select>
                  )}

                  {/* Render Input and Button for other indexes */}
                  {!(index === 7 || index === 10) && (
                    <>
                      <input
                        id={`input-${index}`}
                        className={`w-40 lg:w-[600px] rounded-lg h-6 border border-black placeholder:text-xs lg:placeholder:text-sm p-2 outline-none pr-8 ${
                          [2, 5].includes(index)
                            ? "placeholder:font-bold placeholder:text-black"
                            : ""
                        } ${
                          [8, 11, 14].includes(index)
                            ? "placeholder:font-semibold placeholder:text-black"
                            : ""
                        }`}
                        type={
                          index === 2
                            ? "text"
                            : index === 5
                            ? "password"
                            : index === 8
                            ? "tel"
                            : index === 11 || index === 14
                            ? "url"
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
                            : "0"
                        }
                      />
                      <button
                        type="button"
                        className="ml-2 px-2 pb-1 border border-black bg-yellow-400 text-black  font-bold rounded-2xl"
                        >
                        Add+
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gray-800 text-white rounded-xl mb-1 py-1 px-12">
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSetting;
