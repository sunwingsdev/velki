import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="bg-black relative flex items-center w-full px-4 py-2">
      <h1 className="text-white text-lg absolute left-1/2 transform -translate-x-1/2">
        {title}
      </h1>
      <IoCloseSharp
        className="text-4xl text-white ml-auto cursor-pointer"
        onClick={handleClose}
      />
    </div>
  );
};

export default PageHeader;
