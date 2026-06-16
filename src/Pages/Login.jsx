import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import NotificationBar from "../Components/NotificationBar";
import Sidebar from "../Components/Dashboard";
import ImportantEvents from "../Components/ImportantEvents";
import Dashboard from "../Components/Dashboard";
const Login = () => {
  return (
    <div className="min-h-screen ">
      <NotificationBar />
      <Header />
      <Navbar />
      <div className="flex flex-row p-4 w-full">
        <div className="w-[70%] border  border-r-0">
        <Dashboard/>
        </div>
        <div className="w-[30%]">
          <ImportantEvents />
        </div>
      </div>
    </div>
  );
};

export default Login;
