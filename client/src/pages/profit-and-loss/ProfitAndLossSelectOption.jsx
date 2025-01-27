import { useState } from "react";
import { FaCalendarWeek } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const ProfitAndLossSelectOption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  return (
    <div className="bg-[#262c32] p-4">
      {/* Top Section */}
      <div className="flex flex-row items-center justify-between gap-2 bg-[#262c32] text-white shadow-md">
        <div className="mr-4 w-full">
          <button className="flex items-center px-3 py-2 bg-[#262c32] rounded-md text-yellow-500 border border-yellow-500 w-full">
            <FaCalendarWeek />
            <span className="ml-2 text-white">14-12-2024 14-12-2024</span>
          </button>
        </div>

        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold w-fit"
          onClick={handleModalOpen}
        >
          ...
        </button>

        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold">
          Submit
        </button>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full">
          <div className="bg-black text-white p-6 rounded-md shadow-lg w-11/12 max-w-md">
            <div className="relative flex items-center mb-4">
              <span className="font-bold text-lg absolute left-1/2 transform -translate-x-1/2">
                During
              </span>
              <button
                className="text-white text-3xl font-bold ml-auto"
                onClick={handleModalClose}
              >
                <IoCloseSharp />
              </button>
            </div>
            <div className="flex flex-row items-center gap-4 bg-white p-2 rounded-md">
              <button className="w-full bg-yellow-500 text-black py-2 rounded-md font-bold">
                Today
              </button>
              <button className="w-full bg-yellow-500 text-black py-2 rounded-md font-bold">
                From Yesterday
              </button>
              <button className="w-full bg-yellow-500 text-black py-2 rounded-md font-bold">
                Last 7 Days
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfitAndLossSelectOption;
