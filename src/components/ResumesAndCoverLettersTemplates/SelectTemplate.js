import React from "react";

const SelectTemplate = (props) => {
  const { containerStyle, textStyle } = props;
  return (
    <div className={containerStyle}>
      <p className={textStyle}>Template Not Selected!</p>
    </div>
  );
};

export default SelectTemplate;
