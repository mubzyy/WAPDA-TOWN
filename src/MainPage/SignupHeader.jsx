import React, { useState } from 'react'
import WapdaLOGO from '../assets/WapdaLOGO.png'
import { GiHamburgerMenu } from "react-icons/gi";
import SignupDrawer from './SignupDrawer';

const SignupHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    // MAIN CONTAINER
    <div className='flex items-center lg:flex-row lg:items-center justify-between px-1 lg:px-2 h-18 w-full lg:h-24 bg-[#fce2c5]'>
      {/* WAPDA LOGO + TEXT */}
      <div className="flex items-center gap-2 lg:mt-0 lg:gap-4">
        <img className='h-14 w-14 lg:h-20 lg:w-20 bg-white rounded-2xl' src={WapdaLOGO} alt="WapdaLogo" />

        {/* TEXT SECTION */}
        <div className='lg:mx-2'>
          <p className='hidden lg:block text-sm font-bold lg:text-xl text-blue-900'>
            Rawalpindi / Islamabad WAPDA Employees
          </p>
          <p className='lg:hidden text-sm font-bold lg:text-2xl text-blue-900'>
            WAPDA Employees Society
          </p>
          <p className='hidden lg:block text-xs font-semibold lg:text-sm text-blue-900'>
            Co-Operative Housing Society
          </p>
          <p className='lg:hidden text-xs font-bold lg:text-lg text-blue-900'>
            WAPDA CHS
          </p>
        </div>
      </div>

      {/* HAMBURGER */}
      <div className='lg:hidden pr-2 text-blue-900'>
        <button type="button" onClick={openDrawer} className='text-2xl'>
          <GiHamburgerMenu />
        </button>
      </div>

      <SignupDrawer isOpen={isOpen} onClose={closeDrawer} />
    </div>
  )
}

export default SignupHeader
