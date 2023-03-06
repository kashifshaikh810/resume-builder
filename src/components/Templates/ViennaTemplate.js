import React, { useEffect } from "react";
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
  } = props?.resumeData;

  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

  const pageOne = () => {
    if (props.page === 1) {
      return (
        <div className="p-10 w-full">
          <div className="flex flex-row w-full">
            <img src={profileImage} alt="prof" className="w-64 h-48" />
            <div className="w-full bg-[#4afbba] p-5 pl-10">
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

              <div className="mt-5">
                <p className="text-[12px] font-bold">Date / Place of birth</p>
                <p className="text-[12px]">24, 432</p>
              </div>
              <div className="mt-5">
                <p className="text-[12px] font-bold">Nationality</p>
                <p className="text-[12px]">323</p>
              </div>
              <div className="mt-5">
                <p className="text-[12px] font-bold">Driving License</p>
                <p className="text-[12px]">323</p>
              </div>

              <div className="mt-5">
                <p className="text-[12px] font-bold">Skills</p>
                <p className="text-[12px]">Communication</p>
              </div>

              <div className="mt-5">
                <p className="text-[12px] font-bold">Hobbies</p>
                <p className="text-[12px]">efownfnoewof</p>
              </div>

              <div className="mt-5">
                <p className="text-[12px] font-bold">Languages</p>
                <p className="text-[12px]">fewofwe</p>
                <p className="text-[12px]">fewofwiojf</p>
                <p className="text-[12px]">ewfncwjnc</p>
                <p className="text-[12px]">wefeueuurr</p>
                <p className="text-[12px]">=weeweuuru</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold">Employment History</p>
                <p className="font-bold text-[12px] mt-1">
                  gregreg, efwojnrreg, wgktjejg
                </p>
                <p className="text-[12px] mt-1">december 2022 - 2022</p>
                <p className="text-[12px] mt-1.5 font-[600] text-gray-600">
                  rgekngnregerkjnn
                </p>
              </div>

              <div className="mt-5">
                <p className="font-bold">Education</p>
                <p className="font-bold text-[12px] mt-1">
                  gregreg, efwojnrreg, wgktjejg
                </p>
                <p className="text-[12px] mt-1">July 2022 - April 2022</p>
                <p className="text-[12px] mt-1.5 font-[600] text-gray-600">
                  rgekngnregerkjnn
                </p>
              </div>

              <div className="mt-5">
                <p className="font-bold">Courses</p>
                <p className="font-bold text-[12px] mt-1">
                  gregreg, efwojnrreg
                </p>
                <p className="text-[12px] mt-1">February 2022 - April 2022</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const pageTwo = () => {
    if (props.page === 2) {
      return (
        <div>
          <p>pageTwo</p>
        </div>
      );
    }
  };

  return (
    <div
      className="flex flex-col w-full h-[930px] 
      border-l border-gray-600 ml-5
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
      <div className="flex bg-white w-full max-[1029px]:w-11/12 overflow-hidden h-[900px] self-center rounded-md hover:default">
        {/* pageOne */}
        {pageOne()}

        {/* pageTwo */}
        {pageTwo()}
      </div>
    </div>
  );
};

export default ViennaTemplate;
