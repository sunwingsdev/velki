import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TermsAndCondition = () => {
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
        <p className="font-bold text-xl">Terms and Conditions</p>
      </div>
      <div className="bg-white rounded-2xl p-8 space-y-3 text-lg ">
        <p>Description: Initial Terms and Conditions replacing general rules</p>
        <p>Introduction</p>
        <p>
          These terms and conditions and the documents referred and linked to
          below (the “Terms”) set out the basis upon which the website operated
          under the URL www.wickspin24.live (the “Website”) and its related or
          connected services (collectively, the “Service”) will be provided to
          you.
        </p>
        <p>
          Please read these terms very carefully as they form a binding legal
          agreement between you - our customer (the “Customer”) - and us. By
          opening an account (the “Account”) and using the Service you agree to
          be bound by these terms, together with any amendment which may be
          published from time to time.
        </p>
        <p>
          If anything is not clear to you please contact us using the contact
          details below.
        </p>
        <p>The Service is supplied by Mayasofttech Ltd</p>
        <p>
          Transactions and payment services are operated by Mayasofttech Ltd, a
          limited liability company registered in Belize
        </p>
        <h2>General Terms</h2>
        <p>
          We reserve the right to amend the terms (including to any documents
          referred and linked to below) at any time. When such amendment is not
          substantial, we may not provide you with prior notice. You will be
          notified in advance for material changes to the terms and may require
          you to re-confirm acceptance to the updated terms before the changes
          come into effect. If you object to any such changes, you must
          immediately stop using the service and the termination provisions
          below will apply. Continued use of the service indicates your
          agreement to be bound by such changes. Any bets not settled prior to
          the changed terms taking effect will be subject to the pre-existing
          terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
