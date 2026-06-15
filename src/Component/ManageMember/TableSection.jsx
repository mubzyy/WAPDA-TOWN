import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPrint } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { TbHomeEdit } from "react-icons/tb";


const TableSection = ({ currentData, startIndex, toggleStatus , members , handleView , handleEdit , handleDelete , handlePrint}) => {
 
  return (
    // TABLE
    <div className='mt-1 rounded-xl m-6 shadow border overflow-hidden'>
   {/* Table Header */}
   <div className='bg-[#233494] h-8 grid grid-cols-8 p-2 text-white font-semibold text-sm'>
  
  <div>Sr.</div>
  <div>Membership No.</div>
  <div>CNIC/PP No./NTN</div>
  <div>Name of Member</div>
  <div>Registeration Dt</div>
  <div>No. of Properties</div>
  <div>Status</div>
  <div>Action</div>

   </div>
   {/* Table Body */}
   <div className='max-h-[400px] overflow-y-auto'>
{currentData.map((member , index)=>(
    <div
    key={member.id}
    className="grid grid-cols-8 p-3 border-b hover:bg-gray-200 bg-white  gap-x-4  "
    >
        <div>{startIndex + index + 1}</div>
        <div>{member.membershipNo}</div>
        <div>{member.cnic}</div>
        <div>{member.name}</div>   
        <div>{member.regDate}</div>
        <div className='px-12'>{member.properties}</div>
    <div className="flex items-center">
  <span >
   <button
    onClick={() => toggleStatus(member.id)}
    className={
      member.status === "Active"
        ? "bg-green-500 text-white text-sm px-2 py-1 rounded"
        : "bg-red-500 text-white text-sm px-2 py-1 rounded"
    }
  >
    {member.status}
  </button>
  </span>
</div>
    {/* Action Buttons */}
          <div className="flex gap-2 text-xs">
            <button onClick={()=> handleView(member)} className="px-2 py-1 bg-blue-500 text-white rounded hover:scale-115 transition-all duration-200"><GrFormView /></button>
            <button onClick={()=> handleEdit(member)} className="px-2 py-1 bg-green-500 text-white rounded hover:scale-115 transition-all duration-200"><TbHomeEdit /></button>
            <button onClick={()=> handleDelete(member)} className="px-2 py-1 bg-red-500 text-white rounded hover:scale-115 transition-all duration-200"><MdDelete /></button>
            <button onClick={()=> handlePrint(member)} className="px-2 py-1 bg-yellow-500 text-white rounded hover:scale-115 transition-all duration-200"><FaPrint /></button>
    </div>

</div>
    
))}
   </div>
    </div>
  )
}

export default TableSection
