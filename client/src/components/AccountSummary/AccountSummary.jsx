import AccountTabs from "../AccountTabs/AccountTabs";
import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";

const AccountSummary = () => {
  return (
    <div>
      <CommonNavMenu></CommonNavMenu>
      <div>
        <div className="bg-adminBackground min-h-screen flex flex-col md:flex-row lg:flex-row place-items-baseline space-y-4 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-4 px-4">
          <AccountTabs></AccountTabs>
          <div className="font-sans space-y-4 md:space-y-6 lg:space-y-6">
            <h3 className="text-lg font-bold sm:text-xl text-gray-800">Account Summary</h3>
            <div className="flex flex-wrap justify-start bg-white  sm:w-2/3 md:w-2/3 lg:w-[600px]">
              <div className="p-4 w-56 md:w-96 lg:w-96  border-r border-black border-opacity-10 text-left">
                <p className="text-gray-600 font-bold text-sm sm:text-xl">Your Balance</p>
                <h3>
                  <span className="font-sans">USD</span>
                  <span className="text-blue-600 text-xl font-bold sm:text-3xl ">
                    (1,776.57)
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
