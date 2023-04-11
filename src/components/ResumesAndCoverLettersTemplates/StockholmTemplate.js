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
    Beginner: "w-[30px]",
    Skillful: "w-[40px]",
    Experienced: "w-[50px]",
    Expert: "w-[60px]",
  };

  const linerProgressLanguageLine = {
    "Very good command": "w-[35px]",
    "Highly Proficient": "w-[45px]",
    "Native Speaker": "w-[60px]",
  };

  return (
    <div className="p-2 grid grid-cols-[100px_minmax(100px,_1fr)_100px] -space-x-14 -space-y-7">
      <div>
        <div className="flex flex-row items-center">
          {resumeData?.profileImage && (
            <img
              src={resumeData?.profileImage}
              alt="profile"
              className="w-5 h-5"
            />
          )}
          {resumeData?.firstName ||
          resumeData?.lastName ||
          resumeData?.wantedJobTitle ? (
            <div className={`${resumeData?.profileImage ? `ml-3` : ``}`}>
              {resumeData?.firstName || resumeData?.lastName ? (
                <p className="text-[6px] font-bold">
                  {resumeData?.firstName && resumeData?.firstName}{" "}
                  {resumeData?.lastName && resumeData?.lastName}
                </p>
              ) : null}
              {resumeData?.wantedJobTitle && (
                <p className="text-[3px] text-gray-600">
                  {resumeData?.wantedJobTitle}
                </p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        {resumeData?.professionalSummary && (
          <div className="flex flex-row mt-1.5">
            <HiUser className="text-[4px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[4px] font-semibold">
                {resumeData?.summaryInput === "Professional Summary"
                  ? "Profile"
                  : resumeData?.summaryInput}
              </p>
              <p className="text-[3px] text-gray-600">
                {resumeData?.professionalSummary}
              </p>
            </div>
          </div>
        )}

        {resumeData?.employmentInputList?.length >= 1 ? (
          <div className="flex flex-row mt-1.5">
            <BsBagFill className="text-[4px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[4px] font-semibold">
                {resumeData?.employmentInput}
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
                      <p className="text-[3px] text-gray-600">
                        {`${item?.jobTitle} ${
                          item?.jobTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[4px] text-gray-400">
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
                      <p className="text-[3px] text-gray-600">
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
          <div className="flex flex-row mt-1.5">
            <IoMdSchool className="text-[4px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[4px] font-semibold">
                {resumeData?.educationInput}
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
                      <p className="text-[3px] text-gray-600">
                        {`${item?.school} ${
                          item?.school && item?.degree ? "," : ""
                        } ${item?.degree}${item?.degree && item.city && `,`} ${
                          item.city
                        }`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[4px] text-gray-400">
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
                      <p className="text-[3px] text-gray-600">
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
          <div className="flex flex-row mt-1.5">
            <MdStars className="text-[4px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[4px] font-semibold">
                {resumeData?.coursesInput}
              </p>
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
                      <p className="text-[3px] text-gray-600">
                        {`${item?.course}${
                          item?.course && item?.institution ? "," : ""
                        } ${item?.institution}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[4px] text-gray-400">
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
          <div className="flex flex-row mt-1.5">
            <GiCottonFlower className="text-[4px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[4px] font-semibold">
                {resumeData?.extraCurricularInput}
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
                      <p className="text-[3px] text-gray-600">
                        {`${item?.functionTitle} ${
                          item?.functionTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[4px] text-gray-400">
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
                      <p className="text-[3px] text-gray-600">
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
          <div className="flex flex-row mt-1.5">
            <HiUsers className="text-[4px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[4px] font-semibold">
                {resumeData?.internshipInput}
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
                      <p className="text-[3px] text-gray-600">
                        {`${item?.jobTitle} ${
                          item?.jobTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[4px] text-gray-400">
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
                      <p className="text-[3px] text-gray-600">
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
          <div className="flex flex-row mt-1.5">
            <HiSpeakerphone className="text-[4px] mt-0.5" />
            <div className="ml-1">
              <p className="text-[4px] font-semibold">
                {resumeData?.referencesInput}
              </p>
              {resumeData?.disabledPreferences ? (
                <p className="text-[4px] text-black font-bold">
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
                      <p className="text-[3px] text-gray-600">
                        {`${item?.referentFullName} ${
                          item?.referentFullName && item?.company ? "from" : ""
                        } ${item?.company}${item?.company}`}
                      </p>
                      <div className="flex flex-row">
                        <p className="text-[4px] text-blue-400 mr-0.5">
                          {item?.email}
                        </p>
                        <p className="text-[3px] text-gray-600">
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
        className={`relative left-16 ml-6 ${
          resumeData?.profileImage ? `top-14 mt-1` : `top-10`
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
          <p className="text-[4px] font-semibold">
            {resumeData?.personalDetailInput}
          </p>
        ) : (
          ""
        )}
        {resumeData?.address ||
        resumeData?.city ||
        resumeData?.postalCode ||
        resumeData?.country ||
        resumeData?.phone ||
        resumeData?.email ? (
          <div>
            <p className="text-[3px] text-gray-600">{resumeData?.address}</p>
            <p className="text-[3px] text-gray-600">
              {`${resumeData?.city} ${
                resumeData?.city && resumeData?.postalCode ? `,` : ``
              } ${resumeData?.postalCode}`}
            </p>
            <p className="text-[3px] text-gray-600">{resumeData?.country}</p>
            <p className="text-[3px] text-gray-600">{resumeData?.phone}</p>
            <p className="text-[4px] text-blue-400">{resumeData?.email}</p>
          </div>
        ) : (
          ""
        )}

        {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
          <div className="mt-2">
            <p className="text-[3px] text-gray-600">Date / Place of birth</p>
            <p className="text-[4px] text-black">{resumeData?.dateOfBirth}</p>
            <p className="text-[4px] text-black">{resumeData?.placeOfBirth}</p>
          </div>
        ) : null}

        {resumeData?.nationality && (
          <div className="mt-2">
            <p className="text-[3px] text-gray-600">Nationality</p>
            <p className="text-[4px] text-black">{resumeData?.nationality}</p>
          </div>
        )}

        {resumeData?.drivingLicense && (
          <div className="mt-2">
            <p className="text-[3px] text-gray-600">Driving License</p>
            <p className="text-[4px] text-black">
              {resumeData?.drivingLicense}
            </p>
          </div>
        )}

        {resumeData?.websiteInputList?.length >= 1 ? (
          <div className="mt-2">
            <p className="text-[4px] font-semibold">
              {resumeData?.websiteInput}
            </p>
            {resumeData?.websiteInputList &&
              resumeData?.websiteInputList.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-[4px] text-blue-400">{item?.label}</p>
                  </div>
                );
              })}
          </div>
        ) : (
          ""
        )}

        <div className="w-full">
          {resumeData?.skillsInputList?.length >= 1 ? (
            <div className="mt-1.5">
              <p className="text-[4px] font-semibold">
                {resumeData?.skillsInput}
              </p>
              {resumeData.skillsInputList &&
                resumeData.skillsInputList.map((item, index) => {
                  return (
                    <div key={index} className="w-full">
                      <p className="text-[4px] text-black mt-1">
                        {item?.skill}
                      </p>
                      {resumeData?.isNotShowExpertLevel === false &&
                      item.skill ? (
                        <div>
                          <div className="w-[60px] bg-gray-200" id="myProgress">
                            <div
                              className={`${
                                linerProgressLine[item.level]
                              } h-[1.3px] bg-blue-400 mt-1`}
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
            <p className="text-[4px] font-semibold">
              {resumeData?.hobbiesInput}
            </p>
            <p className="text-[4px] text-black">{resumeData?.hobbies}</p>
          </div>
        )}

        {resumeData?.languagesInputList?.length >= 1 ? (
          <div className="mt-2">
            <p className="text-[4px] font-semibold">
              {resumeData?.languagesInput}
            </p>
            {resumeData?.languagesInputList &&
              resumeData?.languagesInputList.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-[4px] text-black mt-1">
                      {item?.language}
                    </p>
                    {item?.language ? (
                      <div>
                        <div className="w-[60px] bg-gray-200" id="myProgress">
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
