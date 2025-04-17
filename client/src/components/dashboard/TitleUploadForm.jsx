import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useAddHomeControlMutation } from "../../redux/features/allApis/homeControlApi/homeControlApi";
import { uploadImage } from "../../hooks/files";
import SpinLoader from "../loaders/SpinLoader";
import { toast } from "react-hot-toast";

const TitleUploadForm = ({ closeModal }) => {
  const [addHomeControl] = useAddHomeControlMutation();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");

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
          const titleInfo = {
            title,
            page: "home",
            section: "meta",
            category: "title",
            image: filePath,
          };
          const result = await addHomeControl(titleInfo);
          if (result.data.insertedId) {
            toast.success("Title added successfully");
            setImagePreview(null);
            setImageFile(null);
            setLoading(false);
            closeModal();
          }
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setLoading(false);
        toast.error("Failed to add title");
      }
    } else {
      toast.error("Failed to upload image");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2 ">
        {/* Input Field with Label */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Notice Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3f3f]"
          />
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          {!imagePreview ? (
            <label className="w-full h-full flex flex-col items-center text-center cursor-pointer relative">
              <div className="text-gray-400 text-4xl mb-4">📤</div>
              <p className="text-gray-500">Select a image to upload (32*32)</p>
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

export default TitleUploadForm;
