import React from "react";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";
import "./styles.css";

const EditResumeMarkup = (props) => {
  console.log(props.screenWidth);
  return (
    <div>
      {props?.screenWidth !== 1029 ? (
        <>
          <Header {...props} name="app" />
          <DropDownMenu {...props} />{" "}
        </>
      ) : (
        []
      )}
      <div className={`${props?.screenWidth ? `` : `m-auto main`}`}>
        <div className="main-child">
          <div className="pl-6 max-[767px]:pl-7 max-[767px]:pt-5">
            <p className="text-2xl text-black font-bold">
              Untitlwdwdqwiqhuduhqowdhuqwudqwhuduhqwduhqwhudqwuhhuqwd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditResumeMarkup;
