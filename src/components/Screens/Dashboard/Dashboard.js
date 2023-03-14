import React, { useState } from "react";

import DashboardMarkup from "./DashboardMarkup";

const Dashboard = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navigate = props.navigate();

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <DashboardMarkup
      {...props}
      toggleDrawer={toggleDrawer}
      openDrawer={openDrawer}
      navigate={navigate}
    />
  );
};

export default Dashboard;
