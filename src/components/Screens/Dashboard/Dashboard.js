import React, { useState } from "react";
import { useSelector } from "react-redux";

import DashboardMarkup from "./DashboardMarkup";

const Dashboard = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navigate = props.navigate();

  const { loading, user, error } = useSelector((state) => state.currentUser);

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <DashboardMarkup
      {...props}
      toggleDrawer={toggleDrawer}
      openDrawer={openDrawer}
      navigate={navigate}
      loading={loading}
    />
  );
};

export default Dashboard;
