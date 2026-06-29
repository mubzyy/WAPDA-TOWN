import React from "react";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const Pagination = ({ currentPage, setCurrentPage,  totalEntries , startEntry , endEntry ,  filteredMembers , totalPages , rowsPerPage, setRowsPerPage }) => {
  
   
  return (
    <div className=" flex flex-col lg:flex lg:flex-row gap-4 lg:items-center     ">
           {/* show 10 -20 rows */}
 <div className="text-center">
  <span className="text-sm font-semibold text-gray-700">Members per Page</span>
  <select 
   value={rowsPerPage}
   onChange={(e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
   }}
   
   className="text-lg text-gray-900 font-bold outline-none underline"
  >
   <option  value={5}>5</option>
   <option value={10}>10</option>
   <option value={20}>20</option>
   <option value={30}>30</option>
   <option value={40}>40</option>
  </select>
    
 </div>

 {/* SHOWING ENTERIES */}
 <span className="text-gray-700 font-semibold text-sm text-center ">Showing {startEntry}-{endEntry} of {totalEntries} Entries </span>



    <div className="flex items-center justify-center gap-4 ">

      {/* PREV */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`px-4 py-1 text-xs lg:text-base rounded-xl transition ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-400"
        }`}
      >
        <TbPlayerTrackPrevFilled />
      </button>

      {/* INFO */}
      <div className="text-sm font-medium text-gray-700">
        Page <span className="font-bold text-xs lg:text-base ">{currentPage}</span> of{" "}
        <span className="font-bold">{totalPages}</span>
      </div>

      {/* NEXT */}
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
        }
        disabled={currentPage === totalPages}
        className={`px-4 py-1 rounded-xl text-xs lg:text-base transition ${
          currentPage === totalPages
            ? "bg-gray-100  text-gray-400 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-400"
        }`}
      >
        <TbPlayerTrackNextFilled />
      </button>

    </div>

    </div>
  );
};

export default Pagination;
