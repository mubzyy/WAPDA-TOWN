import React from 'react'
import InputFeild from '../ReusableComponents/InputFeild'

const searchSectionUpdate = ({searchKey , searchedMember ,  setSearchKey , value , setValue , handleSearch  }) => {
     //  PRO CLEAN DESIGNING TECHNIQUE
    const inputStyle ="  lg:p-0.5 mx-4 lg:m-0   border-2 border-[#537903] px-3 text-sm bg-[#9daf77]  w-48 lg:w-50 rounded-xl outline-none "
    const buttonStylePrimary = "border-2 mx-20 lg:m-0 rounded-2xl lg:rounded-xl bg-[#233494]  p-1 font-semibold text-white w-16 text-xs lg:text-sm  lg:w-28 hover:bg-blue-800 transition duration-200"
  return (
  <div >
       {/* Header */}
            <div className=' h-6   text-xs bg-[#233494] lg:text-base lg:h-8  flex items-center p-2 font-semibold '>
          <p className='text-white'>Update Payments</p>
            </div>
           
         {/* Search Controls */}
           <div className='flex flex-col mt-2 lg:flex-row lg:gap-18  h-26 mb-4 lg:items-center xl:gap-10  mx-6  '>
                {/* Search Key */}
                 <div className='mb-2  lg:m-0'> 
                    <span className='mx-2 font-semibold  text-xs lg:text-base  '>SearchKey :  </span>
 <select
    className=' lg:p-0.5 border-2 border-[#537903]   px-2 w-48  lg:w-50  text-xs lg:text-sm bg-[#9daf77]  rounded-xl outline-none'
   value={searchKey}
   onChange = {(e)=>setSearchKey(e.target.value)}
>
  <option value="membershipNo ">Membership No</option>
  <option value="cnic">CNIC</option>
  <option value="name">Name</option>
</select>
</div>
            {/* Value*/}
            <div className='flex  gap-3 items-center mb-2 lg:mb-0 ' >
                <label className='font-semibold  mx-2 text-xs  lg:text-base ' >Value :</label>
                <input 
                       className={inputStyle}
                        value={value}
                         onChange = {(e)=>setValue(e.target.value)}
                       type="text"
                       placeholder='Enter Value'     
                />
            </div>
            {/* Action Button */}
            <div className='flex gap-8' >
                <button   
                onClick={handleSearch}
                className={buttonStylePrimary}>Search</button>
                
            </div>
            </div>
             {/* Member Ship Number +  Name + Father / Husband Name */}
              <div className='flex flex-col m-4  xl:m-0 space-y-1 xl:flex-row xl:items-center xl:justify- xl:gap-14 xl:mx-8  mt-8 xl:mt-0 '>
             
              {/* MemberShip Number */}
             <InputFeild 
             label= "Membership No."
             placeholder='NNNNNNNNNNNNNNNNN'
             value={searchedMember?.membershipNo}
             readOnly
             varient='Search'
             />
             {/* Name */}
             <div>
             <InputFeild 
             label= "Name :"
             placeholder='XXXXXXXXXXXXXXXXXX'
            value={searchedMember?.name}
             readOnly
             varient='Search'
             />
             </div>
             {/* Father/Husband Name */}
            <InputFeild 
             label= "Father/Husband Name :"
             placeholder='XXXXXXXXXXXXXXXXXXXXXXX'
            value={searchedMember?.fatherName}
             readOnly
             varient='Search'
             />
             
</div>
    </div>
  )
}

export default searchSectionUpdate
