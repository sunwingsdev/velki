import { useParams } from "react-router-dom";
const games = [
  {
    id: 1,
    // image: aviator,
    category: "live",
    demo: "https://demo.spribe.io/launch/aviator?currency=BDT&lang=EN",
  },
];
const DemoGame = () => {
  const { id } = useParams();

  const selectedGame = games.find((game) => game.id == id);
  if (!selectedGame)
    return <div className="mt-16 text-center">Game not found</div>;

  return (
    <div className="mt-16">
      <iframe
        src={selectedGame.demo}
        frameBorder="0"
        className="w-full h-screen"
      ></iframe>
    </div>
  );
};

export default DemoGame;
