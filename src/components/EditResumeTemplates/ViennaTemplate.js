import React from "react";
import { MdOutlineAttachment } from "react-icons/md";

import "./styles.css";

const ViennaTemplate = (props) => {
  const { resumeData } = props;

  // useEffect(() => {
  //   props.setTotalPage(2);
  // }, [props]);

  const pageOne = () => {
    if (true) {
      return (
        <div className="p-5">
          <div className="flex flex-row">
            {resumeData?.profileImage && (
              <img
                src={resumeData?.profileImage}
                alt="prof"
                className="w-[90px] h-[90px]"
              />
            )}
            <div
              className={`${
                resumeData?.profileImage ? `w-[242px]` : `w-[335px]`
              } bg-[#4afbba] h-[90px] p-5 pt-2 pl-6`}
            >
              <p className="text-[15px] font-bold">
                {resumeData?.firstName} {resumeData?.lastName}
              </p>
              <p className="text-[9px] capitalize">
                {resumeData?.wantedJobTitle}
              </p>

              <div className="pt-4">
                <div className="flex flex-row">
                  <p className="text-[6px]">
                    {resumeData?.address}
                    {resumeData?.address ? `,` : ``}
                  </p>
                  <p className="text-[6px] ml-[1px]">
                    {resumeData?.city}
                    {resumeData?.city ? `,` : ``}
                  </p>
                  <p className="text-[6px] ml-[1px]">
                    {resumeData?.postalCode}
                    {resumeData?.postalCode ? `,` : ``}
                  </p>
                  <p className="text-[6px] ml-[1px]">{resumeData?.country}</p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-[6px]">{resumeData?.phone}</p>
                  {resumeData?.phone && resumeData?.email ? (
                    <div className="bg-black w-[1px] h-[1px] rounded-full ml-1 mr-1" />
                  ) : (
                    ""
                  )}
                  <p className="text-[6px] underline">{resumeData?.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
    grid 
    grid-cols-[112px_minmax(300px,_1fr)_100px]
     mt-4
    "
          >
            <div>
              <div className="flex flex-row items-center">
                <MdOutlineAttachment className="text-[9px]" />
                <p className="ml-1 underline text-[6px]">efwfew</p>
              </div>
              {resumeData?.dateOfBirth || resumeData?.placeOfBirth ? (
                <div className="mt-3">
                  <p className="text-[6px] font-bold">Date / Place of birth</p>
                  <p className="text-[6px] mt-0.5">
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
                <div className="mt-3">
                  <p className="text-[6px] font-bold">Nationality</p>
                  <p className="text-[6px] mt-0.5">{resumeData?.nationality}</p>
                </div>
              ) : (
                ""
              )}

              {resumeData?.drivingLicense ? (
                <div className="mt-3">
                  <p className="text-[6px] font-bold">Driving License</p>
                  <p className="text-[6px] mt-0.5">
                    {resumeData?.drivingLicense}
                  </p>
                </div>
              ) : (
                ""
              )}

              {/* not completed */}
              {resumeData?.skillsInputList?.length >= 1 ? (
                <div className="mt-3">
                  <p className="text-[6px] font-bold">{props?.skillsInput}</p>
                  {resumeData.skillsInputList &&
                    resumeData.skillsInputList.map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="text-[6px] mt-0.5">{item?.skill}</p>
                          {/* {resumeData?.isNotShowExpertLevel === false && item?.skill ? (
                               <div className="flex flex-row items-center mt-0.5">
                               <div className={`${item?.level === 'Novice' ? `bg-black` : `bg-gray-400`} w-[15px] h-[1.5px]`} />
                               <div className={`${item?.level === 'Beginner' ? `bg-black` : `bg-gray-400`} w-[15px] h-[1.5px] ml-0.5`} />
                               <div className={`${item?.level === 'Skillful' ? `bg-black` : `bg-gray-400`} w-[15px] h-[1.5px] ml-0.5`} />
                               <div className={`${item?.level === 'Experienced' ? `bg-black` : `bg-gray-400`} w-[15px] h-[1.5px] ml-0.5`} />
                               <div className={`${item?.level === 'Expert' ? `bg-black` : `bg-gray-400`} w-[15px] h-[1.5px] ml-0.5`} />
                             </div>
                            ) : (
                              ""
                            )} */}
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}

              <div className="mt-3">
                <p className="text-[6px] font-bold">Hobbies</p>
                <p className="text-[6px] mt-0.5">efownfnoewof</p>
              </div>

              <div className="mt-3">
                <p className="text-[6px] font-bold">Languages</p>
                <p className="text-[6px] mt-0.5">fewofwe</p>
                <div className="flex flex-row items-center mt-0.5">
                  <div className="bg-black w-[15px] h-[1.5px]" />
                  <div className="bg-black w-[15px] h-[1.5px] ml-0.5" />
                  <div className="bg-black w-[15px] h-[1.5px] ml-0.5" />
                  <div className="bg-black w-[15px] h-[1.5px] ml-0.5" />
                  <div className="bg-gray-400 w-[15px] h-[1.5px] ml-0.5" />
                </div>
              </div>
            </div>
            <div className="relative -top-1">
              <div>
                <p className="font-bold text-[9px]">Profile</p>
                <p className="text-[6px]">content</p>
              </div>

              <div className="mt-2">
                <p className="font-bold text-[9px]">Employment History</p>
                <p className="font-bold text-[6px] mt-0.5">
                  gregreg, efwojnrreg, wgktjejg
                </p>
                <p className="text-[6px] mt-0.5">december 2022 - 2022</p>
                <p className="text-[6px] mt-1 font-[600] text-gray-600">
                  rgekngnregerkjnn
                </p>
              </div>

              <div className="mt-2">
                <p className="font-bold text-[9px]">Education</p>
                <p className="font-bold text-[6px] mt-0.5">
                  gregreg, efwojnrreg, wgktjejg
                </p>
                <p className="text-[6px] mt-0.5">July 2022 - April 2022</p>
                <p className="text-[6px] mt-1 font-[600] text-gray-600">
                  rgekngnregerkjnn
                </p>
              </div>

              <div className="mt-2">
                <p className="font-bold text-[9px]">Courses</p>
                <p className="font-bold text-[6px] mt-0.5">
                  gregreg, efwojnrreg
                </p>
                <p className="text-[6px] mt-0.5">February 2022 - April 2022</p>
              </div>

              <div className="mt-2">
                <p className="font-bold text-[9px]">
                  Extra-curricular activities
                </p>
                <p className="font-bold text-[6px] mt-0.5">
                  gregreg, efwojnrreg, wgktjejg
                </p>
                <p className="text-[6px] mt-0.5">december 2022 - 2022</p>
                <p className="text-[6px] mt-1 font-[600] text-gray-600">
                  rgekngnregerkjnn
                </p>
              </div>

              <div className="mt-2">
                <p className="font-bold text-[9px]">Ɪnternships</p>
                <p className="font-bold text-[6px] mt-0.5">
                  gregreg, efwojnrreg, wgktjejg
                </p>
                <p className="text-[6px] mt-0.5">december 2022 - 2022</p>
                <p className="text-[6px] mt-1 font-[600] text-gray-600">
                  rgekngnregerkjnn
                </p>
              </div>

              <div className="mt-2">
                <p className="font-bold text-[9px]">References</p>
                <p className="font-bold text-[6px] mt-0.5">gregregfewfe</p>

                <div className="flex flex-row items-center">
                  <p className="text-[6px] mt-0.5">email · phone</p>
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
  //       <div>
  //         <p>pageTwo</p>
  //       </div>
  //     );
  //   }
  // };

  return (
    <div>
      <div>
        {/* pageOne */}
        {pageOne()}

        {/* pageTwo */}
        {/* {pageTwo()} */}
      </div>
    </div>
  );
};

export default ViennaTemplate;
