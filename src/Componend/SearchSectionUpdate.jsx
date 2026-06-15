import React from 'react'

const searchSectionUpdate = ({searchKey , setSearchKey , value , setValue , handleSearch  }) => {
     //  PRO CLEAN DESIGNING TECHNIQUE
    const inputStyle =" p-1 border-2 border-[#537903] px-4 text-sm bg-[#9daf77]  rounded-xl outline-none "
    const buttonStylePrimary = "border-2 rounded-xl bg-[#233494]  p-1 font-semibold text-white  w-28 hover:bg-blue-800 transition duration-200"
  return (
    <div>
       {/* Header */}
            <div className='h-8 bg-[#233494] flex items-center text-sm p-2 font-semibold '>
          <p className='text-white'>Update Payments</p>
            </div>
           
         {/* Search Controls */}
            <div className='flex  gap-16 h-20 p-4 items-center '>
                {/* Search Key */}
                <div> 
                    <span className='mx-2 font-semibold'>SearchKey :  </span>
 <select
   className='p-1 border-2 border-[#537014] px-4 text-sm bg-[#9daf77]  rounded-xl outline-none'
   value={searchKey}
   onChange = {(e)=>setSearchKey(e.target.value)}
>
  <option value="membershipNo ">Membership No</option>
  <option value="cnic">CNIC</option>
  <option value="name">Name</option>
</select>
</div>
            {/* Value*/}
            <div className='flex gap-3 items-center' >
                <label  className='font-semibold' >Value :</label>
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
             <div className='flex items-center'>
             {/* MemberShip Number */}
             <div className='m-8'>
             <label className='font-semibold'> Membership No : </label>
             <input 
             className='mx-4 outline-none bg-[#9daf77] rounded-lg px-2  py-1 text-sm'
             type= "text" 
             placeholder='NNNNNNNNNNNNNNNNNNNNNNNNNN'
             
             />
             </div>
             {/* Name */}
             <div>
                <label  className='font-semibold' >Name :</label>
                <input 
             className='mx-4 outline-none bg-[#9daf77] rounded-lg px-2  py-1 text-sm w-80'
             type= "text" 
             placeholder='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
             />
             </div>
             {/* Father/Husband Name */}
              <div>
                <label  className='font-semibold' >Father/Husband Name :</label>
                <input 
             className='mx-4 outline-none bg-[#9daf77] rounded-lg px-2  py-1 text-sm w-80'
             type= "text" 
             placeholder=' XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX '
             />
             </div>
</div>
    </div>
  )
}

export default searchSectionUpdate
