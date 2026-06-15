import { useForm } from 'react-hook-form'


const PendingDues = () => {
    const {
        register,
        handleSubmit,
        formState : {errors}
    } = useForm({
        mode : "all"
    })
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
     // Main Container
    <div className='m-8 space-y-2 mt-6 grid grid-cols-2 '>
        <div>
 <form onSubmit={handleSubmit(onSubmit)} className='
 space-y-3' >
      {/* Property Type */}
     <div className="flex">
  <label className="font-semibold w-42">Property Type :</label>

  <div>
    <input
      {...register("PropertyType", {
        required: "Property Type is Required",
      })}
      className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
      placeholder="Property Type"
      type="text"
    />

    <p className="text-red-500 text-sm">
      {errors.PropertyType?.message}
    </p>
  </div>
</div>

      {/* Property Number */}
    <div className="flex">
  <label className="font-semibold w-42">Property No. :</label>

  <div>
    <input
      {...register("PropertyNo", {
        required: "Property No. is Required",
      })}
      className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
      placeholder="Property No."
      type="text"
    />

    <p className="text-red-500 text-sm">
      {errors.PropertyNo?.message}
    </p>
  </div>
</div>

      {/* Date Of AllotMent */}
     <div className="flex">
  <label className="font-semibold w-42">Date of Allottment :</label>

  <div>
    <input
      {...register("DateOfAllottment", {
        required: "Date of Allottment is Required",
      })}
      className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
      placeholder="Date"
      type="Date"
    />

    <p className="text-red-500 text-sm">
      {errors.DateOfAllottment?.message}
    </p>
  </div>
</div>

{/* BLOCK/SECTOR */}
<div className='flex'>
  <label className='font-semibold w-42' >Block/Sector</label>
  <div>
    <input 
    {...register("Block" , { 
      required : "Block/Sector is required"
    })}
    placeholder='Block/Sector'
     className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
    />
    <p className='text-red-500 text-sm'>{errors.Block?.message}</p>
  </div>
</div>

      {/* Land Area */}
     <div className="flex">
  <label className="font-semibold w-42">Land Area :</label>

  <div>
    <input
      {...register("LandArea", {
        required: "Land Area is Required",
      })}
      className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
      placeholder="Property Type"
      type="text"
    />

    <p className="text-red-500 text-sm">
      {errors.LandArea?.message}
    </p>
  </div>
</div>

      {/* Covered Area */}
<div className="flex">
  <label className="font-semibold w-42">Property Type :</label>

  <div>
    <input
      {...register("CoveredArea", {
        required: "Covered Area is Required",
      })}
      className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
      placeholder="Covered Area"
      type="text"
    />

    <p className="text-red-500 text-sm">
      {errors.CoveredArea?.message}
    </p>
  </div>
</div>

      {/* Dimension L */}
     <div className="flex">
  <label className="font-semibold w-42">Dimension L :</label>

  <div>
    <input
      {...register("DimensionL", {
        required: "Property Type is Required",
      })}
      className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
      placeholder="Dimension L"
      type="text"
    />

    <p className="text-red-500 text-sm">
      {errors.DimensionL?.message}
    </p>
  </div>
</div>

         {/* Dimension W */}
 <div className='flex'>
  <label className="font-semibold w-42" >Dimension W</label>
  <div>
  <input 
    {...register("DimensionW" , {
     required : "Dimension W is required"
    })}
    className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
      placeholder="Dimension W"
      type="text"
  />
   <p className='text-red-500 text-sm'>{errors.DimensionW?.message}</p>
  </div>
  
 </div>

 
</form>
</div>
{/* PENDING DUES IF ANY  */}
<div className='border-2  rounded-2xl bg-red-600' >
    {/* UPPER PART  */}
    <div className=' flex justify-center items-center border-b-2 h-8'>
 <p className='text-white text-sm  font-bold '>PENDING DUES, IF ANY</p>
    </div>
    {/* LOWER  PART  */}
    <div className='m-10 text-white space-y-4'>
        <div className='flex  justify-between'>
        <p>1.Orignal Amount Due</p>
        <p>99,999,999,999,999</p>
        </div>
        <div className='flex  justify-between'>
        <p>2.Amount Due Since</p>
        <p>DD/MM/YYYY</p>
        </div>
       <div className='flex  justify-between'>
        <p>3.Period of Default</p>
        <p>MONTHS AND DAYS</p>
        </div>
        <div className='flex  justify-between'>
        <p>4.Default/Surcharge/Penalty/Fine</p>
        <p>99,999,999,999</p>
        </div>
     <div className='flex  justify-between'>
        <p>5.Total Amount Due</p>
        <p className='border-2 p-2 text-sm'>99,999,999,999</p>
        </div>
    </div>

</div>
</div>
  )
}

export default PendingDues
