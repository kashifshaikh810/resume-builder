import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";

import { Auth } from "../../../Firebase/FirebaseConfig";
import {
  clearErrors,
  deleteUserAction,
  updateProfileAction,
} from "../../../redux/actions/profileAction";
import {
  DELETE_USER_RESET,
  UPDATE_PROFILE_RESET,
} from "../../../redux/constants/profileConstants";
import AccountSettingsMarkup from "./AccountSettingsMarkup";

const AccountSettings = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isViews, setIsViews] = useState(false);
  const [isUseful, setIsUseful] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // inputs states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(Auth);
  const dispatch = useDispatch();
  const navigate = props.navigate();

  const { user: reduxUser } = useSelector((state) => state.currentUser);
  const {
    loading: isUpdateLoading,
    isUpdated,
    error: isUpdateError,
  } = useSelector((state) => state.userProfile);
  const {
    loading: deletedLoading,
    isDeleted,
    error: deletedError,
  } = useSelector((state) => state.deleteUser);

  const onSaveHandler = () => {
    if (firstName || lastName || email) {
      dispatch(updateProfileAction(user, firstName, lastName, email));
    }
  };

  const deleteAccountOnClickHandler = () => {
    dispatch(deleteUserAction(user));
  };

  useEffect(() => {
    setFirstName(reduxUser?.firstName);
    setLastName(reduxUser?.lastName);
    setEmail(reduxUser?.email);

    if (isUpdateError) {
      alert(isUpdateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      dispatch({ type: UPDATE_PROFILE_RESET });
    }

    if (isDeleted) {
      navigate("/");
      dispatch({ type: DELETE_USER_RESET });
    }

    if (deletedError) {
      alert(deletedError);
      dispatch(clearErrors());
    }

    if (error) {
      alert(error);
    }
  }, [
    reduxUser,
    isUpdateError,
    dispatch,
    isUpdated,
    isDeleted,
    deletedError,
    navigate,
    error,
  ]);

  useEffect(() => {
    if (isUpdateLoading) {
      setTimeout(() => {
        setIsDone(true);
      }, 1000);
    }

    if (isUpdateLoading === false) {
      setTimeout(() => {
        setIsDone(false);
      }, 1000);
    }
  }, [isUpdateLoading]);

  return (
    <AccountSettingsMarkup
      {...props}
      isMenuShown={isMenuShown}
      setIsMenuShown={setIsMenuShown}
      isUpdate={isUpdate}
      setIsUpdate={setIsUpdate}
      isViews={isViews}
      setIsViews={setIsViews}
      isUseful={isUseful}
      setIsUseful={setIsUseful}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      onSaveHandler={onSaveHandler}
      loading={loading}
      isUpdateLoading={isUpdateLoading}
      isDone={isDone}
      deleteAccountOnClickHandler={deleteAccountOnClickHandler}
      deletedLoading={deletedLoading}
    />
  );
};

export default AccountSettings;
