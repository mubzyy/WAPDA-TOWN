import { Routes, Route } from "react-router-dom";

import ManagerMember from "./Pages/ManagerMember";
import AllottProperty from "./Pages/AllottProperty";
import UpdatePayment from "./Pages/UpdatePayment";
import PropertyHistory from "./Pages/PropertyHistory";
import  MainPage from "./Pages/MainPage"
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
      </Routes>
    </Loader> 
  );
};

export default App;
