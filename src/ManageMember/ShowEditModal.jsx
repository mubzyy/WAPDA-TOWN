import React from "react";

import { useForm } from "react-hook-form";

import { useEffect } from "react";



const ShowEditModal = ({

  setShowEditModal,

  selectedMember,

  ShowEditModal

}) => {

  const {

    register,

    handleSubmit,

    reset,

    formState: { errors },

  } = useForm({

    mode: "all",

   

  });

 useEffect(() => {

  if (selectedMember) {

    reset(selectedMember);

  }

}, [selectedMember, reset]);





  const onSubmit = (data) => {

    console.log(data);

    // Update your data here

    setShowEditModal(false);

  };



  return (

    <div className="fixed inset-0 bg-black/50 z-[99999] flex justify-center items-center">

      <div className="bg-gray-200 w-[800px] rounded-xl p-6">

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Heading */}

          <div className="flex justify-center mb-8">

            <h1 className="text-2xl font-bold">

              Edit Member

            </h1>

          </div>



          {/* Membership No */}

          <div className="mb-5">

            <label className="block font-semibold mb-1">

              Membership No.

            </label>



            <input

              className="w-full rounded-lg p-2 bg-white outline-none border border-gray-300 focus:border-blue-500"

              placeholder="Membership No."

              {...register("membershipNo", {

                required: "Membership Number is required",

              })}

            />



            {errors.membershipNo && (

              <p className="text-red-500 text-sm mt-1">

                {errors.membershipNo.message}

              </p>

            )}

          </div>



          {/* CNIC */}

          <div className="mb-5">

            <label className="block font-semibold mb-1">

              CNIC

            </label>



            <input

              className="w-full rounded-lg p-2 bg-white outline-none border border-gray-300 focus:border-blue-500"

              placeholder="12345-1234567-1"

              {...register("cnic", {

                required: "CNIC is required",

              })}

            />



            {errors.cnic && (

              <p className="text-red-500 text-sm mt-1">

                {errors.cnic.message}

              </p>

            )}

          </div>



          {/* Name */}

          <div className="mb-5">

            <label className="block font-semibold mb-1">

              Name

            </label>



            <input

              className="w-full rounded-lg p-2 bg-white outline-none border border-gray-300 focus:border-blue-500"

              placeholder="Name"

              {...register("name", {

                required: "Name is required",

              })}

            />



            {errors.name && (

              <p className="text-red-500 text-sm mt-1">

                {errors.name.message}

              </p>

            )}

          </div>



          {/* Registration Date */}

          <div className="mb-5">

            <label className="block font-semibold mb-1">

              Registration Date

            </label>



            <input

              type="date"

              className="w-full rounded-lg p-2 bg-white outline-none border border-gray-300 focus:border-blue-500"

              {...register("regDate", {

                required: "Registration Date is required",

              })}

            />



            {errors.regDate && (

              <p className="text-red-500 text-sm mt-1">

                {errors.regDate.message}

              </p>

            )}

          </div>



          {/* Properties */}

          <div className="mb-6">

            <label className="block font-semibold mb-1">

              No. of Properties

            </label>



            <input

              type="number"

              className="w-full rounded-lg p-2 bg-white outline-none border border-gray-300 focus:border-blue-500"

              placeholder="Properties"

              {...register("properties", {

                required: "Property count is required",

              })}

            />



            {errors.properties && (

              <p className="text-red-500 text-sm mt-1">

                {errors.properties.message}

              </p>

            )}

          </div>



          {/* Buttons */}

          <div className="flex justify-end gap-3">

            <button

              type="button"

              onClick={() => setShowEditModal(false)}

              className="px-5 py-2 rounded-4xl bg-red-500 text-white text-sm hover:bg-gray-500 transition"

            >

              Cancel

            </button>



            <button

              type="submit"

              className="px-5 py-2 rounded-4xl bg-blue-600 text-white text-sm hover:bg-blue-700 transition"

            >

              Save Changes

            </button>

          </div>

        </form>

      </div>

    </div>

  );

};



export default ShowEditModal;