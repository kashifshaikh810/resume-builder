import React, { useEffect, useRef, useState, ComponentRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import {
  getCoverLetterDataAction,
  getSelectCoverLetterTemplateAction,
  selectCoverLetterTemplateAction,
} from "../../../redux/actions/coverLetterAction";

import {
  getResumeData,
  getSelectResumeTemplateAction,
  selectResumeTemplateAction,
} from "../../../redux/actions/resumeAction";

import AllTemplatesMarkup from "./AllTemplatesMarkup";

const AllTemplates = (props) => {
  const componentPDF = useRef();
  const navigate = props.navigate();
  const [isSelectedTemplate, setIsSelectedTemplate] = useState({
    nameOfSelectedVal: "",
    numOfSelectedVal: Number,
    isChanged: false,
  });

  const tabName = useParams()?.tabName;

  const resumeTempId = 29364313;
  const coverTempId = 54274626;

  const dispatch = useDispatch();

  const { resumeTemplateData } = useSelector((state) => state.resumeData);
  const { loading: coverLetterLoading, getCoverLetterTemplateData } =
    useSelector((state) => state.getCoverLetterData);
  const { resumeTemplateGetData } = useSelector((state) => state.getResumeData);

  const { user } = useSelector((state) => state.currentUser);
  const { loading, templateData, error } = useSelector(
    (state) => state.selectTemplate
  );

  const {
    loading: coverLetterSelectedTemplateLoading,
    coverLetterSelectedTemplateData,
  } = useSelector((state) => state.selectCoverLetterTemplate);

  const [isShowTemplateCard, setIsShowTemplateCard] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const selectTemplateHandler = (item) => {
    if (tabName === "resumes") {
      setIsSelectedTemplate({
        nameOfSelectedVal: item.name,
        numOfSelectedVal: item.id,
        isChanged: true,
      });
      dispatch(
        selectResumeTemplateAction(user, item.name, {
          nameOfSelectedVal: item.name,
          numOfSelectedVal: item.id,
          isChanged: true,
        })
      );
    } else {
      setIsSelectedTemplate({
        nameOfSelectedVal: item.name,
        numOfSelectedVal: item.id,
        isChanged: true,
      });
      dispatch(
        selectCoverLetterTemplateAction(user, item?.name, {
          nameOfSelectedVal: item.name,
          numOfSelectedVal: item.id,
          isChanged: true,
        })
      );
    }
  };

  const selectTemplateTwoHandler = (item) => {
    if (tabName === "resumes") {
      setIsSelectedTemplate({
        nameOfSelectedVal: item.name,
        numOfSelectedVal: item.id,
      });
      dispatch(
        selectResumeTemplateAction(user, item.name, {
          nameOfSelectedVal: item.name,
          numOfSelectedVal: item.id,
        })
      );
    } else {
      setIsSelectedTemplate({
        nameOfSelectedVal: item.name,
        numOfSelectedVal: item.id,
      });
      dispatch(
        selectCoverLetterTemplateAction(user, item?.name, {
          nameOfSelectedVal: item.name,
          numOfSelectedVal: item.id,
        })
      );
    }
  };

  const selectTempColorObj = (item, index) => {
    if (tabName === "resumes") {
      if (
        templateData?.isSelectedTemplate?.numOfSelectedVal === item.id &&
        templateData?.isSelectedTemplate?.nameOfSelectedVal === item.name
      ) {
        if (
          isSelectedTemplate?.isChanged ||
          templateData?.isSelectedTemplate?.isChanged
        ) {
          return "text-white";
        } else {
          return "border-[4px] border-blue-400";
        }
      }
    } else {
      if (
        coverLetterSelectedTemplateData?.isSelectedCoverLetterTemplate
          ?.numOfSelectedVal === item.id &&
        coverLetterSelectedTemplateData?.isSelectedCoverLetterTemplate
          ?.nameOfSelectedVal === item.name
      ) {
        if (
          isSelectedTemplate?.isChanged ||
          coverLetterSelectedTemplateData?.isSelectedCoverLetterTemplate
            ?.isChanged
        ) {
          return "text-white";
        } else {
          return "border-[4px] border-blue-400";
        }
      }
    }
  };

  const downloadPDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: `${user?.firstName}'s Resume`,
    onAfterPrint: () => alert("Downloaded Successfully"),
    onPrintError: () => alert("Something went wrong..."),
  });

  useEffect(() => {
    if (tabName === "resumes") {
      dispatch(getSelectResumeTemplateAction(user));
      dispatch(getResumeData(user));
    } else {
      dispatch(getSelectCoverLetterTemplateAction(user));
      dispatch(getCoverLetterDataAction(user));
    }
  }, [dispatch, user, tabName]);

  return (
    <AllTemplatesMarkup
      {...props}
      navigate={navigate}
      isSelectedTemplate={isSelectedTemplate}
      setIsSelectedTemplate={setIsSelectedTemplate}
      isShowTemplateCard={isShowTemplateCard}
      setIsShowTemplateCard={setIsShowTemplateCard}
      page={page}
      setPage={setPage}
      totalPage={totalPage}
      setTotalPage={setTotalPage}
      tabName={tabName}
      coverLetterData={getCoverLetterTemplateData?.data}
      resumeData={
        resumeTemplateData?.data
          ? resumeTemplateData?.data
          : resumeTemplateGetData?.data
      }
      resumeTempId={resumeTempId}
      coverTempId={coverTempId}
      selectTemplateHandler={selectTemplateHandler}
      selectTempColorObj={selectTempColorObj}
      selectTemplateTwoHandler={selectTemplateTwoHandler}
      templateData={
        tabName === "resumes" ? templateData : coverLetterSelectedTemplateData
      }
      loading={loading ? loading : coverLetterLoading}
      downloadPDF={downloadPDF}
      componentPDF={componentPDF}
    />
  );
};

export default AllTemplates;
