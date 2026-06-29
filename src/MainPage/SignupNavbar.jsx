import React from 'react'
import { Link } from "react-router-dom";

const SignupNavbar = () => {
    const NavItems = " text-xs   lg:text-base lg:font-medium !hover:underline !underline-offset-4 !decoration-yellow-400 hover:scale-105 transition-transform duration-200"
  return (
     <div className='  h-8  lg:h-11 overflow-x-auto  text-white   flex justify-around items-center bg-[#112074]'>

       <Link  to = "/"  className={NavItems}>  Dashboard</Link>
       <Link  to = "/managemember"  className={NavItems}>  Manage Member</Link>
       <Link  to = "/allottproperty"  className={NavItems}> Allott Property</Link>
       <Link  to = "/transferproperty"  className={NavItems}> Transfer Property</Link>
       <Link  to = "/updatepayment"  className={NavItems}>  UpdatePayment</Link>
       <Link  to = "/propertyhistory"  className={NavItems}> Property History</Link>
      
      
    </div>
  )
}

export default SignupNavbar
