import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function DeleteModal({ isOpen, closeModal, handleDelete }) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#222222] p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="font-bold text-white text-center text-2xl"
              >
                Are you sure you want to delete this item?
              </DialogTitle>
              <p className="mt-2 text-xs text-center text-white">
                This action cannot be undone. Please confirm your choice.
              </p>
              <div className="mt-4 flex items-center justify-center gap-6 py-3">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-2 px-4 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={closeModal}
                >
                  Cancel
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-700 hover:bg-red-800 py-2 px-4 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
