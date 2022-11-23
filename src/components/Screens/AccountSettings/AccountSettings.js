import React, { useState } from "react";
import AccountSettingsMarkup from "./AccountSettingsMarkup";

const AccountSettings = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isViews, setIsViews] = useState(false);
  const [isUseful, setIsUseful] = useState(false);

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
    />
  );
};

export default AccountSettings;
