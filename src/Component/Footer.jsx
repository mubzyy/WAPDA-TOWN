import React from 'react'

const Footer = ({handleReset}) => {

  return (
    <div className='flex gap-18  mx-16 my-4 '>
      <button  className="bg-indigo-600 w-26 hover:bg-[#2242ac] text-white px-5 py-2 rounded-3xl font-medium transition-all duration-200">Main</button>
      <button  onClick={handleReset} className="bg-gray-800 w-26 hover:bg-gray-400 text-white px-5 py-2 rounded-3xl font-medium transition-all duration-200">Back</button>
    </div>
  )
}

export default Footer
