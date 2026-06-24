const SearchSection = ({
  propertyType,
  setPropertyType,
  propertyNumber,
  setPropertyNumber,
  handleSearch,
}) => {
  return (
    <div>
      {/* Main div */}
      <div>
        
        {/* Header */}
        <div className=' h-6   text-xs bg-[#233494] lg:text-base lg:h-8  flex items-center p-2 font-semibold '>
          <p className="text-white"> View Property History</p>
        </div>

        {/* Search Controls */}
         <div className='flex flex-col mt-2 lg:flex-row lg:gap-18  h-26 mb-4 lg:items-center xl:gap-42  mx-2  '>
          
          {/* Search Key */}
       <div className='mb-2  lg:m-0'> 
              <span className='mx-2 font-semibold  text-xs lg:text-base  '>Property Type :</span>

            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
             className=' lg:p-0.5 border-2 border-[#537903] mx-2 px-2 w-48  lg:w-50  text-xs lg:text-sm bg-[#9daf77]  rounded-xl outline-none'
            >
              <option value="">All Types</option>
              <option value="Residential Plot">Residential Plot</option>
              <option value="Commercial Plot">Commercial Plot</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Shop">Shop</option>
            </select>
          </div>

          {/* Value */}
                     <div className='flex mx-0.5  gap-3 items-center mb-2 lg:mb-0 ' >
            <label className='font-semibold  mx-2 text-xs  lg:text-base '>Property No.</label>

            <input
              value={propertyNumber}
              onChange={(e) => setPropertyNumber(e.target.value)}
              type="text"
              placeholder="Enter Value"
              className=" lg:p-0.5 mx-2 lg:m-0   border-2 border-[#537903] px-3 text-sm bg-[#9daf77]  w-48 lg:w-50 rounded-xl outline-none"
            />
          </div>

          {/* Action Button */}
          <div className="flex gap-8">
            <button
              onClick={handleSearch}
              className="border-2 mx-26 lg:m-0 rounded-2xl lg:rounded-xl bg-[#233494]  p-1 font-semibold text-white w-16 text-xs lg:text-base  lg:w-28 hover:bg-blue-800 transition duration-200"
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
