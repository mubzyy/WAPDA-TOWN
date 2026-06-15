import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const PropertyType = ({handleAddProperty , editFormData , handleUpdateProperty , editMode , setEditFormData , setEdit , setEditMode   }) => {
 
  const {
    register,
    handleSubmit,
    reset,
    setValue,
  
    formState  : {errors}
  } = useForm({
    mode : "all"
  })


    // 🔥 FILL FORM WHEN EDIT CLICKED
 useEffect(() => {
  if (!editFormData) return;

  reset({
    PropertyType: editFormData.propertyType || "",
    PropertyNo: editFormData.propertyNumber || "",
    DateOfAllottment: "",
    Block: editFormData.block || "",
    LandArea: editFormData.landArea || "",
    CoveredArea: editFormData.coveredArea || "",
    DimensionL: "",
    DimensionW: "",


  });

}, [editFormData, reset]);

  // onSubmit
  const onSubmit = (data) => {

    if (editFormData) {
      // 🔥 UPDATE MODE
      handleUpdateProperty({
        propertyType: data.PropertyType,
        propertyNumber: data.PropertyNo,
        block: data.Block,
        landArea: data.LandArea,
        coveredArea: data.CoveredArea,
        ownerSince: data.DateOfAllottment,
      })
    } else {
      // 🔥 ADD MODE
      handleAddProperty({
        id: Date.now(),
        membershipNo: "M-NEW", // temporary
        propertyType: data.PropertyType,
        propertyNumber: data.PropertyNo,
        block: data.Block,
        landArea: data.LandArea,
        coveredArea: data.CoveredArea,
        ownerSince: data.DateOfAllottment,
      })
    }

    reset()
  }

  //  DELETE BUTTON  ( DELETE INPUTS )
const handleClear = () => {
  reset();
}

// handleCancel 
const handleCancel = () => {
  reset(),
  setEditFormData(null)
  setEdit(null);
  setEditMode(false)
}
 
  return (
    // Main Container
    <div className='m-8 space-y-2 mt-1'>
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
{!editMode ? (
  <div className='flex justify-center gap-4'>
    <button
      type="submit"
      className="bg-green-600 px-6 py-2 rounded-2xl text-sm font-semibold text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Add
    </button>

    <button
      type="button"
      onClick={handleClear}
      className="bg-red-500 px-6 py-2 rounded-2xl text-sm font-semibold text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Delete
    </button>
  </div>
) : (
  <div className='flex justify-center gap-4'>
    <button
      type="submit"
      className="bg-[#233494] px-6 py-2 rounded-2xl text-sm font-semibold text-white hover:bg-blue-800 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Update
    </button>

    <button 
    onClick={handleCancel}
    type='button'
    className="bg-gray-600 px-6 py-2 rounded-2xl text-sm font-semibold  hover:bg-gray-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Cancel
    </button>

    <button
    onClick={handleClear}
      type="button"
      className="bg-red-500 px-6 py-2 rounded-2xl text-sm font-semibold  hover:bg-red-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Delete
    </button>
  </div>
)}

</form>
</div>
)
}

export default PropertyType