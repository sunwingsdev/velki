import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";
import Remark from "./Remark";

const Banking = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: users } = useGetUsersQuery();

  const roleHierarchy = {
    admin: ["admin", "sub-admin", "master", "agent", "sub-agent", "user"],
    "sub-admin": ["master", "agent", "sub-agent", "user"],
    master: ["sub-agent", "agent", "user"],
    agent: ["sub-agent", "user"],
    "sub-agent": ["user"],
  };

  const filteredUsers = users?.filter(
    (singleUser) => singleUser?.createdBy === user?._id
  );

  return (
    <div className="bg-adminBackground min-h-screen">
      <h3 className="font-sans font-semibold mx-2">Banking</h3>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[
          "Total Balance",
          "Remaining Balance",
          "Total Agent Balance",
          "Total Exposure",
          "Total Admin",
        ].map((label, index) => (
          <div
            key={index}
            className="space-y-1 p-4 border border-black border-opacity-10 text-white bg-black text-center rounded-md"
          >
            <p className="font-bold">{label}</p>
            <h3 className="bg-yellow-500 text-black text-sm font-bold rounded-lg">
              USD(0.00)
            </h3>
          </div>
        ))}
      </div>

      <input
        className="border border-black p-2 rounded-sm mx-2 my-2 w-40 h-6 placeholder:text-xs"
        type="search"
        placeholder="Enter User"
      />

      <h3 className="w-44 h-6 border bg-headingTextColor border-black mx-2 text-white pl-1">
        Credit Reference
      </h3>

      <div className="overflow-x-auto pt-4">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-headerGray text-headingTextColor">
            <tr>
              {[
                "Username",
                "Available Balance",
                "Balance in Downline",
                "Exposure in Downline",
                "Deposit/Withdraw",
                "Credit Reference",
                "Reference P/L",
                "Remark",
                "All",
              ].map((header, index) => (
                <th
                  key={index}
                  className="border bg-yellow-400 border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers?.length > 0 ? (
              filteredUsers
                .filter((row) => roleHierarchy[user.role]?.includes(row.role))
                .map((row, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      <span className="text-blue-500 pl-2">
                        {row?.username}
                      </span>
                    </td>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      {row?.balance || 0}
                    </td>
                    <td className="border-b px-4 py-2 text-sm text-red-700">
                      {row?.exposure}
                    </td>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      {row?.exposure}
                    </td>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      <Transaction
                        parentId={user?._id}
                        userId={row?._id}
                        availableBalance={row?.balance}
                      />
                    </td>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      {row?.playerBalance}
                    </td>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      {row?.refPL}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 flex items-center justify-center gap-2">
                      <Remark user={row} />
                    </td>
                    <td className="border-b px-4 py-2 text-sm text-gray-700">
                      <button className="w-10 h-8 bg-blue-500 text-white rounded-sm">
                        Login
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Banking;
