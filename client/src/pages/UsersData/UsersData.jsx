import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";
import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUpdateActiveStatusMutation } from "@/redux/features/allApis/usersApi/usersApi";
import { useToasts } from "react-toast-notifications";
import { Menu, Transition } from "@headlessui/react";
import ReactDOM from "react-dom";
import { IoMdSettings } from "react-icons/io";

const UsersData = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: users } = useGetUsersQuery();
  const { role } = useParams();
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [activeUserId, setActiveUserId] = useState(null);
  const { addToast } = useToasts();
  const [updateUserStatus] = useUpdateActiveStatusMutation();

  const filteredUsers = users?.filter(
    (singleUser) =>
      (singleUser?.role ? singleUser?.role === role : "user" === role) &&
      singleUser?.createdBy === user?._id
  );

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

  return (
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
              {filteredUsers?.length ? (
                filteredUsers?.map((row, index) => (
                  <tr key={index}>
                    <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      <button className="w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm">
                        AD
                      </button>
                      <span className="text-blue-500 pl-2">{row.username}</span>
                    </td>
                    <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
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
                      {row?.role || "user"}
                    </td>
                    <td className="border-b px-12 py-2 whitespace-nowrap text-sm text-gray-700">
                      <div className="border bg-green-100 flex flex-row items-center justify-center space-x-1">
                        {row?.status === "deactivated" ||
                        row?.status === "banned" ? (
                          <span className="text-red-800">
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                            >
                              <circle cx="50" cy="50" r="40" fill="red" />
                            </svg>
                          </span>
                        ) : (
                          <span className="text-green-800">
                            <svg
                              className="w-3 h-3"
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
                    <td className="border-b lg:border-opacity-10 flex flex-row items-center justify-center space-x-2 px-12 py-2 whitespace-nowrap text-sm text-gray-700">
                      <button className="w-8 h-8 bg-gray-200 font-sans text-black rounded-sm">
                        BS
                      </button>
                      
                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button
                            className="w-8 h-8 bg-gray-200 rounded-sm flex items-center justify-center"
                            onClick={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
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
                                        } block w-full text-left px-3 py-2 text-xs`}
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
                ))
              ) : (
                <tr className="h-[300px]">
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-bold text-black col-span-9 text-center flex items-center justify-center">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersData;