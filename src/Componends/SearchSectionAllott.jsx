
import InputFeild from '../ReusableComponents/InputFeild'

const SearchSectionAllott = ({searchKey , setSearchKey , value , setValue    , searchedMember , handleSearch}) => {
    //  PRO CLEAN DESIGNING TECHNIQUE
    const inputStyle =" p-1 border-2 border-[#537903] px-4 text-sm bg-[#9daf77]  rounded-xl outline-none "
    const buttonStylePrimary = "border-2 rounded-xl bg-[#233494]  p-1 font-semibold text-white  w-28 hover:bg-blue-800 transition duration-200"
  
  return (
      // Main div
        <div className=' '>
            
           {/* Header */}
            <div className='h-8 bg-[#233494] flex items-center p-2 text-sm font-semibold '>
          <p className='text-white'>Allott Property</p>
            </div>
           
         {/* Search Controls */}
            <div className='flex  gap-16 h-20 p-4 items-center '>
                {/* Search Key */}
                <div> 
                    <span className='mx-2 font-semibold'>SearchKey :  </span>
 <select
   className='p-1 border-2 border-[#537014] px-4 text-sm bg-[#9daf77]  rounded-xl outline-none'
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
                        value={value}
                       onChange={(e) =>
                         setValue(e.target.value)
                           }
                       placeholder='Enter Value'     
                />
            </div>
            {/* Action Button */}
            <div className='flex gap-8' >
                <button    onClick={handleSearch}  className={buttonStylePrimary}>Search</button>
                
            </div>
            </div>
             {/* Member Ship Number +  Name + Father / Husband Name */}
             <div className='flex items-center justify-evenly m-8'>
             {/* MemberShip Number */}
             <InputFeild 
             label= "Membership No."
             placeholder='NNNNNNNNNNNNNNNNN'
             value={searchedMember?.membershipNo || ""}
             readOnly
             varient='Search'
             />
             {/* Name */}
             <div>
             <InputFeild 
             label= "Name :"
             placeholder='XXXXXXXXXXXXXXXXXX'
             value={searchedMember?.name || ""}
             readOnly
             varient='Search'
             />
             </div>
             {/* Father/Husband Name */}
            <InputFeild 
             label= "Father/Husband Name :"
             placeholder='XXXXXXXXXXXXXXXXXXXXXXX'
             value={searchedMember?.fatherName || ""}
             readOnly
             varient='Search'
             />
</div>
        </div>

  )
}

export default SearchSectionAllott
