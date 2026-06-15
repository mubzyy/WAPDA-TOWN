import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all"
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="mx-2 w-94 border-2 bg-[#ebf1de] p-4 rounded-lg shadow-md">

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* EMAIL */}
        <div className="flex items-start gap-4">

          <label className="w-24 pt-2">Email :</label>

          <div className="w-full">

            <input
              className="bg-white text-sm p-2 w-full border rounded outline-none"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Format"
                }
              })}
              placeholder="Email"
            />

            <p className="text-red-500 text-sm h-5">
              {errors.email?.message }
            </p>

          </div>
        </div>

        {/* PASSWORD */}
        <div className="flex items-start gap-4">

          <label className="w-24 pt-2">Password:</label>

          <div className="w-full relative">

            <input
              type={showPassword ? "text" : "password"}
              className="bg-white text-sm p-2 pr-10 w-full border rounded outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must contain 6 characters"
                }
              })}
              placeholder="Password"
            />

            {/* EYE ICON */}
            <div
              className="absolute right-3 top-1/2 -translate-y-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>

            <p className="text-red-500 text-sm h-5">
              {errors.password?.message }
            </p>

          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-4">

          <button className="border-2 rounded-xl bg-[#112074] text-white p-1 w-30">
            SignUp
          </button>

          <button type="submit" className="border-2 rounded-xl bg-yellow-600 text-white p-1 w-30">
            Login
          </button>

        </div>

      </form>

    </div>
  )
}

export default LoginCard