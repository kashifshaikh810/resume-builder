import React from "react";
import { MdOutlineAttachment } from "react-icons/md";

import "./styles.css";

const ViennaTemplate = (props) => {
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
  } = props?.resumeData || {};

  return (
    <div
      className="flex flex-col w-full h-[1200px] 
      ml-5
      max-[1029px]:pl-1 pl-10 pb-10 
      unselectable
      max-[768px]:border-none
      max-[768px]:ml-0
      max-[620px]:h-[900px]
      max-[703px]:h-[880px]
      max-[610px]:h-[830px]
      max-[570px]:h-[780px]
      max-[535px]:h-[730px]
      max-[500px]:h-[680px]
      "
    >
      <div className="flex bg-white w-full max-[1029px]:w-11/12 overflow-hidden h-[1100px] self-center rounded-md hover:default">
        <div className="p-10 w-full">
          <div className="flex flex-row w-full">
            {profileImage && (
              <img src={profileImage} alt="prof" className="w-64 h-48" />
            )}
            <div
              className={`w-full ${
                profileImage ||
                firstName ||
                lastName ||
                wantedJobTitle ||
                address ||
                city ||
                postalCode ||
                country ||
                phone ||
                email
                  ? `bg-[#4afbba]`
                  : ``
              } p-5 pl-10`}
            >
              <p className="text-3xl font-bold">
                {firstName} {lastName}
              </p>
              <p className="text-xl capitalize">{wantedJobTitle}</p>

              <div className="pt-10">
                <div className="flex flex-row">
                  <p className="text-[12px]">
                    {address}
                    {(address && city) || postalCode || country ? `,` : ``}{" "}
                  </p>
                  <p className="text-[12px] ml-1">
                    {" "}
                    {city}
                    {(city && postalCode) || country ? `,` : ``}{" "}
                  </p>
                  <p className="text-[12px] ml-1">
                    {" "}
                    {postalCode}
                    {postalCode && country ? `,` : ``}{" "}
                  </p>
                  <p className="text-[12px] ml-1"> {country} </p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-[12px]">{phone}</p>
                  <div className="bg-black w-[2px] h-[2px] rounded-full ml-2 mr-2" />
                  <p className="text-[12px] underline">{email}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
    grid 
    grid-cols-[250px_minmax(250px,_1fr)_100px]
     mt-4 pt-4
    "
          >
            <div>
              {websiteInputList?.length >= 1 ? (
                <div className="flex flex-row items-center flex-wrap">
                  <MdOutlineAttachment className="text-[12px]" />
                  {websiteInputList &&
                    websiteInputList.map((item, index) => {
                      const lastIndex = websiteInputList.length - 1;
                      if (index === lastIndex) {
                        var resOfLastIndex = index || index === 0;
                      }

                      return (
                        <div key={index}>
                          <p
                            className={`${
                              index >= 1 ? `ml-0.5` : `ml-1`
                            } underline text-[12px]`}
                          >
                            {item?.label}
                            {resOfLastIndex ? `` : item?.label ? `,` : ``}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {dateOfBirth || placeOfBirth ? (
                <div className="mt-5">
                  <p className="text-[12px] font-bold">Date / Place of birth</p>
                  <p className="text-[12px]">
                    {dateOfBirth}
                    {dateOfBirth && placeOfBirth ? `,` : ``} {placeOfBirth}
                  </p>
                </div>
              ) : (
                ``
              )}
              {nationality && (
                <div className="mt-5">
                  <p className="text-[12px] font-bold">Nationality</p>
                  <p className="text-[12px]">{nationality}</p>
                </div>
              )}
              {drivingLicense && (
                <div className="mt-5">
                  <p className="text-[12px] font-bold">Driving License</p>
                  <p className="text-[12px]">{drivingLicense}</p>
                </div>
              )}

              {skillsInputList?.length >= 1 ? (
                <div className="mt-5">
                  <p className="text-[12px] font-bold">{skillsInput}</p>
                  {skillsInputList &&
                    skillsInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="text-[12px] mt-0.5">{item?.skill}</p>
                          {isNotShowExpertLevel === false && item?.skill ? (
                            <div className="flex flex-row items-center mt-0.5">
                              <div
                                className={`${
                                  item?.level === "Novice" ||
                                  item?.level === "Beginner" ||
                                  item?.level === "Skillful" ||
                                  item?.level === "Experienced" ||
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Beginner" ||
                                  item?.level === "Skillful" ||
                                  item?.level === "Experienced" ||
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
                              <div
                                className={`${
                                  item?.level === "Skillful" ||
                                  item?.level === "Experienced" ||
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
                              <div
                                className={`${
                                  item?.level === "Experienced" ||
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
                              <div
                                className={`${
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
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

              {hobbies ? (
                <div className="mt-5">
                  <p className="text-[12px] font-bold">{hobbiesInput}</p>
                  <p className="text-[12px]">{hobbies}</p>
                </div>
              ) : (
                ""
              )}

              {languagesInputList?.length >= 1 ? (
                <div className="mt-5">
                  <p className="text-[12px] font-bold">{languagesInput}</p>
                  {languagesInputList &&
                    languagesInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          {item?.language ? (
                            <p className="text-[12px]">{item?.language}</p>
                          ) : (
                            ""
                          )}
                          {!item?.language ||
                          item?.level === "Select Level" ||
                          (index >= 1 && item?.level === "Select Level") ? (
                            ""
                          ) : (
                            <div className="flex flex-row items-center mt-0.5">
                              <div
                                className={`${
                                  item?.level === "Very good command" ||
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Very good command" ||
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
                              <div
                                className={`${
                                  item?.level === "Very good command" ||
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
                              <div
                                className={`${
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
                              <div
                                className={`${
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[15px] h-[1.5px] ml-0.5`}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              {professionalSummary ? (
                <div>
                  <p className="font-bold text-[16px]">
                    {summaryInput === "Professional Summary"
                      ? "Profile"
                      : summaryInput}
                  </p>
                  <p className="text-[12px] p-3 pl-0 pt-1.5">
                    {professionalSummary}
                  </p>
                </div>
              ) : (
                ""
              )}

              {employmentInputList?.length >= 1 ? (
                <div className={professionalSummary ? `mt-2` : ``}>
                  <p className="font-bold">{employmentInput}</p>
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
                            employmentInputList?.length >= 2 && index >= 1
                              ? `mt-2`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[12px] mt-1">
                            {`${item?.jobTitle}${
                              item?.jobTitle && item?.employer ? "," : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[12px] mt-1">
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
                          <p className="text-[12px] mt-1.5 font-[600] text-gray-600">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {educationInputList?.length >= 1 ? (
                <div className={employmentInputList?.length >= 1 ? `mt-5` : ``}>
                  <p className="font-bold">{educationInput}</p>
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
                            educationInputList?.length >= 2 && index >= 1
                              ? `mt-2`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[12px] mt-1">
                            {`${item?.school}${
                              item?.school && item?.degree ? "," : ""
                            } ${item?.degree}${
                              item?.degree && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[12px] mt-1">
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
                          <p className="text-[12px] mt-1.5 font-[600] text-gray-600">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {coursesInputList?.length >= 1 ? (
                <div className={educationInputList?.length >= 1 ? `mt-5` : ``}>
                  <p className="font-bold">{coursesInput}</p>
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
                            coursesInputList?.length >= 2 && index >= 1
                              ? `mt-5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[12px] mt-1">
                            {`${item?.course}${
                              item?.course && item?.institution ? "," : ""
                            } ${item?.institution}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[12px] mt-1">
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
              ) : (
                ""
              )}

              {extraCurricularInputList?.length >= 1 ? (
                <div className={coursesInputList?.length >= 1 ? `mt-5` : ``}>
                  <p className="font-bold">{extraCurricularInput}</p>
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
                            extraCurricularInputList?.length >= 2 && index >= 1
                              ? `mt-5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[12px] mt-1">
                            {`${item?.functionTitle}${
                              item?.functionTitle && item?.employer ? "," : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[12px] mt-1">
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
                          <p className="text-[12px] mt-1 font-[600] text-gray-600">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
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
                  <p className="font-bold">{internshipInput}</p>
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
                            internshipInputList?.length >= 2 && index >= 1
                              ? `mt-5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[12px] mt-1">
                            {`${item?.jobTitle}${
                              item?.jobTitle && item?.employer ? "," : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[12px] mt-1">
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
                          <p className="text-[12px] mt-1 font-[600] text-gray-600">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {referencesInputList?.length >= 1 ? (
                <div className={internshipInputList?.length >= 1 ? `mt-5` : ``}>
                  <p className="font-bold">{referencesInput}</p>

                  {disabledPreferences ? (
                    <p className="text-[12px] text-black font-bold">
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
                              ? `mt-5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[12px] mt-1">
                            {`${item?.referentFullName} ${
                              item?.referentFullName && item?.company
                                ? "from"
                                : ""
                            } ${item?.company}${item?.company}`}
                          </p>
                          <div className="flex flex-row items-center">
                            <p className="text-[12px] mt-0.5">{item?.phone}</p>
                            {item?.phone && item?.email ? (
                              <div className="bg-gray-700 w-[2px] h-[2px] rounded-full ml-2 mr-2 mt-1" />
                            ) : (
                              ""
                            )}
                            <p className="text-[12px] mt-1 underline">
                              {item?.email}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViennaTemplate;
