import { Link } from "react-router-dom";
import { FaTelegram, FaWhatsappSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-7 text-sm sm:text-base mt-4">
      <Link>
        <img
          className="w-32 sm:w-48"
          src="https://www.wickspin24.live/images/btn-android-dl.webp"
          alt=""
        />
      </Link>
      <p className="text-[#6F8898]">v5.6.0 - 2025/1/8 - 12.6MB</p>
      <div className="flex items-center justify-center gap-4 py-2">
        <Link
          target="_blank"
          rel="noreferrer noopenner"
          to="https://t.me/+fHC2LQO4BAg2MmRk"
        >
          <FaTelegram className="text-4xl" />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer noopenner"
          to="https://wa.me/+33756757364"
        >
          <FaWhatsappSquare className="text-4xl" />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer noopenner"
          to="https://www.facebook.com/oracletechnologyindia"
        >
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
        © 2025 Oracle Technology LLC কপিরাইট। সমস্ত অধিকার সংরক্ষিত
      </p>
    </div>
  );
};

export default Footer;
