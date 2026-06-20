import React from 'react'

const TotalRecordSelected = ({TotalRecords}) => {
  return (
    <div>
       <span className='font-semibold  text-xs lg:text-base text-gray-800'> Total Record Selected : </span>
       <span className='font-bold   text-lg  lg:text-xl  text-gray-900'>{TotalRecords}</span>
    </div>
  )
}

export default TotalRecordSelected
