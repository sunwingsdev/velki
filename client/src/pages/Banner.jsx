

const Banner = () => {
    return (
        <div>
            <div
                className="min-h-screen  flex items-center justify-center"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
                    <figure className="lg:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album"
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="bg-white w-1/2 max-w-sm p-6 rounded-lg shadow-lg">
                        <h3 className="text-center ">Admin Login</h3>
                        <form>
                            <div className="mb-4">

                                <input
                                    type="text"
                                    id="text"
                                    placeholder="Username"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div className="mb-4">

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />

                            </div>
                            <div className="mb-4">

                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Validation Code"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />

                            </div>
                            <div className="mt-6">
                            <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        
                        
                    </div>

                </div>
                


            </div>
            


        </div>
    );
};

export default Banner;