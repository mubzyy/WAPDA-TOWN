import InputFeild from "../ReusableComponents/InputFeild"
const PendingDues = ({ property }) => {
  const formatAmount = (amount) => Number(amount || 0).toLocaleString()

  return (
    // Main Container
    <div className='m-8 space-y-8 xl:space-y-2 mt-6 grid xl:grid-cols-2  grid-cols-1 '>
      <div>
        <form className=' space-y-3' >

          {/* Property Type */}
          <InputFeild
            label="PropertyType"
            value={property?.propertyType}
            placeholder="Property Type"
            readOnly
            varient="basic"

          />
          {/* Property Number */}
          <InputFeild
            label="Property No."
            value={property?.propertyNumber}
            placeholder="Property No."
            readOnly
            varient="basic"
          />

          {/* Date Of AllotMent */}
          <InputFeild
            label="Date of Allottment"
            value={property?.dateOfAllotment}
            placeholder="Date of Allotment"
            readOnly
            varient="basic"
          />

          {/* BLOCK/SECTOR */}
          <InputFeild
            label="Block/Sector"
            value={property?.blockSector}
            placeholder="Block/Sector"
            readOnly
            varient="basic"

          />

          {/* Land Area */}
          <InputFeild
            label="Land Area"
            placeholder="Land Area"
            value={property?.landArea}
            readOnly
            varient="basic"

          />

          {/* Covered Area */}
          <InputFeild
            label="Covered Area"
            placeholder="Covered Area"
            value={property?.coveredArea}
            readOnly
            varient="basic"
          />

          {/* Dimension L */}
          <InputFeild
            label="Dimension L"
            placeholder="Dimension L"
            value={property?.length}
            readOnly
            varient="basic"

          />

          {/* Dimension W */}
          <InputFeild
            label="Dimension W"
           placeholder="Dimension W"
            value={property?.width}
            readOnly
            varient="basic"

          />


        </form>
      </div>
      {/* PENDING DUES IF ANY  */}
      <div className='border-2  rounded-2xl  lg:rounded-2xl bg-red-600 text-xs lg:text-base' >
        {/* UPPER PART  */}
        <div className=' flex justify-center items-center border-b-2 h-8'>
          <p className='text-white text-xs lg:text-sm  font-bold '>PENDING DUES, IF ANY</p>
        </div>
        {/* LOWER  PART  */}
        <div className= ' m-6  text-white space-y-2'>
       <div className="flex flex-col lg:flex-row lg:justify-between">
            <p >1.Orignal Amount Due</p>
            <p >{property ? formatAmount(property.originalAmountDue) : "0"}</p>
          </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
            <p>2.Amount Due Since</p>
            <p>{property?.amountDueSince || "0"}</p>
          </div>
     <div className="flex flex-col lg:flex-row lg:justify-between">
            <p>3.Period of Default</p>
            <p>{property ? `${property.defaultMonths} Months` : "0"}</p>
          </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
            <p>4.Default/Surcharge/Penalty/Fine</p>
            <p>{property ? formatAmount(property.penalty) : "0"}</p>
          </div>
    <div className="flex flex-col lg:flex-row lg:justify-between">
            <p>5.Total Amount Due</p>
            <p className='border-2 rounded-lg p-2   '>{property ? formatAmount(property.totalAmountDue) : "0"}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PendingDues
