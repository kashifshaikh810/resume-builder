import React from "react";

import "./styles.css";

const TorontoTemplate = (props) => {
  const { resumeData } = props;

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

  return (
    <div className="p-2 overflow-hidden">
      <div className="flex flex-row">
        {resumeData?.profileImage && (
          <>
            <img
              src={resumeData?.profileImage}
              alt="prof"
              className="w-[25px] h-[30px]"
            />
            <div>
              <p className="text-[10px] font-bold ml-4 pl-4">
                {resumeData?.firstName}
              </p>
              <p className="text-[10px] font-bold ml-4 pl-4">
                {resumeData?.lastName}
              </p>
            </div>
          </>
        )}
      </div>

      <div
        className={
          resumeData?.profileImage
            ? `grid grid-cols-[44px_minmax(145px,_1fr)_100px]`
            : `flex flex-row`
        }
      >
        <div>
          <div className={resumeData?.profileImage && `pt-1 mt-1`}>
            <p className="font-bold text-[3px] mt-1">
              {resumeData?.wantedJobTitle}
            </p>
            <p className="text-[3px]">{resumeData?.email}</p>
            <p className="text-[3px]">{resumeData?.phone}</p>
            <p className="text-[3px]">
              {resumeData?.address ||
              resumeData?.city ||
              resumeData?.postalCode ||
              resumeData?.country
                ? `${resumeData?.address}${
                    resumeData?.address && resumeData?.city ? `,` : ""
                  } ${resumeData?.city}${
                    resumeData?.city && resumeData?.postalCode ? `,` : ""
                  } ${resumeData?.postalCode}${
                    resumeData?.country && resumeData?.postalCode ? `,` : ""
                  } ${resumeData?.country}`
                : ""}
            </p>
          </div>

          <div className="mt-0.5">
            {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
              <div>
                <p className="text-[3px] font-bold">Date / Place of birth</p>
                <p className="text-[3px]">{`${resumeData?.dateOfBirth} ${
                  resumeData?.dateOfBirth && resumeData?.placeOfBirth ? `/` : ``
                } ${resumeData?.placeOfBirth}`}</p>
              </div>
            ) : (
              ""
            )}

            {resumeData?.drivingLicense ? (
              <div className="mt-0.5">
                <p className="text-[3px] font-bold">Driving License</p>
                <p className="text-[3px]">{resumeData?.drivingLicense}</p>
              </div>
            ) : (
              ""
            )}

            {resumeData?.nationality ? (
              <div className="mt-0.5">
                <p className="text-[3px] font-bold">Nationality</p>
                <p className="text-[3px]">{resumeData?.nationality}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="w-full">
          {!resumeData?.profileImage && (
            <div>
              <div>
                <p className="text-[10px] font-bold ml-4">
                  {resumeData?.firstName}
                </p>
                <p className="text-[10px] font-bold ml-4">
                  {resumeData?.lastName}
                </p>
              </div>
            </div>
          )}

          {resumeData?.professionalSummary && (
            <div className="mt-1 w-full h-full ml-3">
              <div className="bg-[#eeeeee] w-11/12 h-auto pl-1.5 pt-1 pb-1 rounded-md  mt-[2px]">
                <p className="text-[5px] font-bold">
                  {resumeData?.summaryInput}
                </p>
                <p className="text-[3px] pr-1">
                  {resumeData?.professionalSummary}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="bg-gray-100 h-[1px] w-[100%] mt-2 mb-2" />
      </div>

      <div className="grid grid-cols-[100px_minmax(130px,_1fr)_100px]">
        <div>
          {resumeData?.employmentInputList?.length >= 1 ? (
            <div>
              <p className="text-[5px] font-bold">
                {resumeData?.employmentInput}
              </p>
              {resumeData?.employmentInputList &&
                resumeData?.employmentInputList?.map((item, index) => {
                  let startDate = new Date(item?.startDate);
                  const startDateMonth = `${startDate.getMonth() + 1}`.padStart(
                    2,
                    "0"
                  );

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
                        resumeData.employmentInputList.length >= 2 && index >= 1
                          ? `mt-1`
                          : ``
                      }`}
                    >
                      <p className="bg-black max-w-max min-w-max text-[4px] text-white font-bold pl-[1px] pr-[1px]">
                        {`${item?.jobTitle} ${
                          item?.jobTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-black tracking-widest text-[4px]">
                          {item?.startDate ? startFullDate : ""}
                          {item?.startDate && item?.endDate ? `-` : ""}
                          {item?.endDate ? endFullDate : ""}
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="text-gray-800 text-[3.5px] mt-[0.5px]">
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
              <p className="text-[5px] font-bold">
                {resumeData?.educationInput}
              </p>
              {resumeData?.educationInputList &&
                resumeData?.educationInputList.map((item, index) => {
                  let startDate = new Date(item?.startDate);
                  const startDateMonth = `${startDate.getMonth() + 1}`.padStart(
                    2,
                    "0"
                  );

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
                        resumeData?.educationInputList?.length >= 2 &&
                        index >= 1
                          ? `mt-1`
                          : ``
                      }`}
                    >
                      <p className="bg-black max-w-max min-w-max text-[4px] text-white font-bold pl-[1px] pr-[1px]">
                        {`${item?.school}${
                          item?.school && item?.degree ? "," : ""
                        } ${item?.degree}${item?.degree && item.city && `,`} ${
                          item.city
                        }`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-black tracking-widest text-[4px]">
                          {item?.startDate ? startFullDate : ""}
                          {item?.startDate && item?.endDate ? `-` : ""}
                          {item?.endDate ? endFullDate : ""}
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="text-gray-800 text-[3.5px] mt-[0.5px]">
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
            <div className="mt-1.5">
              <p className="text-[5px] font-bold">
                {resumeData?.extraCurricularInput}
              </p>
              {resumeData?.extraCurricularInputList &&
                resumeData?.extraCurricularInputList.map((item, index) => {
                  let startDate = new Date(item?.startDate);
                  const startDateMonth = `${startDate.getMonth() + 1}`.padStart(
                    2,
                    "0"
                  );

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
                        resumeData?.extraCurricularInputList?.length >= 2 &&
                        index >= 1
                          ? `mt-2`
                          : ``
                      }`}
                    >
                      <p className="bg-black max-w-max min-w-max text-[4px] text-white font-bold pl-[1px] pr-[1px]">
                        {`${item?.functionTitle} ${
                          item?.functionTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-black tracking-widest text-[4px]">
                          {item?.startDate ? startFullDate : ""}
                          {item?.startDate && item?.endDate ? `-` : ""}
                          {item?.endDate ? endFullDate : ""}
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="text-gray-800 text-[3.5px] mt-[0.5px]">
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
            <div className="mt-1.5">
              <p className="text-[5px] font-bold">
                {resumeData?.internshipInput}
              </p>
              {resumeData?.internshipInputList &&
                resumeData?.internshipInputList.map((item, index) => {
                  let startDate = new Date(item?.startDate);
                  const startDateMonth = `${startDate.getMonth() + 1}`.padStart(
                    2,
                    "0"
                  );

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
                        resumeData?.internshipInputList?.length >= 2 &&
                        index >= 1
                          ? `mt-2`
                          : ``
                      }`}
                    >
                      <p className="bg-black max-w-max min-w-max text-[4px] text-white font-bold pl-[1px] pr-[1px]">
                        {`${item?.jobTitle} ${
                          item?.jobTitle && item?.employer ? "at" : ""
                        } ${item?.employer}${
                          item?.employer && item.city && `,`
                        } ${item.city}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-black tracking-widest text-[4px]">
                          {item?.startDate ? startFullDate : ""}
                          {item?.startDate && item?.endDate ? `-` : ""}
                          {item?.endDate ? endFullDate : ""}
                        </p>
                      ) : (
                        ""
                      )}
                      <p className="text-gray-800 text-[3.5px] mt-[0.5px]">
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
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-1.5 pt-1 pb-1 rounded-md  mt-[2px]">
              <p className="text-[5px] font-bold">
                {resumeData?.websiteInput === "Websites & Social Links"
                  ? "Links"
                  : resumeData?.websiteInput}
              </p>
              {resumeData?.websiteInputList &&
                resumeData?.websiteInputList.map((item, index) => {
                  return (
                    <div key={index}>
                      <p className="text-[3.5px] underline">{item?.label}</p>
                    </div>
                  );
                })}
            </div>
          ) : (
            ""
          )}

          {resumeData?.skillsInputList?.length >= 1 ? (
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-1.5 pt-1 pb-1 rounded-md  mt-[2px]">
              <p className="text-[5px] font-bold">{resumeData?.skillsInput}</p>
              {resumeData.skillsInputList &&
                resumeData.skillsInputList.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row">
                      <p
                        className={`text-[3.5px] mt-[0.5px] mr-0.5 ${
                          resumeData?.isNotShowExpertLevel === false
                            ? `font-semibold`
                            : ``
                        }`}
                      >
                        {item?.skill}
                      </p>
                      {resumeData?.isNotShowExpertLevel === false ? (
                        <div className="flex flex-1 justify-end items-center mr-4 border-b border-dotted border-gray-400 w-11/12 relative -top-[1px]">
                          <p className="text-[4px] absolute top-[1px] -right-[8px] font-semibold">
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
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-1.5 pt-1 pb-1 rounded-md  mt-[2px]">
              <p className="text-[5px] font-semibold">
                {resumeData?.hobbiesInput}
              </p>
              <p className="text-[3.5px] mt-[0.5px]">{resumeData?.hobbies}</p>
            </div>
          )}

          {resumeData?.languagesInputList?.length >= 1 ? (
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-1.5 pt-1 pb-1 rounded-md  mt-[2px]">
              <p className="text-[5px] font-semibold">
                {resumeData?.languagesInput}
              </p>
              {resumeData?.languagesInputList &&
                resumeData?.languagesInputList.map((item, index) => {
                  if (item?.level === "Select Level") {
                    return null;
                  } else {
                    return (
                      <div key={index} className="flex flex-row">
                        {item?.language ? (
                          <p className="text-[3.5px] mt-[0.5px]">
                            {item?.language}
                          </p>
                        ) : (
                          ""
                        )}
                        {item?.language ? (
                          <div className="flex justify-end items-center mr-2 border-b border-dotted border-gray-400 w-4/12 relative -top-[0.8px]">
                            <p
                              className={`text-[2.5px] absolute top-[2px] left-[27px] ${
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

          {resumeData?.coursesInputList?.length >= 1 ? (
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-1.5 pt-1 pb-1 rounded-md  mt-[2px]">
              <p className="text-[5px] font-bold">{resumeData?.coursesInput}</p>
              {resumeData?.coursesInputList &&
                resumeData?.coursesInputList.map((item, index) => {
                  let startDate = new Date(item?.startDate);
                  const startDateMonth = `${startDate.getMonth() + 1}`.padStart(
                    2,
                    "0"
                  );

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
                        resumeData?.coursesInputList?.length >= 2 && index >= 1
                          ? `mt-2`
                          : ``
                      }`}
                    >
                      <p className="text-[4px] font-bold mt-0.5">
                        {`${item?.course}${
                          item?.course && item?.institution ? "," : ""
                        } ${item?.institution}`}
                      </p>
                      {(startDateMonth && startDateYear) ||
                      (endDateMonth && endDateYear) ? (
                        <p className="text-[4px]">
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
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-1.5 pt-1 pb-1 rounded-md  mt-[2px]">
              <p className="text-[5px] font-bold">
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
                      <p className="text-[3.5px] mt-[0.5px]">
                        {`${item?.referentFullName} ${
                          item?.referentFullName && item?.company ? "from" : ""
                        } ${item?.company}${item?.company}`}
                      </p>
                      <p className="text-[4px]">{item?.email}</p>
                      <p className="text-[4px]">{item?.phone}</p>
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
  );
};

export default TorontoTemplate;
