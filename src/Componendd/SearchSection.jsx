import React from 'react'

const SearchSection = () => {
  return (
    <div>
      {/* Main div */}
      <div>
        
        {/* Header */}
        <div className="h-8 bg-[#233494] flex items-center p-2 text-sm font-semibold">
          <p className="text-white"> View Property Type</p>
        </div>

        {/* Search Controls */}
        <div className="flex gap-16 h-20 p-4 items-center">
          
          {/* Search Key */}
          <div>
            <span className="mx-2 font-semibold">Search Key:</span>

            <select
              className="p-1 border-2 border-[#537014] px-4 text-sm bg-[#9daf77] rounded-xl outline-none"
            >
              <option value="">Residential Plot</option>
              <option value="">Commercial Plot</option>
              <option value="">House</option>
              <option value="">Flat</option>
              <option value="">Shop</option>
            </select>
          </div>

          {/* Value */}
          <div className="flex gap-3 items-center">
            <label className="font-semibold">Property No.</label>

            <input
              type="text"
              placeholder="Enter Value"
              className="p-1 border-2 border-[#537014] rounded-xl outline-none px-3"
            />
          </div>

          {/* Action Button */}
          <div className="flex gap-8">
            <button
              className="bg-[#233494] text-white px-4 py-1 rounded-xl hover:opacity-90"
            >
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SearchSection
