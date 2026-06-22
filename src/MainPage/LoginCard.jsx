import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail, FiUserPlus } from "react-icons/fi";

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
    <div className=" w-[92%] max-w-[430px] overflow-hidden rounded-2xl border border-white/35 bg-white/15 p-6 text-white shadow-2xl shadow-slate-950/35 backdrop-blur-xl">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-200">
          Member Portal
        </p>
        <h2 className="mt-2 text-3xl font-bold leading-tight">
          Welcome to the Wapda
        </h2>
        <p className="mt-2 text-sm text-white/75">
          Sign in to manage society records and payments.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white/85">Email</label>

          <div className="relative">
            <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              className="w-full rounded-xl border border-white/25 bg-white/90 py-3 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-yellow-300 focus:bg-white focus:ring-4 focus:ring-yellow-300/25"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email Format"
                }
              })}
              placeholder="Email"
            />
          </div>

          <p className="mt-1 min-h-5 text-sm text-yellow-200">
            {errors.email?.message}
          </p>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white/85">Password</label>

          <div className="relative">
            <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full rounded-xl border border-white/25 bg-white/90 py-3 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-yellow-300 focus:bg-white focus:ring-4 focus:ring-yellow-300/25"
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
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-blue-900"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <p className="mt-1 min-h-5 text-sm text-yellow-200">
            {errors.password?.message}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button type="button" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/25">
            <FiUserPlus />
            SignUp
          </button>

          <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-3 text-sm font-bold text-blue-950 shadow-lg shadow-yellow-900/20 transition hover:bg-yellow-400">
            Login
            <FiArrowRight />
          </button>

        </div>

      </form>

    </div>
  )
}

export default LoginCard
