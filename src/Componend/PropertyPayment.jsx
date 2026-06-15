import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PropertyPayment = ({editFormData , handleUpdatePayment}) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  


    // FILL FORM WHEN EDIT IS CLICKED
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
   
       ChallanNo: "",
       AmountReceived: "",
       PaymentMode: "",
       InstrumentNo: "",
       PaymentDate: "",
       Bank: ""
     });
   
   }, [editFormData, reset]);

  const onSubmit = (data) => {
    handleUpdatePayment(data);
    reset({
      PropertyType: editFormData?.propertyType || "",
      PropertyNo: editFormData?.propertyNumber || "",
      Block: editFormData?.block || "",
      LandArea: editFormData?.landArea || "",
      CoveredArea: editFormData?.coveredArea || "",
      DateOfAllottment: "",
      DimensionL: "",
      DimensionW: "",
      ChallanNo: "",
      AmountReceived: "",
      PaymentMode: "",
      InstrumentNo: "",
      PaymentDate: "",
      Bank: ""
    });
  };

  return (
    <div>
 <p className='font-bold mx-10'>Particulars of the property for which payment is received and being updated now :</p>

    {/* MAIN CONTAINER */}
    <div className="m-8 space-y-2 mt-1">
      <form onSubmit={handleSubmit(onSubmit)} >
               <div className='space-y-3 mb-14'>
        {/* Property Type */}
        <div className="flex ">
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

        {/* Date Of Allotment */}
        <div className="flex">
          <label className="font-semibold w-42">Date of Allotment :</label>
          <div>
            <input
              {...register("DateOfAllottment", {
                required: "Date of Allottment is Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              type="date"
            />
            <p className="text-red-500 text-sm">
              {errors.DateOfAllottment?.message}
            </p>
          </div>
        </div>

        {/* Block/Sector */}
        <div className="flex">
          <label className="font-semibold w-42">Block/Sector :</label>
          <div>
            <input
              {...register("Block", {
                required: "Block/Sector is required",
              })}
              placeholder="Block/Sector"
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
            />
            <p className="text-red-500 text-sm">
              {errors.Block?.message}
            </p>
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
              placeholder="Land Area"
              type="text"
            />
            <p className="text-red-500 text-sm">
              {errors.LandArea?.message}
            </p>
          </div>
        </div>

        {/* Covered Area */}
        <div className="flex">
          <label className="font-semibold w-42">Covered Area :</label>
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
                required: "Dimension L is Required",
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
        <div className="flex">
          <label className="font-semibold w-42">Dimension W :</label>
          <div>
            <input
              {...register("DimensionW", {
                required: "Dimension W is Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              placeholder="Dimension W"
              type="text"
            />
            <p className="text-red-500 text-sm">
              {errors.DimensionW?.message}
            </p>
          </div>
        </div>
  </div> 
  {/* PAYMENT FEILDS */}
          {/* Challan No */}
          <div className='space-y-3'>
        <div className="flex items-center">
          <label className="font-semibold w-42">Challan No.  :</label>
          <div>
            <input
              {...register("ChallanNo", {
                required: "Challan Number is Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              placeholder="Challan No."
              type="text"
            />
            <p className="text-red-500 text-sm">
              {errors.ChallanNo?.message}
            </p>
          </div>
      </div>
          {/* AMOUNT RECIEVED  */}
          <div className='flex'>
 <label  className='font-semibold w-42'>Amount received</label>
     <div>
         <input
              {...register("AmountReceived", {
                required: "Amount Reveived is Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              placeholder="Amount Received"
              type="text"
            />
            <p className="text-red-500 text-sm">
              {errors.AmountReceived?.message}
            </p>
     </div>
        </div>
  
 {/* Payment mode */}
        <div className="flex">
          <label className="font-semibold w-42">Dimension L :</label>
          <div>
            <input
              {...register("PaymentMode", {
                required: "Payment mode is Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              placeholder="Payment Mode"
              type="text"
            />
            <p className="text-red-500 text-sm">
              {errors.PaymentMode?.message}
            </p>
          </div>
        </div>
         {/* InstrumentNo */}
        <div className="flex">
          <label className="font-semibold w-42">Instrument No.:</label>
          <div>
            <input
              {...register("InstrumentNo", {
                required: "Instrument No. is Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              placeholder="Instrument No."
              type="text"
            />
            <p className="text-red-500 text-sm">
              {errors.InstrumentNo?.message}
            </p>
          </div>
        </div>
         {/* Payment Date*/}
        <div className="flex">
          <label className="font-semibold w-42">Payment Date :</label>
          <div>
            <input
              {...register("PaymentDate", {
                required: "Payment Dt is Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              placeholder="Payment Dt"
              type="date"
            />
            <p className="text-red-500 text-sm">
              {errors.PaymentDate?.message}
            </p>
          </div>
        </div>
         {/* bank And Branch */}
        <div className="flex">
          <label className="font-semibold w-42">Bank & Branch :</label>
          <div>
            <input
              {...register("Bank", {
                required:  " Bank and Branch   Required",
              })}
              className="outline-none bg-[#9daf77] rounded-lg px-2 py-1 text-sm w-80"
              placeholder="Bank & Branch"
              type="text"
            />
            <p className="text-red-500 text-sm">
              {errors.Bank?.message}
            </p>
          </div>
        </div>
 </div> 
 <div className='flex justify-center gap-6 '>
  <button
      onClick={()=>handleUpdatePayment()}
      type="submit"
      className="bg-green-600 px-6 py-2 rounded-2xl text-sm font-semibold text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Add
    </button>
   <button
      type="submit"
      className="bg-[#233494] px-6 py-2 rounded-2xl text-sm font-semibold text-white hover:bg-blue-800 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Update
    </button>
 <button
  
      type="button"
      className="bg-red-500 px-6 py-2 rounded-2xl text-sm font-semibold  hover:bg-red-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
    >
      Delete
    </button>
    </div>
      </form>
    </div>
        </div> 
  );
};

export default PropertyPayment;