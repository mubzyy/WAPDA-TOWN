import WapdaLOGO from "../assets/WapdaLOGO.jpeg";
import Avatar from "../assets/Avatar.png";
import { FaBell } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FcSearch } from "react-icons/fc";

const Header = () => {
  return (
    <header className="h-20 border-b border-orange-200/80 bg-gradient-to-r from-[#f7d7b3] via-[#fbe2c8] to-[#f7d7b3] shadow-sm">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="shrink-0 rounded-xl bg-white/80 p-1.5 shadow-sm ring-1 ring-white/60">
            <img
              className="h-12 w-12 rounded-lg object-contain sm:h-14 sm:w-14"
              src={WapdaLOGO}
              alt="WapdaLogo"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-base font-semibold leading-tight tracking-tight text-blue-950 sm:text-lg">
              Rawalpindi / Islamabad WAPDA Employees
            </p>
            <p className="truncate text-xs font-medium leading-tight text-blue-800/90 sm:text-sm">
              Co-Operative Housing Society
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-blue-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-blue-200 active:translate-y-0 sm:h-10 sm:w-10">
            <MdCalendarMonth className="text-lg sm:text-xl" />
          </button>

          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-blue-900 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-blue-200 active:translate-y-0 sm:h-10 sm:w-10">
            <FaBell className="text-base sm:text-lg" />
          </button>

          <div className="group relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-48 rounded-full border border-blue-700/40 bg-white px-4 pr-11 text-sm text-slate-700 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 group-hover:border-blue-500 lg:w-56"
            />

            <button className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition duration-200 hover:scale-105 hover:bg-blue-100">
              <FcSearch className="text-lg" />
            </button>
          </div>

          <button className="ml-1 flex items-center gap-2 rounded-full bg-white/75 px-1.5 py-1 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-blue-200 active:translate-y-0 sm:px-2">
            <img
              src={Avatar}
              alt="User avatar"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-white sm:h-9 sm:w-9"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
