import React from 'react'


const SearchSection = ({searchKey,setSearchKey,searchValue,setSearchValue,handleSearch , handleAdd , setShowAddModal}) => {


//  PRO CLEAN DESIGNING TECHNIQUE
    const inputStyle =" p-1 border-2 border-[#537903] px-4 text-sm bg-[#9daf77]  rounded-xl outline-none "
    const buttonStylePrimary = "border-2 rounded-xl bg-[#233494]  p-1 font-semibold text-white  w-28 hover:bg-blue-800 transition duration-200"
    const buttonStyleSecondary = "border-2 rounded-xl bg-yellow-500  p-1 font-semibold text-white  w-28 hover:bg-yellow-600 transition duration-200"


    return (
        // Main div
        <div className=' '>
            
           {/* Header */}
            <div className='h-8 bg-[#233494] flex items-center p-2 font-semibold '>
          <p className='text-white'>Manage Member - Search</p>
            </div>
           
         {/* Search Controls */}
            <div className='flex  gap-16 h-20 p-4 items-center'>
                {/* Search Key */}
                <div> 
                    <span className='mx-2 font-semibold'>SearchKey :  </span>
 <select
   className='p-1 border-2 border-[#537903] px-4 text-sm bg-[#9daf77]  rounded-xl outline-none'
  value={searchKey}
  onChange={(e) => setSearchKey(e.target.value)}
>
  <option value="membershipNo">Membership No</option>
  <option value="cnic">CNIC</option>
  <option value="name">Name</option>
</select>
</div>
            {/* Value*/}
            <div className='flex gap-3 items-center' >
                <label  className='font-semibold' >Value :</label>
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
            <div className='flex gap-8' >
                <button   onClick={handleSearch} className={buttonStylePrimary}>Search</button>
                <button onClick={handleAdd} className={buttonStyleSecondary }>Add New</button>
            </div>
            </div>

        </div>

    )
}

export default SearchSection
