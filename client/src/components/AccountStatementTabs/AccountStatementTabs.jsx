import AccountTabs from "../AccountTabs/AccountTabs";
import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";

const AccountStatementTabs = () => {
  return (
    <div>
      <CommonNavMenu></CommonNavMenu>
      <div>
        <div className="bg-adminBackground   flex flex-col md:flex-row lg:flex-row place-items-baseline space-y-4 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-4 px-4">
          <AccountTabs></AccountTabs>
         <div className="space-y-10 "> 
         <div className="space-y-4   lg:w-auto ">
            <h3 className="text-lg font-bold text-gray-800 sm:text-xl">Account Statement</h3>
            <ul className="flex md:overflow-x-auto   text-sm text-gray-800 whitespace-nowrap lg:px-1 font-semibold  items-center justify-center bg-gray- px-3  py-3 gap-8 border-y border-gray-500">
              <li>Date/Time</li>
              <li>Deposit from Upline</li>
              <li>Deposit to Downline</li>
              <li>Withdraw by Upline</li>
              <li>Withdraw from Downline</li>
              <li>Balance</li> 
              <li>Remark</li>
              <li>From/To</li>
            </ul>
          </div>
          <div className="flex items-center md:justify-start lg:justify-center space-x-3">
            <button className="bg-gray-200 shadow-xl border border-gray-400 rounded-sm text-gray-500 font-sans font-semibold px-3 ">Prev</button>
            <button className="bg-yellow-400 px-3 font-sans font-semibold border rounded-sm border-yellow-500 shadow-2xl" >1</button>
            <button className="bg-gray-200 shadow-xl border border-gray-400 rounded-sm text-gray-500 font-sans font-semibold px-3 ">Next</button>
            <button className="bg-yellow-400 px-3 font-sans  font-semibold border rounded-sm border-yellow-500 shadow-2xl">Go</button> 
        </div>
         </div>
        </div>
        
      </div>
    </div>
  );
};

export default AccountStatementTabs;
