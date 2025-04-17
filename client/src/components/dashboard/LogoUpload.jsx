import { useState } from "react";
import DynamicModal from "../modals/DynamicModal";
import LogoUploadForm from "./LogoUploadForm";

const LogoUpload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row px-3 items-center justify-between bg-black text-white h-12">
        <p className="text-xl">Upload Logo</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs pl-3 pr-2 py-1 text-black bg-yellow-500 hover:bg-yellow-600 transition-colors"
        >
          +Add
        </button>
      </div>
      <DynamicModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <LogoUploadForm closeModal={() => setIsModalOpen(false)} />
      </DynamicModal>
    </>
  );
};

export default LogoUpload;
