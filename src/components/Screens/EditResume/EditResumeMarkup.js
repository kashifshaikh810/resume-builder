import React from "react";
import { TfiUser } from "react-icons/tfi";
import { IoCloudDone } from "react-icons/io5";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GrCodeSandbox } from "react-icons/gr";
import { BiQuestionMark } from "react-icons/bi";
import { BsArrowsAngleContract } from "react-icons/bs";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";
import "./styles.css";
import MyButton from "../../MyButton/MyButton";

const EditResumeMarkup = (props) => {
  const previewCvSection = () => {
    if (props?.screenWidth >= 1030) {
      return (
        <div className="bg-gray-500 flex flex-col w-6/12 min-h-screen h-96 absolute right-0">
          <div className="flex flex-row items-center pl-16 ml-16">
            <IoCloudDone size={30} className="text-gray-600 ml-2 mr-1" />
            <p className="text-xs text-white">Saved</p>

            <div className="flex flex-row items-center w-8/12 justify-end">
              <RiArrowLeftSLine size={22} className="text-gray-400" />
              <p className="text-white ml-3 mr-3">1 / 1</p>
              <RiArrowRightSLine size={22} className="text-gray-400" />
            </div>
            <div className="flex w-full justify-end pt-4">
              <div
                className="flex justify-center items-center mr-4 w-8 h-8 bg-gray-100 rounded-full user-icon"
                onClick={() => props?.setIsMenuShown(!props?.isMenuShown)}
              >
                <TfiUser size={15} className="text-gray-400" />
              </div>
            </div>
          </div>

          <div
            className="bg-white w-7/12 flex flex-1 self-center rounded-md hover:cursor-pointer"
            onMouseEnter={() => {
              props.setIsHovered(true);
            }}
            onMouseLeave={() => props.setIsHovered(false)}
          >
            <p>dwd</p>

            {props?.isHovered ? (
              <div className="flex flex-1 justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
                  <BsArrowsAngleContract size={20} color="#fff" />
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex flex-row items-center mt-2 p-1 mb-2 ml-12 pl-12">
            <div className="flex flex-row items-center hover:w-50 hover:h-auto p-1.5 hover:bg-slate-400 hover:cursor-pointer hover:rounded-full">
              <GrCodeSandbox
                size={22}
                color="green"
                className="text-white mr-1"
              />
              <p className="text-white text-base">Select template</p>
            </div>
            <div className="ml-11 pl-12 flex flex-row">
              <MyButton
                {...props}
                title="Download PDF"
                className="bg-blue-500 p-3 pl-6 pr-6 rounded-md hover:bg-blue-600 hover:cursor-pointer"
                textStyle="text-white font-bold"
                onPress={() => {}}
                loading={false}
              />
              <MyButton
                {...props}
                title="..."
                className="bg-blue-500 ml-2 p-3 pt-2 pl-6 pr-6 rounded-md hover:bg-blue-600 hover:cursor-pointer"
                textStyle="text-white font-bold"
                onPress={() => {}}
                loading={false}
              />
              <div className="bg-blue-500 w-12 h-12 flex rounded-full justify-center items-center ml-2 hover:bg-blue-600 hover:cursor-pointer">
                <BiQuestionMark size={30} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      {props?.screenWidth <= 1029 ? (
        <>
          <Header {...props} name="app" allowed={true} />
          <DropDownMenu name="app" {...props} />
        </>
      ) : (
        <DropDownMenu name="app" {...props} />
      )}
      <div className={`${props?.screenWidth >= 1029 ? `` : `m-auto main`}`}>
        <div className={`${props?.screenWidth >= 1029 ? `` : `main-child`}`}>
          {previewCvSection()}
        </div>
      </div>
    </div>
  );
};

export default EditResumeMarkup;
