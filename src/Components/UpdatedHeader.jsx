import React from 'react'
import WapdaLOGO from '../assets/WapdaLOGO.png'
import { MdCalendarMonth } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FaUser } from "react-icons/fa";

const UpdatedHeader = () => {

    return (
        // MAIN CONTAINER 
        <div className='h-28 bg-[#fce2c5] flex items-center px-2 justify-between' >

            {/* WAPDA LOGO + TEXT */}
            <div className="flex items-center gap-4">
                <img className='h-26 w-28 bg-white  rounded-2xl' src={WapdaLOGO} alt="WapdaLogo" />

                {/* TEXT SECTION */}
                <div className='mx-2'>
                    <p className='font-bold text-2xl text-blue-900'>
                        Rawalpindi / Islamabad WAPDA Employees
                    </p>
                    <p className='font-bold text-lg text-blue-900'>
                        Co-Operative Housing Society
                    </p>
                </div>
            </div>

            {/* BUTTON + SEARCH SECTION */}
            <div className='flex gap-6 items-center'>

                <button className='rounded-3xl text-xl text-blue-900 p-2 bg-white   hover:bg-gray-100 hover:scale-125 transition-all duration-200 cursor-pointer'>
                    <MdCalendarMonth />
                </button>

                <button className='rounded-3xl text-xl text-blue-900 p-2 bg-white  hover:bg-gray-100 hover:scale-125 transition-all duration-200 cursor-pointer'>
                    <FaBell />
                </button>

                {/* SEARCH */}
                <div className='relative'>
                    <input
                        className='bg-white p-2 pr-8 text-sm rounded-3xl w-56 outline-none'
                        type="text"
                        placeholder='Search...'
                    />

                    {/* SEARCH ICON */}
                    <div className='absolute right-3 top-1/2 -translate-y-1/2 hover:bg-gray-50 hover:scale-125 transition-all duration-200 cursor-pointer '>
                        <button>
                            <FcSearch />
                        </button>
                    </div>

                </div>
                {/* Image  */}
                <div>
                    <button className='bg-white p-2 rounded-3xl text-blue-900 text-xl  hover:bg-gray-100 hover:scale-125 transition-all duration-200 cursor-pointer'>< FaUser/></button>
                </div>
            </div>

        </div>
    )
}

export default UpdatedHeader