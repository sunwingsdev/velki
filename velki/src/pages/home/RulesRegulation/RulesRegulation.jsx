import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RulesRegulation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-500 min-h-screen">
      <div className="bg-black text-white p-3 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-white flex items-center"
        >
          <AiOutlineArrowLeft className="mr-1 text-2xl" />
        </button>
        <p className="font-bold text-xl">Rules Regulation</p>
      </div>
      <div className="bg-white rounded-2xl p-8 space-y-3 text-lg ">
        <p>
          Your privacy is important to us, and we are committed to protecting
          your personal information. We will be clear and open about why we
          collect your personal information and how we use it. Where you have
          choices or rights, we will explain these to you.
        </p>
        <p>
          This Privacy Policy explains how VELKI uses your personal information
          when you are using one of our website.
        </p>
        <p>
          If you do not agree with any statements contained within this Privacy
          Policy, please do not proceed any further on our website. Please be
          aware that registering an account on our website, placing bets and
          transferring funds will be deemed confirmation of your full agreement
          with our Terms and Conditions and our Privacy Policy. You have the
          right to cease using the website at any time; however, we may still be
          legally required to retain some of your personal information.
        </p>
        <p>
          We may periodically make changes to this Privacy Policy and will
          notify you of these changes by posting the modified terms on our
          platforms. We recommend that you revisit this Privacy Policy
          regularly.
        </p>
        <p className="text-xl font-bold">
          Who is in control of your information?
        </p>
        <p>
          Throughout this Privacy Policy, " VELKI ", "we", "our" and "us"
          relates to Mayasofttech Ltd, a limited liability company, registered
          in Belize. We control the ways your Personal Data is collected and the
          purposes for which your Personal Data is used by VELKI, acting as the
          “data controller” for the purposes of applicable European data
          protection legislation.
        </p>
        <p className="text-xl font-bold">Our Data Protection Officer</p>
        <h2>
          If you have concerns or would like any further information about how
          VELKI handles your personal information, you can contact our Data
          Protection Officer.
        </h2>
      </div>
    </div>
  );
};

export default RulesRegulation;
