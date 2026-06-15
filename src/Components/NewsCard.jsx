import React from 'react'

const NewsCard = () => {
  return (
    // Main Container
    <div className='h-68 w-94   border-2  m  mx-2 mt-4 rounded bg-[#fce2c5] flex flex-col   ' >
        {/* Upper Section */}
        <div className='h-20 border-2 border-l-0 border-r-0 border-t-0 flex  flex-col items-center justify-center bg-[#0f1c66] '>
     <h1 className=' font-bold text-2xl text-white'>News</h1>
     
     <p className='text-white' >Scrolling Mode</p>
        </div>
        {/* Lower Section */}
      
    </div>
  )
}

export default NewsCard
