import { useEffect } from "react";
import AccountTabs from "../AccountTabs/AccountTabs";
import CommonNavMenu from "../CommonNavMenu/CommonNavMenu";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useUpdateProileMutation } from "@/redux/features/allApis/usersApi/usersApi";
import { useFetchUser } from "@/hooks/customHook";
import { useToasts } from "react-toast-notifications";

const Profile = () => {
  const { user, singleUser } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: singleUser?.firstName || "",
      lastName: singleUser?.lastName || "",
      email: singleUser?.email || "",
      number: singleUser?.number || "",
      password: "",
    },
  });
  const [updateProfile, { isLoading }] = useUpdateProileMutation();
  const { fetchUser } = useFetchUser(user?._id);
  const { addToast } = useToasts();

  // Reset form when singleUser changes
  useEffect(() => {
    reset({
      firstName: singleUser?.firstName || "",
      lastName: singleUser?.lastName || "",
      email: singleUser?.email || "",
      number: singleUser?.number || "",
      password: "",
    });
  }, [singleUser, reset]);

  const onSubmit = async (data) => {
    const result = await updateProfile({
      id: singleUser?._id,
      data,
    });
    if (result?.error) {
      addToast(result.error.data.error, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (result?.data.modifiedCount > 0) {
      addToast("Profile updated successfully", {
        appearance: "success",
        autoDismiss: true,
      });
      fetchUser();
      reset();
      return;
    }
  };
  return (
    <div>
      <CommonNavMenu></CommonNavMenu>
      <div>
        <div className="bg-adminBackground min-h-screen flex flex-col md:flex-row place-items-baseline space-y-4 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-4 px-4">
          <AccountTabs></AccountTabs>
          <form className="max-w-2xl w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white shadow-md border border-gray-200 m-4">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-2 py-1 font-semibold text-gray-600 w-1/3">
                      First Name
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="text"
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                        placeholder={singleUser?.firstName || "First Name"}
                        className={`w-full p-1 border rounded ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-2 py-1 font-semibold text-gray-600">
                      Last Name
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="text"
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                        placeholder={singleUser?.lastName || "Last Name"}
                        className={`w-full p-1 border rounded ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-2 py-1 font-semibold text-gray-600">
                      Email
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        placeholder={singleUser?.email || "Email"}
                        className={`w-full p-1 border rounded ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-2 py-1 font-semibold text-gray-600">
                      Contact Number
                    </td>
                    <td className="px-2 py-1">
                      <input
                        type="tel"
                        {...register("number", {
                          required: "Contact number is required",
                        })}
                        placeholder={singleUser?.number || "Contact Number"}
                        className={`w-full p-1 border rounded ${
                          errors.number ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors.number && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.number.message}
                        </p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 font-semibold text-gray-600">
                      Password
                    </td>
                    <td className="px-2 py-1 flex items-center justify-between">
                      <input
                        type="password"
                        {...register("password")}
                        className={`w-full p-1 border rounded ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Password (leave blank to keep current)"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md flex items-center font-medium disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Loading..." : "Update"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
