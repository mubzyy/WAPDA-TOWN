import React from "react";
import NotificationBar from "../Components/NotificationBar";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import ManageMemberSearch from "../Components/ManageMemberSearch";

const ManageMemberAction = () => {
  return (
    <div className="pb-6">
      <NotificationBar />
      <Header />
      <Navbar />
      <div className="w-full">
        <ManageMemberSearch />
      </div>
    </div>
  );
};

export default ManageMemberAction;
