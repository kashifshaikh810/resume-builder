import React, { useEffect, useState } from "react";
import ResumesCoverLettersMarkup from "./ResumesCoverLettersMarkup";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../../redux/actions/authAction";
import { getSelectResumeTemplateAction } from "../../../redux/actions/resumeAction";

const ResumesCoverLetters = (props) => {
  const dispatch = useDispatch();
  const { data, coverLetterData } = useSelector((state) => state.resumeData);
  const { templateData } = useSelector((state) => state.selectTemplate);
  const { user } = useSelector((state) => state.currentUser);

  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isShowLine, setIsShowLine] = useState("resumes");
  const navigate = props.navigate();

  const resumeTempId = 29364313;
  const coverTempId = 54274626;

  // input
  const [untitledInput, setUntitledInput] = useState("Untitled");
  const [isShowUntitledIcon, setIsShowUntitledIcon] = useState(false);
  const [isShowUntitledInput, setIsShowUntitledInput] = useState(false);

  // cover letters input
  const [coverLetterUntitledInput, setCoverLetterUntitledInput] =
    useState("Untitled");
  const [isShowCoverLetterUntitledIcon, setIsShowCoverLetterUntitledIcon] =
    useState(false);
  const [isShowCoverLetterUntitledInput, setIsShowCoverLetterUntitledInput] =
    useState(false);

  const logOutOnClickHandler = () => {
    dispatch(logOutAction());
  };

  useEffect(() => {
    dispatch(getSelectResumeTemplateAction(user));
  }, [dispatch, user]);

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
      coverLetterUntitledInput={coverLetterUntitledInput}
      setCoverLetterUntitledInput={setCoverLetterUntitledInput}
      isShowCoverLetterUntitledIcon={isShowCoverLetterUntitledIcon}
      setIsShowCoverLetterUntitledIcon={setIsShowCoverLetterUntitledIcon}
      isShowCoverLetterUntitledInput={isShowCoverLetterUntitledInput}
      setIsShowCoverLetterUntitledInput={setIsShowCoverLetterUntitledInput}
      coverLetterData={coverLetterData}
      logOutOnClickHandler={logOutOnClickHandler}
      templateData={templateData}
      resumeTempId={resumeTempId}
      coverTempId={coverTempId}
    />
  );
};

export default ResumesCoverLetters;
