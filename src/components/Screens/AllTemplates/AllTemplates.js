import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getResumeData,
  getSelectResumeTemplateAction,
  selectResumeTemplateAction,
} from "../../../redux/actions/resumeAction";

import AllTemplatesMarkup from "./AllTemplatesMarkup";

const AllTemplates = (props) => {
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

  const { resumeTemplateData, coverLetterData } = useSelector(
    (state) => state.resumeData
  );
  const { resumeTemplateGetData } = useSelector((state) => state.getResumeData);

  const { user } = useSelector((state) => state.currentUser);
  const { loading, templateData } = useSelector(
    (state) => state.selectTemplate
  );

  const [isShowTemplateCard, setIsShowTemplateCard] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const selectTemplateHandler = (item) => {
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
  };

  const selectTemplateTwoHandler = (item) => {
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
  };

  const selectTempColorObj = (item, index) => {
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
  };

  useEffect(() => {
    dispatch(getSelectResumeTemplateAction(user));
    dispatch(getResumeData(user));
  }, [dispatch, user]);

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
      coverLetterData={coverLetterData}
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
      templateData={templateData}
      loading={loading}
    />
  );
};

export default AllTemplates;
