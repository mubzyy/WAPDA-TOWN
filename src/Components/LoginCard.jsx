const LoginCard = () => {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Member Access
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Login to your account
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Use your registered email and password to continue.
        </p>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="button"
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-900"
          >
            Sign Up
          </button>

          <button
            type="submit"
            className="rounded-2xl bg-[#112074] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d185b]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
