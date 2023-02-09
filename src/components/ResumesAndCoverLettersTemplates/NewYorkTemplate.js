import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFlower2, BsTelephoneFill } from "react-icons/bs";
import { CgShapeCircle } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import { HiSpeakerphone } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";

import "./styles.css";

const NewYorkTemplate = (props) => {
  const { resumeData } = props;

  const levelWidth = {
    Novice: "w-[10px]",
    Beginner: "w-[15px]",
    Skillful: "w-[20px]",
    Experienced: "w-[25px]",
    Expert: "w-[30px]",
  };

  const languageLevelWidth = {
    "Very good command": "w-[10px]",
    "Highly Proficient": "w-[20px]",
    "Native Speaker": "w-[30px]",
  };

  return (
    <div>
      <div className={`${resumeData?.profileImage ? `pt-2` : `pt-3`} w-full`}>
        <div className="flex w-11/12 flex-col justify-center items-center">
          {resumeData?.profileImage && (
            <img
              src={resumeData?.profileImage}
              className="w-[20px] h-[20px] m-4 mt-1 mb-2"
              alt="profile"
            />
          )}
          {resumeData?.firstName || resumeData?.lastName ? (
            <div>
              <p className="text-[5px] uppercase font-bold tracking-[0.5px]">
                {`${resumeData?.firstName} ${resumeData?.lastName}`}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-row items-center mt-1">
            <p className="text-[2.5px] uppercase">
              {resumeData?.wantedJobTitle}
            </p>
            <div className="flex flex-row items-center ml-1.5">
              {resumeData?.city ||
              resumeData?.postalCode ||
              resumeData?.country ? (
                <MdLocationOn className="text-[2.5px]" />
              ) : (
                ""
              )}
              <p className="text-[2.5px] ml-0.5 uppercase">
                {resumeData?.city}
                {resumeData?.postalCode || resumeData?.city ? `,` : ``}{" "}
              </p>
              <p className={`text-[2.5px] ml-0.5 uppercase`}>
                {resumeData?.postalCode}
                {resumeData?.postalCode ? `,` : ``}
              </p>
              <p
                className={`text-[2.5px] ${
                  resumeData?.postalCode && resumeData?.country ? `ml-0.5` : ``
                } uppercase`}
              >
                {resumeData?.country}{" "}
              </p>
            </div>
            <div className="flex flex-row items-center ml-1.5">
              {resumeData?.phone && (
                <BsTelephoneFill className="text-[2.5px]" />
              )}
              <p className="text-[2.5px] ml-0.5"> {resumeData?.phone} </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          grid grid-cols-[55px_minmax(200px,_1fr)_100px]
          m-14
          p-12
          mr-0
          ml-0
          pl-0
          mb-0
          pr-0
          pb-0
          mt-2
          pt-0
          "
      >
        {/* Column 1 */}
        <div>
          {resumeData?.address ||
          resumeData?.city ||
          resumeData?.postalCode ||
          resumeData?.country ||
          resumeData?.phone ||
          resumeData?.email ||
          resumeData?.dateOfBirth ||
          resumeData?.placeOfBirth ||
          resumeData?.nationality ||
          resumeData?.drivingLicense ||
          resumeData?.websiteInputList?.length >= 1 ||
          resumeData?.skillsInputList?.length >= 1 ||
          resumeData?.hobbies ||
          resumeData?.languagesInputList?.length >= 1 ? (
            <div className="flex flex-row justify-center items-center">
              <CgShapeCircle className="text-[2.5px] mr-[2px]" />
              <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                Details
              </p>
              <CgShapeCircle className="text-[2.5px] ml-[2px]" />
            </div>
          ) : (
            ""
          )}

          <div className="mt-[1px] flex flex-col items-center">
            <p className="text-[2.5px]">{resumeData?.address}</p>
            <p className="text-[2.5px]">
              {resumeData?.city}
              {resumeData?.city && resumeData?.postalCode ? `,` : ``}{" "}
              {resumeData?.postalCode}
            </p>
            <p className="text-[2.5px]">{resumeData?.country}</p>
            <p className="text-[2.5px]">{resumeData?.phone}</p>
            <p className="text-[2.5px] underline">{resumeData?.email}</p>
          </div>

          {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
            <div className="mt-[2px] flex flex-col items-center">
              <p className="text-[2.5px] text-gray-500">
                Date / Place of birth
              </p>
              <p className="text-[2.5px]">{resumeData?.dateOfBirth}</p>
              <p className="text-[2.5px]">{resumeData?.placeOfBirth}</p>
            </div>
          ) : (
            ""
          )}

          {resumeData?.nationality ? (
            <div className="mt-[1px] flex flex-col items-center">
              <p className="text-[2.5px] text-gray-500">Nationality</p>
              <p className="text-[2.5px]">{resumeData?.nationality}</p>
            </div>
          ) : (
            ""
          )}

          {resumeData?.drivingLicense ? (
            <div className="mt-[1px] flex flex-col items-center">
              <p className="text-[2.5px] text-gray-500">Driving license</p>
              <p className="text-[2.5px]">{resumeData?.drivingLicense}</p>
            </div>
          ) : (
            ""
          )}

          {resumeData?.websiteInputList?.length >= 1 ? (
            <div className="flex flex-col justify-center items-center mt-[2px]">
              <div className="flex flex-row justify-center items-center">
                <CgShapeCircle className="text-[2.5px] mr-[2px]" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.websiteInput === "Websites & Social Links"
                    ? "Links"
                    : resumeData?.websiteInput}
                </p>
                <CgShapeCircle className="text-[2.5px] ml-[2px]" />
              </div>
              {resumeData?.websiteInputList &&
                resumeData?.websiteInputList.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="text-[2.5px] mt-0.5 underline">
                        {item?.label}
                      </p>
                    </div>
                  );
                })}
            </div>
          ) : (
            ""
          )}

          {resumeData?.skillsInputList?.length >= 1 ? (
            <div className="flex flex-col justify-center items-center mt-[2px]">
              <div className="flex flex-row justify-center items-center">
                <CgShapeCircle className="text-[2.5px] mr-[2px]" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.skillsInput}
                </p>
                <CgShapeCircle className="text-[2.5px] ml-[2px]" />
              </div>
              <div>
                {resumeData.skillsInputList &&
                  resumeData.skillsInputList.map((item, index) => {
                    return (
                      <div key={index}>
                        <p className="text-[2.5px] mt-1.5 text-center">
                          {item?.skill}
                        </p>
                        {resumeData?.isNotShowExpertLevel === false ? (
                          <div className="w-[30px] bg-gray-300" id="myProgress">
                            {/* 15 || 25 || 37 || 52 || 65 */}
                            <div
                              className={`${
                                levelWidth[item?.level]
                              } h-[1px] bg-gray-800 mt-1`}
                              id="myBar"
                            ></div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            ""
          )}

          {resumeData?.hobbies ? (
            <div className="flex flex-col justify-center items-center mt-[2px]">
              <div className="flex flex-row justify-center items-center">
                <CgShapeCircle className="text-[2.5px] mr-[2px]" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.hobbiesInput}
                </p>
                <CgShapeCircle className="text-[2.5px] ml-[2px]" />
              </div>
              <p className="text-[2.5px] mt-0.5 p-4 pt-0 pb-0">
                {resumeData?.hobbies}
              </p>
            </div>
          ) : (
            ""
          )}

          {resumeData?.languagesInputList?.length >= 1 ? (
            <div className="flex flex-col justify-center items-center mt-[2px] w-full">
              <div className="flex flex-row justify-center items-center">
                <CgShapeCircle className="text-[2.5px] mr-[2px]" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.languagesInput}
                </p>
                <CgShapeCircle className="text-[2.5px] ml-[2px]" />
              </div>
              <div>
                {resumeData?.languagesInputList &&
                  resumeData?.languagesInputList.map((item, index) => {
                    return (
                      <div key={index}>
                        {item?.language ? (
                          <p className="text-[2.5px] mt-0.5 text-center">
                            {item?.language}
                          </p>
                        ) : (
                          ""
                        )}
                        {!item?.language ||
                        item?.level === "Select Level" ||
                        (index >= 1 && item?.level === "Select Level") ? (
                          ""
                        ) : (
                          <div className="w-[30px] bg-gray-300" id="myProgress">
                            {/* 40 || 53 || 65 */}
                            <div
                              className={`${
                                languageLevelWidth[item?.level]
                              } h-[1px] bg-gray-800 mt-1`}
                              id="myBar"
                            ></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Column 2 */}
        <div>
          {resumeData?.professionalSummary ? (
            <div>
              <div className="flex flex-row items-center">
                <IoMdPerson className="text-[3.5px] mr-1.5" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.summaryInput === "Professional Summary"
                    ? "Profile"
                    : resumeData?.summaryInput}
                </p>
              </div>

              <div className="flex flex-row mt-[1px]">
                <div className="flex flex-col">
                  <CgShapeCircle
                    className={`text-[2.5px] mt-[1px] mr-2 ${
                      resumeData?.professionalSummary?.length >= 90
                        ? `-ml-[1px] text-[8px]`
                        : ``
                    }`}
                  />
                  {resumeData?.professionalSummary?.length >= 90 && (
                    <div className="bg-black w-[1px] h-full ml-[2.5px] relative -top-[0.5px]" />
                  )}
                </div>
                <div>
                  <p className="text-[2.5px]">
                    {resumeData?.professionalSummary}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {resumeData?.employmentInputList?.length >= 1 ? (
            <div className={resumeData?.professionalSummary ? `mt-1` : `mt-0`}>
              <div className="flex flex-row items-center">
                <BsFillHandbagFill className="text-[3.5px] mr-2" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.employmentInput}
                </p>
              </div>

              <div className="flex flex-row mt-[1px]">
                <div className="flex flex-col">
                  <CgShapeCircle className="text-[3.5px] mt-[1px] mr-2" />
                  <div className="bg-black w-[1px] h-full ml-[1.4px] relative top-[0.1px]" />
                </div>
                <div className="mt-[1px]">
                  {resumeData?.employmentInputList &&
                    resumeData?.employmentInputList?.map((item, index) => {
                      let monthNames = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ];
                      let startDate = new Date(item?.startDate);
                      let month = startDate ? startDate.getMonth() : "";
                      let startDateMonth = startDate ? monthNames[month] : "";
                      let startDateYear = startDate
                        ? new Date(startDate).getFullYear()
                        : "";

                      let endDate = new Date(item?.endDate);
                      let myMonth = endDate ? endDate.getMonth() : "";
                      let endDateMonth = endDate ? monthNames[myMonth] : "";
                      let endDateYear = endDate
                        ? new Date(endDate).getFullYear()
                        : "";

                      return (
                        <div
                          key={index}
                          className={`${
                            resumeData.employmentInputList.length >= 2 &&
                            index >= 1
                              ? `mt-2`
                              : ``
                          }`}
                        >
                          <p className="text-[2.5px] font-[700]">
                            {`${item?.jobTitle} ${
                              item?.jobTitle && item?.employer ? "at" : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[2.5px] text-gray-500">
                              {startDateMonth && startDateYear
                                ? `${startDateMonth} ${startDateYear}`
                                : ""}{" "}
                              {item?.startDate && item?.endDate ? `-` : ""}{" "}
                              {endDateMonth && endDateYear
                                ? `${endDateMonth} ${endDateYear}`
                                : ""}
                            </p>
                          ) : (
                            ""
                          )}
                          <p className="text-[2.5px] mt-0.5">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {resumeData?.educationInputList?.length >= 1 ? (
            <div
              className={
                resumeData?.employmentInputList?.length >= 1 ? `mt-1` : ``
              }
            >
              <div className="flex flex-row items-center">
                <IoMdSchool className="text-[3.5px] mr-2" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.educationInput}
                </p>
              </div>

              <div className="flex flex-row mt-[1px]">
                <div className="flex flex-col">
                  <CgShapeCircle className="text-[3.5px] mt-[1px] mr-2" />
                  <div className="bg-black w-[1px] h-full ml-[1.4px] relative top-[0.1px]" />
                </div>
                <div className="mt-[1px]">
                  {resumeData?.educationInputList &&
                    resumeData?.educationInputList.map((item, index) => {
                      let monthNames = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ];
                      let startDate = new Date(item?.startDate);
                      let month = startDate ? startDate.getMonth() : "";
                      let startDateMonth = startDate ? monthNames[month] : "";
                      let startDateYear = startDate
                        ? new Date(startDate).getFullYear()
                        : "";

                      let endDate = new Date(item?.endDate);
                      let myMonth = endDate ? endDate.getMonth() : "";
                      let endDateMonth = endDate ? monthNames[myMonth] : "";
                      let endDateYear = endDate
                        ? new Date(endDate).getFullYear()
                        : "";

                      return (
                        <div
                          key={index}
                          className={`${
                            resumeData?.educationInputList?.length >= 2 &&
                            index >= 1
                              ? `mt-2`
                              : ``
                          }`}
                        >
                          <p className="text-[2.5px] font-[700]">
                            {`${item?.school}${
                              item?.school && item?.degree ? "," : ""
                            } ${item?.degree}${
                              item?.degree && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[2.5px] text-gray-500">
                              {startDateMonth && startDateYear
                                ? `${startDateMonth} ${startDateYear}`
                                : ""}{" "}
                              {item?.startDate && item?.endDate ? `-` : ""}{" "}
                              {endDateMonth && endDateYear
                                ? `${endDateMonth} ${endDateYear}`
                                : ""}
                            </p>
                          ) : (
                            ""
                          )}
                          <p className="text-[2.5px] mt-0.5">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {resumeData?.coursesInputList?.length >= 1 ? (
            <div
              className={
                resumeData?.educationInputList?.length >= 1 ? `mt-1` : ``
              }
            >
              <div className="flex flex-row items-center">
                <HiBadgeCheck className="text-[3.5px] mr-2" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.coursesInput}
                </p>
              </div>

              <div className="flex flex-row mt-[1px]">
                <div className="flex flex-col">
                  <CgShapeCircle className="text-[3.5px] mt-[1px] mr-2" />
                  <div className="bg-black w-[1px] h-full ml-[1.4px] relative top-[0.1px]" />
                </div>
                <div className="mt-[1px]">
                  {resumeData?.coursesInputList &&
                    resumeData?.coursesInputList.map((item, index) => {
                      let monthNames = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ];
                      let startDate = new Date(item?.startDate);
                      let month = startDate ? startDate.getMonth() : "";
                      let startDateMonth = startDate ? monthNames[month] : "";
                      let startDateYear = startDate
                        ? new Date(startDate).getFullYear()
                        : "";

                      let endDate = new Date(item?.endDate);
                      let myMonth = endDate ? endDate.getMonth() : "";
                      let endDateMonth = endDate ? monthNames[myMonth] : "";
                      let endDateYear = endDate
                        ? new Date(endDate).getFullYear()
                        : "";

                      return (
                        <div
                          key={index}
                          className={`${
                            resumeData?.coursesInputList?.length >= 2 &&
                            index >= 1
                              ? `mt-2`
                              : ``
                          }`}
                        >
                          <p className="text-[2.5px] font-[700]">
                            {`${item?.course}${
                              item?.course && item?.institution ? "," : ""
                            } ${item?.institution}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[2.5px] text-gray-500">
                              {startDateMonth && startDateYear
                                ? `${startDateMonth} ${startDateYear}`
                                : ""}{" "}
                              {item?.startDate && item?.endDate ? `-` : ""}{" "}
                              {endDateMonth && endDateYear
                                ? `${endDateMonth} ${endDateYear}`
                                : ""}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {resumeData?.extraCurricularInputList?.length >= 1 ? (
            <div
              className={
                resumeData?.coursesInputList?.length >= 1 ? `mt-1` : ``
              }
            >
              <div className="flex flex-row items-center">
                <BsFlower2 className="text-[3.5px] mr-2" />
                <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                  {resumeData?.extraCurricularInput}
                </p>
              </div>

              <div className="flex flex-row mt-[1px]">
                <div className="flex flex-col">
                  <CgShapeCircle className="text-[3.5px] mt-[1px] mr-2" />
                  <div className="bg-black w-[1px] h-full ml-[1.4px] relative top-[0.1px]" />
                </div>
                <div className="mt-[1px]">
                  {resumeData?.extraCurricularInputList &&
                    resumeData?.extraCurricularInputList.map((item, index) => {
                      let monthNames = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ];
                      let startDate = new Date(item?.startDate);
                      let month = startDate ? startDate.getMonth() : "";
                      let startDateMonth = startDate ? monthNames[month] : "";
                      let startDateYear = startDate
                        ? new Date(startDate).getFullYear()
                        : "";

                      let endDate = new Date(item?.endDate);
                      let myMonth = endDate ? endDate.getMonth() : "";
                      let endDateMonth = endDate ? monthNames[myMonth] : "";
                      let endDateYear = endDate
                        ? new Date(endDate).getFullYear()
                        : "";

                      return (
                        <div
                          key={index}
                          className={`${
                            resumeData?.extraCurricularInputList?.length >= 2 &&
                            index >= 1
                              ? `mt-2`
                              : ``
                          }`}
                        >
                          <p className="text-[2.5px] font-[700]">
                            {`${item?.functionTitle} ${
                              item?.functionTitle && item?.employer ? "at" : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[2.5px] text-gray-500">
                              {startDateMonth && startDateYear
                                ? `${startDateMonth} ${startDateYear}`
                                : ""}{" "}
                              {item?.startDate && item?.endDate ? `-` : ""}{" "}
                              {endDateMonth && endDateYear
                                ? `${endDateMonth} ${endDateYear}`
                                : ""}
                            </p>
                          ) : (
                            ""
                          )}
                          <p className="text-[2.5px] mt-0.5">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div
            className={
              resumeData?.extraCurricularInputList?.length >= 1 ? `mt-1` : ``
            }
          >
            {resumeData?.internshipInputList?.length >= 1 ? (
              <div>
                <div className="flex flex-row items-center">
                  <HiUsers className="text-[3.5px] mr-2" />
                  <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                    {resumeData?.internshipInput}
                  </p>
                </div>

                <div className="flex flex-row mt-[1px]">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[3.5px] mt-[1px] mr-2" />
                    <div className="bg-black w-[1px] h-full ml-[1.4px] relative top-[0.1px]" />
                  </div>
                  <div className="mt-[1px]">
                    {resumeData?.internshipInputList &&
                      resumeData?.internshipInputList.map((item, index) => {
                        let monthNames = [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ];
                        let startDate = new Date(item?.startDate);
                        let month = startDate ? startDate.getMonth() : "";
                        let startDateMonth = startDate ? monthNames[month] : "";
                        let startDateYear = startDate
                          ? new Date(startDate).getFullYear()
                          : "";

                        let endDate = new Date(item?.endDate);
                        let myMonth = endDate ? endDate.getMonth() : "";
                        let endDateMonth = endDate ? monthNames[myMonth] : "";
                        let endDateYear = endDate
                          ? new Date(endDate).getFullYear()
                          : "";

                        return (
                          <div
                            key={index}
                            className={`${
                              resumeData?.internshipInputList?.length >= 2 &&
                              index >= 1
                                ? `mt-2`
                                : ``
                            }`}
                          >
                            <p className="text-[2.5px] font-[700]">
                              {`${item?.jobTitle} ${
                                item?.jobTitle && item?.employer ? "at" : ""
                              } ${item?.employer}${
                                item?.employer && item.city && `,`
                              } ${item.city}`}
                            </p>
                            {(startDateMonth && startDateYear) ||
                            (endDateMonth && endDateYear) ? (
                              <p className="text-[2.5px] text-gray-500">
                                {startDateMonth && startDateYear
                                  ? `${startDateMonth} ${startDateYear}`
                                  : ""}{" "}
                                {item?.startDate && item?.endDate ? `-` : ""}{" "}
                                {endDateMonth && endDateYear
                                  ? `${endDateMonth} ${endDateYear}`
                                  : ""}
                              </p>
                            ) : (
                              ""
                            )}
                            <p className="text-[2.5px] mt-0.5">
                              {item?.description}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {resumeData?.referencesInputList?.length >= 1 ? (
              <div
                className={
                  resumeData?.internshipInputList?.length >= 1 ? `mt-1` : ``
                }
              >
                <div className="flex flex-row items-center">
                  <HiSpeakerphone className="text-[3.5px] mr-2" />
                  <p className="uppercase text-[3.5px] font-[600] -tracking-[0.5px]">
                    {resumeData?.referencesInput}
                  </p>
                </div>

                <div className="flex flex-row mt-[1px]">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[3.5px] mt-[1px] mr-2" />
                    {resumeData?.disabledPreferences === false && (
                      <div className="bg-black w-[1px] h-full ml-[1.4px] relative top-[0.1px]" />
                    )}
                  </div>
                  <div className="mt-[1px]">
                    {resumeData?.disabledPreferences ? (
                      <p className="text-[3.5px] text-black font-bold">
                        Preferences available upon request
                      </p>
                    ) : (
                      ""
                    )}
                    {resumeData?.disabledPreferences === false &&
                      resumeData?.referencesInputList &&
                      resumeData?.referencesInputList.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={`${
                              resumeData?.referencesInputList?.length >= 2 &&
                              index >= 1
                                ? `mt-2`
                                : ``
                            }`}
                          >
                            <p className="text-[2.5px] font-[700]">
                              {`${item?.referentFullName} ${
                                item?.referentFullName && item?.company
                                  ? "from"
                                  : ""
                              } ${item?.company}${item?.company}`}
                            </p>
                            <p className="text-[2.5px] text-gray-500">{`${
                              item?.email
                            } ${item?.email && item?.phone ? `·` : ``} ${
                              item?.phone
                            }`}</p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYorkTemplate;
