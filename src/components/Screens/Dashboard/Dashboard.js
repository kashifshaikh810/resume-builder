import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../../../Firebase/FirebaseConfig";
import { getCurrentUser } from "../../../redux/actions/authAction";
import DashboardMarkup from "./DashboardMarkup";

const Dashboard = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navigate = props.navigate();
  const dispatch = useDispatch();

  const { loading, user } = useSelector((state) => state.userSignIn);

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  useEffect(() => {
    return dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <DashboardMarkup
      {...props}
      toggleDrawer={toggleDrawer}
      openDrawer={openDrawer}
      navigate={navigate}
      user={user}
    />
  );
};

export default Dashboard;
