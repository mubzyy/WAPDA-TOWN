import React from 'react'

const ImportantEvents = () => {
    const events = [
        {
            id:1,
            date: "26-04-2026",
            event:"Meeting"
        },
        {
            id:2,
            date: "26-04-2026",
            event:"Meeting"
        },
        {
            id:3,
            date: "26-04-2026",
            event:"Meeting"
        },
        {
            id:4,
            date: "26-04-2026",
            event:"Meeting"
        },
        {
            id:5,
            date: "26-04-2026",
            event:"Meeting"
        },
        {
            id:6,
            date: "26-04-2026",
            event:"Meeting"
        },
        {
            id:7,
            date: "26-04-2026",
            event:"Meeting"
        },
        {
            id:8,
            date: "26-04-2026",
            event:"PARTY"
        },
        {
            id:9,
            date: "26-04-2026",
            event:"Auction"
            
        },

    ];
  return (
    <div className='w-200px border border-black bg-[#e6c5a5] p-4'>
      <div className='border border-black text-center'>
        <p className='text-lg font-semibold mb-2'>Important Events</p>
      </div>
      <div className='border border-black mt-2 p-2 text-center'>
        <p className='text-lg font-semibold'>June, 2026</p>
      </div>
        <div className='flex justify-between mt-6 p-2'>
            <div className='w-22 border border-black flex items-center justify-center'>
                <p className='text-lg font-semibold '>Date</p>
            </div>
            <div className='w-42 border border-black flex items-center justify-center'>
                <p className='text-lg font-semibold '>Event</p>
            </div>
        </div>
        <div className='border border-black mt-2 p-2 h-[470px] overflow-y-auto'>
            {events.map((event) => (
                <div key={event.id} className='flex justify-between mt-2 p-2'>
                   <div className='h-6 w-22 border border-black flex items-center justify-center'>
                        <p className='text-sm mt-2 mb-2'>{event.date}</p>
                    </div>
                    <div className='h-6 w-36 border border-black flex items-center justify-center'>
                        <p className='text-sm mt-2 mb-2'>{event.event}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImportantEvents
