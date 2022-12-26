import React from "react";
import AllTemplatesMarkup from "./AllTemplatesMarkup";

const AllTemplates = (props) => {
  const navigate = props.navigate();

  return <AllTemplatesMarkup {...props} navigate={navigate} />;
};

export default AllTemplates;
