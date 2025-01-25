
import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";


const fieldNames = [
  "Sprots Live TV Api key ",
  "Kambi API Key",
  "Playtech API Key",
  "BetFair APIApi key",
  "Pinnacle API Key",
  "etEnt API Key",
  " Sports Radar API Key",
  "SoftSwiss API Key",
  "SABA Sports Api key",
  "Odds Jam API Key",
  "Evolution API Key",
  "OBS Api key",
  "Bet Construct API Key",
  "Pragmatic Play API Key",
  "iNsports Api key",
];

const Game = () => {
  return (
    <div>
     <CommonNavMenu></CommonNavMenu>
      <div className="min-h-screen bg-adminBackground mt-2">
        <h1 className="text-center pt-1 text-2xl font-bold bg-yellow-500 h-10">
          Game Api Key Set
        </h1>

        <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-items-center   mt-10  ">
            {fieldNames.map((fieldName, index) => (
              <div
                key={index}
                className="  pl-0 lg:pl-0 mb-2 md:mb-0  "
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
                    className="    rounded-lg h-6 border border-black placeholder:text-xs sm:placeholder:text-sm p-2 outline-none  "
                    type="text"
                  />

                  {
                    <button
                      type="button"
                      className="ml-2 px-2 pb-1 border border-black bg-yellow-400 text-black  font-bold rounded-2xl"
                    >
                      Add+
                    </button>
                  }
                </div>
              </div>
            ))}
          </div>
          ;
          <div className="text-center">
            <button className="bg-gray-800 text-white rounded-xl mb-1  py-1 px-12">
              Save Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
