import { FiAlertTriangle } from "react-icons/fi";

const OpenDeleteModal = ({ handleDeleteRow, selectedMember, setOpenDModal }) => {
  const handleConfirmDelete = () => {
    if (selectedMember?.id) {
      handleDeleteRow(selectedMember.id);
    }

    setOpenDModal(false);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-center gap-3 border-b px-6 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <FiAlertTriangle className="text-2xl" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Delete Property
            </h2>
            <p className="text-sm text-gray-500">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <div className="px-6 py-5">
          <p className="text-gray-700">
            Are you sure you want to delete{" "}
            <span className="font-semibold">
              {selectedMember?.propertyNumber || "this property"}
            </span>
            ?
          </p>

          {selectedMember && (
            <div className="mt-4 rounded-lg bg-gray-200 p-3 text-sm text-gray-700">
              <div>
                <span className="font-semibold">Member:</span>{" "}
                {selectedMember.name}
              </div>
              <div>
                <span className="font-semibold">Type:</span>{" "}
                {selectedMember.propertyType}
              </div>
              <div>
                <span className="font-semibold">Block:</span>{" "}
                {selectedMember.block}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 px-6 pb-6">
          <button
            type="button"
            onClick={() => setOpenDModal(false)}
            className="rounded-full border border-gray-300 bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleConfirmDelete}
            className="rounded-full bg-red-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default OpenDeleteModal
