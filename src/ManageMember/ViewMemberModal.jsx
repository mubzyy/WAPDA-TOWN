import React from 'react'

const ViewMemberModal = ({showModal , setShowModal , selectedMember }) => {
  
    if (!showModal) return null;

  return (
  <div className="fixed inset-0 bg-black/50 flex items-center bg-black/50 justify-center z-[99999]">
    <div className="w-[400px] bg-gray-100 rounded-2xl shadow-2xl p-6">
           <div className='flex justify-center'>
        <h2 className="text-2xl font-bold mb-4">
          Member Details
        </h2>
</div>
        <p><b>Name:</b> {selectedMember?.name}</p>
        <p><b>CNIC:</b> {selectedMember?.cnic}</p>
        <p><b>Membership No:</b> {selectedMember?.membershipNo}</p>
        <p><b>RegisterationData:</b> {selectedMember?.regDate}</p>
   <div className='flex justify-center '>
        <button
          onClick={() => setShowModal(false)}
          className="mt-5 bg-red-500 text-sm text-white px-4 py-2 rounded-2xl"
        >
          Close
        </button>
</div>
      </div>
    </div>
  
  );
}

export default ViewMemberModal
