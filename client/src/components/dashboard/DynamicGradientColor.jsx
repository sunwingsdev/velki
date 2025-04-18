import { useState, useEffect } from "react";
import {
  useAddColorControlMutation,
  useUpdateColorControlMutation,
  useGetColorControlsQuery,
} from "../../redux/features/allApis/colorControlApi/colorControlApi";
import { useToasts } from "react-toast-notifications";

const DynamicGradientColor = ({ section, title }) => {
  const [addColorControl, { isLoading: isAdding }] =
    useAddColorControlMutation();
  const [updateColorControl, { isLoading: isUpdating }] =
    useUpdateColorControlMutation();
  const { data: colorControls } = useGetColorControlsQuery();
  const selectedColorControl = colorControls?.find(
    (colorControl) => colorControl.section === section
  );
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [secondBgColor, setSecondBgColor] = useState("#000000");
  const [direction, setDirection] = useState("bottom");
  const [isEditing, setIsEditing] = useState(false);
  const { addToast } = useToasts();

  // Effect to populate form if selectedColorControl exists
  useEffect(() => {
    if (selectedColorControl) {
      setBackgroundColor(selectedColorControl.firstBackgroundColor);
      setSecondBgColor(selectedColorControl.secondBackgroundColor);
      setDirection(selectedColorControl.direction);
    }
  }, [selectedColorControl]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const colorInfo = {
      firstBackgroundColor: backgroundColor,
      secondBackgroundColor: secondBgColor,
      direction,
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
        setSecondBgColor("#000000");
        setDirection("bottom");
      }
    }
  };

  return (
    <div className="p-3 mx-auto bg-white rounded-md w-full relative">
      {/* Edit Button (only shown if selectedColorControl exists and not in edit mode) */}
      {selectedColorControl && !isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-10 right-2 px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600 disabled:bg-gray-400"
        >
          Edit
        </button>
      )}

      <h1 className="text-xl text-yellow-500 capitalize my-2">{title}</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* First Background Color Input */}
        <div className="space-y-2">
          <label
            htmlFor="backgroundColor"
            className="block text-sm font-medium text-gray-700"
          >
            First Background Color (Type or Pick):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="backgroundColor"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              placeholder="Enter background color (e.g., #ffffff, red)"
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-600 disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing} // Disable if not in edit mode
            />
            <input
              type="color"
              id="backgroundColorPicker"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-12 h-8 p-1 border border-gray-300 rounded disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing} // Disable if not in edit mode
            />
          </div>
        </div>

        {/* Second Background Color Input */}
        <div className="space-y-2">
          <label
            htmlFor="secondBgColor"
            className="block text-sm font-medium text-gray-700"
          >
            Second Background Color (Type or Pick):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="secondBgColor"
              value={secondBgColor}
              onChange={(e) => setSecondBgColor(e.target.value)}
              placeholder="Enter text color (e.g., #000000, blue)"
              className="w-full px-3 py-1 border border-gray-300 focus:outline-none rounded focus:ring-1 focus:ring-yellow-600 disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing} // Disable if not in edit mode
            />
            <input
              type="color"
              id="secondBgColorPicker"
              value={secondBgColor}
              onChange={(e) => setSecondBgColor(e.target.value)}
              className="w-12 h-8 p-1 border border-gray-300 rounded disabled:cursor-not-allowed"
              disabled={selectedColorControl && !isEditing} // Disable if not in edit mode
            />
          </div>
        </div>

        {/* Direction Select */}
        <div className="space-y-2">
          <label
            htmlFor="direction"
            className="block text-sm font-medium text-gray-700"
          >
            Direction:
          </label>
          <select
            id="direction"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-600 disabled:cursor-not-allowed"
            disabled={selectedColorControl && !isEditing} // Disable if not in edit mode
          >
            <option value={"right"}>to right</option>
            <option value={"left"}>to left</option>
            <option value={"bottom"}>to bottom</option>
            <option value={"top"}>to top</option>
          </select>
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

export default DynamicGradientColor;
