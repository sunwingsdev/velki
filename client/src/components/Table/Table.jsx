

const Table = () => {
    return (
        <div>
            <div className='pt-4'>
                <table className="table-auto border-collapse pt-4 border border-gray-300   lg:w-full ">
                    <thead className='text-left'>
                        <tr className='text-headingTextColor font-sans  '>
                            <th className="border-y bg-headerGray border-gray-300 px-4 py-2">Account</th>
                            <th className="border-y bg-headerGray border-gray-300 px-4 py-2">Credit Ref</th>
                            <th className="border-y bg-headerGray border-gray-300 px-4 py-2">Balance</th>
                            <th className="border-y bg-headerGray border-gray-300 px-4 py-2">Exposure</th>
                            <th className="border-y bg-headerGray border-gray-300 px-2 py-2">Avail.balance.</th>
                            <th className="border-y bg-headerGray border-gray-300 px-2 py-2">Player Balance</th>
                            <th className="border-y bg-headerGray border-gray-300 px-4 py-2">Ref.P/L</th>
                            <th className="border-y bg-headerGray border-gray-300 px-12 py-2">Status</th>
                            <th className="border-y bg-headerGray border-gray-300 px-12 py-2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td className="border-y bg-white border-gray-300 px-4 py-2"><button className='w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm'>AD</button><span className='text-blue-500 pl-2'>winbetUSD</span></td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">8,40,933.62</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">47,012</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>383.56</span></td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">86.631</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">13,458</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>7,09,605.</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">
                                <div className='border bg-green-100 m  flex flex-row items-center justify-center space-x-1 '>
                                    <span className='text-green-800'>
                                        <svg className="w-3 h-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="green" />
                                        </svg>
                                    </span>
                                    <span className='text-green-800'>
                                        Active
                                    </span>
                                </div>
                            </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">
                                <div className='flex flex-row space-x-1'>
                                    <button className='w-8 h-8 bg-gray-200  font-sans text-black  rounded-sm'>BS</button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4 font-medium"
                                        >
                                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                        </svg>
                                    </button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4 font-medium"
                                        >
                                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                    </button>

                                    <span>

                                    </span>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td className="border-y bg-white border-gray-300  px-4 py-2"><button className='w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm'>AD</button><span className='text-blue-500 pl-2'>500rts365AD</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">8,40,933.62</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">47,012</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>383.56</span></td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">86.631</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">13,458</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>7,09,605.</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">
                                <div className='border bg-green-100 m  flex flex-row items-center justify-center space-x-1 '>
                                    <span className='text-green-800'>
                                        <svg className="w-3 h-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="green" />
                                        </svg>
                                    </span>
                                    <span className='text-green-800'>
                                        Active
                                    </span>
                                </div>
                            </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">
                                <div className='flex flex-row space-x-1'>
                                    <button className='w-8 h-8 bg-gray-200  font-sans text-black  rounded-sm'>BS</button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4 font-medium"
                                        >
                                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                        </svg>
                                    </button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4 font-medium"
                                        >
                                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                    </button>

                                    <span>

                                    </span>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><button className='w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm'>AD</button><span className='text-blue-500 pl-2'>jio365</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">8,40,933.62</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">47,012</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>383.56</span></td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">86.631</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">13,458</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>7,09,605.</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">
                                <div className='border bg-green-100 m  flex flex-row items-center justify-center space-x-1 '>
                                    <span className='text-green-800'>
                                        <svg className="w-3 h-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="green" />
                                        </svg>
                                    </span>
                                    <span className='text-green-800'>
                                        Active
                                    </span>
                                </div>
                            </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">
                                <div className='flex flex-row space-x-1'>
                                    <button className='w-8 h-8 bg-gray-200  font-sans text-black  rounded-sm'>BS</button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4 font-medium"
                                        >
                                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                        </svg>
                                    </button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4 font-medium"
                                        >
                                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                    </button>

                                    <span>

                                    </span>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><button className='w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm'>AD</button><span className='text-blue-500 pl-2'>ariventx</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">8,40,933.62</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">47,012</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>383.56</span></td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">86.631</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">13,458</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>7,09,605.</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2 ">
                                <div className='border bg-green-100   flex flex-row items-center justify-center space-x-1 '>
                                    <span className='text-green-800'>
                                        <svg className="w-3 h-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="40" fill="green" />
                                        </svg>
                                    </span>
                                    <span className='text-green-800'>
                                        Active
                                    </span>
                                </div>
                            </td>
                            <td className="border-y bg-white border-gray-300 mr-5 px-4 py-2">
                                <div className='flex flex-row space-x-1'>
                                    <button className='w-8 h-8 bg-gray-200  font-sans text-black  rounded-sm'>BS</button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4  "
                                        >
                                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                        </svg>
                                    </button>
                                    <button className='w-8 h-8 bg-gray-200 rounded-sm font-sans'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-8 h-4 "
                                        >
                                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                    </button>

                                    <span>

                                    </span>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">Total </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">8,40,933.62</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">47,012</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>383.56</span></td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">86.631</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2">13,458</td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"><span className='text-red-500'>7,09,605.</span> </td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"></td>
                            <td className="border-y bg-white border-gray-300 px-4 py-2"></td>

                        </tr>
                        <tr>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"> </td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"></td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"></td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"></td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"></td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"></td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"> </td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"></td>
                            <td className="border-y bg-headerGray border-gray-300 px-4 py-2"></td>

                        </tr>



                    </tbody>
                </table>

            </div>                                                                                                                                                   
        </div>
    );
};

export default Table;