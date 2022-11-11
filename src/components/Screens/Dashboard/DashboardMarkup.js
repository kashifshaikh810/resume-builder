import React from "react";
import Header from "../../Header/Header";

const DashboardMarkup = (props) => {
  return (
    <div className="h-96 w-full bg-gray-200">
      <Header {...props} />
      <p>dashboard</p>
    </div>
  );
};

export default DashboardMarkup;
