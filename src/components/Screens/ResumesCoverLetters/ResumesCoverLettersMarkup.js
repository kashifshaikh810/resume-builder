import React from "react";
import { TiPencil } from "react-icons/ti";
import { FiShare } from "react-icons/fi";
import { BiDownvote } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import "./styles.css";
import Cv from "../../images/test.png";
import Switch from "../../images/switch.jpeg";
import StockholmTemplate from "../../ResumesAndCoverLettersTemplates/StockholmTemplate";
import TorontoTemplate from "../../ResumesAndCoverLettersTemplates/TorontoTemplate";
import NewYorkTemplate from "../../ResumesAndCoverLettersTemplates/NewYorkTemplate";
import ViennaTemplate from "../../ResumesAndCoverLettersTemplates/ViennaTemplate";
import CoverLetterTorontoTemplate from "../../CoverLetterTemplatesFromResumesNCoverLetter/CoverLetterTorontoTemplate";
import CoverLetterStockholmTemplate from "../../CoverLetterTemplatesFromResumesNCoverLetter/CoverLetterStockholmTemplate";
import CoverLetterNewYorkTemplate from "../../CoverLetterTemplatesFromResumesNCoverLetter/CoverLetterNewYorkTemplate";
import CoverLetterViennaTemplate from "../../CoverLetterTemplatesFromResumesNCoverLetter/CoverLetterViennaTemplate";
import SelectTemplate from "../../ResumesAndCoverLettersTemplates/SelectTemplate";
import TemplateLoader from "../../ResumesCoverLettersLoader/TemplateLoader";

const ResumesCoverLettersMarkup = (props) => {
  const {
    templateData,
    resumeTempId,
    coverTempId,
    titleData,
    updateResumeTitleDate,
    updateResumeTitleMonth,
    updateResumeTitleTime,
    loading,
  } = props;

  const renderTemplate = () => {
    if (templateData?.selectedTemplate === "Stockholm") {
      return <StockholmTemplate {...props} />;
    } else if (templateData?.selectedTemplate === "Toronto") {
      return <TorontoTemplate {...props} />;
    } else if (templateData?.selectedTemplate === "New York") {
      return <NewYorkTemplate {...props} />;
    } else if (templateData?.selectedTemplate === "Vienna") {
      return <ViennaTemplate {...props} />;
    } else {
      return (
        <SelectTemplate
          {...props}
          containerStyle="flex w-[12rem] h-full flex-col justify-center items-center pt-6 ml-3 pb-7 overflow-hidden"
          textStyle="text-xs text-gray-300 animate-bounce font-mono"
        />
      );
    }
  };

  const resumeSection = () => {
    if (props?.isShowLine === "resumes") {
      return (
        <div className="pt-14 pb-10">
          <div className="flex flex-row w-full justify-between mr-5">
            <div
              className={`border-2 max-w-sm border-gray-100 ${
                loading ? `w-4/12` : `w-2/12`
              } h-72 rounded-lg cursor-pointer cv-box unselectable`}
            >
              {loading ? <TemplateLoader /> : renderTemplate()}
            </div>

            <div className="pl-10 w-10/12">
              <div className="pb-5">
                <div
                  className="flex flex-row items-center untitled-container"
                  onMouseEnter={() => {
                    !!props?.untitledInput && props.setIsShowUntitledIcon(true);
                  }}
                  onMouseLeave={() => props.setIsShowUntitledIcon(false)}
                >
                  {props?.isShowUntitledInput ? (
                    <input
                      className="outline-none border-b-2 border-blue-400 font-bold text-lg w-20"
                      value={props.untitledInput}
                      onChange={(e) => props.setUntitledInput(e.target.value)}
                    />
                  ) : (
                    <p className="font-bold text-lg hover:cursor-default untitled-text">
                      {titleData?.resumeTitle
                        ? titleData?.resumeTitle
                        : "Untitled"}
                    </p>
                  )}
                  {props?.isShowUntitledIcon && (
                    <TiPencil
                      className="ml-3 hover:cursor-pointer text-gray-400 hover:text-blue-400 text-lg pencil-icon"
                      onClick={() => props?.resumeTitleOnClickHandler()}
                    />
                  )}
                </div>
                {updateResumeTitleDate &&
                updateResumeTitleMonth &&
                updateResumeTitleTime ? (
                  <p className="text-xs text-gray-400">
                    {`Updated ${updateResumeTitleDate} ${updateResumeTitleMonth}, ${updateResumeTitleTime}`}
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div
                className="flex flex-row items-center pt-2"
                onClick={() =>
                  props.navigate(
                    `/app/${props?.isShowLine}/${resumeTempId}/edit`
                  )
                }
              >
                <TiPencil size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">Edit</p>
              </div>
              <div className="flex flex-row items-center pt-2">
                <FiShare size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">Share a link</p>
              </div>
              <div className="flex flex-row items-center pt-2">
                <BiDownvote size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">Download PDF</p>
              </div>
              <div className="flex flex-row items-center pt-2">
                <BsThreeDots size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">More</p>
              </div>
            </div>

            <div className="border-2 border-gray-100 w-5/12 h-72 rounded-lg cursor-pointer new-resume">
              <div className="flex w-full justify-center items-center h-full plus-main">
                <AiOutlinePlus
                  size={25}
                  className="w-14 h-14 bg-gray-100 rounded-full plus-icon text-gray-300"
                />
              </div>
            </div>

            <div className="pl-10 new-resume">
              <div className="pb-5">
                <div className="flex flex-row items-center untitled-container">
                  <p className="pb-0.5 text-xl text-gray-400">New Resume</p>
                  <TiPencil size={20} className="ml-2 pencil-icon" />
                </div>
                <p className="text-xs text-gray-400 w-11/12">
                  Create a tailored resume for each job application. Double your
                  chances of getting hired!
                </p>
              </div>
            </div>
          </div>

          <p className="pt-14 text-3xl font-bold">Boost Your Career</p>
          <div className="flex flex-row justify-between mr-5 boost-career-box">
            <div className="border-2 border-gray-100 w-5/12 h-auto pt-5 pb-5 rounded-lg cursor-pointer mt-4 mb-5 flex justify-center top-resume-box">
              <div className="w-8/12 flex flex-col self-center items-center">
                <p className="text-center text-base text-blue-200 mt-2 mb-2">
                  Top Resume
                </p>
                <img src={Cv} alt="resume" className="w-6/12" />
                <p className="text-xs mt-2 text-center professionally-text">
                  Get a professionally written resume
                </p>

                <p className="text-sm text-center mt-2 w-full an-expertly-text">
                  An expertly written and keyword-optimized resume that sets you
                  apart.
                </p>

                <MyButton
                  {...props}
                  title="Order Now"
                  className="bg-blue-500 w-5/12 mt-4 p-2 justify-center items-center h-10 rounded-md cursor-pointer pt-2 order-button"
                  textStyle="text-white font-bold text-center"
                  onPress={(e) => {}}
                  loading={false}
                />
              </div>
            </div>

            <div className="border-2 border-gray-100 w-5/12 h-auto pb-5 pt-5 rounded-lg cursor-pointer mt-4 mb-5 flex justify-center resume-rabbit-box">
              <div className="w-8/12 flex flex-col self-center items-center">
                <p className="text-center text-base text-blue-200 mt-2 mb-2">
                  Resume Rabbit
                </p>
                <img src={Switch} alt="resume" className="w-6/12" />
                <p className="text-xs mt-2 text-center post-text">
                  Post to 50 job sites in minutes
                </p>

                <p className="text-sm text-center mt-2 w-full search-text">
                  Search smarter, not harder. Save time job hunting, and get
                  more out of it.
                </p>

                <MyButton
                  {...props}
                  title="Get Started"
                  className="bg-blue-500 w-5/12 mt-4 p-2 justify-center items-center h-10 rounded-md cursor-pointer pt-2 started-button"
                  textStyle="text-white font-bold text-center"
                  onPress={(e) => {}}
                  loading={false}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const coverLetterSection = () => {
    if (props?.isShowLine === "cover-letters") {
      return (
        <div className="pt-14 pb-10">
          <div className="flex flex-row w-full justify-between mr-5">
            <div className="border-2 max-w-sm border-gray-100 w-2/12 h-72 rounded-lg cursor-pointer cv-box unselectable">
              {/* <CoverLetterTorontoTemplate {...props} /> */}

              {/* <CoverLetterStockholmTemplate {...props} /> */}

              {/* <CoverLetterNewYorkTemplate {...props} /> */}

              {/* <CoverLetterViennaTemplate {...props} /> */}

              <SelectTemplate
                {...props}
                containerStyle="flex w-[12rem] h-full flex-col justify-center items-center pt-6 ml-3 pb-7 overflow-hidden"
                textStyle="text-xs text-gray-300 animate-bounce font-mono"
              />
            </div>

            <div className="pl-10 w-11/12">
              <div className="pb-5">
                <div
                  className="flex flex-row items-center untitled-container"
                  onMouseEnter={() => {
                    !!props?.coverLetterUntitledInput &&
                      props.setIsShowCoverLetterUntitledIcon(true);
                  }}
                  onMouseLeave={() =>
                    props.setIsShowCoverLetterUntitledIcon(false)
                  }
                >
                  {props?.isShowCoverLetterUntitledInput ? (
                    <input
                      className="outline-none border-b-2 border-blue-400 font-bold text-lg w-20"
                      value={props.coverLetterUntitledInput}
                      onChange={(e) =>
                        props.setCoverLetterUntitledInput(e.target.value)
                      }
                    />
                  ) : (
                    <p className="font-bold text-lg hover:cursor-default untitled-text">
                      {props?.coverLetterUntitledInput
                        ? props?.coverLetterUntitledInput
                        : "Untitled"}
                    </p>
                  )}
                  {props?.isShowCoverLetterUntitledIcon && (
                    <TiPencil
                      className="ml-3 hover:cursor-pointer text-gray-400 hover:text-blue-400 text-lg pencil-icon"
                      onClick={() =>
                        props.setIsShowCoverLetterUntitledInput(
                          !props?.isShowCoverLetterUntitledInput
                        )
                      }
                    />
                  )}
                </div>
                <p className="text-xs text-gray-400">
                  Updated 31 November, 20:24
                </p>
              </div>
              <div
                className="flex flex-row items-center pt-2"
                onClick={() =>
                  props.navigate(
                    `/app/${props?.isShowLine}/${coverTempId}/edit`
                  )
                }
              >
                <TiPencil size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">Edit</p>
              </div>
              <div className="flex flex-row items-center pt-2">
                <FiShare size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">Share a link</p>
              </div>
              <div className="flex flex-row items-center pt-2">
                <BiDownvote size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">Download PDF</p>
              </div>
              <div className="flex flex-row items-center pt-2">
                <BsThreeDots size={20} color="rgb(26, 145, 240)" />
                <p className="pl-3 edit-text">More</p>
              </div>
            </div>

            <div className="border-2 border-gray-100 w-6/12 h-72 rounded-lg cursor-pointer new-resume">
              <div className="flex w-full justify-center items-center h-full plus-main">
                <AiOutlinePlus
                  size={25}
                  className="w-14 h-14 bg-gray-100 rounded-full plus-icon text-gray-300"
                />
              </div>
            </div>

            <div className="pl-10 new-resume">
              <div className="pb-5">
                <div className="flex flex-row items-center untitled-container">
                  <p className="pb-0.5 text-xl text-gray-400">
                    New Cover Letter
                  </p>
                  <TiPencil size={20} className="ml-2 pencil-icon" />
                </div>
                <p className="text-xs text-gray-400 w-9/12">
                  How do you boost your job search? Make a custom cover letter
                  for each new job application! This is a method used by the
                  most successful candidates.
                </p>
              </div>
            </div>
          </div>

          <p className="pt-14 text-3xl font-bold">Boost Your Career</p>
          <div className="flex flex-row justify-between mr-5 boost-career-box">
            <div className="border-2 border-gray-100 w-5/12 h-auto pt-5 pb-5 rounded-lg cursor-pointer mt-4 mb-5 flex justify-center top-resume-box">
              <div className="w-8/12 flex flex-col self-center items-center">
                <p className="text-center text-base text-blue-200 mt-2 mb-2">
                  Top Resume
                </p>
                <img src={Cv} alt="resume" className="w-6/12" />
                <p className="text-xs mt-2 text-center professionally-text">
                  Get a professionally written resume
                </p>

                <p className="text-sm text-center mt-2 w-full an-expertly-text">
                  An expertly written and keyword-optimized resume that sets you
                  apart.
                </p>

                <MyButton
                  {...props}
                  title="Order Now"
                  className="bg-blue-500 w-5/12 mt-4 p-2 justify-center items-center h-10 rounded-md cursor-pointer pt-2 order-button"
                  textStyle="text-white font-bold text-center"
                  onPress={(e) => {}}
                  loading={false}
                />
              </div>
            </div>

            <div className="border-2 border-gray-100 w-5/12 h-auto pb-5 pt-5 rounded-lg cursor-pointer mt-4 mb-5 flex justify-center resume-rabbit-box">
              <div className="w-8/12 flex flex-col self-center items-center">
                <p className="text-center text-base text-blue-200 mt-2 mb-2">
                  Resume Rabbit
                </p>
                <img src={Switch} alt="resume" className="w-6/12" />
                <p className="text-xs mt-2 text-center post-text">
                  Post to 50 job sites in minutes
                </p>

                <p className="text-sm text-center mt-2 w-full search-text">
                  Search smarter, not harder. Save time job hunting, and get
                  more out of it.
                </p>

                <MyButton
                  {...props}
                  title="Get Started"
                  className="bg-blue-500 w-5/12 mt-4 p-2 justify-center items-center h-10 rounded-md cursor-pointer pt-2 started-button"
                  textStyle="text-white font-bold text-center"
                  onPress={(e) => {}}
                  loading={false}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Header {...props} name="app" />
      <DropDownMenu {...props} name="ResumeAndCoverLetters" />

      <div className="pt-10 pl-5">
        <p className="text-3xl font-bold">Resumes & Cover Letters</p>
        <div className="flex w-11/12 h-2 justify-end items-center">
          <MyButton
            {...props}
            title="Create New"
            className="bg-blue-500 mt-4 p-2 justify-center items-center h-10 pl-5 pr-5 rounded-md cursor-pointer pt-2 create-button"
            textStyle="text-white font-bold"
            onPress={(e) => {}}
            loading={false}
          />
        </div>
        <div className="flex flex-row pt-2 border-b-2 border-gray-100 flex-1 mr-5 pb-0 tabs-container">
          <p
            className={`mr-3 pb-2 resume-heading ${
              props?.isShowLine === "resumes"
                ? `border-b-2 border-blue-400`
                : `text-gray-400`
            }`}
            onClick={() => props?.setIsShowLine("resumes")}
          >
            Resumes
          </p>
          <p
            className={`ml-3 pb-2 resume-heading ${
              props?.isShowLine === "cover-letters"
                ? `border-b-2 border-blue-400`
                : `text-gray-400`
            }`}
            onClick={() => props?.setIsShowLine("cover-letters")}
          >
            Cover Letters
          </p>
        </div>

        <div className="flex flex-1 mr-5">
          <MyButton
            {...props}
            title={
              props?.isShowLine === "resumes"
                ? "New Resume"
                : "New Cover Letter"
            }
            className="bg-blue-500 mt-4 w-full p-2 justify-center items-center h-12 pl-5 pr-5 rounded-md cursor-pointer pt-2 new-button"
            textStyle="text-white font-bold"
            onPress={(e) => {}}
            loading={false}
          />
        </div>

        {resumeSection()}
        {coverLetterSection()}
      </div>
    </div>
  );
};

export default ResumesCoverLettersMarkup;
