import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputFeild from '../ReusableComponents/InputFeild';

const PropertyPayment = ({ editFormData, handleUpdatePayment, handleResetPaymentForm }) => {
  const {
    register,
    trigger,
    getValues,
    reset,
    clearErrors,

    formState: { errors },
  } = useForm();

  const propertyFields = [
    "PropertyType",
    "PropertyNo",
    "DateOfAllottment",
    "Block",
    "LandArea",
    "CoveredArea",
    "DimensionL",
    "DimensionW",
  ];

  const paymentFields = [
    "ChallanNo",
    "AmountReceived",
    "PaymentMode",
    "InstrumentNo",
    "PaymentDate",
    "Bank",
  ];

  const emptyFormValues = {
    PropertyType: "",
    PropertyNo: "",
    DateOfAllottment: "",
    Block: "",
    LandArea: "",
    CoveredArea: "",
    DimensionL: "",
    DimensionW: "",
    ChallanNo: "",
    AmountReceived: "",
    PaymentMode: "",
    InstrumentNo: "",
    PaymentDate: "",
    Bank: ""
  };



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

  const resetPaymentFields = () => {
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

  const handleAddPayment = async () => {
    clearErrors(propertyFields);

    const isValid = await trigger(paymentFields);
    if (!isValid) return;

    handleUpdatePayment(getValues(), "add");
    resetPaymentFields();
  };

  const handleUpdateClick = async () => {
    clearErrors(paymentFields);

    const isValid = await trigger(propertyFields);
    if (!isValid) return;

    handleUpdatePayment(getValues(), "update");
    resetPaymentFields();
  };

  const handleResetForm = () => {
    reset(emptyFormValues);
    clearErrors([...propertyFields, ...paymentFields]);
    handleResetPaymentForm();
  };

  return (
    <div>
      <p className='font-bold mx-10'>Particulars of the property for which payment is received and being updated now :</p>

      {/* MAIN CONTAINER */}
      <div className="m-8 space-y-2 mt-1">
        <form onSubmit={(e) => e.preventDefault()} >
          <div className='space-y-3 '>
            {/* Property Type */}
            <InputFeild
              label="Property Type"
              placeholder='Property Type'
              type='text'
              name="PropertyType"
              register={register}
              errors={errors}
              rules={{
                required: "Property Type is required"
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

            {/* Date Of Allotment */}
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

            {/* Block/Sector */}
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

            {/* Covered Area */}
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

            {/* Dimension L */}

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

            {/* Dimension W */}

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


            {/* PAYMENT FEILDS */}
            {/* Challan No */}
            <div className='space-y-3 mt-18'>
              <InputFeild
                label="Challan No."
                placeholder='Challan No.'
                type='text'
                name="ChallanNo"
                register={register}
                errors={errors}
                rules={{
                  required: " Challan No. is required"
                }}
                varient='basic'
              />

              {/* AMOUNT RECIEVED  */}
              <InputFeild
                label="Amount received"
                placeholder='Amount received'
                type='text'
                name="AmountReceived"
                register={register}
                errors={errors}
                rules={{
                  required: " Amount Received is required"
                }}
                varient='basic'
              />


              {/* Payment mode */}

              <InputFeild
                label="Payment Mode"
                placeholder='Payment Mode'
                type='text'
                name="PaymentMode"
                register={register}
                errors={errors}
                rules={{
                  required: " Payment Mode is required"
                }}
                varient='basic'
              />


              {/* InstrumentNo */}
              <InputFeild
                label="Instrument No."
                placeholder='Instrument No.'
                type='text'
                name="InstrumentNo"
                register={register}
                errors={errors}
                rules={{
                  required: "Instrument No. is required"
                }}
                varient='basic'
              />
            </div>

            {/* Payment Date*/}
            <InputFeild
              label="Payment Date :"
              placeholder='Payment Dt'
              type='date'
              name="PaymentDate"
              register={register}
              errors={errors}
              rules={{
                required: "Payment Dt is required"
              }}
              varient='basic'
            />

            {/* bank And Branch */}
            <InputFeild
              label="Bank & Branch :"
              placeholder='Bank & Branch'
              type='text'
              name="Bank"
              register={register}
              errors={errors}
              rules={{
                required: "Bank & Branch is required"
              }}
              varient='basic'
            />

            {/* Buttons */}

            <div className='flex justify-center gap-6 '>
              <button
                onClick={handleAddPayment}
                type="button"
                className="bg-green-600 px-6 py-2 rounded-2xl text-sm font-semibold text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Add
              </button>
              <button
                onClick={handleUpdateClick}
                type="button"
                disabled={!editFormData}
                className="bg-[#233494] px-6 py-2 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                Update
              </button>
              <button

                onClick={handleResetForm}
                type="button"
                className="bg-red-500 px-6 py-2 rounded-2xl text-sm font-semibold  hover:bg-red-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyPayment;
