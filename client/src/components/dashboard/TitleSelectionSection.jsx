import { useState } from "react";
import {
  useDeleteHomeControlMutation,
  useGetHomeControlsQuery,
  useUpdateSelectionMutation,
} from "../../redux/features/allApis/homeControlApi/homeControlApi";
import DeleteModal from "../modals/DeleteModal";
import { useToasts } from "react-toast-notifications";

const TitleSelectionSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);
  const { data: homeControls, refetch } = useGetHomeControlsQuery();
  const [updateSelection] = useUpdateSelectionMutation();
  const [deleteHomeControl] = useDeleteHomeControlMutation();
  const { addToast } = useToasts();

  const noticeHomeControls = homeControls?.filter(
    (control) => control.category === "title"
  );

  const handleCheckboxChange = async (id) => {
    try {
      const result = await updateSelection(id);
      if (result.data) {
        addToast(result.data.message, {
          appearance: "success",
          autoDismiss: true,
        });
      }
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteButtonClick = (item) => {
    setItem(item);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    try {
      try {
        const result = await deleteHomeControl(item?._id);
        if (result.data.deletedCount > 0) {
          addToast("Title deleted successfully", {
            appearance: "success",
            autoDismiss: true,
          });
          refetch();
          setIsOpen(false);
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        addToast("Failed to delete title", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-4 space-y-4">
        {noticeHomeControls?.length ? (
          <ul className="space-y-2">
            {noticeHomeControls.map((notice) => (
              <li
                key={notice._id}
                className="flex items-center justify-between p-2 border rounded bg-gray-400"
              >
                <div className="flex items-center space-x-4">
                  <input
                    checked={notice?.isSelected === true}
                    type="checkbox"
                    onChange={() => handleCheckboxChange(notice?._id)}
                    className="h-4 w-4"
                    id={notice?._id}
                  />
                  <img
                    className="size-8 object-contain"
                    src={`${import.meta.env.VITE_BASE_API_URL}${notice?.image}`}
                    alt=""
                  />
                  <span className="text-sm">{notice?.title}</span>
                </div>
                <button
                  onClick={() => handleDeleteButtonClick(notice)}
                  className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No titles available</p>
        )}
      </div>
      <DeleteModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        handleDelete={handleDelete}
      ></DeleteModal>
    </>
  );
};

export default TitleSelectionSection;
