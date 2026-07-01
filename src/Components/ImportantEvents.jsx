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
    <div className='flex h-full w-full flex-col rounded-xl bg-[#e6c5a5] p-3 shadow-sm sm:p-4 border border-black'>
      <div className='border border-black text-center shadow-[inset_0_-1px_0_rgba(0,0,0,0.16)]'>
        <p className='py-2 text-lg font-bold leading-tight text-slate-950 sm:text-xl lg:text-lg'>Important Events</p>
      </div>
      <div className='mt-2 border border-black p-2 text-center'>
        <p className='text-base font-bold text-slate-950 sm:text-lg'>June, 2026</p>
      </div>
        <div className='mt-4 grid grid-cols-[1fr_1.15fr] gap-2 p-1 sm:p-2'>
            <div className='min-h-10 border border-black flex items-center justify-center px-2'>
                <p className='text-sm font-bold sm:text-base'>Date</p>
            </div>
            <div className='min-h-10 border border-black flex items-center justify-center px-2'>
                <p className='text-sm font-bold sm:text-base'>Event</p>
            </div>
        </div>
        <div className='mt-2 max-h-[360px] flex-1 overflow-y-auto border border-black p-2 sm:max-h-[420px] lg:max-h-none'>
            {events.map((event) => (
                <div key={event.id} className='grid grid-cols-[1fr_1.15fr] gap-2 py-1.5'>
                   <div className='min-h-9 border border-black flex items-center justify-center px-2 text-center'>
                        <p className='text-sm font-medium leading-tight sm:text-[15px] lg:text-sm xl:text-[15px]'>{event.date}</p>
                    </div>
                    <div className='min-h-9 border border-black flex items-center justify-center px-2 text-center'>
                        <p className='text-sm font-medium leading-tight sm:text-[15px] lg:text-sm xl:text-[15px]'>{event.event}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImportantEvents
