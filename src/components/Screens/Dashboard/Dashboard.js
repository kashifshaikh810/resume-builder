import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getSelectResumeTemplateAction,
} from "../../../redux/actions/resumeAction";

import DashboardMarkup from "./DashboardMarkup";

const Dashboard = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navigate = props.navigate();

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.currentUser);
  const { templateData, error } = useSelector((state) => state.selectTemplate);

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  useEffect(() => {
    dispatch(getSelectResumeTemplateAction(user));

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, user, error]);

  return (
    <DashboardMarkup
      {...props}
      toggleDrawer={toggleDrawer}
      openDrawer={openDrawer}
      navigate={navigate}
      loading={loading}
      user={user}
    />
  );
};

export default Dashboard;
