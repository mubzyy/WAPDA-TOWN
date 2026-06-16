
const OwnerShipHistory = ({property}) => {
  const ownershipHistory = property?.ownershipHistory || [];
  const paymentHistory = property?.paymentHistory || [];

  return (
    <div  className='flex  justify-around'>
        {/* OWNERSHIP HISTORY */}
        {/* UpperPart */}
        <div className='border-2 rounded-2xl overflow-hidden  '>
            {/* header */}
        <div className='bg-[#060c30] flex  justify-center text-white font-bold'>
        OWNERSHIP HISTORY
        </div>
         <div className="grid grid-cols-4 text-sm  gap-10 bg-[#111c57] text-white font-semibold p-3 ">
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
  
        {/* PAYEMNET HISTORY */}
        {/* UPPERPART */} 
         <div className='border-2  text-center rounded-2xl overflow-hidden'>
            {/* header */}
        <div className='bg-[#060c30] text-white font-bold'>
        PAYMENT HISTORY
        </div>
              <div className="grid grid-cols-3 text-sm  gap-10 bg-[#111c57] text-white font-semibold p-3 ">
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
  )
}

export default OwnerShipHistory
