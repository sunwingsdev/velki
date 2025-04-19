import { uploadImage } from "@/hooks/files";
import { useAddHomeControlMutation } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import SpinLoader from "../loaders/SpinLoader";
import { IoAdd } from "react-icons/io5";

const DynamicSingleUploadForm = ({
  closeModal,
  page,
  section,
  category,
  successMsg,
  errorMsg,
}) => {
  const [addHomeControl] = useAddHomeControlMutation();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const { addToast } = useToasts();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleRemove = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile) {
      try {
        setLoading(true);
        const { filePath } = await uploadImage(imageFile);
        if (filePath) {
          const logoInfo = {
            page: page,
            section: section,
            category: category,
            image: filePath,
          };
          const result = await addHomeControl(logoInfo);
          if (result.data.insertedId) {
            addToast(successMsg, {
              appearance: "success",
              autoDismiss: true,
            });
            setImagePreview(null);
            setImageFile(null);
            setLoading(false);
            closeModal();
          }
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setLoading(false);
        addToast(errorMsg, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } else {
      addToast("Failed to upload image", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2 ">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          {!imagePreview ? (
            <label className="w-full h-full flex flex-col items-center text-center cursor-pointer relative">
              <div className="text-gray-400 text-4xl mb-4">📤</div>
              <p className="text-gray-500">Select a image to upload</p>
              <p className="text-gray-400 text-sm">or drag and drop it here</p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <button
                type="button"
                onClick={handleRemove}
                className="text-red-500 text-sm hover:underline"
              >
                Remove Logo
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            disabled={loading || !imageFile}
            type="submit"
            className="bg-[#222222] px-3 py-1 text-white hover:bg-[#ff3f3f] flex items-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            {loading ? (
              <SpinLoader />
            ) : (
              <>
                <IoAdd /> Upload
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicSingleUploadForm;
