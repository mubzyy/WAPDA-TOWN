import React from 'react'


const SearchSection = ({searchKey,setSearchKey,searchValue,setSearchValue,handleSearch , handleAdd , setShowAddModal}) => {


//  PRO CLEAN DESIGNING TECHNIQUE
    const inputStyle ="  lg:p-0.5 mx-4 lg:m-0   border-2 border-[#537903] px-3 text-sm bg-[#9daf77]  w-48 lg:w-50 rounded-xl outline-none "
    const buttonStylePrimary = "border-2  rounded-2xl lg:rounded-xl bg-[#233494]  p-1 font-semibold text-white w-18 text-xs lg:text-sm  lg:w-24 hover:bg-blue-800 transition duration-200"
    const buttonStyleSecondary = "border-2  rounded-2xl lg:rounded-xl bg-yellow-500  p-1 font-semibold text-white w-18  text-xs lg:text-sm  lg:w-24 hover:bg-yellow-600 transition duration-200"


    return (
        // Main div
        <div className=' '>
            
           {/* Header */}
            <div className=' h-6   text-xs lg:text-base lg:h-8 bg-[#233494] flex items-center p-2 font-semibold '>
          <p className='text-white'>Manage Member - Search</p>
            </div>
           
         {/* Search Controls */}
            <div className='flex flex-col lg:flex-row md:flex-row md:items-center   h-26 mb-4 lg:items-center lg:gap-8  p-4  '>
                {/* Search Key */}
                <div className='mb-2  md-0 lg:m-0'> 
                    <span className='mx-2 font-semibold  text-xs lg:text-base  '>SearchKey :  </span>
 <select
   className=' lg:p-0.5 border-2 border-[#537903] px-2 w-48 md:w-32  lg:w-50  text-xs lg:text-sm bg-[#9daf77]  rounded-xl outline-none'
  value={searchKey}
  onChange={(e) => setSearchKey(e.target.value)}
>
  <option value="membershipNo">Membership No</option>
  <option value="cnic">CNIC</option>
  <option value="name">Name</option>
</select>
</div>
            {/* Value*/}
            <div className='flex  gap-3 items-center mb-2 lg:mb-0 ' >
                <label  className='font-semibold  mx-2 text-xs   lg:text-base ' >Value :</label>
                <input 
                       className={inputStyle}
                       type="text"
                        value={searchValue}
                       onChange={(e) =>
                         setSearchValue(e.target.value)
                           }
                       placeholder='Enter Value'     
                />
            </div>
            {/* Action Button */}
            <div className='flex ml-20 lg:mb-0  gap-2 md:gap-4 lg:gap-6' >
                <button   onClick={handleSearch} className={buttonStylePrimary}>Search</button>
                <button onClick={handleAdd} className={buttonStyleSecondary }>Add New</button>
            </div>
            </div>

        </div>

    )
}

export default SearchSection
