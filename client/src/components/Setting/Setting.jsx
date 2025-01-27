
import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";

const items = [
  "Default span",
  "Sport wise",
  "Competition wise",
  "Event wise",
  "Market wise",
];
const itemsTwo = [
  "Default span",
  "Admin wise",
  "Subadmin wise",
  "Supermaster wise",
  "Master wise",
  "Agent wise",
  "Client wise",
];
const settings = [
  {
    title: "Exposure Limit:",
    placeholder: "10000",
  },
  {
    title: "Bookmaking Commission:",
    placeholder: "0",
  },
  {
    title: "Exchange Commission:",
    placeholder: "2",
  },
  {
    title: "Bet Delay:",
    placeholder: "5",
  },
  {
    title: "No of Minutes in play:",
    placeholder: "0",
  },
];
const marketSettings = [
  { title: "Bet Min Rate:", placeholder: "20" },
  { title: "Bet Max Rate:", placeholder: "20" },
  { title: "Volume Multiplier:", placeholder: "20" },
  { title: "Min Stake:", placeholder: "10000" },
  { title: "Max Stake:", placeholder: "20000" },
  { title: "Max Profit:", placeholder: "30000" },
  { title: "Max Loss:", placeholder: "100000" },
];
const sessionSettings = [
  { title: "Min Stake:", placeholder: "1" },
  { title: "Max Stake:", placeholder: "500000" },
  { title: "Max Loss:", placeholder: "200000" },
  { title: "Max Profit:", placeholder: "30000" },
  { title: "Per Rate Max Stake:", placeholder: "2" },
  { title: "Commission %:", placeholder: "5" },
  { title: "Bet Delay:", placeholder: "4" },
];
const bookmakingSettings = [
  { title: "Bet Delay:", placeholder: "20000" },
  { title: "Max Stake:", placeholder: "10000" },
  { title: "Min Stake:", placeholder: "5" },
  { title: "Max Profit:", placeholder: "3" },
  { title: "Max Loss:", placeholder: "2" },
  { title: "Max Stake Per Rate:", placeholder: "5000" },
];

const Setting = () => {
  return (
    <div>
     <CommonNavMenu></CommonNavMenu>
      <div className="space-y-4 bg-adminBackground min-h-screen  font-semibold">
        <h2 className="pl-2 font-bold ">General settings</h2>
        <div className="space-y-10 bg-navbarBackground lg:space-y-3">
          <ul className="pl-2 whitespace-nowrap flex flex-row  overflow-x-auto lg:flex-row sm:text-left font-semibold  items-center gap-6">
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
                    className="w-3 h-3 mr-1 text-white rounded-full border border-black "
                    type="radio"
                    name="example"
                    id={`radio-${item}`}
                  />
                  <span className="break-words">{item}</span>
                </label>
              </li>
            ))}
          </ul>
          <ul className="pl-2 whitespace-nowrap flex flex-row  overflow-x-auto lg:flex-row sm:text-left font-semibold  items-center gap-6">
            {itemsTwo.map((itemTwo, index) => (
              <li
                key={index}
                className="flex flex-row md:w-1/2 lg:w-auto items-center gap-1 mb-2"
              >
                <label
                  htmlFor={`radio-${itemTwo}`}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    className="w-3 h-3 mr-1 text-white rounded-full border border-black "
                    type="radio"
                    name="example"
                    id={`radio-${itemTwo}`}
                  />
                  <span className="break-words">{itemTwo}</span>
                </label>
              </li>
            ))}
          </ul>
        </div >
        <div className="flex flex-col items-center md:items-baseline lg:items-baseline md:flex-row lg:flex-row gap-2 mx-auto px-2">
          <div className="w-9/12 whitespace-nowrap  lg:w-1/3 md:h-full lg:h-full p-2 border border-black border-opacity-15 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <h3 className="text-center font-bold col-span-1 lg:col-span-2">
              Limit Setting
            </h3>

            {settings.map((setting, index) => (
              <div
                key={index}
                className="flex flex-col justify-center text-sm "
              >
                <h3 className="text-center lg:text-left">{setting.title}</h3>
                <div className="flex flex-row gap-1 items-center ">
                  <input type="checkbox" />
                  <input
                    className="w-full max-w-xs h-8 pl-1 placeholder:text-xs border"
                    type="text"
                    placeholder={setting.placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-9/12 lg:w-1/3  md:h-full lg:h-full p-2 border border-black border-opacity-15 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <h3 className="text-center font-bold col-span-1 lg:col-span-2">
              Market Setting
            </h3>
            {marketSettings.map((setting, index) => (
              <div
                key={index}
                className="flex flex-col text-sm justify-center space-y-1"
              >
                <h3 className="text-center lg:text-left">{setting.title}</h3>
                <div className="flex flex-row items-center space-x-1">
                  <input type="checkbox" />
                  <input
                    className="w-full max-w-xs h-8 pl-1 placeholder:text-xs border"
                    type="text"
                    placeholder={setting.placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-9/12 lg:w-1/3  md:h-full lg:h-full p-2 border border-black border-opacity-15 grid grid-cols-1 lg:grid-cols-2 gap-2">
            <h3 className="text-center font-bold col-span-1 lg:col-span-2">
              Session Setting
            </h3>
            {sessionSettings.map((setting, index) => (
              <div
                key={index}
                className="flex text-sm flex-col justify-center space-y-1"
              >
                <h3 className="text-center lg:text-left">{setting.title}</h3>
                <div className="flex flex-row items-center space-x-1">
                  <input type="checkbox" />
                  <input
                    className="w-full max-w-xs h-8 pl-1 placeholder:text-xs border"
                    type="text"
                    placeholder={setting.placeholder}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 ">
          <div className="mt-4  m    pr-6 md:pr-0 lg:pr-0 mx-10 md:mx-0 lg:mx-0 mb-4 border border-black border-opacity-15 p-4">
            <div className="text-center md:text-start md:pl-10 lg:text-center">
              <h3 className="text-center col-span-1 font-bold lg:col-span-2">Bookmaking Setting</h3>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-6  gap-4 mt-6">
              {bookmakingSettings.map((setting, index) => (
                <div key={index} className="flex text-sm flex-col items-center">
                  <h3 className="">{setting.title}</h3>
                  <div className="flex flex-row items-center space-x-2">
                    <input type="checkbox" />
                    <input
                      className="w-full max-w-xs h-8 pl-2 placeholder:text-xs border"
                      type="text"
                      placeholder={setting.placeholder}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 py-3">
          <button className="bg-gray-950 font-sans font-semibold shadow-inner rounded-sm px-3 text-yellow-500">Save</button>
          <button className="bg-slate-300 text-slate-900 rounded-sm shadow-inner font-sans font-semibold px-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
