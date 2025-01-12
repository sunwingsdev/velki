import PageHeader from "@/components/shared/PageHeader";

const ActivityLog = () => {
  return (
    <div className="mt-16">
      <PageHeader title="Activity Log" />
      <div className="bg-[#262c32] p-4">
        <select className="w-full p-2 text-yellow-500 bg-[#1f252b] border border-yellow-500 rounded outline-none">
          <option value="activity_log">Activity Log</option>
        </select>
      </div>

      <div className=" bg-white rounded-md border border-gray-200 m-4">
        {/* Table Header */}
        <div className="bg-green-100 px-4 py-2 rounded-t-md">
          <span className="text-gray-600 text-sm font-medium">
            2024-12-14 13:14:10
          </span>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                <div className="mb-4">
                  <span className="text-gray-600 text-sm font-semibold">
                    Login Status
                  </span>
                  <p className="text-green-600 font-bold text-lg">
                    Login Success
                  </p>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                IP Address
              </td>
              <td className="px-4 py-2 text-blue-600 font-bold">
                118.179.74.193
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">ISP</td>
              <td className="px-4 py-2 text-gray-500">*****</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                City/State/Country
              </td>
              <td className="px-4 py-2 text-gray-500">*****</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">Action</td>
              <td className="px-4 py-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1.5 px-4 rounded-md">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" bg-white rounded-md border border-gray-200 m-4">
        {/* Table Header */}
        <div className="bg-red-100 px-4 py-2 rounded-t-md">
          <span className="text-gray-600 text-sm font-medium">
            2024-12-14 13:14:10
          </span>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                <div className="mb-4">
                  <span className="text-gray-600 text-sm font-semibold">
                    Login Status
                  </span>
                  <p className="text-red-600 font-bold text-lg">Login Failed</p>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                IP Address
              </td>
              <td className="px-4 py-2 text-blue-600 font-bold">
                118.179.74.193
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">ISP</td>
              <td className="px-4 py-2 text-gray-500">*****</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">
                City/State/Country
              </td>
              <td className="px-4 py-2 text-gray-500">*****</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 font-semibold text-gray-600">Action</td>
              <td className="px-4 py-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1.5 px-4 rounded-md">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
