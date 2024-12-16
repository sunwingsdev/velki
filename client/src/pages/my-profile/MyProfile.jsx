import PageHeader from "@/components/shared/PageHeader";
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div className="mt-16">
      <PageHeader title="My Profile" />
      <div className="bg-white shadow-md border border-gray-200 m-4">
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                First Name
              </td>
              <td className="px-4 py-2"></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Last Name
              </td>
              <td className="px-4 py-2 text-gray-500">--</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">Email</td>
              <td className="px-4 py-2 text-gray-500">--</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                Contact Number
              </td>
              <td className="px-4 py-2 text-gray-500">--</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-gray-600">
                Password
              </td>
              <td className="px-4 py-2 flex items-center justify-between">
                <span className="text-gray-500">*******</span>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-md flex items-center font-medium">
                  <FaEdit className="mr-1" />
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
