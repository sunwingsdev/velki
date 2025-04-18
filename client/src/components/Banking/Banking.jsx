import {
  useAddMotherAdminBalanceMutation,
  useGetUsersQuery,
} from "@/redux/features/allApis/usersApi/usersApi";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";
import Remark from "./Remark";
import { useState } from "react";
import { useFetchUser } from "@/hooks/customHook";
import { useToasts } from "react-toast-notifications";

const Banking = () => {
  const [addBalance] = useAddMotherAdminBalanceMutation();
  const { user, singleUser } = useSelector((state) => state.auth);
  const { data: users } = useGetUsersQuery();
  const [amount, setAmount] = useState(0);
  const { fetchUser } = useFetchUser(user?._id);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToast } = useToasts();

  const filteredUsers = (
    user?.role === "mother-admin"
      ? users?.filter((selectedUser) => selectedUser?._id !== user?._id)
      : users?.filter((selectedUser) => selectedUser?.createdBy === user?._id)
  )?.filter((user) =>
    user?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const roleHierarchy = {
    "mother-admin": [
      "admin",
      "sub-admin",
      "master",
      "agent",
      "sub-agent",
      "user",
    ],
    admin: ["sub-admin", "master", "agent", "sub-agent", "user"],
    "sub-admin": ["master", "agent", "sub-agent", "user"],
    master: ["sub-agent", "agent", "user"],
    agent: ["sub-agent", "user"],
    "sub-agent": ["user"],
  };

  // const filteredUsers =
  //   user?.role === "mother-admin"
  //     ? users?.filter((selectedUser) => selectedUser?._id !== user?._id)
  //     : users?.filter((selectedUser) => selectedUser?.createdBy === user?._id);

  const roleUsers = users?.filter((user) => user.role === "user");
  const roleSubAgents = users?.filter((user) => user.role === "sub-agent");
  const roleAgents = users?.filter((user) => user.role === "agent");
  const roleMasters = users?.filter((user) => user.role === "master");
  const roleSubAdmins = users?.filter((user) => user.role === "sub-admin");
  const roleAdmins = users?.filter((user) => user.role === "admin");

  const calculateTotalBalance = (users) => {
    return users?.reduce((sum, user) => sum + (user.balance || 0), 0) || 0;
  };
  const usersBalance = calculateTotalBalance(roleUsers);
  const subAgentsBalance = calculateTotalBalance(roleSubAgents);
  const agentsBalance = calculateTotalBalance(roleAgents);
  const mastersBalance = calculateTotalBalance(roleMasters);
  const subAdminsBalance = calculateTotalBalance(roleSubAdmins);
  const adminsBalance = calculateTotalBalance(roleAdmins);

  const tabs = [
    user?.role === "mother-admin"
      ? {
          label: "Total User Balance",
          value: `PBU (${usersBalance?.toFixed(2) || 0})`,
        }
      : {
          label: "Your Balance",
          value: `PBU (${singleUser?.balance?.toFixed(2) || 0})`,
        },
    user?.role === "mother-admin" && {
      label: "Total Sub Agent Balance",
      value: `PBU (${subAgentsBalance?.toFixed(2) || 0})`,
    },
    user?.role === "mother-admin" && {
      label: "Total Agent Balance",
      value: `PBU (${agentsBalance?.toFixed(2) || 0})`,
    },
    user?.role === "mother-admin" && {
      label: "Total Master Balance",
      value: `PBU (${mastersBalance?.toFixed(2) || 0})`,
    },
    user?.role === "mother-admin" && {
      label: "Total Sub Admin Balance",
      value: `PBU (${subAdminsBalance?.toFixed(2) || 0})`,
    },
    user?.role === "mother-admin" && {
      label: "Total Admin Balance",
      value: `PBU (${adminsBalance?.toFixed(2) || 0})`,
    },
  ].filter(Boolean);

  const handleAddBalance = async () => {
    if (user?.role === "mother-admin") {
      if (amount <= 0)
        return addToast("Please enter a valid amount!", {
          appearance: "error",
          autoDismiss: true,
        });
      const result = await addBalance({
        id: user?._id,
        data: { amount },
      });
      if (result?.error)
        return addToast(result.data.error.message, {
          appearance: "error",
          autoDismiss: true,
        });
      if (result?.data.modifiedCount > 0) {
        addToast("Balance added successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setAmount(0);
        fetchUser();
        return;
      }
    } else {
      addToast("Login as a mother admin", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="bg-adminBackground min-h-screen">
      <h3 className="font-sans font-semibold mx-2">Banking</h3>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {tabs?.map(({ label, value }, index) => (
          <div
            key={index}
            className="space-y-1 p-4 border border-black border-opacity-10 text-white bg-black text-center rounded-md"
          >
            <p className="font-bold">{label}</p>
            <h3 className="bg-yellow-500 text-black text-sm font-bold rounded-lg">
              {value}
            </h3>
          </div>
        ))}
        {user?.role === "mother-admin" && (
          <div className="space-y-1 p-4 border border-black border-opacity-10 text-white bg-red-600 text-center rounded-md">
            <p className="font-bold">{"Add Mother Admin Balance"}</p>

            <div className="relative text-black">
              {" "}
              <input
                className="w-full px-4 placeholder:text-sm h-8 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <button
                onClick={handleAddBalance}
                className="w-14 h-8 bg-green-500 text-white right-0 absolute"
              >
                {"Add"}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-end">
        <input
          className="border border-black px-3 py-1 rounded "
          type="text"
          placeholder="Enter Username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto pt-4">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-headerGray text-headingTextColor">
            <tr>
              {[
                "Username",
                "Role",
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
                  className="border bg-yellow-400 border-black px-4 py-2 text-left text-sm font-medium uppercase"
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
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      <span className="text-blue-500 pl-2">
                        {row?.username}
                      </span>
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      {row?.role || ""}
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      {row?.balance || 0}
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-red-700">
                      {row?.exposure}
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      {row?.exposure}
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      <Transaction
                        parentId={user?._id}
                        userId={row?._id}
                        availableBalance={row?.balance}
                      />
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      {row?.playerBalance}
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      {row?.refPL}
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700 text-center">
                      <Remark user={row} />
                    </td>
                    <td className="border border-black px-4 py-2 text-sm text-gray-700">
                      <button className="w-10 h-8 bg-blue-500 text-white rounded-sm">
                        Login
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  className="border border-black text-center py-4 text-gray-500"
                >
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
