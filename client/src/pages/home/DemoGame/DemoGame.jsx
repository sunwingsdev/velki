import { useGetGamesQuery } from "@/redux/features/allApis/gameApi/gameApi";
import { useParams } from "react-router-dom";

const DemoGame = () => {
  const { id } = useParams();

  const { data: games, isLoading } = useGetGamesQuery();

  const game = games?.find((game) => game._id === id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!game?.link) {
    return (
      <div className="text-center text-2xl font-bold text-red-500">
        This game is not available to play
      </div>
    );
  }

  return (
    <div>
      <iframe
        className="w-full h-[700px] max-h-screen"
        src={game.link}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DemoGame;
