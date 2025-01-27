import { Link } from "react-router-dom";


const AccountTabs = () => {
    return (
         <div>
                            <ul className="mt-6 w-full sm:w-60 bg-white border-black border-b lg:border-b-0 border-r rounded group-hover:block">
                                <li className="border-b">
                                    <a className="block px-4 py-2 text-xs font-sans border-b bg-gray-800 border-black text-white">
                                        Position
                                    </a>
                                </li>
                               <Link to='/accountstatementtabs'>
                               <li>
                                    <a className="block px-4 py-2 text-xs font-sans border-b border-black text-black hover:bg-gray-200">
                                        Account Statement
                                    </a>
                                </li>
                               </Link>
                               <Link to='/accountsummary'>
                               <li>
                                    <a className="block px-4 py-2 text-xs font-sans border-b bg-amber-200 border-black text-black hover:bg-gray-200">
                                        Account Summary
                                    </a>
                                </li>
                               </Link>
                               
                               <li>
                                    <a className="block px-4 py-2 text-xs font-sans border-b bg-gray-800 border-black text-white">
                                        Account Details
                                    </a>
                                </li>
                               
                                <Link to='/profile'>
                                <li>
                                    <a className="block px-4 py-2 text-xs font-sans border-b border-black text-black hover:bg-gray-200">
                                        Profile
                                    </a>
                                </li>
                                </Link>
                                <li>
                                    <a className="block px-4 py-2 text-xs font-sans border-b border-black text-black hover:bg-gray-200">
                                        Activity Log
                                    </a>
                                </li>
                            </ul>
                        </div>
    );
};

export default AccountTabs;