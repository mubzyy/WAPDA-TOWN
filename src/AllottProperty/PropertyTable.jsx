import { TbHomeEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const PropertyTable = ({filterProperty  , handleEdit , handleDeleteModal}) => {
  const withUnit = (value, unit) => [value, unit].filter(Boolean).join(" ")

  return (
    <div className="m-6 overflow-hidden rounded-2xl shadow-sm  ">
      {/* TITLE */}
      <div className=" px-2 xl:px-4 py-2 font-semibold text-xs xl:text-sm text-gray-700  bg-yellow-500  ">
        Properties already in the name of this member
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
      {/* HEADER */}
      <div className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]  xl:text-base text-xs bg-blue-900 text-white font-semibold p-2  xl:p-3   ">
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
      <div >
        {filterProperty?.map((member, index) => (
          <div
            key={member.id}
            className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]   p-3  xl:text-base text-xs border-b odd:bg-white even:bg-gray-200 hover:bg-[#f5f5f5] transition-colors duration-200"
          >
            <div>{index + 1}</div>
            <div>{member.membershipNo}</div>
            <div>{member.propertyType}</div>
            <div className="mx-4">{member.propertyNumber}</div>
            <div>{member.block}</div>
            <div>{withUnit(member.landArea, member.landAreaUnit)}</div>
            <div>{withUnit(member.coveredArea, member.coveredAreaUnit)}</div>
            <div>{member.ownerSince}</div>
            <div className="flex gap-2">
              {/* EDIT BUTTON */}
              <button 
                type="button"
                onClick={()=> handleEdit(member) }  
                className=" px-1 lg:px-2  py-0 lg:py-1 bg-green-500 text-white  text-xs xl:text-base rounded hover:scale-115 transition-all duration-200"
                title="Edit Property"
              >
                <TbHomeEdit />
              </button>
              
              {/* DELETE ROW BUTTON - Deletes from table */}
              <button 
                type="button" 
               
                onClick={()=>  handleDeleteModal(member)}  
                className="  px-1 lg:px-2  py-0 lg:py-1 bg-orange-500 text-white rounded hover:scale-115 transition-all duration-200"
             
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        ))}

        {(!filterProperty || filterProperty.length === 0) && (
          <div className="text-center text-xs x l:text-base py-8 text-gray-500">
            No properties found
          </div>
        )}
      </div>
      </div>
    </div>
    </div>
  );
};

export default PropertyTable;
