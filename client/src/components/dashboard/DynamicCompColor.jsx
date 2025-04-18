import { useState, useEffect } from "react";
import {
  useAddColorControlMutation,
  useUpdateColorControlMutation,
  useGetColorControlsQuery,
} from "../../redux/features/allApis/colorControlApi/colorControlApi";
import { useToasts } from "react-toast-notifications";

const DynamicCompColor = ({ section, title }) => {
  const [addColorControl, { isLoading: isAdding }] =
    useAddColorControlMutation();
  const [updateColorControl, { isLoading: isUpdating }] =
    useUpdateColorControlMutation();
  const { data: colorControls } = useGetColorControlsQuery();
  const selectedColorControl = colorControls?.find(
    (colorControl) => colorControl.section === section
  );
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(16);
  const [isEditing, setIsEditing] = useState(false);
  const { addToast } = useToasts();

  // Effect to populate form if selectedColorControl exists
  useEffect(() => {
    if (selectedColorControl) {
      setBackgroundColor(selectedColorControl.backgroundColor);
      setTextColor(selectedColorControl.textColor);
      setFontSize(selectedColorControl.fontSize);
    }
  }, [selectedColorControl]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const colorInfo = {
      backgroundColor,
      textColor,
      fontSize,
      section,
    };

    if (selectedColorControl) {
      // Update existing color control
      const result = await updateColorControl({
        id: selectedColorControl._id,
        data: colorInfo,
      });
      if (result?.error) {
        addToast(result.error.data.message, {
          appearance: "error",
          autoDismiss: true,
        });
      } else {
        addToast("Control updated successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setIsEditing(false); // Exit edit mode after updating
      }
    } else {
      // Add new color control
      const result = await addColorControl(colorInfo);
      if (result?.error) {
        addToast(result.error.data.message, {
          appearance: "error",
          autoDismiss: true,
        });
      } else {
        addToast("Control added successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setBackgroundColor("#ffffff");
        setTextColor("#000000");
        setFontSize(16);
      }
    }
  };

  return (
    <div className="p-3 mx-auto bg-white rounded-md relative w-full">
      {/* Edit Button (only shown if selectedColorControl exists and not in edit mode) */}
      {selectedColorControl && !isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-12 right-2 px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600 disabled:bg-gray-400"
        >
          Edit
        </button>
      )}

      <h1 className="text-xl text-yellow-500 capitalize my-2">{title}</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Background Color Input */}
        <div className="space-y-2">
          <label
            htmlFor="backgroundColor"
            className="block text-sm font-medium text-gray-700"
          >
            Background Color (Type or Pick):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="backgroundColor"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              placeholder="Enter background color (e.g., #ffffff, red)"
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-600 disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing}
            />
            <input
              type="color"
              id="backgroundColorPicker"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-12 h-8 p-1 border border-gray-300 rounded disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing}
            />
          </div>
        </div>

        {/* Text Color Input */}
        <div className="space-y-2">
          <label
            htmlFor="textColor"
            className="block text-sm font-medium text-gray-700"
          >
            Text Color (Type or Pick):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="textColor"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              placeholder="Enter text color (e.g., #000000, blue)"
              className="w-full px-3 py-1 border border-gray-300 focus:outline-none rounded focus:ring-1 focus:ring-yellow-600 disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing}
            />
            <input
              type="color"
              id="textColorPicker"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-12 h-8 p-1 border border-gray-300 rounded disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing}
            />
          </div>
        </div>

        {/* Font Size Input */}
        <div className="space-y-2">
          <label
            htmlFor="fontSize"
            className="block text-sm font-medium text-gray-700"
          >
            Font Size (px):
          </label>
          <input
            type="text"
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-600 disabled:cursor-not-allowed"
            disabled={selectedColorControl && !isEditing}
          />
        </div>

        {/* Submit Button (changes to Update Button in edit mode) */}

        <button
          type="submit"
          disabled={
            isAdding || isUpdating || (selectedColorControl && !isEditing)
          }
          className="w-full px-4 py-1 text-black font-medium bg-yellow-500 rounded hover:bg-yellow-600 disabled:bg-gray-400"
        >
          {isEditing ? (isUpdating ? "Updating..." : "Update") : "Apply Styles"}
        </button>

        {/* Cancel Button (only shown in edit mode) */}
        {isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="w-full px-4 py-1 text-black font-medium bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default DynamicCompColor;
