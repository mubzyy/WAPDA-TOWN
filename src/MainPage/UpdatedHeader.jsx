import React from 'react'
import WapdaLOGO from '../assets/WapdaLOGO.png'
import { MdCalendarMonth } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FaUser } from "react-icons/fa";

const UpdatedHeader = () => {

    return (
        // MAIN CONTAINER 
        <div className='flex flex-col   lg:flex-row   lg:items-center justify-between  px-1  lg:px-2   h-26  w-full   lg:h-24 bg-[#fce2c5]   ' >

            {/* WAPDA LOGO + TEXT */}
            <div className="flex items-center gap-2 mt-2 lg:mt-0 lg:gap-4">
                <img className=' h-16  w-16  lg:h-20  lg:w-20 bg-white  rounded-2xl' src={WapdaLOGO} alt="WapdaLogo" />

                {/* TEXT SECTION */}
                <div className='   lg:mx-2'>
                    <p className='  text-sm   font-bold  lg:text-xl text-blue-900'>
                        Rawalpindi / Islamabad WAPDA Employees
                    </p>
                    <p className=' text-xs font-bold lg:text-base text-blue-900'>
                        Co-Operative Housing Society
                    </p>
                </div>
            </div>

            {/* BUTTON + SEARCH SECTION */}
            <div className='flex  px-18  lg:px-2 mb-2  lg:flex-row  items-center  gap-2  lg:gap-6 '>

                <button className='rounded-3xl  text-xs  p-1      lg:text-base text-blue-900 lg:p-2 bg-white   hover:bg-gray-100 hover:scale-125 transition-all duration-200 cursor-pointer'>
                    <MdCalendarMonth />
                </button>

                <button className='rounded-3xl   text-xs p-1  lg:text-base text-blue-900 lg:p-2 bg-white  hover:bg-gray-100 hover:scale-125 transition-all duration-200 cursor-pointer'>
                    <FaBell />
                </button>

                {/* SEARCH */}
                <div className='relative'>
                    <input
                        className=   ' w-36 p-1 text-xs   bg-white lg:p-2 pr-8 lg:text-xs rounded-3xl lg:w-56 outline-none'
                        type="text"
                        placeholder='Search...'
                    />

                    {/* SEARCH ICON */}
                    <div className='absolute  right-2 top-1/2 text-xs  lg:text-lg  lg:right-3  lg:top-1/2 -translate-y-1/2 hover:bg-gray-50 hover:scale-125 transition-all duration-200 cursor-pointer '>
                        <button>
                            <FcSearch />
                        </button>
                    </div>

                </div>
                {/* Image  */}
                <div>
                    <button className='bg-white   p-1  lg:p-2  text-xs rounded-3xl text-blue-900 lg:text-base  hover:bg-gray-100 hover:scale-125 transition-all duration-200 cursor-pointer'>< FaUser/></button>
                </div>
            </div>

        </div>
    )
}

export default UpdatedHeader