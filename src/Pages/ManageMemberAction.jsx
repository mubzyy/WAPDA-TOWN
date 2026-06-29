import { useEffect, useState } from "react";
import InputField from "../Components/InputField";
import NotificationBar from "../Components/NotificationBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const requiredFields = [
  ["membershipNo", "Membership No"],
  ["membershipDate", "Membership Date"],
  ["name", "Name"],
  ["fatherName", "Father/Husband's Name"],
  ["employeeStatus", "Employee Status"],
  ["domicile", "Domicile"],
  ["designation", "Designation"],
  ["bps", "BPS"],
  ["identityType", "Identity Type"],
  ["identityNumber", "Identity Number"],
  ["permanentAddress", "Permanent Address"],
  ["permanentDistrict", "Permanent District"],
  ["presentAddress", "Present Address"],
  ["presentDistrict", "Present District"],
  ["serviceIdCardNo", "Service ID Card No"],
  ["presentPlaceOfPosting", "Present Place Of Posting"],
  ["contactNo1", "Contact No 1"],
  ["contactNo2", "Contact No 2"],
  ["contactNo3", "Contact No 3"],
  ["email", "E-Mail Address"],
  ["nomineeName", "Nominee Name"],
  ["nomineeFatherName", "Nominee Father/Husband's Name"],
  ["nomineeIdentityType", "Nominee Identity Type"],
  ["nomineeIdentityNumber", "Nominee Identity Number"],
  ["nomineeRelationship", "Relationship"],
  ["paymentMade", "Payment Made"],
  ["currency", "Currency"],
  ["paymentMode", "Payment Mode"],
];
const numberFields = [
  "membershipNo",
  "bps",
  "contactNo1",
  "contactNo2",
  "contactNo3",
  "paymentMade",
];
const nameFields = [
  "name",
  "fatherName",
  "nomineeName",
  "nomineeFatherName",
];
const employeeStatusOptions = [
  "DISCO",
  "GENCO",
  "NTDC",
  "WAPDA Serving",
  "RETIRED",
  "GENERAL PUBLIC",
  "GOVT. SERVANT",
];
const identityTypeOptions = [
  "CNIC",
  "Passport No.",
  "NTN",
];
const currencyOptions = [
  "PKR",
  "USD",
  "GBP",
  "EUR",
];
const paymentModeOptions = [
  "Cash",
  "Cheque",
  "Pay Order",
  "Demand Draft",
  "Bank Transfer",
];
const attachmentTypeOptions = [
  "CNIC Copy",
  "Passport Copy",
  "NTN Certificate",
  "Photograph",
  "Payment Receipt",
  "Allotment Letter",
  "Other",
];
const makeError = (message) => ({ message });


const ManageMemberAction = () => {
   const [memberData, setMemberData] = useState({
    membershipNo: "",
    membershipDate: "",
    name: "",
    fatherName: "",
    employeeStatus: "",
    domicile: "",
    designation: "",
    bps: "",
    identityType: "",
    identityNumber: "",
    permanentAddress: "",
    permanentDistrict: "",
    presentAddress: "",
    presentDistrict: "",
    serviceIdCardNo: "",
    presentPlaceOfPosting: "",
    contactNo1: "",
    contactNo2: "",
    contactNo3: "",
    email: "",

    nomineeName: "",
    nomineeFatherName: "",
    nomineeIdentityType: "",
    nomineeIdentityNumber: "",
    nomineeRelationship: "",

    paymentMade: "",
    paymentMode: "",
    paymentInstrumentNo: "",
    currency: "",
    bank: "",
  });

  const [memberPhoto, setMemberPhoto] = useState(null);
  const [memberPhotoPreview, setMemberPhotoPreview] = useState("");

  const [nomineePhoto, setNomineePhoto] = useState(null);
  const [nomineePhotoPreview, setNomineePhotoPreview] = useState("");

  const [attachments, setAttachments] = useState([]);

  const [attachmentData, setAttachmentData] = useState({
  attachmentType: "",
  attachmentFile: null,
  });

  const [records, setRecords] = useState([]);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!memberPhoto) {
      setMemberPhotoPreview("");
      return undefined;
    }

    const previewUrl = URL.createObjectURL(memberPhoto);
    setMemberPhotoPreview(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [memberPhoto]);

  useEffect(() => {
    if (!nomineePhoto) {
      setNomineePhotoPreview("");
      return undefined;
    }

    const previewUrl = URL.createObjectURL(nomineePhoto);
    setNomineePhotoPreview(previewUrl);

    return () => URL.revokeObjectURL(previewUrl);
  }, [nomineePhoto]);

  const setFieldError = (fieldName, message = "") => {
  setErrors((prev) => {
    const updatedErrors = { ...prev };

    if (message) {
      updatedErrors[fieldName] = makeError(message);
    } else {
      delete updatedErrors[fieldName];
    }

    return updatedErrors;
  });
};

  const validateMemberForm = () => {
  const nextErrors = {};

  requiredFields.forEach(([fieldName, label]) => {
    const fieldValue = memberData[fieldName];

    if (fieldValue === undefined || String(fieldValue).trim() === "") {
      nextErrors[fieldName] = makeError(`${label} is required`);
    }
  });

  numberFields.forEach((fieldName) => {
    const fieldValue = memberData[fieldName];

    if (String(fieldValue).trim() && Number(fieldValue) <= 0) {
      nextErrors[fieldName] = makeError("Enter a value greater than 0");
    }
  });

  nameFields.forEach((fieldName) => {
    const fieldValue = memberData[fieldName];

    if (String(fieldValue).trim() && !/^[a-zA-Z\s.'-]+$/.test(fieldValue)) {
      nextErrors[fieldName] = makeError("Use letters only");
    }
  });

  if (
    memberData.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(memberData.email)
  ) {
    nextErrors.email = makeError("Enter a valid email address");
  }

  if (
    memberData.membershipDate &&
    new Date(memberData.membershipDate) > new Date()
  ) {
    nextErrors.membershipDate = makeError("Date cannot be in the future");
  }

  if (
    memberData.currency.trim() &&
    !currencyOptions.includes(memberData.currency)
  ) {
    nextErrors.currency = makeError("Select a valid currency");
  }

  if (
    memberData.bps.trim() &&
    (Number(memberData.bps) < 1 || Number(memberData.bps) > 22)
  ) {
    nextErrors.bps = makeError("BPS must be between 1 and 22");
  }

  ["contactNo1", "contactNo2", "contactNo3"].forEach((fieldName) => {
    const fieldValue = memberData[fieldName].trim();

    if (fieldValue && !/^\d{7,15}$/.test(fieldValue)) {
      nextErrors[fieldName] = makeError("Enter 7 to 15 digits");
    }
  });

  const validateIdentityNumber = (typeField, numberField) => {
    const identityType = memberData[typeField];
    const identityNumber = memberData[numberField].trim();

    if (!identityNumber) {
      return;
    }

    if (
      identityType === "CNIC" &&
      !/^\d{5}-?\d{7}-?\d$/.test(identityNumber)
    ) {
      nextErrors[numberField] = makeError("Use CNIC format 12345-1234567-1");
      return;
    }

    if (
      identityType === "Passport No." &&
      !/^[a-zA-Z0-9]{6,20}$/.test(identityNumber)
    ) {
      nextErrors[numberField] = makeError("Use 6 to 20 letters or numbers");
      return;
    }

    if (
      identityType === "NTN" &&
      !/^\d{7}-?\d?$/.test(identityNumber)
    ) {
      nextErrors[numberField] = makeError("Use a valid NTN number");
    }
  };

  validateIdentityNumber("identityType", "identityNumber");
  validateIdentityNumber("nomineeIdentityType", "nomineeIdentityNumber");

  if (
    memberData.paymentMode &&
    !paymentModeOptions.includes(memberData.paymentMode)
  ) {
    nextErrors.paymentMode = makeError("Select a valid payment mode");
  }

  if (
    memberData.paymentMode &&
    memberData.paymentMode !== "Cash" &&
    String(memberData.paymentInstrumentNo).trim() === ""
  ) {
    nextErrors.paymentInstrumentNo = makeError("Payment Instrument No is required");
  }

  if (
    memberData.paymentMode &&
    memberData.paymentMode !== "Cash" &&
    String(memberData.bank).trim() === ""
  ) {
    nextErrors.bank = makeError("Bank is required");
  }

  if (!memberPhoto) {
    nextErrors.memberPhoto = makeError("Member photograph is required");
  }

  if (!nomineePhoto) {
    nextErrors.nomineePhoto = makeError("Nominee photograph is required");
  }

  if (attachments.length === 0) {
    nextErrors.attachments = makeError("At least one attachment is required");
  }

  setErrors(nextErrors);

  return Object.keys(nextErrors).length === 0;
};

const handleChange = (e) => {
  const { name, value } = e.target;

  setMemberData((prev) => ({
    ...prev,
    [name]: value,
    ...(name === "paymentMode" && value === "Cash"
      ? { paymentInstrumentNo: "", bank: "" }
      : {}),
  }));

  setFieldError(name);

  if (name === "paymentMode" && value === "Cash") {
    setFieldError("paymentInstrumentNo");
    setFieldError("bank");
  }
};

const handlePhotoChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setMemberPhoto(file);
    setFieldError("memberPhoto");
  }
};

const handleNomineePhotoChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setNomineePhoto(file);
    setFieldError("nomineePhoto");
  }
};
const handleAttachmentChange = (e) => {
  const { name, value } = e.target;

  setAttachmentData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setFieldError(name);
};
const handleFileChange = (e) => {
  const file = e.target.files[0];

  setAttachmentData((prev) => ({
    ...prev,
    attachmentFile: file,
  }));

  setFieldError("attachmentFile");
};
const handleLoadAttachment = () => {

  if (
    !attachmentData.attachmentType ||
    !attachmentData.attachmentFile
  ) {
    setErrors((prev) => {
      const nextErrors = { ...prev };

      if (!attachmentData.attachmentType) {
        nextErrors.attachmentType = makeError("Attachment type is required");
      }

      if (!attachmentData.attachmentFile) {
        nextErrors.attachmentFile = makeError("Select a file to attach");
      }

      return nextErrors;
    });
    return;
  }

  const newAttachment = {
    id: Date.now(),

    attachmentType:
      attachmentData.attachmentType,

    file:
      attachmentData.attachmentFile,

    fileName:
      attachmentData.attachmentFile.name,

    date:
      new Date().toLocaleDateString(),
  };

  setAttachments((prev) => [
    ...prev,
    newAttachment,
  ]);

  setAttachmentData({
    attachmentType: "",
    attachmentFile: null,
  });

  setErrors((prev) => {
    const updatedErrors = { ...prev };
    delete updatedErrors.attachmentType;
    delete updatedErrors.attachmentFile;
    delete updatedErrors.attachments;
    return updatedErrors;
  });
};
const handleDeleteAttachment = (id) => {

  if (!id) {
    setFieldError("attachments", "No attachment selected");
    return;
  }

  setAttachments((prev) =>
    prev.filter(
      (item) => item.id !== id
    )
  );

};
const handleViewAttachment = (attachment) => {
  if (!attachment?.file) {
    alert("No file available to view");
    return;
  }

  const fileUrl = URL.createObjectURL(attachment.file);
  window.open(fileUrl, "_blank");
  window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
};
const handleAdd = () => {

  if (!validateMemberForm()) {
    return;
  }

  const alreadyExists = records.some(
    (record) => record.membershipNo === memberData.membershipNo
  );

  if (alreadyExists) {
    setFieldError("membershipNo", "Membership No already exists");
    return;
  }

  const newRecord = {
    ...memberData,
    attachments,
    memberPhoto,
    nomineePhoto,
  };

  setRecords((prev) => [
    ...prev,
    newRecord,
  ]);

  console.log("Saved");
};
const handleUpdate = () => {

  if (!validateMemberForm()) {
    return;
  }

  const recordExists = records.some(
    (record) => record.membershipNo === memberData.membershipNo
  );

  if (!recordExists) {
    setFieldError("membershipNo", "Add this member before updating");
    return;
  }

  setRecords((prev) =>
    prev.map((record) =>

      record.membershipNo ===
      memberData.membershipNo

        ? {
            ...memberData,
            attachments,
            memberPhoto,
            nomineePhoto,
          }

        : record
    )
  );

};
const handleDelete = () => {

  if (!memberData.membershipNo) {
    setFieldError("membershipNo", "Membership No is required to delete");
    return;
  }

  const recordExists = records.some(
    (record) => record.membershipNo === memberData.membershipNo
  );

  if (!recordExists) {
    setFieldError("membershipNo", "Member not found");
    return;
  }

  setRecords((prev) =>
    prev.filter(
      (record) =>
        record.membershipNo !==
        memberData.membershipNo
    )
  );

  setErrors({});

};

  return (
    <div className=" min-h-screen text-sm sm:text-base  ">
      <NotificationBar />
      <Header />
      <Navbar />
      <div>
        {/* Container Div */}
        <div className='bg-[#ebf1de] border border-2xl min-h-screen overflow-hidden rounded-lg sm:rounded-2xl m-2 sm:m-4'>
          {/* Header */}
          <div className="flex w-full items-center bg-blue-900 px-4 py-2 text-lg font-bold text-white sm:text-xl">
                 <p className=''>Manage Member - Search</p>
                </div>
                {/* Content */}
                <div>
                  {/* Member's Particulars */}
              <div className="p-3 sm:p-4 flex flex-col lg:flex-row gap-4 w-full space-y-2 ">
                {/* left wrapper */}
                <div className='w-full lg:w-8 min-h-8 lg:min-h-0 bg-yellow-400 flex justify-center items-center sm:rounded-2xl '>
                  <p className="lg:rotate-180 lg:[writing-mode:vertical-rl] font-semibold ">Member's Particulars</p>
                </div>
                {/* Middle div */}
                <div className="flex-1 min-w-0 flex flex-col space-y-2">
                <InputField
                  type="number"
                  label="Membership No"
                  name="membershipNo"
                  value={memberData.membershipNo}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="date"
                  label="Membership Date"
                  name="membershipDate"
                  value={memberData.membershipDate}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="text"
                  label="Name"
                  name="name"
                  value={memberData.name}
                  onChange={handleChange}
                  errors={errors}
                  varient='email'
                />
                <InputField
                  type="text"
                  label="Father/Husband's Name"
                  name="fatherName"
                  value={memberData.fatherName}
                  onChange={handleChange}
                  errors={errors}
                  varient='email'
                />
                <InputField
                  type="select"
                  label="Employee Status"
                  name="employeeStatus"
                  value={memberData.employeeStatus}
                  onChange={handleChange}
                  options={employeeStatusOptions}
                  errors={errors}
                  varient='basic'
                  
                />
                <InputField
                  type="text"
                  label="Domicile"
                  name="domicile"
                  value={memberData.domicile}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="text"
                  label="Designation"
                  name="designation"
                  value={memberData.designation}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="number"
                  label="BPS"
                  name="bps"
                  value={memberData.bps}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="select"
                  label="Identity Type"
                  name="identityType"
                  value={memberData.identityType}
                  onChange={handleChange}
                  options={identityTypeOptions}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="text"
                  label="Identity Number"
                  name="identityNumber"
                  value={memberData.identityNumber}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <div className='flex flex-col xl:flex-row justify-between items-stretch xl:items-center gap-2 xl:gap-90'>
                <InputField
                  type="text"
                  label="Permanent Address"
                  name="permanentAddress"
                  value={memberData.permanentAddress}
                  onChange={handleChange}
                  errors={errors}
                  varient='email'
                />
                <InputField
                  type="text"
                  label="District"
                  name="permanentDistrict"
                  value={memberData.permanentDistrict}
                  onChange={handleChange}
                  errors={errors}
                  varient='short'
                />
                </div>
                <div className='flex flex-col xl:flex-row justify-between items-stretch xl:items-center gap-2 xl:gap-90'>
                <InputField
                  type="text"
                  label="Present Address"
                  name="presentAddress"
                  value={memberData.presentAddress}
                  onChange={handleChange}
                  errors={errors}
                  varient='email'
                />
                <InputField
                  type="text"
                  label="District"
                  name="presentDistrict"
                  value={memberData.presentDistrict}
                  onChange={handleChange}
                  errors={errors}
                  varient='short'
                />
                </div>
                <InputField
                  type="text"
                  label="Service ID Card No"
                  name="serviceIdCardNo"
                  value={memberData.serviceIdCardNo}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="text"
                  label="Present Place Of Posting"
                  name="presentPlaceOfPosting"
                  value={memberData.presentPlaceOfPosting}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                  />
                  <div className = "flex flex-col sm:flex-row gap-1 sm:gap-0">
                    <p className="font-semibold w-full sm:w-42 sm:shrink-0 ">Contact No</p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 lg:gap-10">
                    <InputField
                      type="number"
                      label=" 1"
                      name="contactNo1"
                      value={memberData.contactNo1}
                      onChange={handleChange}
                      errors={errors}
                      varient='newStyle'
                      
                    />
                    <InputField
                      type="number"
                      label=" 2"
                      name="contactNo2"
                      value={memberData.contactNo2}
                      onChange={handleChange}
                      errors={errors}
                      varient='newStyle'
                     
                    />
                    <InputField
                      type="number"
                      label=" 3"
                      name="contactNo3"
                      value={memberData.contactNo3}
                      onChange={handleChange}
                      errors={errors}
                      varient='newStyle'
                    />
                    </div>
                  </div>
                  <InputField
                  type="email"
                  label="E-Mail Address"
                  name="email"
                  value={memberData.email}
                  onChange={handleChange}
                  errors={errors}
                  varient='email'
                />
                </div>
                {/* Right section */}
                <div className="w-full lg:w-auto flex flex-col items-center lg:items-start shrink-0">
                <div className="w-32 h-36 overflow-hidden border border-black bg-slate-100 flex items-center justify-center">
    
                        {memberPhotoPreview ? (
                        <img
                        src={memberPhotoPreview}
                        alt="member"
                        className="h-full w-full object-cover"
                         />
                        ) : (
                      <p>Photograph</p>
                        )}

                    </div>

                     <input
                     type="file"
                     accept="image/*"
                     onChange={handlePhotoChange}
                     className="mt-2 w-full max-w-48 text-sm file:mr-2 file:rounded-md file:border-0 file:bg-blue-900 file:px-3 file:py-1.5 file:text-white file:transition hover:file:bg-blue-800"
                     />                
                     {errors.memberPhoto && (
                      <p className="text-red-500 text-sm ml-2">
                        {errors.memberPhoto.message}
                      </p>
                     )}

                
                
                </div>
              </div>

                {/* Nominee's Particulars */}
              <div className="p-3 sm:p-4 flex flex-col lg:flex-row gap-4 w-full space-y-2 ">
                {/* Left Wrapper */}
                <div className='w-full lg:w-8 min-h-8 lg:min-h-0 bg-orange-300 rounded-2xl flex justify-center items-center'>
                  <p className="lg:rotate-180 lg:[writing-mode:vertical-rl] font-semibold ">Nominee </p>
                </div>
                {/* Middle div */}
                <div className="flex-1 min-w-0 flex flex-col space-y-2">
                <InputField
                  type="text"
                  label="Name"
                  name="nomineeName"
                  value={memberData.nomineeName}
                  onChange={handleChange}
                  errors={errors}
                  varient='email'
                />
                <InputField
                  type="text"
                  label="Father/Husband's Name"
                  name="nomineeFatherName"
                  value={memberData.nomineeFatherName}
                  onChange={handleChange}
                  errors={errors}
                  varient='email'
                />
                <InputField
                  type="select"
                  label="Identity Type"
                  name="nomineeIdentityType"
                  value={memberData.nomineeIdentityType}
                  onChange={handleChange}
                  options={identityTypeOptions}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="text"
                  label="Identity Number"
                  name="nomineeIdentityNumber"
                  value={memberData.nomineeIdentityNumber}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="text"
                  label="Relationship"
                  name="nomineeRelationship"
                  value={memberData.nomineeRelationship}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                </div>
                {/* Right section */}
                <div className="w-full lg:w-auto flex flex-col items-center lg:items-start shrink-0">
                <div className="w-32 h-36 overflow-hidden border border-black bg-slate-100 flex items-center justify-center">

                {nomineePhotoPreview ? (
                   <img
                   src={nomineePhotoPreview}
                   alt="nominee"
                   className="h-full w-full object-cover"
                  />
            ) : (
                    <p>Photograph</p>
          )}
                </div>
                <input
                type="file"
                accept="image/*"
                onChange={handleNomineePhotoChange}
                className="mt-2 w-full max-w-48 text-sm file:mr-2 file:rounded-md file:border-0 file:bg-blue-900 file:px-3 file:py-1.5 file:text-white file:transition hover:file:bg-blue-800"
                />
                {errors.nomineePhoto && (
                  <p className="text-red-500 text-sm ml-2">
                    {errors.nomineePhoto.message}
                  </p>
                )}
                </div>
              </div>
              {/* Payment */}
              <div className="p-3 sm:p-4 flex flex-col lg:flex-row gap-4 w-full space-y-2">
                {/* Left Wrapper */}
                <div className='w-full lg:w-8 min-h-8 lg:min-h-0 bg-green-400 rounded-2xl flex justify-center items-center'>
                  <p className="lg:rotate-180 lg:[writing-mode:vertical-rl] font-semibold ">Payment</p>
                </div>
                {/* Middle div */}
                <div className="flex-1 min-w-0 flex flex-col space-y-2">
                  <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2 xl:gap-8">
                <InputField
                  type="number"
                  label="Payment Made"
                  name="paymentMade"
                  value={memberData.paymentMade}
                  onChange={handleChange}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="select"
                  label="Currency"
                  name="currency"
                  value={memberData.currency}
                  onChange={handleChange}
                  options={currencyOptions}
                  errors={errors}
                  varient='short'
                />
                </div>
                <InputField
                  type="select"
                  label="Payment Mode"
                  name="paymentMode"
                  value={memberData.paymentMode}
                  onChange={handleChange}
                  options={paymentModeOptions}
                  errors={errors}
                  varient='basic'
                />
                <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2 xl:gap-8">
                <InputField
                  type="text"
                  label="Payment Instrument No"
                  name="paymentInstrumentNo"
                  value={memberData.paymentInstrumentNo}
                  onChange={handleChange}
                  disabled={memberData.paymentMode === "Cash"}
                  placeholder={memberData.paymentMode === "Cash" ? "Not required for cash" : ""}
                  errors={errors}
                  varient='basic'
                />
                <InputField
                  type="text"
                  label="Bank"
                  name="bank"
                  value={memberData.bank}
                  onChange={handleChange}
                  disabled={memberData.paymentMode === "Cash"}
                  placeholder={memberData.paymentMode === "Cash" ? "Not required for cash" : ""}
                  errors={errors}
                  varient='short'
                />
                </div>
                </div>
              </div>
              {/* Attachments */}
              <div className="p-3 sm:p-4 flex flex-col lg:flex-row gap-4 w-full border-b border-black">
                {/* Left Wrapper */}
                <div className='w-full lg:w-8 min-h-8 lg:min-h-0 bg-[#f2d0a3] rounded-2xl flex justify-center items-center'>
                  <p className="lg:rotate-180 lg:[writing-mode:vertical-rl] font-semibold ">Attachments</p>
                </div>
                {/* Middle div */}
                <div className="flex-1 min-w-0">
                  {/* Upper Section */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5 w-full text-base">
                  <label className="font-semibold">Attachment Type</label>
                  <div>
                    <select
                      name="attachmentType"
                      value={attachmentData.attachmentType}
                      onChange={handleAttachmentChange}
                      className="h-8 w-full rounded-lg bg-[#9daf77] px-2 text-sm outline-none sm:w-48"
                    >
                      <option value="" disabled>Select type</option>
                      {attachmentTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.attachmentType && (
                      <p className="text-red-500 text-sm ml-2">
                        {errors.attachmentType.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="flex min-h-8 rounded-lg text-sm w-full sm:w-84 items-center justify-center border-black px-2 bg-[#9daf77]">
                      {attachmentData.attachmentFile
                        ? attachmentData.attachmentFile.name
                        : "Document to be attached"}
                    </span>
                    {errors.attachmentFile && (
                      <p className="text-red-500 text-sm ml-2">
                        {errors.attachmentFile.message}
                      </p>
                    )}
                  </div>
                  <label className="cursor-pointer rounded-md bg-blue-900 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-blue-800">
                    Browse
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  <button
                  type="button"
                  onClick={handleLoadAttachment}
                  className="rounded-md bg-[#9daf77] px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-[#879b61]"
                  >
                  Load
                  </button>
                </div>

  {/* TABLE */}
 {/* MAIN DIV */}
<div className="mt-3 overflow-x-auto rounded-lg border border-slate-300 bg-white/40 shadow-sm">

  {/* Table Header */}
  <div className="grid min-w-[720px] grid-cols-[60px_2fr_6fr_2fr_3fr] bg-blue-900 px-4 py-2 text-center font-semibold text-white">
    <div>Sr.</div>
    <div>Attachment Type</div>
    <div>Attached File Name</div>
    <div>Date</div>
    <div>Action</div>
  </div>

  {/* Table Body */}
  {attachments.map((attachment, index) => (
    <div
      key={attachment.id}
      className="grid min-w-[720px] grid-cols-[60px_2fr_6fr_2fr_3fr] items-center border-b border-slate-200 px-4 py-3 text-center transition-colors duration-200 hover:bg-white/70"
    >
      <div>{index+1}</div>
      <div>  {attachment.attachmentType}</div>
      <div className="truncate"> {attachment.fileName}</div>
      <div>    {attachment.date}</div>

      <div className="flex justify-center gap-2">
        {/* Buttons go here */}
        <button
  type="button"
  className="inline-flex h-8 w-9 items-center justify-center rounded bg-blue-600 text-sm text-white transition hover:bg-blue-700"
  onClick={() => handleViewAttachment(attachment)}
>
  <GrView />
        </button>
        <button
  type="button"
  className="inline-flex h-8 w-9 items-center justify-center rounded bg-red-600 text-sm text-white transition hover:bg-red-700"
  onClick={() => handleDeleteAttachment(attachment.id)}
>
  <MdDelete />
        </button>
        <button
  type="button"
  className="inline-flex h-8 w-9 items-center justify-center rounded bg-green-600 text-sm text-white transition hover:bg-green-700"
  onClick={() => {
    if (!attachment?.id) {
      setFieldError("attachments", "No attachment selected");
      return;
    }

    if (
      !attachmentData.attachmentType &&
      !attachmentData.attachmentFile
    ) {
      setErrors((prev) => ({
        ...prev,
        attachmentType: makeError("Enter a new type or browse a file first"),
      }));
      return;
    }

    setAttachments((prev) =>
      prev.map((item) =>
        item.id === attachment.id
          ? {
              ...item,
              attachmentType:
                attachmentData.attachmentType ||
                item.attachmentType,

              file:
                attachmentData.attachmentFile ||
                item.file,

              fileName:
                attachmentData.attachmentFile
                  ? attachmentData.attachmentFile.name
                  : item.fileName,

              date: new Date().toLocaleDateString(),
            }
          : item
      )
    );

    setAttachmentData({
      attachmentType: "",
      attachmentFile: null,
    });

    setErrors((prev) => {
      const updatedErrors = { ...prev };
      delete updatedErrors.attachmentType;
      delete updatedErrors.attachmentFile;
      return updatedErrors;
    });
  }}
>
  <CiEdit />
        </button>
      </div>
    </div>
  ))}
  {attachments.length === 0 && (
    <div className="border-b px-4 py-3 text-center text-sm text-gray-500">
      No attachment available
    </div>
  )}

</div>
{errors.attachments && (
  <p className="text-red-500 text-sm ml-2 mt-2">
    {errors.attachments.message}
  </p>
)}
 

                </div> 
              </div>
                {/* CRUDS */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-3 sm:px-0 py-8 sm:py-11">
                  <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="min-w-24 rounded-md border border-blue-900 bg-blue-900 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-800"
                  >
                   Main
                  </button>
                  <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="min-w-24 rounded-md border bg-black px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-white hover:text-black hover:border-black"
                  >
                   Back
                  </button>
                  <button
                  type="button"
                  onClick={handleAdd}
                  className="min-w-24 rounded-md border border-[#4f6f26] bg-[#9daf77] px-5 py-2 font-semibold text-black shadow-sm transition hover:bg-[#879b61]"
                  >
                   Add
                  </button>
                  <button
                  type="button"
                  onClick={handleUpdate}
                  className="min-w-24 rounded-md border border-green-700 bg-green-600 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-green-700"
                  >
                   Update
                  </button>
                  <button                 
                  type="button"
                  onClick={handleDelete}
                  className="min-w-24 rounded-md border border-red-700 bg-red-700 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-red-800"
                  >
                   Delete
                  </button>
                  <button                 
                  type="button"
                  onClick={() => window.print()}
                  className="min-w-24 rounded-md border border-blue-900 bg-blue-900 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-800"
                  >
                   Print
                  </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  ); 
};
export default ManageMemberAction;
