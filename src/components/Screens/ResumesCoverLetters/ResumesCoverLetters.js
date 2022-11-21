import React, { useState } from "react";
import ResumesCoverLettersMarkup from "./ResumesCoverLettersMarkup";

const ResumesCoverLetters = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isShowLine, setIsShowLine] = useState("resumes");
  const navigate = props.navigate();

  return (
    <ResumesCoverLettersMarkup
      {...props}
      navigate={navigate}
      isMenuShown={isMenuShown}
      setIsMenuShown={setIsMenuShown}
      isShowLine={isShowLine}
      setIsShowLine={setIsShowLine}
    />
  );
};

export default ResumesCoverLetters;
