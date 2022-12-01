import React, { useState } from "react";
import EditResumeMarkup from "./EditResumeMarkup";

const EditResume = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const { innerWidth: width } = window;

  return (
    <EditResumeMarkup
      {...props}
      isMenuShown={isMenuShown}
      setIsMenuShown={setIsMenuShown}
      screenWidth={width}
    />
  );
};

export default EditResume;
