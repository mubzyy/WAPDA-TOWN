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
        <Route path="/managemember" element={<ManagerMember />} />
        <Route path="/addmember" element={<ManageMemberAction />} />
        <Route path="/allottproperty" element={<AllottProperty />} />
        <Route path="/transferproperty" element={<TransferProperty />} />
        <Route path="/updatepayment" element={<UpdatePayment />} />
        <Route path="/propertyhistory" element={<PropertyHistory />} />
  
      </Routes>
    </Loader>
  );
};

export default App;
