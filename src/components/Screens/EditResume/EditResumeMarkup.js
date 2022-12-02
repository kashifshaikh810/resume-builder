import React from "react";
import { TfiUser } from "react-icons/tfi";
import { IoCloudDone } from "react-icons/io5";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GrCodeSandbox } from "react-icons/gr";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";
import "./styles.css";

const EditResumeMarkup = (props) => {
  return (
    <div>
      {props?.screenWidth <= 1029 ? (
        <>
          <Header {...props} name="app" />
          <DropDownMenu {...props} />{" "}
        </>
      ) : (
        []
      )}
      <div className={`${props?.screenWidth >= 1029 ? `` : `m-auto main`}`}>
        <div className={`${props?.screenWidth >= 1029 ? `` : `main-child`}`}>
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
                <div className="flex justify-center items-center mr-4 w-8 h-8 bg-gray-100 rounded-full user-icon">
                  <TfiUser size={15} className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="bg-white w-7/12 flex flex-1 self-center rounded-md">
              <p>dwd</p>
            </div>

            <div className="flex flex-row mt-2 p-4 ml-12 pl-12">
              <div className="flex flex-row items-center hover:w-50 hover:h-auto p-1 hover:bg-slate-400 hover:cursor-pointer hover:rounded-full">
                <GrCodeSandbox
                  size={22}
                  color="green"
                  className="text-white mr-1"
                />
                <p className="text-white text-base">Select template</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditResumeMarkup;
