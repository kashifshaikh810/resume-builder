import React from "react";
import "./Spinner.css";

const MyButton = (props) => {
  return (
    <div className={props?.className} onClick={props.onPress}>
      {props?.loading ? (
        <div className="loading-spinner" />
      ) : (
        <p className={props?.textStyle}>{props?.title}</p>
      )}
    </div>
  );
};

export default MyButton;
