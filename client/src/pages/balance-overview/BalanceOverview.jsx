import PageHeader from "@/components/shared/PageHeader";
import { useGetBankingsQuery } from "@/redux/features/allApis/bankingApi/bankingApi";
import { useSelector } from "react-redux";

const BalanceOverview = () => {
  const { singleUser, user } = useSelector((state) => state.auth);
  const { data: bankings, isLoading, isError } = useGetBankingsQuery();

  const myBankings = bankings?.filter(
    (banking) => banking.userId === user?._id
  );

  const lastFiveTransactions = myBankings
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    ?.slice(0, 5);

  if (isLoading) {
    return (
      <div className="mt-16">
        <PageHeader title="Balance Overview" />
        <div className="m-4">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-16">
        <PageHeader title="Balance Overview" />
        <div className="m-4">
          <p>Error loading data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <PageHeader title="Balance Overview" />
      <div className="m-4">
        {/* Current Balance Card */}
        <div className="bg-[#262c32] p-3 rounded-2xl">
          <h1 className="text-xl font-bold text-white mb-2">Your Balances</h1>
          <div className="flex flex-row items-center gap-3 ">
            <p className="text-sm font-bold bg-yellow-500 py-0.5 px-1 rounded-lg">
              USD
            </p>
            <p className="text-2xl font-bold text-white leading-3">
              {singleUser?.balance?.toFixed(2) || "0.00"}
            </p>
          </div>
        </div>

        {/* Latest Transaction (Existing) */}
        {myBankings?.length > 0 && (
          <div className="bg-blue-50 border border-gray-300 rounded-2xl overflow-hidden mt-5">
            <div className="bg-blue-100 px-4 py-2 text-sm font-semibold text-gray-700">
              {new Date(myBankings[0]?.createdAt).toLocaleString() || "N/A"}
            </div>

            <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-300">
              <div className="text-center">
                <p className="text-xs text-gray-500">Type</p>
                <h3
                  className={`text-lg font-semibold capitalize ${
                    myBankings[0]?.type === "deposit"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {myBankings[0]?.type || "N/A"}
                </h3>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Amount</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {myBankings[0]?.amount || "0.00"}
                </h3>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Balance</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {singleUser?.balance?.toFixed(2) || "0.00"}
                </h3>
              </div>
            </div>

            <div className="px-4 py-2 bg-white border-b border-gray-300 flex items-center justify-between">
              <p className="text-sm text-gray-700 flex items-center">
                From:{" "}
                <span className="text-gray-500">
                  {" "}
                  {myBankings[0]?.parentInfo?.username || "System"}
                </span>
              </p>
              <p className="text-sm text-gray-700 flex items-center">
                To:{" "}
                <span className="text-gray-500">
                  {" "}
                  {myBankings[0]?.userInfo?.username || "System"}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Last 5 Transactions Section */}
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-3">Transaction History</h2>

          {lastFiveTransactions?.length > 0 ? (
            lastFiveTransactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4 shadow-sm"
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500">
                      {new Date(transaction.createdAt).toLocaleString()}
                    </p>
                    <h3
                      className={`text-md font-semibold capitalize ${
                        transaction.type === "deposit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      {" "}
                      <p className="text-xs text-gray-500">
                        From:{" "}
                        {transaction.type === "deposit"
                          ? transaction.parentInfo?.username || "System"
                          : transaction.userInfo?.username || "System"}
                      </p>
                      <p className="text-xs text-gray-500">
                        To:{" "}
                        {transaction.type === "deposit"
                          ? transaction.userInfo?.username || "System"
                          : transaction.parentInfo?.username || "System"}
                      </p>
                    </div>
                    <h3
                      className={`text-lg font-bold ${
                        transaction.type === "deposit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "deposit" ? "+" : "-"}
                      {transaction.amount}
                    </h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-500">No transactions found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BalanceOverview;
