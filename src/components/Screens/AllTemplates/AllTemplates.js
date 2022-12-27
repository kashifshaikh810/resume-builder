import React, { useState } from "react";
import AllTemplatesMarkup from "./AllTemplatesMarkup";

const AllTemplates = (props) => {
  const navigate = props.navigate();
  const [isSelectedTemplate, setIsSelectedTemplate] = useState({
    nameOfSelectedVal: "",
    numOfSelectedVal: Number,
  });

  return (
    <AllTemplatesMarkup
      {...props}
      navigate={navigate}
      isSelectedTemplate={isSelectedTemplate}
      setIsSelectedTemplate={setIsSelectedTemplate}
    />
  );
};

export default AllTemplates;
