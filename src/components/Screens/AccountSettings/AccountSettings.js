import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";

import { Auth } from "../../../Firebase/FirebaseConfig";
import AccountSettingsMarkup from "./AccountSettingsMarkup";

const AccountSettings = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isViews, setIsViews] = useState(false);
  const [isUseful, setIsUseful] = useState(false);

  // inputs states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(Auth);

  const { user: reduxUser } = useSelector((state) => state.currentUser);

  const onSaveHandler = () => {};

  useEffect(() => {
    setFirstName(reduxUser?.firstName);
    setLastName(reduxUser?.lastName);
    setEmail(reduxUser?.email);
  }, [reduxUser]);

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
    />
  );
};

export default AccountSettings;
