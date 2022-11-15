import React, { useState } from "react";
import DashboardMarkup from "./DashboardMarkup";

const Dashboard = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <DashboardMarkup
      {...props}
      toggleDrawer={toggleDrawer}
      openDrawer={openDrawer}
    />
  );
};

export default Dashboard;
