import { useUpdateRemarkMutation } from "@/redux/features/allApis/usersApi/usersApi";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

const Remark = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [remark, setRemark] = useState(user?.remark || "");
  const [updateRemark] = useUpdateRemarkMutation();
  const { addToast } = useToasts();

  const handleUpdate = async () => {
    const result = await updateRemark({ id: user?._id, data: { remark } });
    if (result.error) {
      addToast("Something went wrong", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (result.data.modifiedCount > 0) {
      addToast("Remark updated successful", {
        appearance: "success",
        autoDismiss: true,
      });
      setEditMode(false);
    }
  };
  return (
    <>
      <input
        className={`w-40 h-6 ${
          user?.remark && !editMode ? "border-none" : " border border-black"
        } p-2 outline-none`}
        type="text"
        placeholder="Add a remark"
        onChange={(e) => setRemark(e.target.value)}
        value={remark}
        readOnly={user?.remark && !editMode}
      />
      {!editMode && user?.remark && (
        <button
          onClick={() => setEditMode(true)}
          className="w-14 h-6 bg-yellow-500 text-black rounded-sm"
        >
          Edit
        </button>
      )}
      {!editMode && !user?.remark && (
        <button
          onClick={handleUpdate}
          className="w-14 h-6 bg-green-500 text-white rounded-sm"
        >
          {"Add"}
        </button>
      )}
      {editMode && user?.remark && (
        <button
          onClick={handleUpdate}
          className="w-14 h-6 bg-blue-500 text-white rounded-sm"
        >
          {"Update"}
        </button>
      )}
    </>
  );
};

export default Remark;
