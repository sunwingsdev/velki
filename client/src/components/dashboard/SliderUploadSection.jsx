import { useState } from "react";
import SliderUploadForm from "./SliderUploadForm";
import DynamicModal from "../modals/DynamicModal";


const SliderUploadSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row px-3 items-center justify-between bg-black text-white h-12 ">
        <p className="text-xl">Upload Slider Image</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs pl-3 pr-2 py-1 text-black bg-yellow-500"
        >
          +Add
        </button>
      </div>
      <DynamicModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <SliderUploadForm closeModal={() => setIsModalOpen(false)} />
      </DynamicModal>
    </>
  );
};

export default SliderUploadSection;
