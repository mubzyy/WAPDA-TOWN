
import { FiAlertTriangle } from "react-icons/fi";

const ShowDeleteModal = ({
  setShowDeleteModal,
  selectedMember,
  showDeleteModal,
}) => {
  if (!showDeleteModal) return null;

  return (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] p-4">
    <div className='bg-gray-100  h-[200px] w-[450px] rounded-2xl'>
  {/* Heading Delete User */}
   <div className='flex flex-row gap-2 items-center m-4 mb-1'>
   <div className="w-12 h-12 flex items-center justify-center bg-red-300 rounded-full">
  <FiAlertTriangle className="text-2xl text-red-700" />
</div>
<span className='text-2xl font-semibold'>  Delete User</span>
   </div>
   {/* paragraph  */}
  <p className="mx-14 text-gray-600">
  Are you sure you want to delete <b>{selectedMember.name}</b>?
</p>
   {/* Button */}
 <div className="flex justify-end gap-3 mt-10 px-6">
  <button
    onClick={() => setShowDeleteModal(false)}
    className="px-5 py-2 rounded-full border text-sm bg-gray-200 border-gray-300 hover:bg-gray-300 transition"
  >
    Cancel
  </button>

  <button
    onClick={() => setShowDeleteModal(false)}
    className="px-5 py-2 rounded-full bg-red-500 text-sm text-white hover:bg-red-600 transition"
  >
    Delete
  </button>
</div>
</div>
  </div>
  )
}

export default ShowDeleteModal