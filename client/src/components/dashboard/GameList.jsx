import { deleteImage } from "@/hooks/files";
import {
  useDeleteGameMutation,
  useGetGamesQuery,
  useToggleGameStatusMutation,
} from "@/redux/features/allApis/gameApi/gameApi";
import { useState } from "react";
import { IoTrash } from "react-icons/io5";
import { useToasts } from "react-toast-notifications";
import DeleteModal from "../modals/DeleteModal";

const GameList = () => {
  const { data: games, refetch, isLoading } = useGetGamesQuery();
  const [deleteGame] = useDeleteGameMutation();
  const [toggleGameStatus] = useToggleGameStatusMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(null);
  const { addToast } = useToasts();

  const handleDeleteButtonClick = (item) => {
    setItem(item);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    try {
      const { message } = await deleteImage(item?.image);
      if (message) {
        try {
          const result = await deleteGame(item?._id);
          if (result.data.deletedCount > 0) {
            addToast("Game deleted successfully", {
              appearance: "success",
              autoDismiss: true,
            });
            refetch();
            setIsOpen(false);
          }
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          addToast("Failed to delete game", {
            appearance: "error",
            autoDismiss: true,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleStatus = async (game) => {
    try {
      const result = await toggleGameStatus(game._id);
      if (result.data.modifiedCount > 0) {
        addToast("Game status updated", {
          appearance: "success",
          autoDismiss: true,
        });
        refetch();
      }
      if (result.error) {
        addToast(result.error.data.error, {
          appearance: "error",
          autoDismiss: true,
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Failed to update status", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <>
      <div className="p-6 bg-white rounded-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Game List</h2>
        {isLoading ? (
          <p>Loading games...</p>
        ) : games?.length === 0 ? (
          <p className="text-gray-600 text-center">No games found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Link</th>
                  <th className="px-4 py-2 text-center">Status</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {games?.map((game) => (
                  <tr key={game._id} className="border-t border-gray-300">
                    <td className="px-4 py-2">
                      <img
                        src={`${import.meta.env.VITE_BASE_API_URL}${
                          game.image
                        }`}
                        alt={game.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </td>
                    <td className="px-4 py-2">{game.title}</td>
                    <td className="px-4 py-2">
                      <a
                        href={game.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Visit
                      </a>
                    </td>
                    <td className="px-4 py-2 text-center text-white">
                      {game?.isActive ? (
                        <button
                          onClick={() => handleToggleStatus(game)}
                          className="flex flex-row items-center justify-center space-x-1 "
                        >
                          <span className="text-green-800">
                            <svg
                              className="w-3 h-3 "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                            >
                              <circle cx="50" cy="50" r="40" fill="green" />
                            </svg>
                          </span>
                          <span className="bg-green-500 px-1.5 py-0.5 rounded-sm">
                            Activated
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleToggleStatus(game)}
                          className="flex flex-row items-center justify-center space-x-1 "
                        >
                          <span className="text-red-800">
                            <svg
                              className="w-3 h-3 "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                            >
                              <circle cx="50" cy="50" r="40" fill="red" />
                            </svg>
                          </span>
                          <span className="bg-red-500 px-1.5 py-0.5 rounded-sm">
                            Deactivated
                          </span>
                        </button>
                      )}
                      {/* <button disabled={loadingId === game._id}>
                        {game?.isActive ? (
                          <IoCheckmarkCircle className="text-green-500 text-2xl" />
                        ) : (
                          <IoCloseCircle className="text-red-500 text-2xl" />
                        )}
                        <button
                          onClick={() => handleToggleStatus(game)}
                          className={`px-4 py-2 rounded-md text-white ${
                            game?.isActive
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-red-500 hover:bg-red-600"
                          }`}
                        >
                          {game?.isActive ? "Deactivate" : "Activate"}
                        </button>
                      </button> */}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDeleteButtonClick(game)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <IoTrash className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default GameList;
