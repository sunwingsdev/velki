import PrimaryButton from "./PrimaryButton";
import { FiPlusCircle } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#ffc800] flex items-center justify-between px-3 py-2 fixed top-0 z-20 w-full md:w-[60%] lg:w-[40%] xl:w-[30%]">
      <Link to="/">
        <img
          className="w-[84px] h-[26px]"
          src="https://www.wickspin24.live/images/velki-logo.webp"
          alt=""
        />
      </Link>
      <div className="flex items-center justify-center gap-3">
        <Link to="/signup">
          <PrimaryButton icon={FiPlusCircle} background={""}>
            SignUp
          </PrimaryButton>
        </Link>
        <Link to="/login">
          <PrimaryButton icon={IoMdLogIn} background={"red"}>
            Login
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
