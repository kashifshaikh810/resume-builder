import React from "react";
import { TfiUser } from "react-icons/tfi";
import { IoCloudDone } from "react-icons/io5";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GrCodeSandbox } from "react-icons/gr";
import { BiQuestionMark } from "react-icons/bi";
import { BsArrowsAngleContract } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";
import "./styles.css";
import MyButton from "../../MyButton/MyButton";
import FLAG from "../../images/flag.svg";

const EditResumeMarkup = (props) => {
  const previewCvSection = () => {
    if (props?.screenWidth >= 1030) {
      return (
        <div className="bg-gray-500 flex flex-col w-6/12 min-h-screen h-96 fixed right-0">
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

  const additionalDetailsSection = () => {
    if (props.isShowAdditionalDetails) {
      return (
        <>
          <div className="flex flex-row items-end">
            <div className="mt-6">
              <p className="text-sm text-gray-500">Address</p>
              <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>

            <div className="mt-6 ml-5 pl-5">
              <p className="text-sm text-gray-500">Postal Code</p>
              <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>
          </div>
          <div className="flex flex-row items-end">
            <div className="mt-6">
              <div className="flex flex-row items-center">
                <p className="text-sm text-gray-500">Driving License</p>
                <AiOutlineQuestionCircle className="ml-1 text-blue-400" />
              </div>
              <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>

            <div className="mt-6 ml-5 pl-5">
              <div className="flex flex-row items-center">
                <p className="text-sm text-gray-500">Nationality</p>
                <AiOutlineQuestionCircle className="ml-1 text-blue-400" />
              </div>

              <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>
          </div>
          <div className="flex flex-row items-end">
            <div className="mt-6">
              <p className="text-sm text-gray-500">Place Of Birth</p>
              <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>

            <div className="mt-6 ml-5 pl-5">
              <div className="flex flex-row items-center">
                <p className="text-sm text-gray-500">Date Of Birth</p>
                <AiOutlineQuestionCircle className="ml-1 text-blue-400" />
              </div>
              <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>
          </div>
        </>
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
      <div
        className={`${
          props?.screenWidth <= 1029 ? `m-auto main` : `container`
        }`}
      >
        <div
          className={`${
            props?.screenWidth <= 1029 ? `main-child` : `container-child`
          }`}
        >
          {/* before inspect open */}
          {previewCvSection()}

          <div
            className={
              props?.screenWidth >= 1029
                ? `w-11/12 justify-center items-center pt-12`
                : `flex flex-1 flex-col justify-center`
            }
          >
            <p className="text-xl font-bold text-center">
              Untitlwdwdqwiqhuduhqowdhuqwudqwhuduhqwduhqwhud
            </p>
            <div className={`flex flex-row items-center justify-center mt-1`}>
              <img src={FLAG} className="w-5 h-5 mr-2" alt="flag" />
              <p className="text-gray-500 text-sm">English</p>
            </div>

            <div className={props?.screenWidth >= 1029 ? `` : `ml-10 pl-10`}>
              <div className="flex flex-row items-center">
                <p className="font-bold text-lg">Personal Details</p>
                <TiPencil />
              </div>

              <div>
                <div className="flex flex-row items-end">
                  <div className="mt-4">
                    <div className="flex flex-row items-center">
                      <p className="text-sm text-gray-500">Wanted Job Title</p>
                      <AiOutlineQuestionCircle className="ml-1 text-blue-400" />
                    </div>
                    <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div
                    className="flex flex-row ml-5 pl-4 items-center hover:cursor-pointer"
                    onMouseEnter={() => {
                      props.setUploadIsHovered(true);
                    }}
                    onMouseLeave={() => props.setUploadIsHovered(false)}
                  >
                    <div
                      className={`${
                        props?.uploadIsHovered ? `bg-blue-50` : `bg-gray-100`
                      } w-14 h-14 flex justify-center items-center rounded-sm`}
                    >
                      <TfiUser
                        size={20}
                        className={
                          props?.uploadIsHovered
                            ? `text-blue-400`
                            : `text-gray-500`
                        }
                      />
                    </div>
                    <MyButton
                      {...props}
                      title="Upload photo"
                      textStyle={` ${
                        props?.uploadIsHovered
                          ? `text-blue-800`
                          : `text-blue-400`
                      } text-sm ml-4`}
                      onPress={() => {}}
                      loading={false}
                    />
                  </div>
                </div>

                <div className="flex flex-row items-end">
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">First Name</p>
                    <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div className="mt-6 ml-5 pl-5">
                    <p className="text-sm text-gray-500">Last Name</p>
                    <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>
                </div>

                <div className="flex flex-row items-end">
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">Email</p>
                    <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div className="mt-6 ml-5 pl-5">
                    <p className="text-sm text-gray-500">Phone</p>
                    <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>
                </div>

                <div className="flex flex-row items-end">
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">Country</p>
                    <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div className="mt-6 ml-5 pl-5">
                    <p className="text-sm text-gray-500">City</p>
                    <input className="bg-gray-100 full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>
                </div>

                {additionalDetailsSection()}

                <div
                  className="flex flex-row items-center mt-7 hover:cursor-pointer"
                  onClick={() =>
                    props.setIsShowAdditionalDetails(
                      !props.isShowAdditionalDetails
                    )
                  }
                  onMouseEnter={() => {
                    props.setAdditionalIsHovered(true);
                  }}
                  onMouseLeave={() => props.setAdditionalIsHovered(false)}
                >
                  <p
                    className={`text-sm ${
                      props?.additionalIsHovered
                        ? `text-blue-600`
                        : `text-blue-400`
                    } font-bold`}
                  >
                    Edit additional details
                  </p>
                  {props.isShowAdditionalDetails ? (
                    <BiChevronUp
                      className={`${
                        props?.additionalIsHovered
                          ? `text-blue-600`
                          : `text-blue-400`
                      } text-2xl ml-1 mt-1`}
                    />
                  ) : (
                    <BiChevronDown
                      className={`${
                        props?.additionalIsHovered
                          ? `text-blue-600`
                          : `text-blue-400`
                      } text-2xl ml-1 mt-1`}
                    />
                  )}
                </div>

                <div className="mt-6 pt-6">
                  <div className="flex flex-row items-center">
                    <p className="font-bold text-lg">Professional Summary</p>
                    <TiPencil />
                  </div>
                  <p className="text-sm pt-1 text-gray-500">
                    Write 2-4 short & energetic sentences to interest the
                    reader! Mention your role, experience & most importantly -
                    your biggest achievements, best qualities and skills.
                  </p>

                  <div className="w-full mt-5 p-4 bg-gray-100 max-[767px]:w-full">
                    <div>icons</div>
                    <textarea
                      rows={10000}
                      cols={10000}
                      className="w-full h-48 bg-gray-100 border-none overflow-hidden outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditResumeMarkup;
