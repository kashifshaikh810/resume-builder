import React, { useEffect } from "react";

import "./styles.css";

const TorontoTemplate = (props) => {
  const { resumeData } = props;

  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

  const levelNum = {
    Novice: 1,
    Beginner: 2,
    Skillful: 3,
    Experienced: 4,
    Expert: 5,
  };

  const levelWidth = {
    "Very good command": "-right-[66px]",
    "Highly Proficient": "-right-[55px]",
    "Native Speaker": "-right-[50px]",
  };

  const oneSectionTemplate = () => {
    if (props?.page === 1) {
      return (
        <div className="p-2">
          <div className="flex flex-row">
            {props.profileImage && (
              <>
                <img
                  src={props.profileImage}
                  alt="prof"
                  className="w-[3rem] h-[4rem]"
                />
                <div>
                  <p className="text-2xl font-bold ml-8 pl-8">
                    {resumeData?.firstName}
                  </p>
                  <p className="text-2xl font-bold ml-8 pl-8">
                    {resumeData?.lastName}
                  </p>
                </div>
              </>
            )}
          </div>

          <div
            className={
              props.profileImage
                ? `grid grid-cols-[100px_minmax(120px,_1fr)_100px]`
                : `flex flex-row`
            }
          >
            <div>
              <div className={props.profileImage && `pt-1 mt-1`}>
                <p className="font-bold text-[6px]">
                  {resumeData?.wantedJobTitle}
                </p>
                <p className="text-[6px]">{resumeData?.email}</p>
                <p className="text-[6px]">{resumeData?.phone}</p>
                <p className="text-[6px]">
                  {`${resumeData?.address}${
                    resumeData?.address && resumeData?.city ? `,` : ""
                  } ${resumeData?.city}${
                    resumeData?.city && resumeData?.postalCode ? `,` : ""
                  } ${resumeData?.postalCode}${
                    resumeData?.country && resumeData?.postalCode ? `,` : ""
                  } ${resumeData?.country}`}
                </p>
              </div>

              <div className="pt-1 mt-1">
                {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
                  <div>
                    <p className="text-[6px] font-bold">
                      Date / Place of birth
                    </p>
                    <p className="text-[6px]">{`${resumeData?.dateOfBirth} ${
                      resumeData?.dateOfBirth && resumeData?.placeOfBirth
                        ? `/`
                        : ``
                    } ${resumeData?.placeOfBirth}`}</p>
                  </div>
                ) : (
                  ""
                )}

                {resumeData?.drivingLicense ? (
                  <div className="pt-1 mt-1">
                    <p className="text-[6px] font-bold">Driving License</p>
                    <p className="text-[6px]">{resumeData?.drivingLicense}</p>
                  </div>
                ) : (
                  ""
                )}

                {resumeData?.nationality ? (
                  <div className="pt-1 mt-1">
                    <p className="text-[6px] font-bold">Nationality</p>
                    <p className="text-[6px]">{resumeData?.nationality}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className={!props.profileImage && `w-7/12`}>
              {!props.profileImage && (
                <div>
                  <div>
                    <p className="text-2xl font-bold ml-4">
                      {resumeData?.firstName}
                    </p>
                    <p className="text-2xl font-bold ml-4">
                      {resumeData?.lastName}
                    </p>
                  </div>
                </div>
              )}

              {resumeData?.professionalSummary && (
                <div className="pt-2 mt-2 ml-1 w-11/12 h-full">
                  <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 rounded-2xl">
                    <p className="text-[10px] font-bold">Profile</p>
                    <p className="text-[5px] mt-1">
                      {resumeData?.professionalSummary}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-200 h-[1.5px] w-10/12 mt-2 mb-2" />

          <div className="grid grid-cols-[200px_minmax(200px,_1fr)_100px]">
            <div>
              {resumeData?.employmentInputList?.length >= 1 ? (
                <div>
                  <p className="text-[14px] font-bold">
                    {props?.employmentInput}
                  </p>
                  {resumeData?.employmentInputList &&
                    resumeData?.employmentInputList?.map((item, index) => {
                      let startDate = new Date(item?.startDate);
                      const startDateMonth = `${
                        startDate.getMonth() + 1
                      }`.padStart(2, "0");

                      const startDateYear =
                        `${startDate.getFullYear()}`.padStart(2, "0");

                      const startFullDate = [
                        startDateMonth,
                        startDateYear,
                      ].join("/");

                      let endDate = new Date(item?.endDate);
                      const endDateMonth = `${endDate.getMonth() + 1}`.padStart(
                        2,
                        "0"
                      );

                      const endDateYear = `${endDate.getFullYear()}`.padStart(
                        2,
                        "0"
                      );

                      const endFullDate = [endDateMonth, endDateYear].join("/");

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
                          <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                            {`${item?.jobTitle} ${
                              item?.jobTitle && item?.employer ? "at" : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-black tracking-widest text-[6px]">
                              {item?.startDate ? startFullDate : ""}
                              {item?.startDate && item?.endDate ? `-` : ""}
                              {item?.endDate ? endFullDate : ""}
                            </p>
                          ) : (
                            ""
                          )}
                          <p className="text-gray-800 text-[6px] mt-0.5">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {resumeData?.educationInputList?.length >= 1 ? (
                <div
                  className={
                    resumeData?.employmentInputList?.length >= 1 ? `mt-5` : ``
                  }
                >
                  <p className="text-[14px] font-bold">
                    {props?.educationInput}
                  </p>
                  {resumeData?.educationInputList &&
                    resumeData?.educationInputList.map((item, index) => {
                      let startDate = new Date(item?.startDate);
                      const startDateMonth = `${
                        startDate.getMonth() + 1
                      }`.padStart(2, "0");

                      const startDateYear =
                        `${startDate.getFullYear()}`.padStart(2, "0");

                      const startFullDate = [
                        startDateMonth,
                        startDateYear,
                      ].join("/");

                      let endDate = new Date(item?.endDate);
                      const endDateMonth = `${endDate.getMonth() + 1}`.padStart(
                        2,
                        "0"
                      );

                      const endDateYear = `${endDate.getFullYear()}`.padStart(
                        2,
                        "0"
                      );

                      const endFullDate = [endDateMonth, endDateYear].join("/");

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
                          <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                            {`${item?.school}${
                              item?.school && item?.degree ? "," : ""
                            } ${item?.degree}${
                              item?.degree && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-black tracking-widest text-[6px]">
                              {item?.startDate ? startFullDate : ""}
                              {item?.startDate && item?.endDate ? `-` : ""}
                              {item?.endDate ? endFullDate : ""}
                            </p>
                          ) : (
                            ""
                          )}
                          <p className="text-gray-800 text-[6px] mt-0.5">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {resumeData?.extraCurricularInputList?.length >= 1 ? (
                <div className="mt-5">
                  <p className="text-[14px] font-bold">
                    {props?.extraCurricularInput}
                  </p>
                  {resumeData?.extraCurricularInputList &&
                    resumeData?.extraCurricularInputList.map((item, index) => {
                      let startDate = new Date(item?.startDate);
                      const startDateMonth = `${
                        startDate.getMonth() + 1
                      }`.padStart(2, "0");

                      const startDateYear =
                        `${startDate.getFullYear()}`.padStart(2, "0");

                      const startFullDate = [
                        startDateMonth,
                        startDateYear,
                      ].join("/");

                      let endDate = new Date(item?.endDate);
                      const endDateMonth = `${endDate.getMonth() + 1}`.padStart(
                        2,
                        "0"
                      );

                      const endDateYear = `${endDate.getFullYear()}`.padStart(
                        2,
                        "0"
                      );

                      const endFullDate = [endDateMonth, endDateYear].join("/");

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
                          <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                            {`${item?.functionTitle} ${
                              item?.functionTitle && item?.employer ? "at" : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-black tracking-widest text-[6px]">
                              {item?.startDate ? startFullDate : ""}
                              {item?.startDate && item?.endDate ? `-` : ""}
                              {item?.endDate ? endFullDate : ""}
                            </p>
                          ) : (
                            ""
                          )}
                          <p className="text-gray-800 text-[6px] mt-0.5">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {resumeData?.internshipInputList?.length >= 1 ? (
                <div className="mt-5">
                  <p className="text-[14px] font-bold">
                    {props?.internshipInput}
                  </p>
                  {resumeData?.internshipInputList &&
                    resumeData?.internshipInputList.map((item, index) => {
                      let startDate = new Date(item?.startDate);
                      const startDateMonth = `${
                        startDate.getMonth() + 1
                      }`.padStart(2, "0");

                      const startDateYear =
                        `${startDate.getFullYear()}`.padStart(2, "0");

                      const startFullDate = [
                        startDateMonth,
                        startDateYear,
                      ].join("/");

                      let endDate = new Date(item?.endDate);
                      const endDateMonth = `${endDate.getMonth() + 1}`.padStart(
                        2,
                        "0"
                      );

                      const endDateYear = `${endDate.getFullYear()}`.padStart(
                        2,
                        "0"
                      );

                      const endFullDate = [endDateMonth, endDateYear].join("/");

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
                          <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                            {`${item?.jobTitle} ${
                              item?.jobTitle && item?.employer ? "at" : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-black tracking-widest text-[6px]">
                              {item?.startDate ? startFullDate : ""}
                              {item?.startDate && item?.endDate ? `-` : ""}
                              {item?.endDate ? endFullDate : ""}
                            </p>
                          ) : (
                            ""
                          )}
                          <p className="text-gray-800 text-[6px] mt-0.5">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flex flex-col flex-1 items-end mr-10">
              {resumeData?.websiteInputList?.length >= 1 ? (
                <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 rounded-2xl">
                  <p className="text-[14px] font-bold">
                    {props?.websiteInput === "Websites & Social Links"
                      ? "Links"
                      : props?.websiteInput}
                  </p>
                  {resumeData?.websiteInputList &&
                    resumeData?.websiteInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="text-[6px] mt-0.5 underline">
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
                <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                  <p className="text-[14px] font-bold">{props?.skillsInput}</p>
                  {resumeData.skillsInputList &&
                    resumeData.skillsInputList.map((item, index) => {
                      return (
                        <div key={index} className="flex flex-row">
                          <p
                            className={`text-[6px] mt-0.5 mr-0.5 ${
                              resumeData?.isNotShowExpertLevel === false
                                ? `font-semibold`
                                : ``
                            }`}
                          >
                            {item?.skill}
                          </p>
                          {resumeData?.isNotShowExpertLevel === false ? (
                            <div className="flex flex-1 justify-end items-center mr-4 border-b border-dotted border-gray-400 w-11/12 relative -top-[2px]">
                              <p className="text-[6px] absolute top-[5px] -right-[12px] font-semibold">
                                {`${levelNum[item?.level]}/5`}
                              </p>
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

              {resumeData?.hobbies && (
                <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                  <p className="text-[14px] font-semibold">
                    {props?.hobbiesInput}
                  </p>
                  <p className="text-[6px] mt-0.5">{resumeData?.hobbies}</p>
                </div>
              )}

              {resumeData?.languagesInputList?.length >= 1 ? (
                <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                  <p className="text-[14px] font-semibold">
                    {props?.languagesInput}
                  </p>
                  {resumeData?.languagesInputList &&
                    resumeData?.languagesInputList.map((item, index) => {
                      if (item?.level === "Select Level") {
                        return null;
                      } else {
                        return (
                          <div key={index} className="flex flex-row">
                            {item?.language ? (
                              <p className="text-[6px] mt-0.5">
                                {item?.language}
                              </p>
                            ) : (
                              ""
                            )}
                            {item?.language ? (
                              <div className="flex justify-end items-center mr-2 border-b border-dotted border-gray-400 w-4/12 relative -top-[2px]">
                                <p
                                  className={`text-[6px] absolute top-[5px] ${
                                    levelWidth[item?.level]
                                  } font-semibold`}
                                >
                                  {item?.level}
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      }
                    })}
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

  const twoSectionTemplate = () => {
    if (props?.page === 2) {
      return (
        <div className="grid grid-cols-[150px_minmax(200px,_1fr)_100px] p-2 pl-3">
          {/* this div use for only 1 column */}
          <div />

          <div className="flex flex-col flex-1 justify-end items-end">
            {resumeData?.coursesInputList?.length >= 1 ? (
              <div className="bg-[#eeeeee] w-10/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                <p className="text-[14px] font-bold">{props?.coursesInput}</p>
                {resumeData?.coursesInputList &&
                  resumeData?.coursesInputList.map((item, index) => {
                    let startDate = new Date(item?.startDate);
                    const startDateMonth = `${
                      startDate.getMonth() + 1
                    }`.padStart(2, "0");

                    const startDateYear = `${startDate.getFullYear()}`.padStart(
                      2,
                      "0"
                    );

                    const startFullDate = [startDateMonth, startDateYear].join(
                      "/"
                    );

                    let endDate = new Date(item?.endDate);
                    const endDateMonth = `${endDate.getMonth() + 1}`.padStart(
                      2,
                      "0"
                    );

                    const endDateYear = `${endDate.getFullYear()}`.padStart(
                      2,
                      "0"
                    );

                    const endFullDate = [endDateMonth, endDateYear].join("/");
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
                        <p className="text-[6px] font-bold mt-0.5">
                          {`${item?.course}${
                            item?.course && item?.institution ? "," : ""
                          } ${item?.institution}`}
                        </p>
                        {(startDateMonth && startDateYear) ||
                        (endDateMonth && endDateYear) ? (
                          <p className="text-[6px]">
                            {item?.startDate ? startFullDate : ""}
                            {item?.startDate && item?.endDate ? `-` : ""}
                            {item?.endDate ? endFullDate : ""}
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

            {resumeData?.referencesInputList?.length >= 1 ? (
              <div className="bg-[#eeeeee] w-10/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                <p className="text-[14px] font-bold">
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
                        <p className="text-[6px] mt-0.5">
                          {`${item?.referentFullName} ${
                            item?.referentFullName && item?.company
                              ? "from"
                              : ""
                          } ${item?.company}${item?.company}`}
                        </p>
                        <p className="text-[6px]">{item?.email}</p>
                        <p className="text-[6px]">{item?.phone}</p>
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
    }
  };

  return (
    <div>
      <div>
        {/* number 1 template  */}
        {oneSectionTemplate()}
      </div>
      <div>
        {/* number 2 template  */}
        {twoSectionTemplate()}
      </div>
    </div>
  );
};

export default TorontoTemplate;
