import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteLoaderProvider } from "./Components/RouteLoaderContext";
import Login from "./Pages/Login";
import ManageMemberAction from "./Pages/ManageMemberAction";
import TransferProperty from "./Pages/TransferProperty";

const App = () => {
  return (
    <BrowserRouter>
      <RouteLoaderProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/transfer-property" replace />} />
          <Route path="/dashboard" element={<Login />} />
          <Route path="/manage-member" element={<ManageMemberAction />} />
          <Route path="/transfer-property" element={<TransferProperty />} />
          <Route path="*" element={<Navigate to="/transfer-property" replace />} />
        </Routes>
      </RouteLoaderProvider>
    </BrowserRouter>
  );
};

export default App;
