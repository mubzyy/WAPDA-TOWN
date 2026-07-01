// import Header from "../Components/Header";
// import Navbar from "../Components/Navbar";
// import NotificationBar from "../Components/NotificationBar";
import UpdatedHeader from "../MainPage/UpdatedHeader";
import NotificationBar from "../MainPage/NotificationBar";
import ImportantEvents from "../Components/ImportantEvents";
import Dashboard from "../Components/Dashboard";
import SignupNavbar from "../MainPage/SignupNavbar";

const Login = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <UpdatedHeader />
      <SignupNavbar />
      <div className="flex w-full flex-col gap-4 p-3 sm:p-4 lg:flex-row lg:items-stretch bg-[#ebf1de]">
        <div className="w-full overflow-hidden rounded-xl bg-[#ebf1de] shadow-sm lg:flex lg:w-3/4">
          <Dashboard />
        </div>
        <div className="w-full lg:flex lg:w-1/4">
          <ImportantEvents />
        </div>
      </div>
    </div>
  );
};

export default Login;
