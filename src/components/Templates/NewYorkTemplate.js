import React, { useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFlower2, BsTelephoneFill } from "react-icons/bs";
import { CgShapeCircle } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { HiBadgeCheck, HiSpeakerphone, HiUsers } from "react-icons/hi";

import "./styles.css";

const NewYorkTemplate = (props) => {
  const {
    profileImage,
    wantedJobTitle,
    firstName,
    lastName,
    email,
    phone,
    country,
    city,
    address,
    postalCode,
    drivingLicense,
    nationality,
    placeOfBirth,
    dateOfBirth,
    professionalSummary,
    employmentInputList,
    educationInputList,
    websiteInputList,
    skillsInputList,
    isNotShowExpertLevel,
    hobbies,
    languagesInputList,
    coursesInputList,
    internshipInputList,
    extraCurricularInputList,
    referencesInputList,
    summaryInput,
    employmentInput,
    educationInput,
    coursesInput,
    extraCurricularInput,
    internshipInput,
    referencesInput,
    personalDetailInput,
    skillsInput,
    hobbiesInput,
    languagesInput,
    websiteInput,
    disabledPreferences,
  } = props?.resumeData;

  const levelWidth = {
    Novice: "w-[30px]",
    Beginner: "w-[60px]",
    Skillful: "w-[80px]",
    Experienced: "w-[120px]",
    Expert: "w-[150px]",
  };

  const languageLevelWidth = {
    "Very good command": "w-[50px]",
    "Highly Proficient": "w-[100px]",
    "Native Speaker": "w-[150px]",
  };

  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

  const pageOne = () => {
    if (props.page === 1) {
      return (
        <div>
          <div className="pt-4 w-full">
            <div className="flex w-full flex-col justify-center items-center">
              {profileImage && (
                <img
                  src={profileImage}
                  className="w-[70px] h-[70px] rounded-[5px] m-4 mb-4"
                  alt="profile"
                />
              )}
              <div>
                <p className="text-2xl uppercase font-[500] tracking-widest font-serif max-[768px]:text-xl max-[690px]:text-lg max-[595px]:text-sm">
                  {firstName} {lastName}
                </p>
              </div>
              <div className="flex flex-row items-center mt-2">
                <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px]">
                  {wantedJobTitle}
                </p>
                <div className="flex flex-row items-center ml-3">
                  {city && (
                    <MdLocationOn className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px]" />
                  )}
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    {city}
                    {city || postalCode || country ? `,` : ``}
                  </p>
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    {postalCode}
                    {postalCode || country ? `,` : ``}
                  </p>
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    {country}
                  </p>
                </div>
                <div className="flex flex-row items-center ml-3">
                  {phone && (
                    <BsTelephoneFill className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px]" />
                  )}
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    {phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
          grid grid-cols-[250px_minmax(250px,_1fr)_100px]
          max-[883px]:ml-0
          m-14
          p-12
          mr-0
          ml-0
          pl-0
          mb-0
          pr-0
          pb-0
          mt-5
          pt-5
          "
          >
            {/* Column 1 */}
            <div>
              {address ||
              city ||
              postalCode ||
              country ||
              phone ||
              email ||
              dateOfBirth ||
              placeOfBirth ||
              nationality ||
              drivingLicense ||
              websiteInputList?.length >= 1 ||
              skillsInputList?.length >= 1 ||
              hobbies ||
              languagesInputList?.length >= 1 ? (
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[7px] max-[768px]:text-[6px] mr-1.5" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    {personalDetailInput === `Personal Details`
                      ? `Details`
                      : personalDetailInput}
                  </p>
                  <CgShapeCircle className="text-[7px] max-[768px]:text-[6px] ml-1.5" />
                </div>
              ) : (
                ""
              )}

              <div className="mt-1 flex flex-col items-center">
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  {address}
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  {city}
                  {city ? `,` : ``} {postalCode}
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  {country}
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  {phone}
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] underline">
                  {email}
                </p>
              </div>

              {dateOfBirth || placeOfBirth ? (
                <div className="mt-2 flex flex-col items-center">
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                    Date / Place of birth
                  </p>
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                    {dateOfBirth}
                  </p>
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                    {placeOfBirth}
                  </p>
                </div>
              ) : (
                ""
              )}
              {nationality ? (
                <div className="mt-2 flex flex-col items-center">
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                    Nationality
                  </p>
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                    {nationality}
                  </p>
                </div>
              ) : (
                ""
              )}

              {drivingLicense ? (
                <div className="mt-2 flex flex-col items-center">
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                    Driving license
                  </p>
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                    {drivingLicense}
                  </p>
                </div>
              ) : (
                ""
              )}

              {websiteInputList?.length >= 1 ? (
                <div className="flex flex-col justify-center items-center mt-7">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[7px] mr-1.5" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {websiteInput === "Websites & Social Links"
                        ? "Links"
                        : websiteInput}
                    </p>
                    <CgShapeCircle className="text-[7px] ml-1.5" />
                  </div>
                  {websiteInputList &&
                    websiteInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5 underline">
                            {item?.label}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {skillsInputList?.length >= 1 ? (
                <div className="flex flex-col justify-center items-center mt-7">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[7px] mr-1.5" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {skillsInput}
                    </p>
                    <CgShapeCircle className="text-[7px] ml-1.5" />
                  </div>
                  <div>
                    {skillsInputList &&
                      skillsInputList.map((item, index) => {
                        return (
                          <div key={index}>
                            <p className="text-[12px] text-center max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5">
                              {item?.skill}
                            </p>
                            {isNotShowExpertLevel === false ? (
                              <div
                                className="w-[150px] bg-gray-300"
                                id="myProgress"
                              >
                                {/* 15 || 25 || 37 || 52 || 65 */}
                                <div
                                  className={`${
                                    levelWidth[item?.level]
                                  } h-[3px] bg-gray-800 mt-1`}
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

              {hobbies ? (
                <div className="flex flex-col justify-center items-center mt-6">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[7px] mr-1.5" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {hobbiesInput}
                    </p>
                    <CgShapeCircle className="text-[7px] ml-1.5" />
                  </div>
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5">
                    {hobbies}
                  </p>
                </div>
              ) : (
                ""
              )}

              {languagesInputList?.length >= 1 ? (
                <div className="flex flex-col justify-center items-center mt-5 w-full">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[7px] mr-1.5" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {languagesInput}
                    </p>
                    <CgShapeCircle className="text-[7px] ml-1.5" />
                  </div>
                  <div>
                    {languagesInputList &&
                      languagesInputList.map((item, index) => {
                        return (
                          <div key={index}>
                            {item?.language ? (
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5 text-center">
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
                              <div
                                className="w-[150px] bg-gray-300"
                                id="myProgress"
                              >
                                {/* 40 || 53 || 65 */}
                                <div
                                  className={`${
                                    languageLevelWidth[item?.level]
                                  } h-[3px] bg-gray-800 mt-1`}
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
              {professionalSummary ? (
                <div>
                  <div className="flex flex-row items-center">
                    <IoMdPerson className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-3.5" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {summaryInput === "Professional Summary"
                        ? "Profile"
                        : summaryInput}
                    </p>
                  </div>

                  <div className="flex flex-row mt-1">
                    <div className="flex flex-col">
                      <CgShapeCircle
                        className={`text-[7px] mt-1.5 ml-1 mr-5 ${
                          professionalSummary?.length >= 90
                            ? `ml-[1px] text-[8px]`
                            : ``
                        }`}
                      />
                      {professionalSummary?.length >= 90 && (
                        <div className="bg-black w-[2px] h-full ml-[4px] mb-1 relative -top-[1px]" />
                      )}
                    </div>
                    <div>
                      <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                        {professionalSummary}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {employmentInputList?.length >= 1 ? (
                <div className={professionalSummary ? `mt-5` : `mt-0`}>
                  <div className="flex flex-row items-center">
                    <BsFillHandbagFill className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {employmentInput}
                    </p>
                  </div>

                  <div className="flex flex-row mt-1">
                    <div className="flex flex-col">
                      <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                      <div className="bg-black w-[2px] h-[46px] ml-[6.5px] relative -top-[1px]" />
                    </div>
                    <div className="mt-1">
                      {employmentInputList &&
                        employmentInputList?.map((item, index) => {
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
                          let startDateMonth = startDate
                            ? monthNames[month]
                            : "";
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
                                employmentInputList.length >= 2 && index >= 1
                                  ? `mt-5`
                                  : ``
                              }`}
                            >
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                                {`${item?.jobTitle} ${
                                  item?.jobTitle && item?.employer ? "at" : ""
                                } ${item?.employer}${
                                  item?.employer && item.city && `,`
                                } ${item.city}`}
                              </p>
                              {(startDateMonth && startDateYear) ||
                              (endDateMonth && endDateYear) ? (
                                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
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
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
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

              {educationInputList?.length >= 1 ? (
                <div className={employmentInputList?.length >= 1 ? `mt-5` : ``}>
                  <div className="flex flex-row items-center">
                    <IoMdSchool className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {educationInput}
                    </p>
                  </div>

                  <div className="flex flex-row mt-1">
                    <div className="flex flex-col">
                      <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                      <div className="bg-black w-[2px] h-[46px] ml-[6.5px] relative -top-[1px]" />
                    </div>
                    <div className="mt-1">
                      {educationInputList &&
                        educationInputList.map((item, index) => {
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
                          let startDateMonth = startDate
                            ? monthNames[month]
                            : "";
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
                                educationInputList?.length >= 2 && index >= 1
                                  ? `mt-5`
                                  : ``
                              }`}
                            >
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                                {`${item?.school}${
                                  item?.school && item?.degree ? "," : ""
                                } ${item?.degree}${
                                  item?.degree && item.city && `,`
                                } ${item.city}`}
                              </p>
                              {(startDateMonth && startDateYear) ||
                              (endDateMonth && endDateYear) ? (
                                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
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
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
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

              {coursesInputList?.length >= 1 ? (
                <div className={educationInputList?.length >= 1 ? `mt-5` : ``}>
                  <div className="flex flex-row items-center">
                    <HiBadgeCheck className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {coursesInput}
                    </p>
                  </div>

                  <div className="flex flex-row mt-1">
                    <div className="flex flex-col">
                      <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                      <div className="bg-black w-[2px] h-[20px] ml-[6.5px] relative -top-[1px]" />
                    </div>
                    <div className="mt-1">
                      {coursesInputList &&
                        coursesInputList.map((item, index) => {
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
                          let startDateMonth = startDate
                            ? monthNames[month]
                            : "";
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
                                coursesInputList?.length >= 2 && index >= 1
                                  ? `mt-5`
                                  : ``
                              }`}
                            >
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                                {`${item?.course}${
                                  item?.course && item?.institution ? "," : ""
                                } ${item?.institution}`}
                              </p>
                              {(startDateMonth && startDateYear) ||
                              (endDateMonth && endDateYear) ? (
                                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
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

              {extraCurricularInputList?.length >= 1 ? (
                <div className={coursesInputList?.length >= 1 ? `mt-5` : ``}>
                  <div className="flex flex-row items-center">
                    <BsFlower2 className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {extraCurricularInput}
                    </p>
                  </div>

                  <div className="flex flex-row mt-1">
                    <div className="flex flex-col">
                      <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                      <div className="bg-black w-[2px] h-[46px] ml-[6.5px] relative -top-[1px]" />
                    </div>
                    <div className="mt-1">
                      {extraCurricularInputList &&
                        extraCurricularInputList.map((item, index) => {
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
                          let startDateMonth = startDate
                            ? monthNames[month]
                            : "";
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
                                extraCurricularInputList?.length >= 2 &&
                                index >= 1
                                  ? `mt-5`
                                  : ``
                              }`}
                            >
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                                {`${item?.functionTitle} ${
                                  item?.functionTitle && item?.employer
                                    ? "at"
                                    : ""
                                } ${item?.employer}${
                                  item?.employer && item.city && `,`
                                } ${item.city}`}
                              </p>
                              {(startDateMonth && startDateYear) ||
                              (endDateMonth && endDateYear) ? (
                                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
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
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
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

              {internshipInputList?.length >= 1 ? (
                <div
                  className={
                    extraCurricularInputList?.length >= 1 ? `mt-5` : ``
                  }
                >
                  <div className="flex flex-row items-center">
                    <HiUsers className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                    <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                      {internshipInput}
                    </p>
                  </div>

                  <div className="flex flex-row mt-1">
                    <div className="flex flex-col">
                      <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                      <div className="bg-black w-[2px] h-full mb-1 ml-[6.5px] relative -top-[1px]" />
                    </div>
                    <div className="mt-1">
                      {internshipInputList &&
                        internshipInputList.map((item, index) => {
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
                          let startDateMonth = startDate
                            ? monthNames[month]
                            : "";
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
                                internshipInputList?.length >= 2 && index >= 1
                                  ? `mt-5`
                                  : ``
                              }`}
                            >
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                                {`${item?.jobTitle} ${
                                  item?.jobTitle && item?.employer ? "at" : ""
                                } ${item?.employer}${
                                  item?.employer && item.city && `,`
                                } ${item.city}`}
                              </p>
                              {(startDateMonth && startDateYear) ||
                              (endDateMonth && endDateYear) ? (
                                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
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
                              <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
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
            </div>
          </div>
        </div>
      );
    }
  };

  const pageTwo = () => {
    if (props.page === 2) {
      return (
        <div className="pt-10 flex flex-col w-10/12 items-center">
          {referencesInputList?.length >= 1 ? (
            <div>
              <div className="flex flex-row items-center">
                <HiSpeakerphone className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                  {referencesInput}
                </p>
              </div>

              <div className="flex flex-row mt-1">
                <div className="flex flex-col">
                  <CgShapeCircle className="text-[7px] mt-1.5 ml-1 mr-5" />
                  {disabledPreferences === false && (
                    <div className="bg-black w-[2px] h-[20px] ml-[6.5px] relative -top-[1px]" />
                  )}
                </div>
                <div className="1">
                  {disabledPreferences ? (
                    <p className="text-[10px] text-black font-bold">
                      Preferences available upon request
                    </p>
                  ) : (
                    ""
                  )}
                  {disabledPreferences === false &&
                    referencesInputList &&
                    referencesInputList.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            referencesInputList?.length >= 2 && index >= 1
                              ? `mt-2`
                              : ``
                          }`}
                        >
                          <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                            {`${item?.referentFullName} ${
                              item?.referentFullName && item?.company
                                ? "from"
                                : ""
                            } ${item?.company}${item?.company}`}
                          </p>
                          <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">{`${
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
      );
    }
  };

  return (
    <div
      className="flex flex-1 flex-col w-full h-[930px] 
      border-l border-gray-600 ml-5
      pl-10 pb-10 
      unselectable
      max-[768px]:border-none
      max-[768px]:ml-0
      max-[1029px]:pr-5 max-[1029px]:pl-5 
      "
    >
      <div className="flex flex-1 bg-white flex-col w-full overflow-hidden h-[900px] rounded-md hover:default">
        {/* page one */}
        {pageOne()}

        {/* page two */}
        {pageTwo()}
      </div>
    </div>
  );
};

export default NewYorkTemplate;
