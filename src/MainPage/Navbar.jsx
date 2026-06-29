import React from 'react'

const Navbar = () => {
    const NavItems = "text-gray-100 font-medium hover:underline underline-offset-4 decoration-yellow-400 hover:scale-105 transition-transform duration-200"
  return (
    <div className=' h-8 text-xs lg:text-base overflow-x-auto whitespace-nowrap  gap-6 lg:h-11   flex justify-around items-center bg-[#112074]'>
   
       <a className={NavItems}>Home</a>
       <a className={NavItems}>Society Map</a>
       <a className={NavItems}>Society Management</a>
       <a className={NavItems}>Plots for Sale/Action</a>
       <a className={NavItems}>Application Forms</a>
       <a className={NavItems}>About Us</a>
       <a className={NavItems}>Contact Us</a>
       <a className={NavItems}>Feedback/Suggestions</a>
  
    </div>
  )
}

export default Navbar
