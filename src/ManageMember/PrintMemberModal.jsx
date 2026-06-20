import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrintMemberModal = ({ selectedMember, setShowPrintModal }) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Member Details",
  });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      
      <div className="bg-white w-[400px] rounded-3xl shadow-lg p-5">

        {/* Printable Area */}
        <div ref={printRef} className="text-sm space-y-3">

          <h1 className="text-lg font-semibold border-b pb-2">
            Member Details
          </h1>

          <div >
         <span className="font-medium px-2 ">Name:</span>
            {selectedMember?.name}
          </div>

          <div>
            <span className="font-medium px-2 ">CNIC:</span>
            {selectedMember?.cnic}
          </div>

          <div>
           <p className="text-blue-600" >  <span  className="font-medium px-2 text-black">Membership No:</span>
           {selectedMember?.membershipNo}</p>
          </div>

          <div>
            <span className="font-medium px-2">Status:</span>
            {selectedMember?.status}
          </div>

        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-5">

          <button
            onClick={() => setShowPrintModal(false)}
            className="px-4 py-1.5 text-sm border rounded-3xl hover:bg-gray-200"
          >
            Close
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-1.5 text-sm bg-blue-700 text-white rounded-3xl hover:bg-gray-800"
          >
            Print
          </button>

        </div>

      </div>
    </div>
  );
};

export default PrintMemberModal;