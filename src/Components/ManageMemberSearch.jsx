import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  membershipNo: "",
  membershipDate: "",
  name: "",
  fatherName: "",
  employeeStatus: "Employed",
  domicile: "",
  designation: "",
  bps: "",
  identityType: "CNIC",
  identityNumber: "",
  permanentAddress: "",
  permanentDistrict: "",
  presentAddress: "",
  presentDistrict: "",
  presentPlaceOfPosting: "",
  serviceIdCardNo: "",
  contactPrimary: "",
  contactSecondary: "",
  contactTertiary: "",
  email: "",
  nomineeName: "",
  nomineeFatherName: "",
  nomineeIdentityType: "CNIC",
  nomineeIdentityNumber: "",
  relationship: "",
  paymentMade: "No",
  paymentMode: "",
  paymentInstrumentNo: "",
  currency: "",
  bank: "",
  attachmentType: "",
  attachmentFile: null,
};

const inputClass =
  "h-5 w-full border border-black bg-white px-1.5 text-[12px] outline-none";

const selectClass =
  "h-5 w-full border border-black bg-white px-1 text-[12px] outline-none";

const shortFieldClass = "w-[126px]";
const mediumFieldClass = "w-[356px]";
const longFieldClass = "w-[572px]";
const documentFieldClass = "w-[268px]";
const fileFieldClass = "w-[112px]";
const bankFieldClass = "w-[324px]";
const labelWidthClass = "w-[168px]";

const sectionLabelClass =
  "flex items-center justify-center border border-black px-0.5 py-2";

const storageKey = "manage-member-search-records";

const readStoredRecords = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawValue = window.localStorage.getItem(storageKey);
    return rawValue ? JSON.parse(rawValue) : [];
  } catch {
    return [];
  }
};

const firstErrorMessage = (errors) => {
  const firstError = Object.values(errors)[0];
  return firstError?.message || "Please complete the required fields.";
};

const SectionHeader = ({ title, colorClass }) => (
  <div className={`${sectionLabelClass} ${colorClass} self-stretch`}>
    <span className="rotate-180 whitespace-nowrap text-[11px] font-semibold [writing-mode:vertical-rl]">
      {title}
    </span>
  </div>
);

const PhotoCard = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex h-[120px] w-[128px] items-center justify-center border border-black bg-[#dceff7] text-center text-sm text-slate-800">
      Photograph
    </div>
    <div className="text-sm text-slate-800">Attach Picture</div>
  </div>
);

const ManageMemberSearch = () => {
  const { register, handleSubmit, getValues, reset, setValue, watch } = useForm(
    { defaultValues },
  );

  const [attachments, setAttachments] = useState([]);
  const [attachmentInputKey, setAttachmentInputKey] = useState(0);
  const [records, setRecords] = useState(() => readStoredRecords());

  const paymentMade = watch("paymentMade");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(records));
  }, [records]);

  const loadRecordIntoForm = (record) => {
    reset({
      ...defaultValues,
      ...record,
      attachmentFile: null,
    });
    setAttachments(record.attachments ?? []);
    setAttachmentInputKey((current) => current + 1);
  };

  const findRecordIndex = (membershipNo) =>
    records.findIndex((record) => record.membershipNo === membershipNo);

  const syncCurrentRecord = (membershipNo) => {
    const values = getValues();
    const record = {
      ...values,
      membershipNo,
      attachments,
    };

    setRecords((currentRecords) => {
      const existingIndex = currentRecords.findIndex(
        (recordItem) => recordItem.membershipNo === membershipNo,
      );

      if (existingIndex === -1) {
        return [record, ...currentRecords];
      }

      return currentRecords.map((recordItem, index) =>
        index === existingIndex ? record : recordItem,
      );
    });

    return record;
  };

  const submitAction = (action) =>
    handleSubmit(
      (data) => {
        const membershipNo = data.membershipNo.trim();

        if (!membershipNo) {
          window.alert("Membership No. is required.");
          return;
        }

        if (action === "print") {
          window.print();
          return;
        }

        const existingIndex = findRecordIndex(membershipNo);

        if (action === "update" && existingIndex === -1) {
          window.alert("No saved member found for this Membership No.");
          return;
        }

        const record = syncCurrentRecord(membershipNo);

        window.alert(
          action === "update"
            ? `Member ${membershipNo} updated.`
            : `Member ${membershipNo} saved.`,
        );

        if (action === "add") {
          loadRecordIntoForm(record);
        }
      },
      (errors) => {
        window.alert(firstErrorMessage(errors));
      },
    );

  const handleDelete = () => {
    const membershipNo = getValues("membershipNo").trim();

    if (!membershipNo) {
      window.alert("Membership No. is required for delete.");
      return;
    }

    const existingIndex = findRecordIndex(membershipNo);

    if (existingIndex === -1) {
      window.alert("No saved member found for this Membership No.");
      return;
    }

    setRecords((currentRecords) =>
      currentRecords.filter((record) => record.membershipNo !== membershipNo),
    );
    reset(defaultValues);
    setAttachments([]);
    setAttachmentInputKey((current) => current + 1);
    window.alert(`Member ${membershipNo} deleted.`);
  };

  const handleAttachmentLoad = () => {
    const values = getValues();
    const file = values.attachmentFile?.[0];

    if (!values.attachmentType.trim() || !file) {
      window.alert("Choose attachment type and file first.");
      return;
    }

    setAttachments((current) => [
      {
        type: values.attachmentType,
        name: file.name,
        date: new Date().toLocaleDateString(),
      },
      ...current,
    ]);

    setValue("attachmentType", "");
    setValue("attachmentFile", null);
    setAttachmentInputKey((current) => current + 1);
  };

  const handleReset = () => {
    reset(defaultValues);
    setAttachments([]);
    setAttachmentInputKey((current) => current + 1);
  };

  const handleMembershipLookup = () => {
    const membershipNo = getValues("membershipNo").trim();

    if (!membershipNo) {
      return;
    }

    const savedRecord = records.find(
      (record) => record.membershipNo === membershipNo,
    );

    if (savedRecord) {
      loadRecordIntoForm(savedRecord);
    }
  };

  return (
    <div className="min-h-screen bg-[#eef0df] p-3 text-slate-900">
      <div className="w-full border border-black bg-[#eef0df]">
        <div className="bg-[#244f86] px-1.5 py-0.5 text-[13px] font-normal text-white">
          Manage Member - Serach
        </div>

        <div className="grid gap-3 px-3 py-3 lg:grid-cols-[1fr_148px]">
          <div className="space-y-3">
            <section className="grid grid-cols-[26px_minmax(0,1fr)] gap-2">
              <SectionHeader
                title="Member's Particulars"
                colorClass="bg-[#fff000]"
              />

              <div className="grid gap-1 text-[12px] leading-none">
                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Membership No.
                  </label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("membershipNo", { required: true })}
                    onBlur={handleMembershipLookup}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Membership Date
                  </label>
                  <input
                    type="date"
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("membershipDate")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>Name</label>
                  <input
                    className={`${inputClass} ${mediumFieldClass}`}
                    {...register("name")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Father/Husband's Name
                  </label>
                  <input
                    className={`${inputClass} ${mediumFieldClass}`}
                    {...register("fatherName")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Employee's Status
                  </label>
                  <select
                    className={`${selectClass} ${shortFieldClass}`}
                    {...register("employeeStatus")}
                  >
                    <option>Employed</option>
                    <option>Retired</option>
                    <option>Disabled</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Domicile
                  </label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("domicile")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Designation
                  </label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("designation")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>BPS</label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("bps")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Identity Type
                  </label>
                  <select
                    className={`${selectClass} ${shortFieldClass}`}
                    {...register("identityType")}
                  >
                    <option>CNIC</option>
                    <option>Passport</option>
                    <option>Other</option>
                  </select>
                  <span className="ml-3 shrink-0">Identity Number</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("identityNumber")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Permanent Address
                  </label>
                  <input
                    className={`${inputClass} ${longFieldClass}`}
                    {...register("permanentAddress")}
                  />
                  <span className="shrink-0">District</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("permanentDistrict")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Present Address
                  </label>
                  <input
                    className={`${inputClass} ${longFieldClass}`}
                    {...register("presentAddress")}
                  />
                  <span className="shrink-0">District</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("presentDistrict")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Service Id. Card No.
                  </label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("serviceIdCardNo")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Present Place of Posting
                  </label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("presentPlaceOfPosting")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Contact No.
                  </label>
                  <span className="shrink-0">1</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("contactPrimary")}
                  />
                  <span className="shrink-0">2</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("contactSecondary")}
                  />
                  <span className="shrink-0">3</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("contactTertiary")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    E-Mail Address
                  </label>
                  <input
                    className={`${inputClass} ${mediumFieldClass}`}
                    {...register("email")}
                  />
                </div>
              </div>
            </section>

            <section className="grid grid-cols-[26px_minmax(0,1fr)] gap-2">
              <SectionHeader title="Nominee" colorClass="bg-[#f7d0b5]" />

              <div className="grid gap-1 text-[12px] leading-none">
                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Name of Nominee
                  </label>
                  <input
                    className={`${inputClass} ${mediumFieldClass}`}
                    {...register("nomineeName")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Father/Husband's Name
                  </label>
                  <input
                    className={`${inputClass} ${mediumFieldClass}`}
                    {...register("nomineeFatherName")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Identity Type
                  </label>
                  <select
                    className={`${selectClass} ${shortFieldClass}`}
                    {...register("nomineeIdentityType")}
                  >
                    <option>CNIC</option>
                    <option>Passport</option>
                    <option>Other</option>
                  </select>
                  <span className="ml-3 shrink-0">Identity Number</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("nomineeIdentityNumber")}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Relationship
                  </label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("relationship")}
                  />
                </div>
              </div>
            </section>

            <section className="grid grid-cols-[26px_minmax(0,1fr)] gap-2">
              <SectionHeader title="Payment" colorClass="bg-[#d7e79f]" />

              <div className="grid gap-1 text-[12px] leading-none">
                <div className="flex items-center gap-2">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Payment Made
                  </label>
                  <select
                    className={`${selectClass} ${shortFieldClass}`}
                    {...register("paymentMade")}
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                  <span className="ml-3 shrink-0">Currency</span>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("currency")}
                  />
                </div>

                {paymentMade === "Yes" ? (
                  <>
                    <div className="flex items-center gap-2">
                      <label className={`${labelWidthClass} shrink-0`}>
                        Payment Mode
                      </label>
                      <input
                        className={`${inputClass} ${shortFieldClass}`}
                        {...register("paymentMode")}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <label className={`${labelWidthClass} shrink-0`}>
                        Payment Instrument No.
                      </label>
                      <input
                        className={`${inputClass} ${shortFieldClass}`}
                        {...register("paymentInstrumentNo")}
                      />
                      <span className="ml-3 shrink-0">Bank</span>
                      <input
                        className={`${inputClass} ${bankFieldClass}`}
                        {...register("bank")}
                      />
                    </div>
                  </>
                ) : null}
              </div>
            </section>

            <section className="grid grid-cols-[26px_minmax(0,1fr)] gap-2">
              <SectionHeader title="Attachments" colorClass="bg-[#f2d0a3]" />

              <div className="grid gap-1 text-[12px] leading-none">
                <div className="flex items-center gap-1.5">
                  <label className={`${labelWidthClass} shrink-0`}>
                    Attachment Type
                  </label>
                  <input
                    className={`${inputClass} ${shortFieldClass}`}
                    {...register("attachmentType")}
                  />
                  <span
                    className={`flex h-5 ${documentFieldClass} items-center justify-center border border-black bg-white px-2 text-[12px] text-slate-700`}
                  >
                    Document to be attached
                  </span>
                  <input
                    key={attachmentInputKey}
                    type="file"
                    className={`${fileFieldClass} text-[12px]`}
                    {...register("attachmentFile")}
                  />
                  <button
                    type="button"
                    onClick={handleAttachmentLoad}
                    className="border border-black bg-white px-2.5 py-0.5 text-[12px] font-normal hover:bg-slate-100"
                  >
                    Load
                  </button>
                </div>

                <div className="flex gap-2">
                  <div className="overflow-hidden border border-black bg-white">
                    <table className="w-full border-collapse text-[12px] text-slate-900">
                      <thead>
                        <tr className="bg-white">
                          <th className="border border-black px-2 py-1 text-left font-normal">
                            Sr.
                          </th>
                          <th className="border border-black px-2 py-1 text-left font-normal">
                            Attachment Type
                          </th>
                          <th className="border border-black px-2 py-1 text-left font-normal">
                            Attached File Name
                          </th>
                          <th className="border border-black px-2 py-1 text-left font-normal">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(attachments.length > 0
                          ? attachments
                          : [null, null]
                        ).map((attachment, index) => (
                          <tr
                            key={
                              attachment
                                ? `${attachment.name}-${index}`
                                : `blank-${index}`
                            }
                          >
                            <td className="border border-black px-2 py-1">
                              {attachment ? index + 1 : ""}
                            </td>
                            <td className="border border-black px-2 py-1">
                              {attachment ? attachment.type : ""}
                            </td>
                            <td className="border border-black px-2 py-1">
                              {attachment ? attachment.name : ""}
                            </td>
                            <td className="border border-black px-2 py-1">
                              {attachment ? attachment.date : ""}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="w-[195px] overflow-hidden border border-black bg-white">
                    <table className="w-full border-collapse text-[12px] text-slate-900">
                      <thead>
                        <tr>
                          <th className="border border-black px-2 py-1 text-left font-normal">
                            Action (View, Delete, Change)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-black px-2 py-1">
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-black px-2 py-1">
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-12 pt-2 lg:pt-1">
            <PhotoCard />
            <PhotoCard />
          </div>
        </div>

        <div className="border-t border-black px-2 py-2">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="border border-black bg-white px-4 py-1 text-sm hover:bg-slate-100"
            >
              Main
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="border border-black bg-white px-4 py-1 text-sm hover:bg-slate-100"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => submitAction("add")()}
              className="border border-black bg-white px-4 py-1 text-sm hover:bg-slate-100"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => submitAction("update")()}
              className="border border-black bg-white px-4 py-1 text-sm hover:bg-slate-100"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="border border-black bg-white px-4 py-1 text-sm hover:bg-slate-100"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => submitAction("print")()}
              className="border border-black bg-white px-4 py-1 text-sm hover:bg-slate-100"
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMemberSearch;
