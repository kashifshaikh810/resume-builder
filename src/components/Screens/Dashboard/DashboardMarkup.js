import React from "react";
import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import CVImage from "../../images/cvImage.png";
import SideDrawer from "../../SideDrawer/SideDrawer";

const DashboardMarkup = (props) => {
  return (
    <div className="flex flex-1 flex-col bg-blue-50 pb-8">
      <Header {...props} />

      {props?.toggleDrawer ? <SideDrawer {...props} /> : <></>}
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="text-xs font-bold pt-6">ONLINE RESUME BUILDER</p>
        <p className="text-3xl font-bold pt-2 w-5/12 text-center">
          Only 2% of resumes make it past the first round. Be in the top 2%
        </p>
        <p className="text-xl pt-4 w-6/12 text-center">
          Use professional field-tested resume templates that follow the exact
          ‘resume rules’ employers look for. Easy to use and done within minutes
          - try now for free!
        </p>

        <MyButton
          {...props}
          title="Create My Resume"
          className="bg-blue-500 mt-4 p-3 pl-5 pr-5 rounded-md cursor-pointer button"
          textStyle="text-white font-bold"
          onPress={() => {}}
          loading={false}
        />

        <div className="flex flex-1 flex-row justify-center items-center">
          <div className="bg-green-600 w-1 h-1 rounded-full mt-4 mr-2" />
          <p className="text-sm pt-4">0 resumes created today</p>
        </div>
      </div>
      <div className="flex flex-1 justify-center pt-4">
        <img className="w-6/12 h-auto rounded-md" src={CVImage} alt="cv" />
      </div>
    </div>
  );
};

export default DashboardMarkup;
