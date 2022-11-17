import React from "react";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";

const ResumesCoverLettersMarkup = (props) => {
  return (
    <div>
      <Header {...props} name="app" />
      <DropDownMenu {...props} />

      <div className="pt-10 pl-5">
        <p className="text-2xl font-bold">Resumes & Cover Letters</p>
      </div>
    </div>
  );
};

export default ResumesCoverLettersMarkup;
