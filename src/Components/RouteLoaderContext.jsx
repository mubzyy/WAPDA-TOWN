import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import WapdaLOGO from "../assets/WapdaLOGO.jpeg";

const RouteLoaderContext = createContext(null);

export const RouteLoaderProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const startRouteLoading = (path) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsLoading(true);
    navigate(path);

    timerRef.current = setTimeout(() => {
      setIsLoading(false);
      timerRef.current = null;
    }, 1000);
  };

  return (
    <RouteLoaderContext.Provider value={{ startRouteLoading }}>
      {children}
      {isLoading && (
        <div className="route-loader-overlay" role="status" aria-label="Loading page">
          <div className="route-loader-panel">
            <div className="route-loader-logo-wrap">
              <img src={WapdaLOGO} alt="WAPDA logo" className="route-loader-logo" />
            </div>
            <div className="route-loader-track">
              <span className="route-loader-line" />
            </div>
          </div>
        </div>
      )}
    </RouteLoaderContext.Provider>
  );
};

export const useRouteLoader = () => {
  const context = useContext(RouteLoaderContext);

  if (!context) {
    throw new Error("useRouteLoader must be used inside RouteLoaderProvider");
  }

  return context;
};
