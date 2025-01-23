import velkiLogo from '../../assets/velki.webp'
import HeadingNavbar from '../HeadingNavbar/HeadingNavbar';

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
            <div className='min-h-screen bg-adminBackground mt-2' >

                <h1 className="text-center pt-1 text-2xl font-bold bg-yellow-500 h-10">Game Api Key Set</h1>

                <div className=''>




                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2   mx-10 lg:mx-60 mt-10  ">
                        {fieldNames.map((fieldName, index) => (
                            <div
                                key={index}
                                className="  pl-0 lg:pl-0 mb-2 sm:mb-0 w-full sm:w-auto "

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
                                        className="w-40 lg:w-[600px]   rounded-lg h-6 border border-black placeholder:text-xs sm:placeholder:text-sm p-2 outline-none pr-8 "

                                        type="text"


                                    />

                                    {(
                                        <button
                                            type="button"
                                            className="ml-2 px-2 pb-1 border border-black bg-yellow-400 text-black  font-bold rounded-2xl"
                                        >
                                            Add+
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>;

                    <div className="text-center">
                        <button className="bg-gray-800 text-white rounded-xl mb-1  py-1 px-12">Save Change</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;