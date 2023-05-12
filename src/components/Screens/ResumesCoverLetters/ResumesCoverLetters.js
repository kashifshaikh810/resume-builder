import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOutAction } from "../../../redux/actions/authAction";
import {
  clearErrorsFromCoverLetter,
  coverLetterTitleAction,
  getCoverLetterTitleAction,
} from "../../../redux/actions/coverLetterAction";
import ResumesCoverLettersMarkup from "./ResumesCoverLettersMarkup";
import {
  clearErrors,
  getResumeData,
  getResumeTitleAction,
  getSelectResumeTemplateAction,
  resumeTitleAction,
} from "../../../redux/actions/resumeAction";

const ResumesCoverLetters = (props) => {
  const dispatch = useDispatch();
  const { coverLetterData } = useSelector((state) => state.resumeData);
  const {
    loading: resumeDataLoading,
    resumeTemplateGetData,
    error: resumeDataError,
  } = useSelector((state) => state.getResumeData);
  const { templateData } = useSelector((state) => state.selectTemplate);
  const { loading, titleData, error } = useSelector(
    (state) => state.resumeTitle
  );
  const {
    loading: coverLetterTitleLoading,
    coverLetterTitleData,
    error: coverLetterTitleError,
  } = useSelector((state) => state.coverLetterTitle);
  const { user } = useSelector((state) => state.currentUser);

  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isShowLine, setIsShowLine] = useState("resumes");
  const navigate = props.navigate();

  const updateResumeTitleDate = new Date(
    titleData?.resumeTitleUpdated
  ).getDate();
  const month = new Date(titleData?.resumeTitleUpdated).getMonth();

  const updateCoverLetterTitleDate = new Date(
    coverLetterTitleData?.coverLetterTitleUpdated
  ).getDate();
  const coverLetterTitleMonth = new Date(
    coverLetterTitleData?.coverLetterTitleUpdated
  ).getMonth();

  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const updateResumeTitleMonth = new Date(titleData?.resumeTitleUpdated)
    ? monthNames[month]
    : "";

  const updateResumeTitleTime =
    new Date(titleData?.resumeTitleUpdated).getHours() +
    ":" +
    new Date(titleData?.resumeTitleUpdated).getMinutes();

  const updateCoverLetterTitleMonthName = new Date(
    titleData?.resumeTitleUpdated
  )
    ? monthNames[month]
    : "";

  const updateCoverLetterTitleTime =
    new Date(coverLetterTitleData?.coverLetterTitleUpdated).getHours() +
    ":" +
    new Date(coverLetterTitleData?.coverLetterTitleUpdated).getMinutes();

  const resumeTempId = 29364313;
  const coverTempId = 54274626;

  // input
  const [untitledInput, setUntitledInput] = useState(
    titleData?.resumeTitle ? titleData?.resumeTitle : "Untitled"
  );
  const [isShowUntitledIcon, setIsShowUntitledIcon] = useState(false);
  const [isShowUntitledInput, setIsShowUntitledInput] = useState(false);

  // cover letters input
  const [coverLetterUntitledInput, setCoverLetterUntitledInput] = useState(
    coverLetterTitleData?.coverLetterTitle
      ? coverLetterTitleData?.coverLetterTitle
      : "Untitled"
  );
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
    setIsShowUntitledInput(!isShowUntitledInput);

    if (isShowUntitledInput) {
      dispatch(resumeTitleAction(user, data));
    }
  };

  const coverLetterTitleOnClickHandler = () => {
    const data = {
      coverLetterTitle: coverLetterUntitledInput,
      coverLetterTitleUpdated: Date.now(),
    };
    setIsShowCoverLetterUntitledInput(!isShowCoverLetterUntitledInput);

    if (isShowCoverLetterUntitledInput) {
      dispatch(coverLetterTitleAction(user, data));
    }
  };

  useEffect(() => {
    dispatch(getSelectResumeTemplateAction(user));
    dispatch(getResumeTitleAction(user));
    dispatch(getResumeData(user));
    dispatch(getCoverLetterTitleAction(user));

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (coverLetterTitleError) {
      alert(coverLetterTitleError);
      dispatch(clearErrorsFromCoverLetter());
    }
  }, [dispatch, user, error, coverLetterTitleError]);

  useEffect(() => {
    if (titleData) {
      setUntitledInput(titleData?.resumeTitle);
    }
  }, [titleData]);

  useEffect(() => {
    if (coverLetterTitleData) {
      setCoverLetterUntitledInput(coverLetterTitleData?.coverLetterTitle);
    }
  }, [coverLetterTitleData]);

  return (
    <ResumesCoverLettersMarkup
      {...props}
      navigate={navigate}
      isMenuShown={isMenuShown}
      setIsMenuShown={setIsMenuShown}
      isShowLine={isShowLine}
      setIsShowLine={setIsShowLine}
      resumeData={resumeTemplateGetData?.data}
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
      updateResumeTitleDate={updateResumeTitleDate}
      updateResumeTitleMonth={updateResumeTitleMonth}
      updateResumeTitleTime={updateResumeTitleTime}
      loading={resumeDataLoading}
      coverLetterTitleOnClickHandler={coverLetterTitleOnClickHandler}
      coverLetterTitleData={coverLetterTitleData}
      updateCoverLetterTitleDate={updateCoverLetterTitleDate}
      coverLetterTitleMonth={coverLetterTitleMonth}
      updateCoverLetterTitleTime={updateCoverLetterTitleTime}
      updateCoverLetterTitleMonthName={updateCoverLetterTitleMonthName}
    />
  );
};

export default ResumesCoverLetters;
