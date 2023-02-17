import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AllTemplatesMarkup from "./AllTemplatesMarkup";

const AllTemplates = (props) => {
  const navigate = props.navigate();
  const [isSelectedTemplate, setIsSelectedTemplate] = useState({
    nameOfSelectedVal: "",
    numOfSelectedVal: Number,
    isChanged: false,
  });

  const tabName = useParams()?.tabName;

  const [isShowTemplateCard, setIsShowTemplateCard] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

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
    />
  );
};

export default AllTemplates;
