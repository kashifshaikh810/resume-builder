import React, { useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFlower2, BsTelephoneFill } from "react-icons/bs";
import { CgShapeCircle } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import { RiStarSFill } from "react-icons/ri";

import "./styles.css";

const NewYorkTemplate = (props) => {
  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

  const pageOne = () => {
    if (props.page === 1) {
      return (
        <div>
          <div className="pt-14 w-full">
            <div className="flex w-full flex-col justify-center items-center">
              <div>
                <p className="text-2xl uppercase font-[500] tracking-widest font-serif max-[768px]:text-xl max-[690px]:text-lg max-[595px]:text-sm">
                  Muhammad kashif
                </p>
              </div>
              <div className="flex flex-row items-center mt-2">
                <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px]">
                  WEB DEVELOPER
                </p>
                <div className="flex flex-row items-center ml-3">
                  <MdLocationOn className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px]" />
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    wwwwwww,{" "}
                  </p>
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    20132,{" "}
                  </p>
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    CYCAD{" "}
                  </p>
                </div>
                <div className="flex flex-row items-center ml-3">
                  <BsTelephoneFill className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px]" />
                  <p className="text-[10px] max-[768px]:text-[9px] max-[690px]:text-[8px] max-[595px]:text-[6px] ml-1">
                    {" "}
                    03235422343{" "}
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
              <div className="flex flex-row justify-center items-center">
                <CgShapeCircle className="text-[7px] max-[768px]:text-[6px] mr-1.5" />
                <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                  Details
                </p>
                <CgShapeCircle className="text-[7px] max-[768px]:text-[6px] ml-1.5" />
              </div>

              <div className="mt-1 flex flex-col items-center">
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  bgrjknje
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  wwweewe, 2042
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  cdwcsf
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  0313423442
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] underline">
                  kashifshaikh910ssg@gmail.com
                </p>
              </div>

              <div className="mt-2 flex flex-col items-center">
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                  Date / Place of birth
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  23
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  2421
                </p>
              </div>

              <div className="mt-2 flex flex-col items-center">
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                  Nationality
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  322
                </p>
              </div>

              <div className="mt-2 flex flex-col items-center">
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                  Driving license
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  423
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-7">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[7px] mr-1.5" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    Links
                  </p>
                  <CgShapeCircle className="text-[7px] ml-1.5" />
                </div>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5 underline">
                  greijgijrr
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-7">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[7px] mr-1.5" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    Skills
                  </p>
                  <CgShapeCircle className="text-[7px] ml-1.5" />
                </div>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5">
                  Communication
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-6">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[7px] mr-1.5" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    Hobbies
                  </p>
                  <CgShapeCircle className="text-[7px] ml-1.5" />
                </div>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5">
                  rgerr
                </p>
              </div>

              <div className="flex flex-col justify-center items-center mt-5 w-full">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[7px] mr-1.5" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    Languages
                  </p>
                  <CgShapeCircle className="text-[7px] ml-1.5" />
                </div>
                <div>
                  <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-1.5 text-center">
                    rgerr
                  </p>
                  <div className="w-[10rem] bg-gray-300" id="myProgress">
                    {/* 6 || 8 || 10*/}
                    <div
                      className="w-[6rem] h-[3.5px] bg-gray-800 mt-1"
                      id="myBar"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <div className="flex flex-row items-center">
                <IoMdPerson className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                  profile
                </p>
              </div>
              <div className="flex flex-row items-center mt-1">
                <CgShapeCircle className="text-[7px] ml-1 mr-5" />
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px]">
                  ferfreregergetgrgr
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-row items-center">
                  <BsFillHandbagFill className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    Employment History
                  </p>
                </div>

                <div className="flex flex-row mt-1">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                    <div className="bg-black w-[2px] h-[46px] ml-[6.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-1">
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                      sdqd at dsadas, ewfewfw
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                      December 2022 - 2022
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
                      rgeregr
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-row items-center">
                  <IoMdSchool className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    Education
                  </p>
                </div>

                <div className="flex flex-row mt-1">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                    <div className="bg-black w-[2px] h-[46px] ml-[6.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-1">
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                      efvr at grwf, gteege
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                      July 2022 - April 2022
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
                      pgreje
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-row items-center">
                  <HiBadgeCheck className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    Courses
                  </p>
                </div>

                <div className="flex flex-row mt-1">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                    <div className="bg-black w-[2px] h-[20px] ml-[6.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-1">
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                      efvr, grwf
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                      February 2022 - April 2022
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-row items-center">
                  <BsFlower2 className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    extra-curricular activities
                  </p>
                </div>

                <div className="flex flex-row mt-1">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                    <div className="bg-black w-[2px] h-[46px] ml-[6.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-1">
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                      sdqd at dsadas, ewfewfw
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                      June 2022 - August 2022
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
                      rgeregr
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <RiStarSFill className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                <div className="flex flex-row relative -top-[3px]">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[7px] ml-1 mr-5" />
                    <div className="bg-black w-[2px] h-[46px] ml-[6.5px] relative -top-[1px]" />
                  </div>
                  <div className="relative -top-[7px]">
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                      sdqd at dsadas, ewfewfw
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                      June 2022 - August 2022
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] mt-2">
                      rgeregr
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex flex-row items-center">
                  <HiBadgeCheck className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
                  <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                    internships
                  </p>
                </div>

                <div className="flex flex-row mt-1">
                  <div className="flex flex-col">
                    <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                    <div className="bg-black w-[2px] h-[20px] ml-[6.5px] relative -top-[1px]" />
                  </div>
                  <div className="mt-1">
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                      efwefefw at grwfefrf, rfwfwfew
                    </p>
                    <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                      June 2022 - December 2022
                    </p>
                  </div>
                </div>
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
        <div className="pt-10 flex flex-col w-10/12 items-center">
          <div>
            <div className="flex flex-row items-center">
              <HiBadgeCheck className="text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] mr-4" />
              <p className="uppercase text-[13px] max-[768px]:text-[12px] max-[690px]:text-[11px] max-[595px]:text-[9px] font-[600]">
                Preferences
              </p>
            </div>

            <div className="flex flex-row mt-1">
              <div className="flex flex-col">
                <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                <div className="bg-black w-[2px] h-[20px] ml-[6.5px] relative -top-[1px]" />
              </div>
              <div className="mt-1">
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] font-[700]">
                  efvfewfwfewfw
                </p>
                <p className="text-[12px] max-[768px]:text-[11px] max-[690px]:text-[10px] max-[595px]:text-[8px] text-gray-500">
                  regogreoioi · girejgife
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className="flex flex-col w-full h-[930px] 
      border-l border-gray-600 ml-5
      pl-10 pb-10 
      unselectable
      max-[768px]:border-none
      max-[768px]:ml-0
      max-[1029px]:pr-5 max-[1029px]:pl-5 
      "
    >
      <div className="flex bg-white flex-col w-full overflow-hidden h-[900px] rounded-md hover:default">
        {/* page one */}
        {pageOne()}

        {/* page two */}
        {pageTwo()}
      </div>
    </div>
  );
};

export default NewYorkTemplate;
