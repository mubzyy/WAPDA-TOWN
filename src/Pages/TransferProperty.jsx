import {useState} from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import InputField from '../Components/InputField'
import NotificationBar from '../Components/NotificationBar'

const TransferProperty = () => {
  const properties = [
  {
    propertyType: "Residential Plot",
    propertyNo: "101",
    propertyNumber: "P-101",
    dateOfAllotment: "2025-01-10",
    block: "A",
    landArea: "10 Marla",
    coveredArea: "2500 Sq Ft",
    length: "35",
    width: "70",
    owner: {
      membershipNo: "M-001",
      name: "Ali Khan",
      fatherName: "Ahmed Khan",
      cnic: "35202-1234567-1"
    }
  },

  {
    propertyType: "Commercial Plot",
    propertyNo: "202",
    propertyNumber: "C-202",
    dateOfAllotment: "2024-05-12",
    block: "B",
    landArea: "5 Marla",
    coveredArea: "1200 Sq Ft",
    length: "25",
    width: "50",
    owner: {
      membershipNo: "M-002",
      name: "Umar Younas",
      fatherName: "Younas Khan",
      cnic: "35202-1234568-1"
    }
  },

  {
    propertyType: "House",
    propertyNo: "303",
    propertyNumber: "H-303",
    dateOfAllotment: "2023-09-01",
    block: "C",
    landArea: "1 Kanal",
    coveredArea: "4500 Sq Ft",
    length: "50",
    width: "90",
    owner: {
      membershipNo: "M-003",
      name: "Ahmed Ali",
      fatherName: "Saleem Ali",
      cnic: "35202-1234569-1"
    }
  }
];
const initialTransferData = {
  transferDate: "",
  transferFee: "",
  paymentMode: "",
  instrumentNo: "",
};

const initialNewOwner = {
  membershipNo: "",
  name: "",
  fatherName: "",
  cnic: "",
};

 const [propertyDetails, setPropertyDetails] = useState(null);


const propertyFields = [
  {
    label: "Property Type",
    name: "propertyType",
    value: propertyDetails?.propertyType,
    readOnly: true,
  },
  {
    label: "Property Number",
    name: "propertyNumber",
    value: propertyDetails?.propertyNumber,
    readOnly: true,
  },
  {
    label: "Date Of Allotment",
    name: "dateOfAllotment",
    value: propertyDetails?.dateOfAllotment,
    readOnly: true,
  },
  {
    label: "Block/Sector",
    name: "block",
    value: propertyDetails?.block,
    readOnly: true,
  },
  {
    label: "Land Area",
    name: "landArea",
    value: propertyDetails?.landArea,
    unit: "Kanal"
},
{
  label: "Covered Area",
  name: "coveredArea",
  value: propertyDetails?.coveredArea,
  unit: "Sq Ft"
},
{
    label: "Dimension (L)",
    name: "length",
    value: propertyDetails?.length,
    unit: "Feet"
},
{
    label: "Dimension (W)",
    name: "width",
    value: propertyDetails?.width,
    unit: "Feet"
}
];
  const [searchData, setSearchData] = useState({
  propertyType: "",
  propertyNo: "",
});

const [errors, setErrors] = useState({});
const [currentOwner, setCurrentOwner] = useState(null);

const [transferData, setTransferData] = useState(initialTransferData);

const [newOwner, setNewOwner] = useState(initialNewOwner);

const [pin, setPin] = useState("");
const members = [
  {
    membershipNo: "M-004",
    name: "Usman",
    fatherName: "Rasheed",
    cnic: "12345"
  },

  {
    membershipNo: "M-005",
    name: "Bilal",
    fatherName: "Naseer",
    cnic: "67890"
  }
];

const handleSearch = () => {

  const validationErrors = {};

  if (!searchData.propertyType) {
    validationErrors.propertyType =
      "Please select property type";
  }

  if (!searchData.propertyNo) {
    validationErrors.propertyNo =
      "Please enter property number";
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  const foundProperty = properties.find(
    (property) =>
      property.propertyType === searchData.propertyType &&
      property.propertyNo === searchData.propertyNo
  );

  if (!foundProperty) {

    setPropertyDetails(null);
    setCurrentOwner(null);

    setErrors({
      propertyNo: "Property not found",
    });

    return;
  }

  setErrors({});

    setNewOwner(initialNewOwner);
    setTransferData(initialTransferData);
    setPin("");

    setPropertyDetails(foundProperty);
    setCurrentOwner(foundProperty.owner);
};

const handleTransfer = () => {
  const validationErrors = {};

  if(!propertyDetails){
    validationErrors.propertyNo = "Please search and select a property first";
    setErrors(validationErrors);
    return;
  }

  if (!newOwner.membershipNo) {
  validationErrors.membershipNo =
    "Please select a member";
}

  if (!transferData.transferDate) {
  validationErrors.transferDate =
    "Please enter transfer date";
}
if (!transferData.transferFee) {
  validationErrors.transferFee =
    "Please enter transfer fee";
}
if (!transferData.paymentMode) {
  validationErrors.paymentMode =
    "Please select payment mode";
}
if (!transferData.instrumentNo) {
  validationErrors.instrumentNo =
    "Please enter instrument number";
}
  if (!pin) {
  validationErrors.pin =
    "Please enter PIN";
}
if (Object.keys(validationErrors).length > 0) {
  setErrors(validationErrors);
  return;
}

const updatedOwner = {
  membershipNo: newOwner.membershipNo,
  name: newOwner.name,
  fatherName: newOwner.fatherName,
  cnic: newOwner.cnic,
};

setCurrentOwner(updatedOwner);
setPropertyDetails({
  ...propertyDetails,
  owner: updatedOwner,
});
setNewOwner(initialNewOwner);
setTransferData(initialTransferData);
setPin("");
setErrors({});
window.alert("Property transferred successfully.");
}

const handleCancel = () => {
  setSearchData({
    propertyType: "",
    propertyNo: "",
  });
  setPropertyDetails(null);
  setCurrentOwner(null);
  setTransferData(initialTransferData);
  setNewOwner(initialNewOwner);
  setPin("");
  setErrors({});
};

const handleMemberSearch = () => {
  const validationErrors = {};

if (!searchData.propertyType) {
  validationErrors.propertyType =
    "Please select property type";
}

if (!searchData.propertyNo) {
  validationErrors.propertyNo =
    "Please enter property number";
}

if (Object.keys(validationErrors).length > 0) {
  setErrors(validationErrors);
  return;
}
  const member = members.find(
    m => m.membershipNo === newOwner.membershipNo
  );

  if (!member) {

    setErrors({
      ...errors,
      membershipNo: "Member not found",
    });

    return;
  }

  setErrors({
    ...errors,
    membershipNo: "",
  });

  setNewOwner(member);
};
const InputStyle = "min-h-9 sm:min-h-10 bg-[#9daf77] rounded-lg px-3 py-1.5 text-[15px] sm:text-base outline-none w-full sm:w-80 no-spinner disabled:opacity-70"
const compactInputStyle = "min-h-9 sm:min-h-10 bg-[#9daf77] rounded-lg px-3 py-1.5 text-[15px] sm:text-base outline-none w-full sm:w-52 no-spinner disabled:opacity-70"
const labelStyle = "font-semibold text-slate-950 sm:w-52 sm:shrink-0"
const sectionTitleStyle = "text-lg font-bold text-slate-950 sm:text-xl"
const primaryButtonStyle = "min-h-10 rounded-md bg-blue-900 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-800 disabled:opacity-60"

  return (
    
    <div className="min-h-screen text-[15px] text-slate-950 sm:text-base"> 
        <NotificationBar />
        <Header />
        <Navbar />
        <div >
        <div className='m-2 min-h-screen overflow-hidden rounded-lg border bg-[#ebf1de] shadow-sm sm:m-4 sm:rounded-2xl'>
            <div>
                 <p className='flex min-h-10 w-full items-center bg-blue-900 px-4 text-lg font-bold text-white sm:text-xl'>Transfer Property</p>
                </div>
                {/* PARENT DIV */}
    <div className='m-3 space-y-6 sm:m-6 sm:space-y-8 lg:m-8'>
        {/* SEARCH SECTION */}
    <div className="flex flex-col gap-3 rounded-lg border border-slate-300 bg-white/30 p-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:p-4">

      <label className='font-semibold text-slate-950'>Property Type:</label>
      <div>
    <select
  value={searchData.propertyType}
  className = {InputStyle}
  
  onChange={(e) => {

  setSearchData({
    ...searchData,
    propertyType: e.target.value,
  });

  setErrors({
    ...errors,
    propertyType: "",
  });

}}
>
  <option value="">Select Property Type</option>

  <option value="Residential Plot">
    Residential Plot
  </option>

  <option value="Commercial Plot">
    Commercial Plot
  </option>

  <option value="House">
    House
  </option>

  <option value="Flat">
    Flat
  </option>

  <option value="Shop">
    Shop
  </option>
</select>
{errors.propertyType && (
  <p className="text-red-500 text-sm">
    {errors.propertyType}
  </p>
)}</div>

      <label className='font-semibold text-slate-950'>Property No:</label>
      <div className="flex w-full flex-col gap-1 sm:w-auto sm:items-center sm:gap-0">
    <input
      type="text"
      // placeholder="Property No"
      className={InputStyle}
      value={searchData.propertyNo}
      onChange={(e) => {

  setSearchData({
    ...searchData,
    propertyNo: e.target.value,
  });

  setErrors({
    ...errors,
    propertyNo: "",
  });

}}
    />
      {errors.propertyNo && (
  <p className="text-red-500 text-sm">
    {errors.propertyNo}
  </p>
)}
</div>

    <button onClick={handleSearch} className={primaryButtonStyle + ' sm:w-36'}>
      Search
    </button>
    </div>
    {/* Property Details */}
    <div className="rounded-lg border border-slate-300 bg-white/20 p-3 sm:p-4">
  <p className={sectionTitleStyle + " mb-3"}>Property Details</p>
  <div className="ml-0 flex w-full max-w-full flex-col space-y-3 sm:ml-2">
  {propertyFields.map((field) => (
    <div key={field.name} className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">

      <InputField
        label={field.label}
        name={field.name}
        value={field.value || ""}
        readOnly={field.readOnly}
        varient="basic"
      />

      {field.unit && (
        <InputField
          value={field.unit}
          readOnly
          varient="unit"
        />
      )}

    </div>
  ))}
  
  </div>
    </div>
   {/* Transfer Details  */}
    <div className="flex flex-col gap-3 rounded-lg border border-slate-300 bg-white/20 p-3 sm:flex-row sm:flex-wrap sm:items-center sm:p-4">
  <p className={sectionTitleStyle + " w-full"}>Transfer Details</p>
  <label className='font-semibold text-slate-950'>Transfer Date:</label>
  <input
    type="date"
    value={transferData.transferDate}
    className={InputStyle + ' sm:w-56'}
    onChange={(e) =>
      setTransferData({
        ...transferData,
        transferDate: e.target.value,
      })
    }
  />
  {errors.transferDate && (
  <p className="text-red-500 text-sm">
    {errors.transferDate}
  </p>
)}
    <label className='font-semibold text-slate-950'>Transfer Fee Paid:</label>
  <input
    type="number"
    // placeholder="Transfer Fee"
    value={transferData.transferFee}
    className={InputStyle + ' sm:w-56'}
    onChange={(e) =>
      setTransferData({
        ...transferData,
        transferFee: e.target.value,
      })
    }
  />{errors.transferFee && (
  <p className="text-red-500 text-sm">
    {errors.transferFee}
  </p>
)}
    <label className='font-semibold text-slate-950'>Payment Mode:</label>
  <select
    value={transferData.paymentMode}
    className={InputStyle + ' sm:w-60'}
    onChange={(e) =>
      setTransferData({
        ...transferData,
        paymentMode: e.target.value,
      })
    }
  >
    <option value="">Select Payment Mode</option>
    <option value="Cash">Cash</option>
    <option value="Cheque">Cheque</option>
    <option value="Bank Transfer">Bank Transfer</option>
  </select>{errors.paymentMode && (
  <p className="text-red-500 text-sm">
    {errors.paymentMode}
  </p>
)}
    <label className='font-semibold text-slate-950'>Instrument No:</label>
  <input
    type="text"
    // placeholder="Instrument No"
    value={transferData.instrumentNo}
    className={InputStyle + ' sm:w-60'}
    onChange={(e) =>
      setTransferData({
        ...transferData,
        instrumentNo: e.target.value,
      })
    }
  />{errors.instrumentNo && (
  <p className="text-red-500 text-sm">
    {errors.instrumentNo}
  </p>
)}
</div>
   {/* Property Transferer Details */}
<div className="ml-0 flex w-full flex-col gap-4 rounded-lg border border-slate-300 bg-white/20 p-3 sm:ml-0 sm:p-4 lg:flex-row lg:justify-between">
  <div className="flex flex-1 flex-col gap-3">

  <p className={sectionTitleStyle}>
    PROPERTY TO BE TRANSFERRED FROM
  </p>
      
  <div className="flex flex-col gap-1 px-0 sm:flex-row sm:items-center sm:px-2">
    
    <label className={labelStyle}>
      Membership No:
    </label>
    <input
      type="text"
      value={currentOwner?.membershipNo || ""}
      readOnly
      className={InputStyle}
    />
  </div>

  <div className="flex flex-col gap-1 px-0 sm:flex-row sm:items-center sm:px-2">
    <label className={labelStyle}>
      Name:
    </label>
    <input
      type="text"
      value={currentOwner?.name || ""}
      readOnly
      className={InputStyle}
    />
  </div>

  <div className="flex flex-col gap-1 px-0 sm:flex-row sm:items-center sm:px-2">
    <label className={labelStyle}>
      Father Name:
    </label>
    <input
      type="text"
      value={currentOwner?.fatherName || ""}
      readOnly
      className={InputStyle}
    />
  </div>

  <div className="flex flex-col gap-1 px-0 sm:flex-row sm:items-center sm:px-2">
    <label className={labelStyle}>
      CNIC:
    </label>
    <input
      type="text"
      value={currentOwner?.cnic || ""}
      readOnly
      className={InputStyle}
    />
  </div>
      </div>
  <div className="mt-0 flex h-36 w-36 shrink-0 items-center justify-center border border-black bg-slate-100 lg:mt-8">

  {currentOwner?.photo ? (

    <img
      src={currentOwner.photo}
      alt="Current Owner"
      className="w-full h-full object-cover"
    />

  ) : (

    <span className="text-gray-500 flex items-center justify-center h-full">
      No Photo
    </span>

  )}

</div>
</div>
   {/* Property Transferee Details */}
<div className='ml-0 flex w-full max-w-4xl flex-col gap-3 rounded-lg border border-slate-300 bg-white/20 p-3 sm:ml-0 sm:p-4'>
  <p className={sectionTitleStyle}>PROPERTY TO BE TRANSFERRED TO</p>
  <div className='flex flex-col gap-2 px-0 sm:flex-row sm:items-center sm:px-2'>
  <label className={labelStyle}>Membership No:</label>
  <input
    type="text"
    // placeholder="Membership No"
    disabled={!propertyDetails}
    value={newOwner.membershipNo}
    className={InputStyle}
    onChange={(e) =>
      setNewOwner({
        ...newOwner,
        membershipNo: e.target.value,
      })
    }
  />
  {errors.membershipNo && (
  <p className="text-red-500 text-sm">
    {errors.membershipNo}
  </p>
)}
   <button onClick={handleMemberSearch} className={primaryButtonStyle + ' sm:ml-4'}>
    Search 
    </button>
    </div>
    <div className='flex flex-col gap-1 px-0 sm:flex-row sm:items-center sm:px-2'>
  <label className={labelStyle}>Name:</label>
  <input
    type="text"
    // placeholder="Name"
    disabled={!propertyDetails}
    value={newOwner.name}
    className={InputStyle}
    readOnly
  />
  </div>
  <div className='flex flex-col gap-1 px-0 sm:flex-row sm:items-center sm:px-2'>
  <label className={labelStyle}>Father Name:</label>
  <input
    type="text"
    // placeholder="Father Name"
    disabled={!propertyDetails}
    value={newOwner.fatherName}
    className={InputStyle}
    readOnly
  />
  </div>
  <div className='flex flex-col gap-1 px-0 sm:flex-row sm:items-center sm:px-2'>
  <label className={labelStyle}>CNIC:</label>
  <input
    type="text"
    // placeholder="CNIC"
    disabled={!propertyDetails}
    value={newOwner.cnic}
    className={InputStyle}
    readOnly
  />
  </div>
</div>
    {/* PIN */}
<div className="max-w-full rounded-lg border border-slate-300 bg-white/20 p-3 sm:p-4">
  <h2 className={sectionTitleStyle}>Enter PIN to Transfer the Property</h2>

  <input
    type="password"
    disabled={!propertyDetails}
    placeholder="Enter PIN"
    value={pin}
    onChange={(e) => setPin(e.target.value)}
    className={compactInputStyle + ' mt-2'}
  />
  {errors.pin && (
  <p className="text-red-500 text-sm">
    {errors.pin}
  </p>
)}
  <p className="mt-1 text-sm text-gray-600">
    and click Transfer Property
  </p>
</div>
{/* BUTTONS */}
<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"> 
<button type="button" className='min-h-10 rounded-md bg-red-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-red-700' onClick={handleCancel}>
  Cancel Process
</button>
<button type="button" className='min-h-10 rounded-md bg-green-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-green-700' onClick={handleTransfer}>
  Transfer Property
</button>
  </div>
    </div>
      </div>  
      </div>
  </div>
  )
}
export default TransferProperty
