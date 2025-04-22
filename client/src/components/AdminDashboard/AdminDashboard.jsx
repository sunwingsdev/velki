import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  useAddUserMutation,
  useGetUsersQuery,
  useUpdateActiveStatusMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import moment from "moment";
import { useSelector } from "react-redux";
import { useGetDepositsQuery } from "../../redux/features/allApis/depositsApi/depositsApi";
import { useGetWithdrawsQuery } from "../../redux/features/allApis/withdrawApi/withdrawApi";
import { useToasts } from "react-toast-notifications";
import { Menu, Transition } from "@headlessui/react";
import ReactDOM from "react-dom";
import { IoMdSettings } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";

const rolesOptions = [
  {
    label: "User",
    value: "user",
    roles: [
      "sub-agent",
      "agent",
      "master",
      "sub-admin",
      "admin",
      "mother-admin",
    ],
  },
  {
    label: "Sub Agent",
    value: "sub-agent",
    roles: ["agent", "master", "sub-admin", "admin", "mother-admin"],
  },
  {
    label: "Agent",
    value: "agent",
    roles: ["master", "sub-admin", "admin", "mother-admin"],
  },
  {
    label: "Master",
    value: "master",
    roles: ["sub-admin", "admin", "mother-admin"],
  },
  {
    label: "Sub Admin",
    value: "sub-admin",
    roles: ["admin", "mother-admin"],
  },
  {
    label: "Admin",
    value: "admin",
    roles: ["mother-admin"],
  },
];

const AdminDashboard = () => {
  const { user, singleUser } = useSelector((state) => state.auth);
  const { data: users } = useGetUsersQuery();
  const { data: deposits } = useGetDepositsQuery();
  const { data: withdraws } = useGetWithdrawsQuery();
  const [addUser, { isLoading }] = useAddUserMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [activeUserId, setActiveUserId] = useState(null);
  const { addToast } = useToasts();
  const [updateUserStatus] = useUpdateActiveStatusMutation();

  const Portal = ({ children }) => {
    return typeof document === "object"
      ? ReactDOM.createPortal(children, document.body)
      : null;
  };
  const handleAction = async (userId, action) => {
    const result = await updateUserStatus({
      id: userId,
      data: { status: action },
    });

    if (result?.error) {
      addToast("Something went wrong", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (result?.data.modifiedCount > 0) {
      addToast(`User ${action} successfully`, {
        appearance: "success",
        autoDismiss: true,
      });
      setActiveUserId(null);
      return;
    }
  };
  const filteredUsers = users?.filter((selectedUser) =>
    user?.role === "mother-admin"
      ? selectedUser.role !== "user"
      : selectedUser.role !== "user" && selectedUser.createdBy === user?._id
  );

  // Filter subItems based on user role
  const filteredRolesOptions = rolesOptions?.filter(
    (role) => Array.isArray(role.roles) && role.roles.includes(user?.role)
  );

  const myClients = users?.filter((item) => item.createdBy === user?._id);
  const totalBalance = myClients?.reduce(
    (sum, user) => sum + (user.balance || 0),
    0
  );

  const approvedDeposits = deposits?.filter(
    (deposit) => deposit.status === "approved"
  );

  const approvedDepositsAmount = approvedDeposits?.reduce(
    (sum, deposit) => sum + deposit.USDAmount,
    0
  );

  const approvedWithdraws = withdraws?.filter(
    (withdraw) => withdraw.status === "approved"
  );

  const approvedWithdrawsAmount = approvedWithdraws?.reduce(
    (sum, withdraw) => sum + withdraw.USDAmount,
    0
  );

  const onSubmit = async (data) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...userInfo } = data;
    userInfo.createdBy = user?._id;
    const result = await addUser(userInfo);
    if (result?.data?.insertedId) {
      addToast("User created successfully", {
        appearance: "success",
        autoDismiss: true,
      });
      setIsModalOpen(false);
      reset();
    }
    if (result?.error) {
      addToast("Something went wrong", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const tabs = [
    {
      label: "Total Balance",
      value: `USD (${totalBalance?.toFixed(2) || "0.00"})`,
    },
    {
      label: "Remaining Balance",
      value: `USD (${singleUser?.balance?.toFixed(2) || "0.00"})`,
    },
    user?.role === "mother-admin"
      ? {
          label: "Total Self Deposit",
          value: `USD (${approvedDepositsAmount?.toFixed(2) || "0.00"})`,
        }
      : {
          label: "Total Agent Balance",
          value: "USD (0.00)",
        },
    { label: "Total Exposure", value: "USD (0.00)" },
    user?.role === "mother-admin"
      ? {
          label: "Total Self Withdrawal",
          value: `USD (${approvedWithdrawsAmount?.toFixed(2) || "0.00"})`,
        }
      : {
          label: "Total Admin",
          value: "USD (0.00)",
        },
  ];

  return (
    <div className="px-4 py-2">
      <div className="navbar bg-base-100">
        <div className="flex flex-row items-center gap-2">
          <div className="form-control border bg-white border-black border-opacity-40 shadow-xl p-1 lg:w-auto rounded">
            <input
              type="text"
              placeholder="Find Member"
              className="border-none focus:outline-none w-24 pl-2 md:w-auto"
            />
          </div>
          <button className="bg-slate-700 text-yellow-400 font-semibold px-4 h-8 rounded">
            Search
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-end md:items-center gap-2">
        <label className="font-semibold text-gray-700 pt-4">
          Admin List
          <div className="flex flex-row space-x-1 relative ">
            <select className="px-4 border border-black border-opacity-40 h-10 font-bold text-gray-500 lg:w-full rounded-sm outline-none">
              <option value="Option 1">Active</option>
              <option value="Option 2">Inactive</option>
              <option value="Option 3">Pending</option>
            </select>
          </div>
        </label>
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div>
            <div className="flex flex-row items-center lg:justify-center justify-between space-x-1 md:space-x-2 lg:space-x-2">
              <h3 className="px-0 md:px-0 lg:px-2 py-1 whitespace-nowrap text-sm md:text-base">
                Total records: <span className="pl-0 md:pl-1 lg:pl-1">4</span>{" "}
              </h3>
              <div className="relative">
                {/* Button to Open Modal */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white border border-black hover:bg-gray-300 px-2 py-2 flex items-center"
                >
                  <span className="absolute left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-6 text-black"
                      viewBox="0 0 640 512"
                      fill="currentColor"
                    >
                      <path d="M96 128a96 96 0 1 1 192 0 96 96 0 1 1-192 0zM352 128a64 64 0 1 1 128 0 64 64 0 1 1-128 0zM16 448c0-88.4 71.6-160 160-160h64c88.4 0 160 71.6 160 160 0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32zm384 0c0-38.3-9.1-74.4-25.4-106.5 15.1-5.2 31.4-8.3 48.4-8.3h64c88.4 0 160 71.6 160 160 0 17.7-14.3 32-32 32H400c-17.7 0-32-14.3-32-32zm96-176a16 16 0 0 1-16-16V224h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32a16 16 0 0 1-16 16z" />
                    </svg>
                  </span>
                  <span className="ml-8 font-bold whitespace-nowrap">
                    Add Client
                  </span>
                </button>
              </div>
              <button className="px-3 py-3 border border-black  bg-white shadow-inherit rounded hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-6 text-black font-bold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M21 12a9 9 0 11-6.219-8.56m.219-2.44V5m4-4H16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {tabs?.map((item, index) => (
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
      <div className="pt-4 ">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto ">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-headerGray text-headingTextColor">
                <tr className="border bg-yellow-400 border-black px-4 py-2 text-left text-sm font-medium uppercase">
                  <th className="border bg-headerGray border-black px-4 py-2 text-left text-sm font-medium uppercase">
                    Username
                  </th>
                  <th className="border bg-headerGray border-black px-4 py-2 text-left text-sm font-medium uppercase">
                    Full Name
                  </th>
                  <th className="border bg-headerGray border-black px-2 py-2 text-left text-sm font-medium uppercase">
                    Email
                  </th>
                  <th className="border bg-headerGray border-black px-4 py-2 text-left text-sm font-medium uppercase">
                    Balance
                  </th>
                  <th className="border bg-headerGray border-black px-2 py-2 text-left text-sm font-medium uppercase">
                    Joined At
                  </th>
                  <th className="border bg-headerGray border-black px-2 py-2 text-left text-sm font-medium uppercase">
                    Last login At
                  </th>
                  <th className="border bg-headerGray border-black px-4 py-2 text-left text-sm font-medium uppercase">
                    Role
                  </th>
                  <th className="border bg-headerGray border-black px-12 py-2 text-center text-sm font-medium uppercase">
                    Status
                  </th>
                  <th className="border bg-headerGray border-black px-12 py-2 text-center text-sm font-medium uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers?.map((row, index) => (
                  <tr key={index}>
                    <td className="border border-black px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      <button className="w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm">
                        AD
                      </button>
                      <span className="text-blue-500 pl-2">{row.username}</span>
                    </td>
                    <td className="capitalize border border-black px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.firstName} {row?.lastName}
                    </td>
                    <td className="border border-black px-4 py-2 whitespace-nowrap text-sm text-red-700">
                      {row.email}
                    </td>
                    <td className="border border-black px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.balance || 0}
                    </td>
                    <td className="border border-black px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                      {moment(row.createdAt).format("Do MMM YYYY, h:mm a")}
                    </td>
                    <td className="border border-black px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.lastLoginAt
                        ? moment(row?.lastLoginAt).fromNow()
                        : "No Data"}
                    </td>
                    <td className="border border-black px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.role}
                    </td>
                    <td className="border border-black px-12 py-2 whitespace-nowrap text-sm text-gray-700">
                      <div className="border bg-green-100   flex flex-row items-center justify-center space-x-1 ">
                        {row?.status === "deactivated" ||
                        row?.status === "banned" ? (
                          <span className="text-red-800">
                            <svg
                              className="w-3 h-3 "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                            >
                              <circle cx="50" cy="50" r="40" fill="red" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-green-800">
                            <svg
                              className="w-3 h-3 "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                            >
                              <circle cx="50" cy="50" r="40" fill="green" />
                            </svg>
                          </span>
                        )}
                        <span
                          className={`${
                            row?.status === "banned" ||
                            row?.status === "deactivated"
                              ? "text-red-800"
                              : "text-green-800"
                          } capitalize`}
                        >
                          {row?.status}
                        </span>
                      </div>
                    </td>

                    <td className="border border-black px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="w-8 h-8 bg-gray-200 rounded-sm flex items-center justify-center">
                          <span className="text-xs font-bold">BS</span>
                        </button>

                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button
                              className="w-8 h-8 bg-gray-200 rounded-sm flex items-center justify-center"
                              onClick={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                setMenuPosition({
                                  x: rect.left,
                                  y: rect.bottom + window.scrollY,
                                });
                                setActiveUserId(row._id);
                              }}
                            >
                              <IoMdSettings />
                            </Menu.Button>
                          </div>
                          {activeUserId === row._id && (
                            <Portal>
                              <Transition
                                enter="transition ease-out duration-200"
                                leave="transition ease-in duration-150"
                                enterFrom="transform opacity-0 scale-95 translate-y-1"
                                enterTo="transform opacity-100 scale-100 translate-y-0"
                              >
                                <Menu.Items
                                  className="fixed z-[1000] mt-1 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                  style={{
                                    top: `${menuPosition.y}px`,
                                    left: `${menuPosition.x}px`,
                                  }}
                                >
                                  {row?.status !== "banned" && (
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={() =>
                                            handleAction(row._id, "banned")
                                          }
                                          className={`${
                                            active
                                              ? "bg-red-200 text-red-600"
                                              : "text-red-600"
                                          } block w-full text-left px-3 py-2 text-xs `}
                                        >
                                          Ban User
                                        </button>
                                      )}
                                    </Menu.Item>
                                  )}

                                  {row?.status === "activated" ? (
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={() =>
                                            handleAction(row._id, "deactivated")
                                          }
                                          className={`${
                                            active
                                              ? "bg-yellow-200 text-yellow-600"
                                              : "text-yellow-600"
                                          } block w-full text-left px-3 py-2 text-xs`}
                                        >
                                          Deactivate
                                        </button>
                                      )}
                                    </Menu.Item>
                                  ) : (
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={() =>
                                            handleAction(row._id, "activated")
                                          }
                                          className={`${
                                            active
                                              ? "bg-green-200 text-green-600"
                                              : "text-green-600"
                                          } block w-full text-left px-3 py-2 text-xs`}
                                        >
                                          Activate
                                        </button>
                                      )}
                                    </Menu.Item>
                                  )}
                                </Menu.Items>
                              </Transition>
                            </Portal>
                          )}
                        </Menu>

                        <button className="w-8 h-8 bg-gray-200 rounded-sm flex items-center justify-center">
                          <FaUserPlus />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          role="dialog"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-lg w-96 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-700">Create user</h3>
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  reset();
                }}
                className="text-gray-500 font-bold text-xl hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className="w-full border border-black rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:borderellow-400"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className="w-full border border-black rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:borderellow-400"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border border-black rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:borderellow-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {/* Username Field */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                {...register("username", {
                  required: "Username is required",
                })}
                className="w-full border border-black rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:borderellow-400"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            {/* Role Select Field */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                {...register("role", { required: "Role is required" })}
                className="w-full border border-black rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:borderellow-400"
              >
                <option value="">Select a role</option>
                {filteredRolesOptions?.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full border border-black rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:borderellow-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Confirm Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full border border-black rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:borderellow-400"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-slate-700 disabled:bg-slate-400 disabled:text-slate-900 disabled:cursor-not-allowed text-yellow-400 hover:bg-yellow-400 hover:text-slate-700 duration-300 transition-colors font-semibold px-4 h-8 rounded"
              >
                {" "}
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
