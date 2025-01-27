

import CommonNavMenu from '../CommonNavMenu/CommonNavMenu';

const data = [
    { Account: "Demo", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "Agent 1", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "Betx365", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "winbetusd", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "sports 365ad", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "jio365", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "test tag 1", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "test max", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "mahadeb 1", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },
    { Account: "admin 365", CreditRef: '8.40,933.62', balance: "1000.00", exposure: "200.00", availBalance: "800.00", playerBalance: "500.00", refPL: "+300.00", status: "Active", },

]


const Banking = () => {
    return (
        <div>
            <CommonNavMenu></CommonNavMenu>
            <div className="bg-adminBackground min-h-screen">
                <div >
                    <h3 className="font-sans font-semibold mx-2">Banking</h3>
                    <div className="p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {[
                                { label: "Total Balance", value: "(1,776.57)" },
                                { label: "Remaining Balance", value: "USD(1,500.00)" },
                                { label: "Total Agent Balance", value: "USD(1,200.00)" },
                                { label: "Total Exposure", value: "USD(900.50)" },
                                { label: "Total Admin", value: "USD(800.00)" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="space-y-1 p-4 border border-black border-opacity-10 text-white bg-black text-center rounded-md"
                                >
                                    <p className="font-bold">{item.label}</p>
                                    <h3 className="bg-yellow-500 text-black text-sm font-bold rounded-lg">
                                        {item.value}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <input className=" border border-black p-2 rounded-sm mx-2 my-2 w-40 h-6 placeholder:text-xs" type="search" name="" id="" placeholder="Enter User" />
                </div>
                <div>
                    <h3 className="w-44 h-6 border bg-headingTextColor border-black mx-2  text-white pl-1">Credit Reference</h3>
                </div>
                <div className='pt-4'>
                    <div className="overflow-x-auto">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-headerGray text-headingTextColor">
                                    <tr>
                                        <th className="border-y bg-yellow-400 border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">UId</th>
                                        <th className="border-y bg-yellow-400 border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">Available Balance</th>
                                        <th className="border-y bg-yellow-400 border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">Balance in Downline</th>
                                        <th className="border-y bg-yellow-400 border-gray-300 px-2 py-2 text-left text-sm font-medium uppercase">Exposure in Downline</th>
                                        <th className="border-x bg-yellow-400   pl-16 py-2 text-left text-sm font-medium uppercase">Deposit/withdraw</th>
                                        <th className="border-y bg-yellow-400 border-gray-300 px-2 py-2 text-left text-sm font-medium uppercase">Credit Reference</th>
                                        <th className="border-y bg-yellow-400 border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">Reference P/L</th>
                                        <th className=" border-l border-gray-600  bg-yellow-400  pl-2 py-2 text-right text-sm font-medium uppercase">Remark </th>
                                        <th className="border-y bg-yellow-400 border-gray-300 pl-2 py-2 text-center text-sm font-medium uppercase"><span className="bg-black p-2 text-yellow-400"> All</span></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                                                <button
                                                    className={`w-6 h-6 font-sans text-white text-xs rounded-sm ${['Demo', 'Agent 1', 'test tag 1', 'test max', 'mahadeb 1'].includes(row.Account)
                                                        ? 'bg-purple-500'  // Purple for specified account names
                                                        : 'bg-green-500'   // Green for other account names
                                                        }`}
                                                >
                                                    AD
                                                </button>
                                                <span className='text-blue-500 pl-2'>{row.Account}</span>
                                            </td>
                                            <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.CreditRef}</td>
                                            <td className="border=b px-4 py-2 whitespace-nowrap text-sm text-red-700">{row.balance}</td>
                                            <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">{row.exposure}</td>
                                            <td className="border-l border-r border-gray-600 border-opacity-80 px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                                                <div className="w-full mb-2 sm:mb-0">
                                                    <div className="flex flex-row gap-2 ">
                                                        <div className="flex flex-row items-center justify-center">
                                                            <button className="w-5 h-6 px-1  border-b border-l border-t border-black text-white bg-blue-500">D</button>
                                                            <button className="w-5 h-6 px-1 border border-black text-white bg-yellow-700">w</button>

                                                        </div>
                                                        <input
                                                            className="w-40 appearance-none h-6 placeholder:text-right border border-black  placeholder:text-xs sm:placeholder:text-sm p-2 outline-none pr-8"
                                                            type="number"
                                                            placeholder="0"
                                                        />
                                                        <button className="w-8 h-6 px-1  border border-black text-black bg-yellow-400">Full</button>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.playerBalance}</td>
                                            <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">{row.refPL}</td>
                                            <td className="border-l border-gray-600 pl-2 py-2 whitespace-nowrap text-sm text-gray-700">

                                                <input
                                                    className="w-40 h-6 placeholder:text-right border border-black   placeholder:text-xs sm:placeholder:text-sm p-2 outline-none pr-8"
                                                    type="search"
                                                    placeholder="Remark"
                                                />
                                            </td>
                                            <td className="border-b lg:border-opacity-10 flex flex-row items-center justify-center  pr-0 py-2 whitespace-nowrap text-sm text-gray-700">

                                                <button className='w-10 h-8 bg-blue-500  font-sans text-white  rounded-sm'>Login</button>

                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-headerGray text-headingTextColor">
                                        <td className="px-4 py-2   whitespace-nowrap text-sm font-bold text-black">Total</td>
                                        <td className="  px-4 py-2 whitespace-nowrap text-sm text-gray-700">8.40,933.62</td>
                                        <td className="  px-4 py-2 whitespace-nowrap text-sm text-red-700">1000.00</td>
                                        <td className="   px-2 py-2 whitespace-nowrap text-sm text-gray-700">200.00</td>
                                        <td className=" border-l border-r border-gray-600  px-2 py-2 whitespace-nowrap text-sm text-gray-700">800.00</td>
                                        <td className="   px-4 py-2 whitespace-nowrap text-sm text-gray-700">500.00</td>
                                        <td className="   px-4 py-2 whitespace-nowrap text-sm text-red-700">+300.00</td>
                                        <td className="px-12 py-2 border-l border-gray-600 whitespace-nowrap text-sm text-gray-700"></td>
                                        <td className="px-12 py-2  whitespace-nowrap text-sm text-gray-700"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>



                </div>
                <div className="mt-8 mb-3 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-3">
                    <button className="border px-4 font-sans font-light border-black">clear all</button>
                    <input className="border border-black placeholder:px-2 " type="password" name="" id="" placeholder="password" />

                    <button className="bg-slate-800 text-yellow-400 px-12 h-6  ">Submit Payment</button>
                </div>
                <div className="  my-4 flex flex-row items-center justify-center gap-2">
                    <button className="w-10 rounded-sm h-6 text-xs bg-white  border border-black">Prev</button>
                    <button className="w-6 h-6  border text-yellow-400 bg-slate-800 border-black">1</button>
                    <button className="w-4 h-4  border bg-white text-xs border-black">2</button>
                    <button className="w-4 h-4  border bg-white text-xs border-black">3</button>
                    <button className="w-4 h-5 border rounded-sm text-xs bg-white border-black">4</button>
                    <button className="w-10 h-6 text-xs rounded-sm border bg-white border-black">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Banking;