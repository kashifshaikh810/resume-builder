import React from "react";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import "./styles.css";
import { TiPencil } from "react-icons/ti";
import { FiShare } from "react-icons/fi";
import { BiDownvote } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Cv from "../../images/test.png";
import Switch from "../../images/switch.jpeg";

const ResumesCoverLettersMarkup = (props) => {
  const resumeSection = () => {
    if (props?.isShowLine === "resumes") {
      return (
        <div className="pt-14 pb-10">
          <div className="flex flex-row w-full justify-between mr-5">
            <div className="border-2 border-gray-100 w-5/12 h-72 rounded-lg cursor-pointer">
              <p>kashif</p>
            </div>

            <div className="pl-10 w-10/12">
              <div className="pb-5">
                <div className="flex flex-row items-center untitled-container">
                  <p className="pb-0.5 text-xl untitled-text">Untitled</p>
                  <TiPencil size={20} className="ml-2 pencil-icon" />
                </div>
                <p className="text-xs text-gray-400">
                  Updated 11 November, 15:52
                </p>
              </div>
              <div className="flex flex-row items-center pt-2">
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

            <div className="border-2 border-gray-100 w-5/12 h-72 rounded-lg cursor-pointer">
              <div className="flex w-full justify-center items-center h-full plus-main">
                <AiOutlinePlus
                  size={25}
                  className="w-14 h-14 bg-gray-100 rounded-full plus-icon text-gray-300"
                />
              </div>
            </div>

            <div className="pl-10">
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
          <div className="flex flex-row justify-between mr-5">
            <div className="border-2 border-gray-100 w-5/12 h-96 rounded-lg cursor-pointer mt-4 mb-5 flex justify-center">
              <div className="w-8/12 flex flex-col self-center items-center">
                <p className="text-center text-base text-blue-200 mt-2 mb-2">
                  Top Resume
                </p>
                <div>
                  <img src={Cv} alt="resume" className="w-full h-40" />
                </div>
                <p className="text-xs mt-2 text-center">
                  Get a professionally written resume
                </p>

                <p className="text-sm text-center mt-2 w-full">
                  An expertly written and keyword-optimized resume that sets you
                  apart.
                </p>

                <MyButton
                  {...props}
                  title="Order Now"
                  className="bg-blue-500 w-5/12 mt-4 p-2 justify-center items-center h-10 rounded-md cursor-pointer pt-2 continue-button"
                  textStyle="text-white font-bold text-center"
                  onPress={(e) => {}}
                  loading={false}
                />
              </div>
            </div>

            <div className="border-2 border-gray-100 w-5/12 h-96 rounded-lg cursor-pointer mt-4 mb-5 flex justify-center">
              <div className="w-8/12 flex flex-col self-center items-center">
                <p className="text-center text-base text-blue-200 mt-2 mb-2">
                  Resume Rabbit
                </p>
                <img src={Switch} alt="resume" className="w-full h-40" />
                <p className="text-xs mt-2 text-center">
                  Post to 50 job sites in minutes
                </p>

                <p className="text-sm text-center mt-2 w-full">
                  Search smarter, not harder. Save time job hunting, and get
                  more out of it.
                </p>

                <MyButton
                  {...props}
                  title="Get Started"
                  className="bg-blue-500 w-5/12 mt-4 p-2 justify-center items-center h-10 rounded-md cursor-pointer pt-2 continue-button"
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
        <div>
          <p>cover letters sec</p>
          <BsThreeDots size={20} color="rgb(26, 145, 240)" className="icon" />
        </div>
      );
    }
  };

  return (
    <div>
      <Header {...props} name="app" />
      <DropDownMenu {...props} />

      <div className="pt-10 pl-5">
        <p className="text-3xl font-bold">Resumes & Cover Letters</p>
        <div className="flex w-11/12 h-2 justify-end items-center">
          <MyButton
            {...props}
            title="Create New"
            className="bg-blue-500 mt-4 p-2 justify-center items-center h-10 pl-5 pr-5 rounded-md cursor-pointer pt-2 continue-button"
            textStyle="text-white font-bold"
            onPress={(e) => {}}
            loading={false}
          />
        </div>
        <div className="flex flex-row pt-2 border-b-2 border-gray-100 w-11/12 pb-0">
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

        {resumeSection()}
        {coverLetterSection()}
      </div>
    </div>
  );
};

export default ResumesCoverLettersMarkup;
