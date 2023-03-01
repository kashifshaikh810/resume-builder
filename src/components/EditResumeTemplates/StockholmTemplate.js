import React from "react";

import { GiCottonFlower } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { MdStars } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";

const StockholmTemplate = (props) => {
  const { resumeData } = props;

  const linerProgressLine = {
    Novice: "w-[20px]",
    Beginner: "w-[40px]",
    Skillful: "w-[60px]",
    Experienced: "w-[80px]",
    Expert: "w-[100px]",
  };

  const linerProgressLanguageLine = {
    "Very good command": "w-[60px]",
    "Highly Proficient": "w-[80px]",
    "Native Speaker": "w-[100px]",
  };

  return (
    <div className="p-5 pt-2 grid grid-cols-2 -space-x-7">
      <div>
        <div className="flex flex-row items-center">
          {resumeData?.profileImage && (
            <img
              src={resumeData?.profileImage}
              alt="profile"
              className="w-8 h-8"
            />
          )}
          <div className={`${props?.profileImage ? `ml-3` : ``}`}>
            {resumeData?.firstName || resumeData?.lastName ? (
              <p className="text-sm font-bold">
                {resumeData?.firstName && resumeData?.firstName}{" "}
                {resumeData?.lastName && resumeData?.lastName}
              </p>
            ) : null}
            {resumeData?.wantedJobTitle && (
              <p className="text-[6px] text-gray-600">
                {resumeData?.wantedJobTitle}
              </p>
            )}
          </div>
        </div>

        {resumeData?.professionalSummary && (
          <div className="flex flex-row mt-3">
            <div>
              <HiUser className="text-[6px] mt-0.5" />
            </div>
            <div className="ml-1">
              <p className="text-[7px] font-semibold">
                {props?.summaryInput === "Professional Summary"
                  ? "Profile"
                  : props?.summaryInput}
              </p>
              <p className="text-[6px] text-gray-600">
                {resumeData?.professionalSummary}
              </p>
            </div>
          </div>
        )}

        {resumeData?.employmentInputList?.length >= 1 ? (
          <div className="flex flex-row mt-3">
            <BsBagFill className="text-[6px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[7px] font-semibold">
                {props?.employmentInput}
              </p>
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
                        resumeData.employmentInputList.length >= 2 && index >= 1
                          ? `mt-2`
                          : ``
                      }`}
                    >
                      <p className="text-[6px] text-gray-600">
                        {`${item?.jobTitle} ${
                          item?.jobTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[6px] text-gray-400">
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
                      <p className="text-[6px] text-gray-600">
                        {item?.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          ""
        )}

        {resumeData?.educationInputList?.length >= 1 ? (
          <div className="flex flex-row mt-3">
            <IoMdSchool className="text-[6px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[7px] font-semibold">
                {props?.educationInput}
              </p>
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
                      <p className="text-[6px] text-gray-600">
                        {`${item?.school} ${
                          item?.school && item?.degree ? "," : ""
                        } ${item?.degree}${item?.degree && item.city && `,`} ${
                          item.city
                        }`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[6px] text-gray-400">
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
                      <p className="text-[6px] text-gray-600">
                        {item?.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          ""
        )}

        {resumeData?.coursesInputList?.length >= 1 ? (
          <div className="flex flex-row mt-3">
            <MdStars className="text-[6px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[7px] font-semibold">{props?.coursesInput}</p>
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
                        resumeData?.coursesInputList?.length >= 2 && index >= 1
                          ? `mt-2`
                          : ``
                      }`}
                    >
                      <p className="text-[6px] text-gray-600">
                        {`${item?.course}${
                          item?.course && item?.institution ? "," : ""
                        } ${item?.institution}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[6px] text-gray-400">
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
        ) : (
          ""
        )}

        {resumeData?.extraCurricularInputList?.length >= 1 ? (
          <div className="flex flex-row mt-3">
            <GiCottonFlower className="text-[6px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[7px] font-semibold">
                {props?.extraCurricularInput}
              </p>
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
                      <p className="text-[6px] text-gray-600">
                        {`${item?.functionTitle} ${
                          item?.functionTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[6px] text-gray-400">
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
                      <p className="text-[6px] text-gray-600">
                        {item?.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          ""
        )}

        {resumeData?.internshipInputList?.length >= 1 ? (
          <div className="flex flex-row mt-3">
            <HiUsers className="text-[6px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[7px] font-semibold">
                {props?.internshipInput}
              </p>
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
                      <p className="text-[6px] text-gray-600">
                        {`${item?.jobTitle} ${
                          item?.jobTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[6px] text-gray-400">
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
                      <p className="text-[6px] text-gray-600">
                        {item?.description}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          ""
        )}

        {resumeData?.referencesInputList?.length >= 1 ? (
          <div className="flex flex-row mt-3">
            <HiSpeakerphone className="text-[6px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[7px] font-semibold">
                {props?.referencesInput}
              </p>
              {resumeData?.disabledPreferences ? (
                <p className="text-[6px] text-black font-bold">
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
                      <p className="text-[6px] text-gray-600">
                        {`${item?.referentFullName} ${
                          item?.referentFullName && item?.company ? "from" : ""
                        } ${item?.company}${item?.company}`}
                      </p>
                      <div className="flex flex-row">
                        <p className="text-[6px] text-blue-400 mr-0.5">
                          {item?.email}
                        </p>
                        <p className="text-[6px] text-gray-600">
                          {item?.email && item?.phone ? "·" : ""} {item?.phone}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          ""
        )}

        {/*  */}
      </div>

      <div
        className={`relative left-12 ml-6 ${
          props?.profileImage ? `top-14 mt-1` : `top-10`
        }
      ${resumeData?.isNotShowExpertLevel === false ? `left-20` : `left-32`}
      `}
      >
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
          <p className="text-[7px] font-semibold">
            {props?.personalDetailInput === `Personal Details`
              ? `Details`
              : props?.personalDetailInput}
          </p>
        ) : (
          ""
        )}
        <div>
          <p className="text-[6px] text-gray-600">{resumeData?.address}</p>
          <p className="text-[6px] text-gray-600">
            {`${resumeData?.city} ${
              resumeData?.city && resumeData?.postalCode ? `,` : ``
            } ${resumeData?.postalCode}`}
          </p>
          <p className="text-[6px] text-gray-600">{resumeData?.country}</p>
          <p className="text-[6px] text-gray-600">{resumeData?.phone}</p>
          <p className="text-[6px] text-blue-400">{resumeData?.email}</p>
        </div>

        {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
          <div className="mt-2">
            <p className="text-[6px] text-gray-600">Date / Place of birth</p>
            <p className="text-[6px] text-black">{resumeData?.dateOfBirth}</p>
            <p className="text-[6px] text-black">{resumeData?.placeOfBirth}</p>
          </div>
        ) : null}

        {resumeData?.nationality && (
          <div className="mt-2">
            <p className="text-[6px] text-gray-600">Nationality</p>
            <p className="text-[6px] text-black">{resumeData?.nationality}</p>
          </div>
        )}

        {resumeData?.drivingLicense && (
          <div className="mt-2">
            <p className="text-[6px] text-gray-600">Driving License</p>
            <p className="text-[6px] text-black">
              {resumeData?.drivingLicense}
            </p>
          </div>
        )}

        {resumeData?.websiteInputList?.length >= 1 ? (
          <div className="mt-2">
            <p className="text-[7px] font-semibold">
              {props?.websiteInput === `Websites & Social Links`
                ? `Links`
                : props?.websiteInput}
            </p>
            {resumeData?.websiteInputList &&
              resumeData?.websiteInputList.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-[6px] text-blue-400">{item?.label}</p>
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}

        <div className="w-full">
          {resumeData?.skillsInputList?.length >= 1 ? (
            <div className="mt-2">
              <p className="text-[7px] font-semibold">{props?.skillsInput}</p>
              {resumeData.skillsInputList &&
                resumeData.skillsInputList.map((item, index) => {
                  return (
                    <div key={index} className="w-full">
                      <p className="text-[6px] text-black mt-1">
                        {item?.skill}
                      </p>
                      {resumeData?.isNotShowExpertLevel === false &&
                      item.skill ? (
                        <div>
                          <div
                            className="w-[100px] bg-gray-200"
                            id="myProgress"
                          >
                            <div
                              className={`${
                                linerProgressLine[item.level]
                              } h-[1.5px] bg-blue-400 mt-1`}
                              id="myBar"
                            ></div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
            </div>
          ) : (
            ""
          )}
        </div>

        {resumeData?.hobbies && (
          <div className="mt-2">
            <p className="text-[7px] font-semibold">{props?.hobbiesInput}</p>
            <p className="text-[6px] text-black">{resumeData?.hobbies}</p>
          </div>
        )}

        {resumeData?.languagesInputList?.length >= 1 ? (
          <div className="mt-2">
            <p className="text-[7px] font-semibold">{props?.languagesInput}</p>
            {resumeData?.languagesInputList &&
              resumeData?.languagesInputList.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-[6px] text-black mt-1">
                      {item?.language}
                    </p>
                    {item?.language ? (
                      <div>
                        <div className="w-[100px] bg-gray-200" id="myProgress">
                          <div
                            className={`${
                              linerProgressLanguageLine[item.level]
                            } h-[1.5px] bg-blue-400 mt-1`}
                            id="myBar"
                          ></div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default StockholmTemplate;
