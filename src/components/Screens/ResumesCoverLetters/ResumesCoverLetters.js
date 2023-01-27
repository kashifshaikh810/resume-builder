import React, { useState } from "react";
import ResumesCoverLettersMarkup from "./ResumesCoverLettersMarkup";
import { useSelector } from "react-redux";

const ResumesCoverLetters = (props) => {
  const { data } = useSelector((state) => state.resumeData);

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
      resumeData={data}
    />
  );
};

export default ResumesCoverLetters;
