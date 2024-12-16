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
      <p className="text-[#6F8898]">v2.1.0 - 2024/3/8 - 2.6MB</p>
      <div className="flex items-center justify-center gap-4 py-2">
        <Link>
          <FaTelegram className="text-4xl" />
        </Link>
        <Link>
          <FaWhatsappSquare className="text-4xl" />
        </Link>
        <Link>
          <FaFacebook className="text-4xl" />
        </Link>
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
      <p className="text-[#6F8898] text-sm text-center">
        © 2024 Oracle Technology LLC কপিরাইট। সমস্ত অধিকার সংরক্ষিত
      </p>
    </div>
  );
};

export default Footer;
