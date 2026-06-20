import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WapdaLogo from "../assets/WapdaLOGO.png";

const LoaderOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-20 w-20 lg:h-28 lg:w-28 items-center justify-center rounded-full bg-white shadow-lg  ring-1 ring-[#112074]/10">
          <div className="absolute inset-0 rounded-full border-4 border-[#112074]/15 border-t-[#112074]  animate-spin" />
          <img
            src={WapdaLogo}
            alt="WAPDA"
            className="h-20 w-20 rounded-full object-contain"
          />
        </div>

        <div className="w-56 overflow-hidden rounded-full bg-white shadow-inner">
          <div className="h-1.5 w-1/2 rounded-full bg-[#112074] animate-[wapda-loader_1.15s_ease-in-out_infinite]" />
        </div>

        <p className="  text-xs lg:text-xl font-semibold tracking-wide text-[#112074]">
          Loading WAPDA Portal...
        </p>
      </div>
    </div>
  );
};

const Loader = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 650);

    return () => clearTimeout(loaderTimer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <LoaderOverlay />}
      {children}
    </>
  );
};

export default Loader;
