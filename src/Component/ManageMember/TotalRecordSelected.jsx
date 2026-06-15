import React from 'react'

const TotalRecordSelected = ({TotalRecords}) => {
  return (
    <div>
       <span className='font-semibold  text-gray-800'> Total Record Selected : </span>
       <span className='font-bold text-xl text-gray-900'>{TotalRecords}</span>
    </div>
  )
}

export default TotalRecordSelected
