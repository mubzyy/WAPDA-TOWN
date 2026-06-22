import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPrint } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { TbHomeEdit } from "react-icons/tb";


const TableSection = ({ currentData, startIndex, toggleStatus , members , handleView , handleEdit , handleDelete , handlePrint}) => {
 
  return (
    <div className=" lg:overflow-visible ">
    {/* Table */}
    <div className='  rounded-xl m-6 shadow border  overflow-x-auto  '>
   {/* Table Header */}
   <div className='bg-[#233494]   min-w-[1000px] h-8 grid grid-cols-[0.5fr_1fr_2fr_2fr_1fr_1fr_1fr_1fr] p-2 pr-8 text-white font-semibold  text-xs xl:text-sm  '>
  
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
   <div className=' min-w-[1000px] '>
{currentData.map((member , index)=>(
    <div
    key={member.id}
    className="grid grid-cols-[0.5fr_1fr_2fr_2fr_1fr_0.5fr_1fr_1fr] p-3 pr-8 border-b hover:bg-gray-200 bg-white  gap-x-4   "
    >
        <div className='text-xs  xl:text-base'>{startIndex + index + 1}</div>
        <div className='text-xs  xl:text-base'>{member.membershipNo}</div>
        <div className='text-xs  xl:text-base'>{member.cnic}</div>
        <div className='text-xs  xl:text-base'>{member.name}</div>   
        <div className='text-xs  xl:text-base'>{member.regDate}</div>
        <div className=' text-xs  xl:text-base px-4 '>{member.properties}</div>
    <div className="flex items-center">
  <span >
   <button
    onClick={() => toggleStatus(member.id)}
    className={
      member.status === "Active"
        ? "bg-green-500 text-white text-xs lg:text-sm px-2 py-1 rounded"
        : "bg-red-500 text-white text-xs lg:text-sm px-2 py-1 rounded"
    }
  >
    {member.status}
  </button>
  </span>
</div>
    {/* Action Buttons */}
          <div className="flex justify-evenly lg:gap-2  text-xs ">
            <button onClick={()=> handleView(member)} className="  px-1 py-1 lg:px-2 lg:py-1 bg-blue-500 text-white rounded hover:scale-115 transition-all duration-200"><GrFormView /></button>
            <button onClick={()=> handleEdit(member)} className=" px-1 py-1 lg:px-2 lg:py-1 bg-green-500 text-white rounded hover:scale-115 transition-all duration-200"><TbHomeEdit /></button>
            <button onClick={()=> handleDelete(member)} className=" px-1 py-1 lg:px-2 lg:py-1 bg-red-500 text-white rounded hover:scale-115 transition-all duration-200"><MdDelete /></button>
            <button onClick={()=> handlePrint(member)} className=" px-1 py-1 lg:px-2 lg:py-1 bg-yellow-500 text-white rounded hover:scale-115 transition-all duration-200"><FaPrint /></button>
    </div>

</div>
    
))}
    {(!currentData || currentData.length === 0) && (
          <div className="text-center text-xs x l:text-base py-8 text-gray-500">
            No properties found
          </div>
        )}
   </div>
    </div>
    </div>
  )
}

export default TableSection
