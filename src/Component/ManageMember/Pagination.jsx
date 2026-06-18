import React from "react";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
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
  );
};

export default Pagination;