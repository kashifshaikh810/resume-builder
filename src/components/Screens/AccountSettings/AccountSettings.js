import React, { useState } from "react";

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

  const onSaveHandler = () => {};

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
    />
  );
};

export default AccountSettings;
