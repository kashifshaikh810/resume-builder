import React, { useState } from "react";
import ResumesCoverLettersMarkup from "./ResumesCoverLettersMarkup";

const ResumesCoverLetters = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navigate = props.navigate();

  return (
    <ResumesCoverLettersMarkup
      {...props}
      navigate={navigate}
      isMenuShown={isMenuShown}
      setIsMenuShown={setIsMenuShown}
    />
  );
};

export default ResumesCoverLetters;
