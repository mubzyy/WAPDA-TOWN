import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouteLoaderProvider } from "./Components/RouteLoaderContext";
import Login from "./Pages/Login";
import ManageMemberAction from "./Pages/ManageMemberAction";
import TransferProperty from "./Pages/TransferProperty";
import ManagerMember from "./Pages/ManagerMember";
import AllottProperty from "./Pages/AllottProperty";
import UpdatePayment from "./Pages/UpdatePayment";
import PropertyHistory from "./Pages/PropertyHistory";
import MainPage from "./Pages/MainPage"
import Loader from "./MainPage/Loader";


const App = () => {
  return (
    //     <div>
    // <MainPage/>
    //     </div>
    <Loader>
      <Routes>
        <Route path="/" element={<ManagerMember />} />
        <Route path="/members" element={<ManagerMember />} />
        <Route path="/allottproperty" element={<AllottProperty />} />
        <Route path="/updatepayment" element={<UpdatePayment />} />
        <Route path="/propertyhistory" element={<PropertyHistory />} />
      
        {/* <Route path="/" element={<Navigate to="/transfer-property" replace />} /> */}
        {/* <Route path="/dashboard" element={<Login />} />
       <Route path="/manage-member" element={<ManageMemberAction />} />
        <Route path="/transfer-property" element={<TransferProperty />} />
         <Route path="*" element={<Navigate to="/transfer-property" replace />} /> */}
      </Routes>
    </Loader>
  );
};

export default App;
