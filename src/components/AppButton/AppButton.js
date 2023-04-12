import React from "react";

import { GrFacebookOption } from "react-icons/gr";
import { RiGoogleFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

import "./Spinner.css";

const AppButton = (props) => {
  return (
    <div
      className={props?.className}
      onClick={props?.onPress}
      onMouseEnter={props?.onMouseEnter}
      onMouseLeave={props?.onMouseLeave}
    >
      {props?.loading ? (
        <div className="loading-spinner" />
      ) : (
        <div className={props?.iconContainerStyle}>
          {props?.iconName === "facebook" && (
            <GrFacebookOption
              name="GrFacebookOption"
              size={20}
              color="#fff"
              className={props?.iconStyle}
            />
          )}
          {props?.iconName === "google" && (
            <RiGoogleFill
              name="RiGoogleFill"
              size={20}
              color="#fff"
              className={props?.iconStyle}
            />
          )}
          {props?.iconName === "email" && (
            <HiOutlineMail
              name="HiOutlineMail"
              size={20}
              color="rgb(26, 145, 240)"
              className={props?.iconStyle}
            />
          )}
          <p className={props?.textStyle}>{props?.title}</p>
        </div>
      )}
    </div>
  );
};

export default AppButton;
