import React from 'react'
import {useState} from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
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
  {label:"Property Type", value:propertyDetails?.propertyType},
  {label:"Property Number", value:propertyDetails?.propertyNumber},
  {label:"Date Of Allotment", value:propertyDetails?.dateOfAllotment},
  {label:"Block/Sector", value:propertyDetails?.block},
  {label:"Land Area", value:propertyDetails?.landArea},
  {label:"Covered Area", value:propertyDetails?.coveredArea},
  {label:"Dimension (L)", value:propertyDetails?.length},
  {label:"Dimension (W)", value:propertyDetails?.width},
]
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
    alert("Search Property First");
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
  setErrors({
    ...errors,
    ...validationErrors,
  });

  return;
}
}

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


  return (
    <div>
        <NotificationBar />
        <Header />
        <Navbar />
        <div className="p-4 w-full min-h-screen border">
        <div className='border min-h-screen '>
            <div className="border-b-2">
                 <p className='w-full text-white bg-blue-700 px-4'>Transfer Property</p>
                </div>
    <div>

      <label className='p-2 '>Property Type:</label>
    <select
  value={searchData.propertyType}
  className='border m-2'
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
)}

      <label>Property No:</label>
    <input
      type="text"
      // placeholder="Property No"
      className='border m-2'
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

    <button onClick={handleSearch} className='bg-green-600 text-white px-4 py-2 rounded'>
      Search
    </button>

    {/* Property Details */}
    
  <div className='flex flex-col ml-4 w-1/3 space-y-3 '>
    {
  propertyFields.map(field => (
    <div key={field.label} className='grid grid-cols-2 w-full '>
      <label className='col-span-1'>{field.label}</label>

      <input
        value={field.value || ""}
        readOnly
        className='border col-span-1'
      />
    </div>
  ))
}

  </div>


  </div>
   {/* Transfer Details  */}
    <div>
  <label>Transfer Date:</label>
  <input
    type="date"
    value={transferData.transferDate}
    className='border m-2'
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
    <label>Transfer Fee Paid:</label>
  <input
    type="number"
    // placeholder="Transfer Fee"
    value={transferData.transferFee}
    className='no-spinner border m-2'
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

  <label>Payment Mode:</label>
  <select
    value={transferData.paymentMode}
    className='border m-2'  
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
    <label>Instrument No:</label>
  <input
    type="text"
    // placeholder="Instrument No"
    value={transferData.instrumentNo}
    className='border m-2'
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

  <div>
    <h2 className='font-bold text-xl'>PROPERTY TO BE TRANSFERRED FROM</h2>

    <p>Membership: {currentOwner?.membershipNo || ""}</p>
    <p>Name: {currentOwner?.name || ""}</p>
    <p>Father Name: {currentOwner?.fatherName || ""}</p>
    <p>CNIC: {currentOwner?.cnic || ""}</p>
  </div>

<div className='flex flex-col ml-2 w-1/2 '>
  <p className='font-bold text-xl'>PROPERTY TO BE TRANSFERRED TO</p>
  <div className='flex flex-row items-center px-4'>
  <label className='w-40'>Membership No:</label>
  <input
    type="text"
    // placeholder="Membership No"
    disabled={!propertyDetails}
    value={newOwner.membershipNo}
    className='border'
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
   <button onClick={handleMemberSearch} className=' m-2 bg-green-600 text-white px-4 py-2 rounded'>
    Search 
    </button>
    </div>
    <div className='flex flex-row items-center px-4'>
  <label className='w-40'>Name:</label>
  <input
    type="text"
    // placeholder="Name"
    disabled={!propertyDetails}
    value={newOwner.name}
    className='border border-b-0'
    readOnly
  />
  </div>
  <div className='flex flex-row items-center px-4'>
  <label className='w-40'>Father Name:</label>
  <input
    type="text"
    // placeholder="Father Name"
    disabled={!propertyDetails}
    value={newOwner.fatherName}
    className='border border-b-0'
    readOnly
  />
  </div>
  <div className='flex flex-row items-center px-4'>
  <label className='w-40'>CNIC:</label>
  <input
    type="text"
    // placeholder="CNIC"
    disabled={!propertyDetails}
    value={newOwner.cnic}
    className='border'
    readOnly
  />
  </div>
</div>
<div>
  <h2>Enter PIN to Transfer the Property</h2>

  <input
    type="password"
    disabled={!propertyDetails}
    placeholder="Enter PIN"
    value={pin}
    onChange={(e) => setPin(e.target.value)}
  />
  {errors.pin && (
  <p className="text-red-500 text-sm">
    {errors.pin}
  </p>
)}
  <p>and click Transfer Property</p>
</div>
<button>
  Cancel Process
</button>
<button onClick={handleTransfer}>
  Transfer Property
</button>
      </div>  
      </div>
  </div>
  )
}
export default TransferProperty