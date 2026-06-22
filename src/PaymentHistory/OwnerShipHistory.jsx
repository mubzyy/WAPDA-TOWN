
const OwnerShipHistory = ({property}) => {
  const ownershipHistory = property?.ownershipHistory || [];
  const paymentHistory = property?.paymentHistory || [];

  return ( 
    <div  className= '  m-2 flex  flex-col space-y-10   xl:space-y-0  xl:flex-row xl:justify-around'>
        {/* OWNERSHIP HISTORY */}
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
        {/* UpperPart */}
        <div className='border-2 rounded-2xl  text-xs xl:text-base overflow-hidden  '>
            {/* header */}
        <div className='bg-[#060c30] flex  justify-center text-white font-bold'>
        OWNERSHIP HISTORY
        </div>
         <div className="grid grid-cols-4 text-sm xl:text-base  gap-10 bg-[#111c57] text-white font-semibold p-3 ">
<div>Date</div>
<div>Membership No.</div>
<div>Owner Name</div>
<div>Mode</div>
          </div>
          {/* ENTRIES */}
          <div className="bg-white">
            {ownershipHistory.length === 0 ? (
              <div className="p-3 text-center text-gray-500 border-b">
                Search user to view ownership history
              </div>
            ) : ownershipHistory.map((property , index)=>(
            <div
            key={index}
             className="grid grid-cols-4 p-3  border-b hover:bg-[#f5f5f5] transition-colors duration-200"
            >
       <div>{property.date}</div>
       <div>{property.membershipNo}</div>
       <div>{property.ownerName}</div>
       <div>{property.mode}</div>
      
            </div>

            ))}

          </div>
</div>
</div>
</div>

<div>
  
        {/* PAYEMNET HISTORY */}
        {/* UPPERPART */} 
        <div>
          <div className="overflow-x-auto">
          <div className="min-w-[600px]">
         <div className='border-2 text-xs  xl:text-base   text-center rounded-2xl overflow-hidden'>
            {/* header */}
        <div className='bg-[#060c30] text-white font-bold'>
        PAYMENT HISTORY
        </div>
              <div className="grid grid-cols-3 text-sm  xl:text-base gap-10 bg-[#111c57] text-white font-semibold p-3 ">
<div>Date</div>
<div>Payment Head/Account</div>
<div>Amount Paid</div>
          </div>
          {/* entries */}
          <div className="bg-white">
            {paymentHistory.length === 0 ? (
              <div className="p-3 text-center text-gray-500 border-b">
                Search user to view payment history
              </div>
            ) : paymentHistory.map((payment, index) => (
              <div
                key={index}
                className="grid grid-cols-3 p-3  border-b hover:bg-[#f5f5f5] transition-colors duration-200"
              >
                <div>{payment.date}</div>
                <div>{payment.paymentHead}</div>
                <div>{payment.amountPaid}</div>
              </div>
            ))}
          </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default OwnerShipHistory
