import React from "react";
import { TbHomeEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const PropertyTable = ({filterProperty  , handleDeleteRow , handleEdit}) => {

  return (
    <div className="m-10 overflow-hidden rounded-2xl shadow-sm ">
      {/* TITLE */}
      <div className="px-4 py-2 font-semibold text-sm text-gray-700  ">
        Properties already in the name of this member
      </div>
      {/* HEADER */}
      <div className="grid grid-cols-9   bg-blue-900 text-white font-semibold p-3 ">
        <div>Sr.</div>
        <div>Membership No.</div>
        <div>Property Type</div>
        <div>Property No.</div>
        <div>Block/Sector</div>
        <div>Land Area</div>
        <div>Covered Area</div>
        <div>Owner Since</div>
        <div>Action</div>
      </div>

      {/* BODY */}
      <div className="bg-white">
        {filterProperty?.map((member, index) => (
          <div
            key={member.id}
            className="grid grid-cols-9 p-3  border-b hover:bg-[#f5f5f5] transition-colors duration-200"
          >
            <div>{index + 1}</div>
            <div>{member.membershipNo}</div>
            <div>{member.propertyType}</div>
            <div>{member.propertyNumber}</div>
            <div>{member.block}</div>
            <div>{member.landArea}</div>
            <div>{member.coveredArea}</div>
            <div>{member.ownerSince}</div>
            <div className="flex gap-2">
              {/* EDIT BUTTON */}
              <button 
                type="button"
                onClick={()=> handleEdit(member) }  
                className="px-2 py-1 bg-green-500 text-white rounded hover:scale-115 transition-all duration-200"
                title="Edit Property"
              >
                <TbHomeEdit />
              </button>
              
              {/* DELETE ROW BUTTON - Deletes from table */}
              <button 
                type="button" 
               
                onClick={()=> {handleDeleteRow(member.id); console.log("delete Button") }}  
                className="px-2 py-1 bg-orange-500 text-white rounded hover:scale-115 transition-all duration-200"
             
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ))}

        {(!filterProperty || filterProperty.length === 0) && (
          <div className="text-center py-8 text-gray-500">
            No properties found
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyTable;