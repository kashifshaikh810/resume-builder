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
    Novice: "w-[15px]",
    Beginner: "w-[25px]",
    Skillful: "w-[37px]",
    Experienced: "w-[52px]",
    Expert: "w-[65px]",
  };

  const languageLevelWidth = {
    "Very good command": "w-[40px]",
    "Highly Proficient": "w-[53px]",
    "Native Speaker": "w-[65px]",
  };

  // useEffect(() => {
  //   props.setTotalPage(2);
  // }, [props]);

  const pageOne = () => {
    if (props.page === 1) {
      return (
        <div>
          <div className={`${props?.profileImage ? `pt-2` : `pt-4`} w-full`}>
            <div className="flex w-11/12 flex-col justify-center items-center">
              {props?.profileImage && (
                <img
                  src={props?.profileImage}
                  className="w-[30px] h-[30px] rounded-[5px] m-4 mb-2"
                  alt="profile"
                />
              )}
              {resumeData?.firstName || resumeData?.lastName ? (
                <div>
                  <p className="text-[12px] uppercase font-[500] tracking-[3px] font-serif">
                    {`${resumeData?.firstName} ${resumeData?.lastName}`}
                  </p>
                </div>
              ) : (
                ""
              )}
              <div
                className={`flex flex-row items-center ${
                  !resumeData?.firstName && !resumeData?.lastName
                    ? `mt-3`
                    : `mt-7`
                }`}
              >
                <p className="text-[4px] uppercase">
                  {resumeData?.wantedJobTitle}
                </p>
                <div className="flex flex-row items-center ml-1.5">
                  <MdLocationOn className="text-[4px]" />
                  <p className="text-[4px] ml-0.5 uppercase">
                    {resumeData?.city}
                    {resumeData?.postalCode || resumeData?.city ? `,` : ``}{" "}
                  </p>
                  <p className={`text-[4px] ml-0.5 uppercase`}>
                    {resumeData?.postalCode}
                    {resumeData?.postalCode ? `,` : ``}
                  </p>
                  <p
                    className={`text-[4px] ${
                      resumeData?.postalCode && resumeData?.country
                        ? `ml-0.5`
                        : ``
                    } uppercase`}
                  >
                    {resumeData?.country}{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center ml-1.5">
                  <BsTelephoneFill className="text-[4px]" />
                  <p className="text-[4px] ml-0.5"> {resumeData?.phone} </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
          grid grid-cols-[110px_minmax(200px,_1fr)_100px]
          m-14
          p-12
          mr-0
          ml-0
          pl-0
          mb-0
          pr-0
          pb-0
          mt-4
          pt-0
          "
          >
            {/* Column 1 */}
            <div className="">
              <div className="flex flex-row justify-center items-center">
                <CgShapeCircle className="text-[4px] mr-1.5" />
                <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                  Details
                </p>
                <CgShapeCircle className="text-[4px] ml-1.5" />
              </div>

              <div className="mt-0.5 flex flex-col items-center">
                <p className="text-[5px]">{resumeData?.address}</p>
                <p className="text-[5px]">
                  {resumeData?.city}
                  {resumeData?.city && resumeData?.postalCode ? `,` : ``}{" "}
                  {resumeData?.postalCode}
                </p>
                <p className="text-[5px]">{resumeData?.country}</p>
                <p className="text-[5px]">{resumeData?.phone}</p>
                <p className="text-[5px] underline">{resumeData?.email}</p>
              </div>

              {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
                <div className="mt-1 flex flex-col items-center">
                  <p className="text-[5px] text-gray-500">
                    Date / Place of birth
                  </p>
                  <p className="text-[5px]">{resumeData?.dateOfBirth}</p>
                  <p className="text-[5px]">{resumeData?.placeOfBirth}</p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.nationality ? (
                <div className="mt-1 flex flex-col items-center">
                  <p className="text-[5px] text-gray-500">Nationality</p>
                  <p className="text-[5px]">{resumeData?.nationality}</p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.drivingLicense ? (
                <div className="mt-1 flex flex-col items-center">
                  <p className="text-[5px] text-gray-500">Driving license</p>
                  <p className="text-[5px]">{resumeData?.drivingLicense}</p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.websiteInputList?.length >= 1 ? (
                <div className="flex flex-col justify-center items-center mt-2">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[4px] mr-1.5" />
                    <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                      {props?.websiteInput === "Websites & Social Links"
                        ? "Links"
                        : props?.websiteInput}
                    </p>
                    <CgShapeCircle className="text-[4px] ml-1.5" />
                  </div>
                  {resumeData?.websiteInputList &&
                    resumeData?.websiteInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="text-[5px] mt-0.5 underline">
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
                <div className="flex flex-col justify-center items-center mt-2">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[4px] mr-1.5" />
                    <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                      {props?.skillsInput}
                    </p>
                    <CgShapeCircle className="text-[4px] ml-1.5" />
                  </div>
                  <div>
                    {resumeData.skillsInputList &&
                      resumeData.skillsInputList.map((item, index) => {
                        return (
                          <div key={index}>
                            <p className="text-[5px] mt-1.5 text-center">
                              {item?.skill}
                            </p>
                            {resumeData?.isNotShowExpertLevel === false ? (
                              <div
                                className="w-[65px] bg-gray-300"
                                id="myProgress"
                              >
                                {/* 15 || 25 || 37 || 52 || 65 */}
                                <div
                                  className={`${
                                    levelWidth[item?.level]
                                  } h-[1.5px] bg-gray-800 mt-1`}
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
                <div className="flex flex-col justify-center items-center mt-2">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[4px] mr-1.5" />
                    <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                      Hobbies
                    </p>
                    <CgShapeCircle className="text-[4px] ml-1.5" />
                  </div>
                  <p className="text-[5px] mt-0.5 p-4 pt-0 pb-0">
                    {resumeData?.hobbies}
                  </p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.languagesInputList?.length >= 1 ? (
                <div className="flex flex-col justify-center items-center mt-2 w-full">
                  <div className="flex flex-row justify-center items-center">
                    <CgShapeCircle className="text-[4px] mr-1.5" />
                    <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                      {props?.languagesInput}
                    </p>
                    <CgShapeCircle className="text-[4px] ml-1.5" />
                  </div>
                  <div>
                    {resumeData?.languagesInputList &&
                      resumeData?.languagesInputList.map((item, index) => {
                        return (
                          <div key={index}>
                            {item?.language ? (
                              <p className="text-[5px] mt-0.5 text-center">
                                {item?.language}
                              </p>
                            ) : (
                              ""
                            )}
                            {!item?.language ||
                            item?.level === "Select Level" ? (
                              ""
                            ) : (
                              <div
                                className="w-[65px] bg-gray-300"
                                id="myProgress"
                              >
                                {/* 40 || 53 || 65 */}
                                <div
                                  className={`${
                                    languageLevelWidth[item?.level]
                                  } h-[1.5px] bg-gray-800 mt-1`}
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
              <div className="flex flex-row items-center">
                <IoMdPerson className="text-[6px] mr-2" />
                <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                  profile
                </p>
              </div>
              <div className="flex flex-row items-center mt-0.5">
                <CgShapeCircle className="text-[4px] ml-0.5 mr-2" />
                <p className="text-[5px]">ferfreregergetgrgr</p>
              </div>

              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <BsFillHandbagFill className="text-[6px] mr-2" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    Employment History
                  </p>
                </div>

                <div className="flex flex-row mt-0.5">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[6px] mt-0.5 mr-2" />
                    <div className="bg-black w-[1px] h-full ml-[2.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[5px] font-[700]">
                      sdqd at dsadas, ewfewfw
                    </p>
                    <p className="text-[5px] text-gray-500">
                      December 2022 - 2022
                    </p>
                    <p className="text-[5px] mt-0.5">rgeregr</p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <IoMdSchool className="text-[6px] mr-2" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    Education
                  </p>
                </div>

                <div className="flex flex-row mt-0.5">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[6px] mt-0.5 mr-2" />
                    <div className="bg-black w-[1px] h-full ml-[2.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[5px] font-[700]">
                      efvr at grwf, gteege
                    </p>
                    <p className="text-[5px] text-gray-500">
                      July 2022 - April 2022
                    </p>
                    <p className="text-[5px] mt-0.5">pgreje</p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <HiBadgeCheck className="text-[6px] mr-2" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    Courses
                  </p>
                </div>

                <div className="flex flex-row mt-0.5">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[6px] mt-0.5 mr-2" />
                    <div className="bg-black w-[1px] h-full ml-[2.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[5px] font-[700]">efvr, grwf</p>
                    <p className="text-[5px] text-gray-500">
                      February 2022 - April 2022
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <BsFlower2 className="text-[6px] mr-2" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    extra-curricular activities
                  </p>
                </div>

                <div className="flex flex-row mt-0.5">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[6px] mt-0.5 mr-2" />
                    <div className="bg-black w-[1px] h-full ml-[2.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[5px] font-[700]">
                      sdqd at dsadas, ewfewfw
                    </p>
                    <p className="text-[5px] text-gray-500">
                      June 2022 - August 2022
                    </p>
                    <p className="text-[5px] mt-0.5">rgeregr</p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-row items-center">
                  <HiUsers className="text-[6px] mr-2" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    internships
                  </p>
                </div>

                <div className="flex flex-row mt-1">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[6px] mt-0.5 mr-2" />
                    <div className="bg-black w-[1px] h-full ml-[2.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[5px] font-[700]">
                      efwefefw at grwfefrf, rfwfwfew
                    </p>
                    <p className="text-[5px] text-gray-500">
                      June 2022 - December 2022
                    </p>
                    <p className="text-[5px] mt-0.5">rgeregr</p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex flex-row items-center">
                    <HiSpeakerphone className="text-[6px] mr-2" />
                    <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                      Preferences
                    </p>
                  </div>

                  <div className="flex flex-row mt-0.5">
                    <div className="flex flex-col">
                      <CgShapeCircle className="text-[6px] mt-0.5 mr-2" />
                      <div className="bg-black w-[1px] h-full ml-[2.5px] relative -top-[1px]" />
                    </div>
                    <div className="mt-0.5">
                      <p className="text-[5px] font-[700]">efvfewfwfewfw</p>
                      <p className="text-[5px] text-gray-500">
                        regogreoioi · girejgife
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // const pageTwo = () => {
  //   if (props.page === 2) {
  //     return (

  //     );
  //   }
  // };

  return (
    <div>
      <div>
        {/* page one */}
        {pageOne()}

        {/* page two */}
        {/* {pageTwo()} */}
      </div>
    </div>
  );
};

export default NewYorkTemplate;
