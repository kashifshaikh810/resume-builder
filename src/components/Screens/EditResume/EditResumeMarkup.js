import React from "react";
import { TfiUser } from "react-icons/tfi";
import { IoCloudDone } from "react-icons/io5";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GrCodeSandbox, GrStrikeThrough, GrUnderline } from "react-icons/gr";
import { BiPlus, BiQuestionMark } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import {
  BsArrowsAngleContract,
  BsTypeBold,
  BsToggleOn,
  BsToggleOff,
} from "react-icons/bs";
import { TiAttachmentOutline, TiPencil } from "react-icons/ti";
import { AiOutlineItalic, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdFormatListNumbered } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";
import "./styles.css";
import MyButton from "../../MyButton/MyButton";
import FLAG from "../../images/flag.svg";
import { FaListUl } from "react-icons/fa";
import FileModal from "../../FileModal/FileModal";

const EditResumeMarkup = (props) => {
  const descIcons = [
    { icon: () => <BsTypeBold />, name: "bold" },
    { icon: () => <AiOutlineItalic />, name: "italic" },
    { icon: () => <GrUnderline />, name: "underline" },
    { icon: () => <GrStrikeThrough />, name: "line-through" },
    { icon: () => <MdFormatListNumbered />, name: "" },
    { icon: () => <FaListUl />, name: "" },
    { icon: () => <TiAttachmentOutline />, name: "" },
  ];

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

              <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>
          </div>
          <div className="flex flex-row items-end">
            <div className="mt-6">
              <p className="text-sm text-gray-500">Place Of Birth</p>
              <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
            </div>

            <div className="mt-6 ml-5 pl-5">
              <div className="flex flex-row items-center">
                <p className="text-sm text-gray-500">Date Of Birth</p>
                <AiOutlineQuestionCircle className="ml-1 text-blue-400" />
              </div>
              <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
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
      {props.showModal && <FileModal {...props} />}
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

          {props?.screenWidth <= 1029 && (
            <div
              className={`${
                props?.scrollValue === 1871 || props?.scrollValue === 0
                  ? `p-6 pt-2.5 pb-2.5 pr-2.5`
                  : `p-2.5 justify-center items-center`
              } bg-blue-500 rounded-full flex justify-center items-center fixed bottom-0 right-0 left-auto top-auto m-5 hover:cursor-pointer hover:bg-blue-600`}
            >
              {props?.scrollValue === 1871 || props?.scrollValue === 0 ? (
                <p className="text-white font-bold text-base">
                  Preview & Download
                </p>
              ) : (
                <></>
              )}
              <img
                src="https://resume.io/assets/media/preview-documentde2b0b862dc6490953a4.svg"
                alt="previewCv"
                className={`w-10 h-10 ${
                  props?.scrollValue === 1871 || props?.scrollValue === 0
                    ? `ml-2`
                    : ``
                }`}
              />
            </div>
          )}

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
              <div
                className="flex flex-row items-center"
                onMouseEnter={() => {
                  props.setIsShowPersonalIcon(true);
                }}
                onMouseLeave={() => props.setIsShowPersonalIcon(false)}
              >
                <p className="font-bold text-lg hover:cursor-default">
                  Personal Details
                </p>
                {props?.isShowPersonalIcon && (
                  <TiPencil className="ml-3 hover:cursor-pointer text-gray-400 hover:text-blue-400 text-lg" />
                )}
              </div>

              <div>
                <div className="flex flex-row items-end">
                  <div className="mt-4">
                    <div className="flex flex-row items-center">
                      <p className="text-sm text-gray-500">Wanted Job Title</p>
                      <AiOutlineQuestionCircle className="ml-1 text-blue-400" />
                    </div>
                    <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div
                    className="flex flex-row ml-5 pl-4 items-center hover:cursor-pointer"
                    onClick={() =>
                      props?.profileImage
                        ? props.setProfileImage("")
                        : props.setShowModal(true)
                    }
                    onMouseEnter={() => {
                      props.setUploadIsHovered(true);
                    }}
                    onMouseLeave={() => props.setUploadIsHovered(false)}
                  >
                    {props?.profileImage ? (
                      <img
                        src={props?.profileImage}
                        alt="profile"
                        className="w-14 h-14 rounded-sm"
                      />
                    ) : (
                      <div
                        className={`${
                          props?.uploadIsHovered ? `bg-blue-50` : `bg-gray-100`
                        } w-14 h-14 flex justify-center items-center rounded-sm`}
                      >
                        <TfiUser
                          size={25}
                          className={
                            props?.uploadIsHovered
                              ? `text-blue-400`
                              : `text-gray-500`
                          }
                        />
                      </div>
                    )}
                    {props.profileImage ? (
                      <div className="flex flex-row items-center">
                        <MdDeleteOutline
                          className={`ml-2 text-xl ${
                            props?.uploadIsHovered
                              ? `text-red-500`
                              : `text-gray-400`
                          }`}
                        />
                        <MyButton
                          {...props}
                          title="Delete"
                          textStyle={` ${
                            props?.uploadIsHovered
                              ? `text-red-500`
                              : `text-gray-400`
                          } text-sm ml-1`}
                          onPress={() => {}}
                          loading={false}
                        />
                      </div>
                    ) : (
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
                    )}
                  </div>
                </div>

                <div className="flex flex-row items-end">
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">First Name</p>
                    <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div className="mt-6 ml-5 pl-5">
                    <p className="text-sm text-gray-500">Last Name</p>
                    <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>
                </div>

                <div className="flex flex-row items-end">
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">Email</p>
                    <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div className="mt-6 ml-5 pl-5">
                    <p className="text-sm text-gray-500">Phone</p>
                    <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>
                </div>

                <div className="flex flex-row items-end">
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">Country</p>
                    <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
                  </div>

                  <div className="mt-6 ml-5 pl-5">
                    <p className="text-sm text-gray-500">City</p>
                    <input className="bg-gray-100 w-full h-9 pl-4 mt-1 pr-4 text-blue-400 border-none overflow-hidden outline-none max-[767px]:w-full" />
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
                    <div className="flex flex-row items-center">
                      {descIcons.map((item, index) => (
                        <div
                          key={index}
                          className={`m-2 mt-0 ml-0 hover:cursor-pointer hover:text-blue-400  ${
                            (props?.isChangedInputText?.num === index &&
                              props?.isChangedInputText?.name === "bold") ||
                            (props?.isChangedInputText?.num === index &&
                              props?.isChangedInputText?.name === "italic") ||
                            (props?.isChangedInputText?.num === index &&
                              props?.isChangedInputText?.name ===
                                "underline") ||
                            (props?.isChangedInputText?.num === index &&
                              props?.isChangedInputText?.name ===
                                "line-through")
                              ? `text-blue-400`
                              : `text-gray-500`
                          }`}
                          onClick={() =>
                            props.setIsChangedInputText({
                              name: item.name,
                              num: index,
                            })
                          }
                          onDoubleClick={() =>
                            props?.setIsChangedInputText({ name: "normal" })
                          }
                        >
                          {item.icon()}
                        </div>
                      ))}
                    </div>
                    <textarea
                      rows={10000}
                      cols={10000}
                      className={`w-full h-48 bg-gray-100 border-none overflow-hidden outline-none ${
                        (props?.isChangedInputText?.name === "normal" &&
                          `font-normal`) ||
                        (props?.isChangedInputText?.name === "bold" &&
                          `font-bold`) ||
                        (props?.isChangedInputText?.name === "italic" &&
                          `italic`) ||
                        (props?.isChangedInputText?.name === "underline" &&
                          `underline`) ||
                        (props?.isChangedInputText?.name === "line-through" &&
                          `line-through`)
                      }`}
                    />
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="flex flex-row items-center">
                      <p className="font-bold text-lg">Employment History</p>
                      <TiPencil />
                    </div>
                    <p className="text-sm pt-1 text-gray-500">
                      Show your relevant experience (last 10 years). Use bullet
                      points to note your achievements, if possible - use
                      numbers/facts (Achieved X, measured by Y, by doing Z).
                    </p>

                    <MyButton
                      {...props}
                      title="Add employment"
                      className="hover:bg-blue-50 p-2 pt-2.5 pb-2.5 m-4 ml-0 hover:cursor-pointer"
                      textStyle="text-blue-500 text-sm pl-4 font-bold"
                      onPress={() => {}}
                      loading={false}
                    />
                  </div>

                  <div className="mt-6 pt-6">
                    <div className="flex flex-row items-center">
                      <p className="font-bold text-lg">Education</p>
                      <TiPencil />
                    </div>
                    <p className="text-sm pt-1 text-gray-500">
                      A varied education on your resume sums up the value that
                      your learnings and background will bring to job.
                    </p>

                    <MyButton
                      {...props}
                      title="Add education"
                      className="hover:bg-blue-50 p-2 pt-2.5 pb-2.5 m-4 ml-0 hover:cursor-pointer"
                      textStyle="text-blue-500 text-sm pl-4 font-bold"
                      onPress={() => {}}
                      loading={false}
                    />
                  </div>

                  <div className="mt-6 pt-6">
                    <div className="flex flex-row items-center">
                      <p className="font-bold text-lg">
                        Websites & Social Links
                      </p>
                      <TiPencil />
                    </div>
                    <p className="text-sm pt-1 text-gray-500">
                      You can add links to websites you want hiring managers to
                      see! Perhaps It will be a link to your portfolio, LinkedIn
                      profile, or personal website
                    </p>

                    <MyButton
                      {...props}
                      title="Add link"
                      className="hover:bg-blue-50 p-2 pt-2.5 pb-2.5 m-4 ml-0 hover:cursor-pointer"
                      textStyle="text-blue-500 text-sm pl-4 font-bold"
                      onPress={() => {}}
                      loading={false}
                    />
                  </div>

                  <div className="mt-6 pt-6">
                    <div className="flex flex-row items-center">
                      <p className="font-bold text-lg">Skills</p>
                      <TiPencil />
                    </div>
                    <p className="text-sm pt-1 text-gray-500">
                      Choose 5 of the most important skills to show your
                      talents! Make sure they match the keywords of the job
                      listing if applying via an online system.
                    </p>

                    <div
                      className="flex flex-row items-center m-3 ml-0 hover:cursor-pointer"
                      onClick={() =>
                        props.setIsNotShowExpertLevel(
                          !props?.isNotShowExpertLevel
                        )
                      }
                    >
                      {props?.isNotShowExpertLevel ? (
                        <BsToggleOn className="text-2xl text-blue-800" />
                      ) : (
                        <BsToggleOff className="text-2xl text-gray-400" />
                      )}
                      <p className="ml-2 text-sm">
                        Don't show experience level
                      </p>
                    </div>

                    <div className="flex flex-row flex-wrap">
                      {props.skillsData.map((item, index) => (
                        <div
                          className={`m-2 mb-0 ml-0 flex flex-row items-center p-3 pt-1.5 pb-1.5 rounded-md hover:cursor-pointer ${
                            props?.experienceLevelIsHovered.shown &&
                            props?.experienceLevelIsHovered.num === index
                              ? `bg-blue-100`
                              : `bg-gray-100`
                          }`}
                          key={index}
                          onMouseEnter={() => {
                            props.setExperienceLevelIsHovered({
                              shown: true,
                              num: item.id,
                            });
                          }}
                          onMouseLeave={() =>
                            props.setExperienceLevelIsHovered({
                              shown: false,
                              num: item.id,
                            })
                          }
                        >
                          <p
                            className={`${
                              props?.experienceLevelIsHovered.shown &&
                              props?.experienceLevelIsHovered.num === index
                                ? `text-blue-400`
                                : `text-gray-600`
                            }`}
                          >
                            {item.name}
                          </p>
                          <BiPlus
                            className={`ml-2 ${
                              props?.experienceLevelIsHovered.shown &&
                              props?.experienceLevelIsHovered.num === index
                                ? `text-blue-400`
                                : `text-gray-600`
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    <MyButton
                      {...props}
                      title="Add skill"
                      className="hover:bg-blue-50 p-2 pt-2.5 pb-2.5 m-4 ml-0 hover:cursor-pointer"
                      textStyle="text-blue-500 text-sm pl-4 font-bold"
                      onPress={() => {}}
                      loading={false}
                    />
                  </div>

                  <div className="mt-5 pt-6">
                    <div className="flex flex-row items-center">
                      <p className="font-bold text-lg">Hobbies</p>
                      <TiPencil />
                    </div>

                    <p className="text-gray-500 text-sm mb-2 mt-5">
                      What do you like?
                    </p>
                    <textarea
                      rows={10000}
                      cols={10000}
                      className={`w-full h-28 p-4 pt-2 bg-gray-100 border-none overflow-hidden outline-none`}
                    />
                  </div>

                  <div className="mt-5 pt-5">
                    <div className="flex flex-row items-center">
                      <p className="font-bold text-lg">Languages</p>
                      <TiPencil />
                    </div>

                    <MyButton
                      {...props}
                      title="Add language"
                      className="hover:bg-blue-50 p-2 pt-2.5 pb-2.5 m-4 mt-3 ml-0 hover:cursor-pointer"
                      textStyle="text-blue-500 text-sm pl-4 font-bold"
                      onPress={() => {}}
                      loading={false}
                    />
                  </div>

                  <div className="mt-5 pt-5">
                    <div>
                      <p className="font-bold text-lg">Add Section</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {props.addSectionData.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center w-11/12 hover:cursor-pointer"
                          onMouseEnter={() => {
                            props.setSectionIsHovered({
                              shown: true,
                              num: item.id,
                            });
                          }}
                          onMouseLeave={() =>
                            props.setSectionIsHovered({
                              shown: false,
                              num: item.id,
                            })
                          }
                        >
                          <img
                            src={item.icon}
                            className="w-10 h-10 fill-gray-200"
                            alt="img"
                          />
                          <p
                            className={`ml-2 text-base
                          ${
                            props?.sectionIsHovered.shown &&
                            props?.sectionIsHovered.num === index
                              ? `text-blue-400`
                              : `text-gray-800`
                          }`}
                          >
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
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
