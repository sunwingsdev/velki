import { Link } from "react-router-dom";
import { FaTelegram, FaWhatsappSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-7 text-sm sm:text-base">
      <Link>
        <img
          className="w-32 sm:w-48"
          src="https://www.wickspin24.live/images/btn-android-dl.webp"
          alt=""
        />
      </Link>
      <p className="text-[#6F8898]">v1.11 - 2022/3/8 - 2.6MB</p>
      <div className="flex items-center justify-center gap-4 py-2">
        <FaTelegram className="text-4xl" />
        <FaWhatsappSquare className="text-4xl" />
        <FaFacebook className="text-4xl" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link to="/privacy-policy" className="border-r border-slate-400 px-3">
          Privacy Policy
        </Link>
        <Link to="/terms-conditions" className="border-r border-slate-400 px-3">
          Terms and Conditions
        </Link>
        <Link to="/rules-regulation" className="border-r border-slate-400 px-3">
          Rules and Regulations
        </Link>
        <Link to="/kyc" className="border-r border-slate-400 px-3">
          KYC
        </Link>
        <Link to="/responsible-gaming" className="px-3 border-slate-400">
          Responsible Gaming
        </Link>
      </div>
    </div>
  );
};

export default Footer;
