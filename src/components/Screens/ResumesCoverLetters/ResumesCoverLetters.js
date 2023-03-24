import React, { useEffect, useState } from "react";
import ResumesCoverLettersMarkup from "./ResumesCoverLettersMarkup";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../../redux/actions/authAction";
import {
  clearErrors,
  getSelectResumeTemplateAction,
  resumeTitleAction,
} from "../../../redux/actions/resumeAction";

const ResumesCoverLetters = (props) => {
  const dispatch = useDispatch();
  const { data, coverLetterData } = useSelector((state) => state.resumeData);
  const { templateData } = useSelector((state) => state.selectTemplate);
  const { loading, titleData, error } = useSelector(
    (state) => state.resumeTitle
  );
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

  const resumeTitleOnClickHandler = () => {
    const data = {
      resumeTitle: untitledInput,
      resumeTitleUpdated: Date.now(),
    };

    dispatch(resumeTitleAction(user, data));
    setIsShowUntitledInput(!isShowUntitledInput);
  };

  useEffect(() => {
    dispatch(getSelectResumeTemplateAction(user));

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, user, error]);

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
      resumeTitleOnClickHandler={resumeTitleOnClickHandler}
      titleData={titleData}
    />
  );
};

export default ResumesCoverLetters;
