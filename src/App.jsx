import {  Navigate, Route, Routes } from "react-router-dom";
// import { RouteLoaderProvider } from "./Components/RouteLoaderContext";
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
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/managemember" element={<ManagerMember />} />
        <Route path="/manage-member" element={<Navigate to="/managemember" replace />} />
        <Route path="/addmember" element={<ManageMemberAction />} />
        <Route path="/allottproperty" element={<AllottProperty />} />
        <Route path="/transferproperty" element={<TransferProperty />} />
        <Route path="/transfer-property" element={<Navigate to="/transferproperty" replace />} />
        <Route path="/updatepayment" element={<UpdatePayment />} />
        <Route path="/propertyhistory" element={<PropertyHistory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
  
      </Routes>
    </Loader>
  );
};

export default App;
