import React from 'react';
import { TbHomeEdit } from "react-icons/tb";
import { GrFormView } from "react-icons/gr";
import { FaAmazonPay } from "react-icons/fa";

const AmountDueTable = ({ members, setMembers , filterMembers , totalAmountDue  , handleEdit , handlePay}) => {
  
  return (
    // MAIN DIV
    <div className="m-4 overflow-hidden rounded-2xl">
   <div className='overflow-x-auto'>
    <div className='min-w-[1000px]'>
        {/* Header */}
      <div className="grid  grid-cols-9   bg-blue-900 xl:text-base text-xs text-white  p-2">
        <div>Sr.</div>
        <div>Membership No.</div>
        <div>Property Type</div>
        <div>Property No.</div>
        <div>Block/Sector</div>
        <div>Land Area</div>
        <div>Covered Area</div>
        <div>Amount Due</div>
        <div>Action</div>
      </div>

      {/* DATA DISPLAY */}
      <div>
        {filterMembers.map((member, index) => (
          <div
            key={member.id}
            className="grid grid-cols-9   px-2 xl:text-base text-xs bg-white space-y-2 border-b py-2 hover:bg-gray-200 transition-colors duration-200"
          >
            <div>{index + 1}</div>
            <div>{member.membershipNo}</div>
            <div>{member.propertyType}</div>
            <div>{member.propertyNumber}</div>
            <div>{member.block}</div>
            <div>{member.landArea}</div>
            <div>{member.coveredArea}</div>
            <div>{member.amountDue}</div>

            {/* BUTTON SECTION */}
            <div className="flex gap-4  lg:text-sm">
              <button className="  text-xs  xl:text-sm  px-1 xl:px-2 bg-blue-500 text-white rounded hover:scale-115 transition-all duration-200">
                <GrFormView />
              </button>

              <button  
              onClick={()=>handleEdit(member)}
              className="  text-xs  xl:text-sm px-1  py-0 xl:px-2 bg-green-500 text-white rounded hover:scale-115 transition-all duration-200">
                <TbHomeEdit />
              </button>

              <button onClick={()=>handlePay(member)} className=" px-1 py-0.5 lg:py-2 lg:px-2 bg-green-800 text-white rounded hover:scale-115 transition-all duration-200">
                <FaAmazonPay />
              </button>
            </div>
          </div>
        ))}

        {/* TOTAL AMOUNT DUE ROW */}
        <div className="grid grid-cols-9  px-6 bg-white border-b py-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div className="font-bold text-xs  xl:text-base   xl:text-right pr-2">
            Total Amount Due
          </div>

          <div className="bg-red-500  text-xs xl:text-base font-bold text-center">
            {totalAmountDue}
          </div>

          <div></div>
        </div>
      </div>
      </div>
      </div>
      

    </div>
  );
};

export default AmountDueTable;