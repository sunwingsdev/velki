import PageHeader from "@/components/shared/PageHeader";
import { MdOutlineArrowRight } from "react-icons/md";

const BalanceOverview = () => {
  return (
    <div className="mt-16">
      <PageHeader title="Balance Overview" />
      <div className="m-4">
        <div className="bg-[#262c32] p-3 rounded-2xl">
          <h1 className="text-xl font-bold text-white mb-2">Your Balances</h1>
          <div className="flex flex-row items-center gap-3 ">
            <p className="text-sm font-bold bg-yellow-500 py-0.5 px-1 rounded-lg">
              USD
            </p>
            <p className="text-2xl font-bold text-white leading-3">10.00</p>
          </div>
        </div>

        <div className=" bg-blue-50 border border-gray-300 rounded-2xl overflow-hidden mt-5">
          {/* <!-- Header --> */}
          <div className="bg-blue-100 px-4 py-2 text-sm font-semibold text-gray-700">
            2024-12-09 18:51:29
          </div>

          {/* <!-- Details --> */}
          <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-300">
            <div className="text-center">
              <p className="text-xs text-gray-500">Deposit</p>
              <h3 className="text-lg font-semibold text-gray-800">10</h3>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Withdraw</p>
              <h3 className="text-lg font-semibold text-red-500">--</h3>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Balance</p>
              <h3 className="text-lg font-semibold text-gray-800">10</h3>
            </div>
          </div>

          {/* <!-- Upline --> */}
          <div className="px-4 py-2 bg-white border-b border-gray-300">
            <p className="text-sm text-gray-700 flex items-center">
              Upline{" "}
              <span className="text-gray-500">
                <MdOutlineArrowRight className="text-3xl" />
              </span>
              RofikulIslam
            </p>
          </div>

          {/* <!-- Remark --> */}
          <div className="px-4 py-2">
            <p className="text-sm text-gray-700">
              Remark{" "}
              <span className="font-semibold text-gray-700 ml-5">
                Fund Transfer
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceOverview;
