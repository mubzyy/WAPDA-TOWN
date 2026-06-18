import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import InputFeild from '../ReusableComponents/InputFeild';


const PropertyType = ({ handleAddProperty, editFormData, handleUpdateProperty, editMode, setEditFormData, setEdit, setEditMode }) => {

  const {
    register,
    handleSubmit,
    reset,


    formState: { errors }
  } = useForm({
    mode: "all"
  })


  // ðŸ”¥ FILL FORM WHEN EDIT CLICKED
  useEffect(() => {
    if (!editFormData) return;

    reset({
      PropertyType: editFormData.propertyType || "",
      PropertyNo: editFormData.propertyNumber || "",
      DateOfAllottment: "",
      Block: editFormData.block || "",
      LandArea: editFormData.landArea || "",
      LandAreaUnit: editFormData.landAreaUnit || "",
      CoveredArea: editFormData.coveredArea || "",
      CoveredAreaUnit: editFormData.coveredAreaUnit || "",
      DimensionL: editFormData.dimensionL || "",
      DimensionLUnit: editFormData.dimensionLUnit || "",
      DimensionW: editFormData.dimensionW || "",
      DimensionWUnit: editFormData.dimensionWUnit || "",


    });

  }, [editFormData, reset]);

  // onSubmit
  const onSubmit = (data) => {

    if (editFormData) {
      // ðŸ”¥ UPDATE MODE
      handleUpdateProperty({
        propertyType: data.PropertyType,
        propertyNumber: data.PropertyNo,
        block: data.Block,
        landArea: data.LandArea,
        landAreaUnit: data.LandAreaUnit,
        coveredArea: data.CoveredArea,
        coveredAreaUnit: data.CoveredAreaUnit,
        dimensionL: data.DimensionL,
        dimensionLUnit: data.DimensionLUnit,
        dimensionW: data.DimensionW,
        dimensionWUnit: data.DimensionWUnit,
        ownerSince: data.DateOfAllottment,
      })
    } else {
      // ðŸ”¥ ADD MODE
      handleAddProperty({
        id: Date.now(),
        membershipNo: "M-NEW", // temporary
        propertyType: data.PropertyType,
        propertyNumber: data.PropertyNo,
        block: data.Block,
        landArea: data.LandArea,
        landAreaUnit: data.LandAreaUnit,
        coveredArea: data.CoveredArea,
        coveredAreaUnit: data.CoveredAreaUnit,
        dimensionL: data.DimensionL,
        dimensionLUnit: data.DimensionLUnit,
        dimensionW: data.DimensionW,
        dimensionWUnit: data.DimensionWUnit,
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
    <div className=' m-4 lg:m-8     mt-1'>
      <form onSubmit={handleSubmit(onSubmit)} className='
   space-y-1 lg:space-y-3' >
        {/* Property Type */}
        <InputFeild
          label="Property Type"
          placeholder='Property Type'
          type='text'
          name="PropertyType"
          register={register}
          errors={errors}
          rules={{
            required: "Property No. is required"
          }}
          varient='basic'
        />

        {/* Property Number */}
        <InputFeild
          label="Property No."
          placeholder='Property No.'
          type='text'
          name="PropertyNo"
          register={register}
          errors={errors}
          rules={{
            required: "Property No. is required"
          }}
          varient='basic'
        />


        {/* Date Of AllotMent */}
        <InputFeild
          label="Date of Allottment"
          placeholder='Date of Allottment'
          type='Date'
          name="DateOfAllottment"
          register={register}
          errors={errors}
          rules={{
            required: "Date of Allottment is required"
          }}
          varient='basic'
        />

        {/* BLOCK/SECTOR */}
        <InputFeild
          label="Block/Sector"
          placeholder='Block/Sector'
          type='text'
          name="Block"
          register={register}
          errors={errors}
          rules={{
            required: "Block/Sector is required"
          }}
          varient='basic'
        />

        {/* Land Area */}
        <div className=' flex lg:flex-row  flex-col  gap-1   lg:space-y-0'>
          <div>
            <InputFeild
              label="Land Area"
              placeholder='Land Area'
              type='text'
              name="LandArea"
              register={register}
              errors={errors}
              rules={{
                required: "Land Area is required"
              }}
              varient='basic'
            />
          </div>

          <div>
            <InputFeild

              placeholder='Unit'
              type='text'
              name="LandAreaUnit"
              register={register}
              errors={errors}
              rules={{
                required: "Unit is required"
              }}
              varient='unit'
            />
          </div>
        </div>

        {/* Covered Area */}
        <div className=' flex lg:flex-row  flex-col  gap-1   lg:space-y-0'>

          <InputFeild
            label="Covered Area"
            placeholder='Covered Area'
            type='text'
            name="CoveredArea"
            register={register}
            errors={errors}
            rules={{
              required: "Covered Area is required"
            }}
            varient='basic'
          />

          <InputFeild
            placeholder='Unit'
            type='text'
            name="CoveredAreaUnit"
            register={register}
            errors={errors}
            rules={{
              required: "Unit is required"
            }}
            varient='unit'
          />

        </div>

        {/* Dimension L */}
        <div className="flex flex-col sm:flex-row gap-2">
          <InputFeild
            label="Dimension L"
            placeholder='Dimension L'
            type='text'
            name="DimensionL"
            register={register}
            errors={errors}
            rules={{
              required: "Dimension L is required"
            }}
            varient='basic'
          />


          <InputFeild
          label= ""
            placeholder='Unit'
            type='text'
            name="DimensionLUnit"
            register={register}
            errors={errors}
            rules={{
              required: "Unit is required"
            }}
            varient='unit'
          />

        </div>

        {/* Dimension W */}
        <div className=' flex lg:flex-row  flex-col  gap-1   lg:space-y-0'>

          <InputFeild
            label="Dimension W"
            placeholder='Dimension W'
            type='text'
            name="DimensionW"
            register={register}
            errors={errors}
            rules={{
              required: "Dimension W is required"
            }}
            varient='basic'
          />



          <InputFeild
            label= ""
            placeholder='Unit'
            type='text'
            name="DimensionWUnit"
            register={register}
            errors={errors}
            rules={{
              required: "Unit is required"
            }}
            varient='unit'
          />

        </div>

        {/* EDIT MODE */}
        {!editMode ? (
          <div className='flex  lg:justify-center gap-4 mt-8 lg:mt-0 '>
            <button
              type="submit"
              className="bg-green-600 text-xs  px-4  lg:px-6  py-2 rounded-2xl lg:text-sm font-semibold text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Add
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="bg-red-500 px-4  text-xs   lg:px-6   py-2 rounded-2xl lg:text-sm font-semibold text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className='flex  justify-start lg:justify-center mt-8 lg:mt-0 gap-4'>
            <button
              type="submit"
              className="bg-[#233494] px-4 lg:px-6  py-1 lg:py-2 rounded-2xl  text-xs lg:text-sm font-semibold text-white hover:bg-blue-800 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Update
            </button>

            <button
              onClick={handleCancel}
              type='button'
              className="bg-gray-600  px-4 lg:px-6 py-2 rounded-2xl text-xs lg:text-sm font-semibold  hover:bg-gray-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Cancel
            </button>

            <button
              onClick={handleClear}
              type="button"
              className="bg-red-500  px-4 py-1 lg:px-6 lg:py-2 rounded-2xl text-xs lg:text-sm font-semibold  hover:bg-red-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
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
