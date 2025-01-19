import { Link } from "react-router-dom";
import vlogo from '../assets/velki.webp';
import blogo from '../assets/bg.png';
import llogo from '../assets/logImage.jpg';


const Banner = () => {
    return (
        <div className="overflow-y-auto">
            <div
                className="min-h-screen  flex items-center justify-center"
                style={{
                    backgroundImage:`url(${blogo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex overflow-y-auto flex-col border border-white  md:flex-row lg:flex-row bg-white shadow-xl ml-10 md:ml-60 lg:ml-96 rounded-lg overflow-hidden w-2/3 md:1/3 lg:w-2/5 h-[500px]  lg:h-[450px]    lg:max-w-4xl mx-4">
                    <figure className="lg:w-1/2 w-full h-1/3 md:h-auto lg:h-auto ">
                        <img
                            src={llogo}
                            alt="Album"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="bg-black h-2/3 md:h-auto lg:h-auto  pt-4 md:pt-32  lg:pt-24   lg:w-1/2 p-6">
                        <div className="flex items-center justify-center">
                            <img src={vlogo} alt="" className="w-40 h-14 " />
                        </div>
                        <h3 className="text-center text-[20px] font-bold  mb-4">Agent Login</h3>
                        <form className="space-y-2">
                            <div className=" flex items-center justify-center">
                                <input
                                    type="text"
                                    id="text"
                                    placeholder="Username"
                                    className="w-52    h-8 px-3 py-3 border border-loginColor placeholder:text-sm  rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center justify-center">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-52 px-3 py-3 border placeholder:text-sm border-loginColor h-8 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="relative flex items-center justify-center mb-4">
                                <span className="absolute -right-3 md:right-2 lg:right-5 text-black text-sm font-bold pt-1 top-0 ">2249</span>
                                <input
                                    type="password"
                                    id="validation"
                                    placeholder="Validation Code"
                                    className="w-52 px-3 py-3 border border-loginColor h-6 rounded-sm placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <Link to='/adminDashboard' >
                                    <button
                                        type="submit"
                                        className="w-52 py-2 px-4 bg-loginColor text-black font-medium rounded-sm  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;