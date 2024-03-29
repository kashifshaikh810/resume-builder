import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../../redux/actions/profileAction";
import {
  clearErrors,
  getAllResumesDataAction,
  getResumeData,
  getSelectResumeTemplateAction,
} from "../../../redux/actions/resumeAction";

import DashboardMarkup from "./DashboardMarkup";

const Dashboard = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navigate = props.navigate();

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.currentUser);
  const { error } = useSelector((state) => state.selectTemplate);
  const { allResumes } = useSelector((state) => state.getAllResumesData);
  const { users } = useSelector((state) => state.getAllUsers);

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  useEffect(() => {
    dispatch(getAllUsersAction());
    dispatch(getAllResumesDataAction());
    dispatch(getSelectResumeTemplateAction(user));

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (user) {
      dispatch(getResumeData(user));
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
      allResumes={allResumes}
      users={users}
    />
  );
};

export default Dashboard;
