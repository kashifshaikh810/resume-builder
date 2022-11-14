import React from "react";

const MyButton = (props) => {
  return (
    <div className={props?.className} onClick={props.onPress}>
      {props?.loading ? (
        <p>Loading...</p>
      ) : (
        <p className={props?.textStyle}>{props?.title}</p>
      )}
    </div>
  );
};

export default MyButton;
