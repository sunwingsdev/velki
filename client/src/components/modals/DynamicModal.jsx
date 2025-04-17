import { Dialog } from "@headlessui/react";

const DynamicModal = ({ isOpen, closeModal, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed inset-0 z-20 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black opacity-30"
          onClick={closeModal}
        />

        {/* Modal Content */}
        <div className="relative max-w-[900px] w-[700px] mx-auto bg-white px-4 py-2">
          {children}
          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className=" absolute top-0 right-0 w-6 lg:w-7 h-6 text-white  bg-red-500 hover:bg-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default DynamicModal;
