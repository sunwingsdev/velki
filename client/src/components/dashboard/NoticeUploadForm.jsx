import { useState } from "react";
import { useAddHomeControlMutation } from "../../redux/features/allApis/homeControlApi/homeControlApi";
import { Button } from "@headlessui/react";
import SpinLoader from "../loaders/SpinLoader";
import { IoAdd } from "react-icons/io5";
import { useToasts } from "react-toast-notifications";

const NoticeUploadForm = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [addHomeControl] = useAddHomeControlMutation();
  const { addToast } = useToasts();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your form submission logic here

    const noticeInfo = {
      page: "home",
      section: "banner",
      category: "notice",
      title: event.target.noticeTitle.value,
    };
    // console.log(noticeInfo);
    try {
      const result = await addHomeControl(noticeInfo);
      if (result.data.insertedId) {
        addToast("Notice uploaded successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setLoading(false);
        closeModal();
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Failed to upload notice", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Field with Label */}
        <div>
          <label
            htmlFor="noticeTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Notice Title
          </label>
          <input
            type="text"
            id="noticeTitle"
            name="noticeTitle"
            placeholder="Enter notice title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3f3f]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <Button
            disabled={loading}
            type="submit"
            className="bg-[#222222] text-white hover:bg-[#ff3f3f] flex items-center gap-2 px-4 py-2 rounded-md disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            {loading ? (
              <SpinLoader />
            ) : (
              <>
                <IoAdd /> Upload
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NoticeUploadForm;
