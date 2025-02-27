import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  useAddUserMutation,
  useGetUsersQuery,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useToasts } from "react-toast-notifications";
import moment from "moment";

const AdminDashboard = () => {
  const { data: users } = useGetUsersQuery();
  const [addUser, { isLoading }] = useAddUserMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { addToast } = useToasts();

  const filteredUsers = users?.filter((user) => user.role !== "user");

  const onSubmit = async (data) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...userInfo } = data;
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
      <div className="flex flex-row justify-between items-end md:items-center gap-2">
        <label className="font-semibold text-gray-700 pt-4">
          Admin List
          <div className="flex flex-row space-x-1 relative ">
            <select className="px-4 border border-black border-opacity-40 h-10 font-bold text-gray-500 lg:w-full rounded-sm outline-none">
              <option value="Option 1">Active</option>
              <option value="Option 2">Inactive</option>
              <option value="Option 3">Pending</option>
            </select>
            {/* Bold Cross Icon */}
            {/* <span className="absolute right-10 md:right-[485px] lg:right-5 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9l8.5-8.5a1 1 0 011.415 1.415L11.415 10l8.5 8.5a1 1 0 11-1.415 1.415L10 11.415l-8.5 8.5a1 1 0 11-1.415-1.415L8.585 10 0.085 1.5a1 1 0 111.415-1.415L10 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span> */}
          </div>
        </label>
        <div className="flex flex-col lg:flex-row justify-between gap-2">
          <div>
            <div className="flex flex-row items-center lg:justify-center justify-between space-x-1 md:space-x-2 lg:space-x-2">
              <h3 className="px-0 md:px-0 lg:px-2 py-1 whitespace-nowrap">
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
                    Add Admins
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
      <div className="pt-4 ">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto ">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-headerGray text-headingTextColor">
                <tr>
                  <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">
                    Username
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">
                    Full Name
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-left text-sm font-medium uppercase">
                    Email
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">
                    Balance
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-left text-sm font-medium uppercase">
                    Joined At
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-left text-sm font-medium uppercase">
                    Last login At
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase">
                    Role
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-12 py-2 text-center text-sm font-medium uppercase">
                    Status
                  </th>
                  <th className="border-y bg-headerGray border-gray-300 px-12 py-2 text-center text-sm font-medium uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers?.map((row, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      <button className="w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm">
                        AD
                      </button>
                      <span className="text-blue-500 pl-2">{row.username}</span>
                    </td>
                    <td className="capitalize border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.firstName} {row?.lastName}
                    </td>
                    <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-red-700">
                      {row.email}
                    </td>
                    <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.balance || 0}
                    </td>
                    <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                      {moment(row.createdAt).format("Do MMM YYYY, h:mm a")}
                    </td>
                    <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.lastLoginAt
                        ? moment(row?.lastLoginAt).fromNow()
                        : "No Data"}
                    </td>
                    <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {row?.role}
                    </td>
                    <td className="border-b px-12 py-2 whitespace-nowrap text-sm text-gray-700">
                      <div className="border bg-green-100   flex flex-row items-center justify-center space-x-1 ">
                        <span className="text-green-800">
                          <svg
                            className="w-3 h-3 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <circle cx="50" cy="50" r="40" fill="green" />
                          </svg>
                        </span>
                        <span className="text-green-800">Active</span>
                      </div>
                    </td>
                    <td className="border-b lg:border-opacity-10 flex flex-row items-center justify-center space-x-2 px-12 py-2 whitespace-nowrap text-sm text-gray-700">
                      <button className="w-8 h-8 bg-gray-200  font-sans text-black  rounded-sm">
                        BS
                      </button>
                      <button className="w-8 h-8 bg-gray-200 rounded-sm font-sans">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-8 h-4 font-medium"
                        >
                          <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 bg-gray-200 rounded-sm font-sans">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-8 h-4 font-medium"
                        >
                          <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-bold text-black">
                    Total
                  </td>
                  <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                    8.40,933.62
                  </td>
                  <td className="border=b px-4 py-2 whitespace-nowrap text-sm text-red-700">
                    1000.00
                  </td>
                  <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                    200.00
                  </td>
                  <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                    800.00
                  </td>
                  <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                    500.00
                  </td>
                  <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                    +300.00
                  </td>
                  <td className="px-12 py-2 whitespace-nowrap text-sm text-gray-700"></td>
                  <td className="px-12 py-2 whitespace-nowrap text-sm text-gray-700"></td>
                </tr> */}
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
                  className="w-full border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:border-yellow-400"
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
                  className="w-full border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:border-yellow-400"
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
                className="w-full border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:border-yellow-400"
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
                className="w-full border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:border-yellow-400"
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
                className="w-full border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:border-yellow-400"
              >
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="agent">Agent</option>
                <option value="sub-agent">Sub Agent</option>
                <option value="admin">Admin</option>
                <option value="sub-admin">Sub Admin</option>
                <option value="master">Master</option>
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
                className="w-full border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:border-yellow-400"
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
                className="w-full border border-gray-300 rounded px-3 py-1 text-sm outline-none focus:ring-0 focus:border-yellow-400"
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
