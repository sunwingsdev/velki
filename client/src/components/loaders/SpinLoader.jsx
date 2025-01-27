import { BeatLoader } from "react-spinners";

const SpinLoader = () => {
  return (
    <div
      className="sweet-loading"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "22px",
      }}
    >
      <div>
        <BeatLoader color="#000000" />
      </div>
    </div>
  );
};

export default SpinLoader;
