import React from "react";
import { MdOutlineAttachment } from "react-icons/md";

import "./styles.css";

const ViennaTemplate = (props) => {
  const { resumeData } = props;

  return (
    <div>
      <div>
        <div className="p-2 overflow-hidden">
          <div className="flex flex-row">
            {resumeData?.profileImage && (
              <img
                src={resumeData?.profileImage}
                alt="prof"
                className="w-[50px] h-[50px]"
              />
            )}
            <div
              className={`${
                resumeData?.profileImage ? `w-[242px]` : `w-[335px]`
              } bg-[#4afbba] h-[50px] p-5 pt-1.5 pl-3`}
            >
              <p className="text-[7px] font-bold">
                {resumeData?.firstName} {resumeData?.lastName}
              </p>
              <p className="text-[4.5px] capitalize font-bold">
                {resumeData?.wantedJobTitle}
              </p>

              <div className="pt-2">
                <div className="flex flex-row">
                  <p className="text-[4.5px]">
                    {resumeData?.address}
                    {resumeData?.address ? `,` : ``}
                  </p>
                  <p className="text-[4.5px] ml-[1px]">
                    {resumeData?.city}
                    {resumeData?.city ? `,` : ``}
                  </p>
                  <p className="text-[4.5px] ml-[1px]">
                    {resumeData?.postalCode}
                    {resumeData?.postalCode ? `,` : ``}
                  </p>
                  <p className="text-[4.5px] ml-[1px]">{resumeData?.country}</p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-[4.5px]">{resumeData?.phone}</p>
                  {resumeData?.phone && resumeData?.email ? (
                    <div className="bg-black w-[1px] h-[1px] rounded-full ml-1 mr-1" />
                  ) : (
                    ""
                  )}
                  <p className="text-[4.5px] underline">{resumeData?.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
    grid 
    grid-cols-[60px_minmax(300px,_1fr)_100px]
     mt-2
    "
          >
            <div>
              {resumeData?.websiteInputList?.length >= 1 ? (
                <div className="flex flex-row items-center flex-wrap">
                  <MdOutlineAttachment className="text-[4.5px]" />
                  {resumeData?.websiteInputList &&
                    resumeData?.websiteInputList.map((item, index) => {
                      const lastIndex = resumeData?.websiteInputList.length - 1;
                      if (index === lastIndex) {
                        var resOfLastIndex = index || index === 0;
                      }

                      return (
                        <div key={index}>
                          <p
                            className={`${
                              index >= 1 ? `ml-0.5` : `ml-1`
                            } underline text-[3px]`}
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

              {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
                <div className="mt-1">
                  <p className="text-[4.5px] font-bold">
                    Date / Place of birth
                  </p>
                  <p className="text-[3px] mt-0.5">
                    {resumeData?.dateOfBirth}
                    {resumeData?.dateOfBirth && resumeData?.placeOfBirth
                      ? `,`
                      : ``}{" "}
                    {resumeData?.placeOfBirth}
                  </p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.nationality ? (
                <div className="mt-1">
                  <p className="text-[4.5px] font-bold">Nationality</p>
                  <p className="text-[3px] mt-0.5">{resumeData?.nationality}</p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.drivingLicense ? (
                <div className="mt-1">
                  <p className="text-[4.5px] font-bold">Driving License</p>
                  <p className="text-[3px] mt-0.5">
                    {resumeData?.drivingLicense}
                  </p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.skillsInputList?.length >= 1 ? (
                <div className="mt-1">
                  <p className="text-[4.5px] font-bold">
                    {resumeData?.skillsInput}
                  </p>
                  {resumeData.skillsInputList &&
                    resumeData.skillsInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="text-[3px] mt-0.5">{item?.skill}</p>
                          {resumeData?.isNotShowExpertLevel === false &&
                          item?.skill ? (
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
                                } w-[6px] h-[1px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Beginner" ||
                                  item?.level === "Skillful" ||
                                  item?.level === "Experienced" ||
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Skillful" ||
                                  item?.level === "Experienced" ||
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Experienced" ||
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Expert"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
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

              {resumeData?.hobbies ? (
                <div className="mt-1">
                  <p className="text-[4.5px] font-bold">Hobbies</p>
                  <p className="text-[3px] mt-0.5 p-4 pt-0 pl-0 pb-0">
                    {resumeData?.hobbies}
                  </p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.languagesInputList?.length >= 1 ? (
                <div className="mt-1">
                  <p className="text-[4.5px] font-bold">
                    {resumeData?.languagesInput}
                  </p>
                  {resumeData?.languagesInputList &&
                    resumeData?.languagesInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          {item?.language ? (
                            <p className="text-[3px] mt-0.5">
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
                            <div className="flex flex-row items-center mt-0.5">
                              <div
                                className={`${
                                  item?.level === "Very good command" ||
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Very good command" ||
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Very good command" ||
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Highly Proficient" ||
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
                              />
                              <div
                                className={`${
                                  item?.level === "Native Speaker"
                                    ? `bg-black`
                                    : `bg-gray-400`
                                } w-[8px] h-[1px] ml-[0.5px]`}
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
            <div className="relative -top-0.5">
              {resumeData?.professionalSummary ? (
                <div>
                  <p className="font-bold text-[4.5px]">
                    {resumeData?.summaryInput === "Professional Summary"
                      ? "Profile"
                      : resumeData?.summaryInput}
                  </p>
                  <p className="text-[3px] p-4 pb-0 pl-0 pt-0 w-6/12">
                    {resumeData?.professionalSummary}
                  </p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.employmentInputList?.length >= 1 ? (
                <div
                  className={resumeData?.professionalSummary ? `mt-1.5` : ``}
                >
                  <p className="font-bold text-[4.5px]">
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
                            resumeData.employmentInputList.length >= 2 &&
                            index >= 1
                              ? `mt-1.5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[3px]">
                            {`${item?.jobTitle}${
                              item?.jobTitle && item?.employer ? "," : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[3px] mt-0.5">
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
                          <p className="text-[3px] mt-[1px] font-[600] text-gray-600">
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
                    resumeData?.employmentInputList?.length >= 1 ? `mt-1.5` : ``
                  }
                >
                  <p className="font-bold text-[4.5px]">
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
                              ? `mt-1.5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[3px]">
                            {`${item?.school}${
                              item?.school && item?.degree ? "," : ""
                            } ${item?.degree}${
                              item?.degree && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[3px]">
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
                          <p className="text-[3px] mt-[1px] font-[600] text-gray-600">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {resumeData?.coursesInputList?.length >= 1 ? (
                <div
                  className={
                    resumeData?.educationInputList?.length >= 1 ? `mt-1.5` : ``
                  }
                >
                  <p className="font-bold text-[4.5px]">
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
                            resumeData?.coursesInputList?.length >= 2 &&
                            index >= 1
                              ? `mt-1.5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[3px]">
                            {`${item?.course}${
                              item?.course && item?.institution ? "," : ""
                            } ${item?.institution}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[3px]">
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

              {resumeData?.extraCurricularInputList?.length >= 1 ? (
                <div
                  className={
                    resumeData?.coursesInputList?.length >= 1 ? `mt-1.5` : ``
                  }
                >
                  <p className="font-bold text-[4.5px]">
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
                              ? `mt-1.5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[3px]">
                            {`${item?.functionTitle}${
                              item?.functionTitle && item?.employer ? "," : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[3px]">
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
                          <p className="text-[3px] mt-[1px] font-[600] text-gray-600">
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
                <div
                  className={
                    resumeData?.extraCurricularInputList?.length >= 1
                      ? `mt-1.5`
                      : ``
                  }
                >
                  <p className="font-bold text-[4.5px]">
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
                              ? `mt-1.5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[3px]">
                            {`${item?.jobTitle}${
                              item?.jobTitle && item?.employer ? "," : ""
                            } ${item?.employer}${
                              item?.employer && item.city && `,`
                            } ${item.city}`}
                          </p>
                          {(startDateMonth && startDateYear) ||
                          (endDateMonth && endDateYear) ? (
                            <p className="text-[3px] mt-0.5">
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
                          <p className="text-[3px] mt-[1px] font-[600] text-gray-600">
                            {item?.description}
                          </p>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              {resumeData?.referencesInputList?.length >= 1 ? (
                <div
                  className={
                    resumeData?.internshipInputList?.length >= 1 ? `mt-1.5` : ``
                  }
                >
                  <p className="font-bold text-[4.5px]">
                    {resumeData?.referencesInput}
                  </p>

                  {resumeData?.disabledPreferences ? (
                    <p className="text-[3px] text-black font-bold">
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
                              ? `mt-1.5`
                              : ``
                          }`}
                        >
                          <p className="font-bold text-[3px]">
                            {`${item?.referentFullName} ${
                              item?.referentFullName && item?.company
                                ? "from"
                                : ""
                            } ${item?.company}${item?.company}`}
                          </p>
                          <div className="flex flex-row items-center">
                            <p className="text-[3px] mt-0.5">{item?.phone}</p>
                            {item?.phone && item?.email ? (
                              <div className="bg-gray-700 w-[1px] h-[1px] rounded-full ml-1 mr-1 mt-0.5" />
                            ) : (
                              ""
                            )}
                            <p className="text-[3px] mt-0.5 underline">
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

        {/* pageTwo */}
        {/* {pageTwo()} */}
      </div>
    </div>
  );
};

export default ViennaTemplate;
