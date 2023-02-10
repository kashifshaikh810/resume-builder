import React, { useState } from "react";
import ResumesCoverLettersMarkup from "./ResumesCoverLettersMarkup";
import { useSelector } from "react-redux";

const ResumesCoverLetters = (props) => {
  const { data } = useSelector((state) => state.resumeData);

  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isShowLine, setIsShowLine] = useState("resumes");
  const navigate = props.navigate();

  // input
  const [untitledInput, setUntitledInput] = useState("Untitled");
  const [isShowUntitledIcon, setIsShowUntitledIcon] = useState(false);
  const [isShowUntitledInput, setIsShowUntitledInput] = useState(false);

  return (
    <ResumesCoverLettersMarkup
      {...props}
      navigate={navigate}
      isMenuShown={isMenuShown}
      setIsMenuShown={setIsMenuShown}
      isShowLine={isShowLine}
      setIsShowLine={setIsShowLine}
      resumeData={data}
      untitledInput={untitledInput}
      setUntitledInput={setUntitledInput}
      isShowUntitledIcon={isShowUntitledIcon}
      setIsShowUntitledIcon={setIsShowUntitledIcon}
      isShowUntitledInput={isShowUntitledInput}
      setIsShowUntitledInput={setIsShowUntitledInput}
    />
  );
};

export default ResumesCoverLetters;
