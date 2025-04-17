import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { uploadImage } from "@/hooks/files";
import SpinLoader from "../loaders/SpinLoader";
import { useAddGameMutation } from "@/redux/features/allApis/gameApi/gameApi";
import { useToasts } from "react-toast-notifications";

const GameUploadForm = ({ closeModal }) => {
  const [addGame] = useAddGameMutation();
  const [loading, setLoading] = useState(false);
  const [gameTitle, setGameTitle] = useState("");
  const [gameLink, setGameLink] = useState("");
  const [gameCategory, setGameCategory] = useState(""); // New state for category
  const [gamePreview, setGamePreview] = useState(null);
  const [gameFile, setGameFile] = useState(null);
  const { addToast } = useToasts();

  const categories = [
    { value: "live", label: "Live" },
    { value: "table", label: "Table" },
    { value: "slot", label: "Slot" },
    { value: "fishing", label: "Fishing" },
    { value: "egame", label: "E-Game" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGamePreview(URL.createObjectURL(file));
      setGameFile(file);
    }
  };

  const handleRemove = () => {
    setGamePreview(null);
    setGameFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gameTitle || !gameFile || !gameCategory) {
      addToast("Game title, category and image are required", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    try {
      setLoading(true);
      const { filePath } = await uploadImage(gameFile);
      if (filePath) {
        const gameInfo = {
          title: gameTitle,
          link: gameLink,
          category: gameCategory, // Include category in the game info
          image: filePath,
        };
        const result = await addGame(gameInfo);
        if (result.data.insertedId) {
          addToast("Game added successfully", {
            appearance: "success",
            autoDismiss: true,
          });
          setGameTitle("");
          setGameLink("");
          setGameCategory("");
          setGamePreview(null);
          setGameFile(null);
          closeModal();
        }
        if (result.error) {
          addToast(result.error.data.error, {
            appearance: "error",
            autoDismiss: true,
          });
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Failed to upload game", {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Upload a New Game
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Game Title
          </label>
          <input
            type="text"
            placeholder="Enter game title"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-md focus:ring focus:ring-gray-200"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Game Link
          </label>
          <input
            type="text"
            placeholder="Enter game link"
            value={gameLink}
            onChange={(e) => setGameLink(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-md focus:ring focus:ring-gray-200"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Game Category
          </label>
          <select
            value={gameCategory}
            onChange={(e) => setGameCategory(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded-md focus:ring focus:ring-gray-200"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
          {!gamePreview ? (
            <label className="w-full h-full flex flex-col items-center text-center cursor-pointer relative">
              <div className="text-gray-400 text-4xl mb-2">📤</div>
              <p className="text-gray-600 font-medium">
                Click to upload or drag and drop
              </p>
              <p className="text-gray-400 text-sm">
                Only image files are allowed
              </p>
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
                src={gamePreview}
                alt="Preview"
                className="w-full h-auto object-cover rounded-md mb-3 shadow-md"
              />
              <button
                type="button"
                onClick={handleRemove}
                className="text-red-600 text-sm font-medium hover:underline"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            disabled={loading || !gameFile || !gameTitle || !gameCategory}
            type="submit"
            className="bg-gray-800 px-4 py-2 text-white font-medium rounded-md hover:bg-red-600 flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
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

export default GameUploadForm;
