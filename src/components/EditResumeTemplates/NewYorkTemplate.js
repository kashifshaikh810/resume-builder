import React, { useEffect } from "react";
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
  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

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
                />
              )}
              <div>
                <p className="text-[12px] uppercase font-[500] tracking-[3px] font-serif">
                  Muhammad kashif
                </p>
              </div>
              <div className="flex flex-row items-center mt-7">
                <p className="text-[4px] uppercase">WEB DEVELOPER</p>
                <div className="flex flex-row items-center ml-1.5">
                  <MdLocationOn className="text-[4px]" />
                  <p className="text-[4px] ml-0.5 uppercase">wwwwwww, </p>
                  <p className="text-[4px] ml-0.5 uppercase">ffreerf, </p>
                  <p className="text-[4px] ml-0.5 uppercase">CYCAD </p>
                </div>
                <div className="flex flex-row items-center ml-1.5">
                  <BsTelephoneFill className="text-[4px]" />
                  <p className="text-[4px] ml-0.5"> 03235422343 </p>
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
                <p className="text-[5px]">bgrjknje</p>
                <p className="text-[5px]">wwweewe, 2042</p>
                <p className="text-[5px]">cdwcsf</p>
                <p className="text-[5px]">0313423442</p>
                <p className="text-[5px] underline">
                  kashifshaikh910ssg@gmail.com
                </p>
              </div>

              <div className="mt-1 flex flex-col items-center">
                <p className="text-[5px] text-gray-500">
                  Date / Place of birth
                </p>
                <p className="text-[5px]">23</p>
                <p className="text-[5px]">2421</p>
              </div>

              <div className="mt-1 flex flex-col items-center">
                <p className="text-[5px] text-gray-500">Nationality</p>
                <p className="text-[5px]">322</p>
              </div>

              <div className="mt-1 flex flex-col items-center">
                <p className="text-[5px] text-gray-500">Driving license</p>
                <p className="text-[5px]">423</p>
              </div>

              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[4px] mr-1.5" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    Links
                  </p>
                  <CgShapeCircle className="text-[4px] ml-1.5" />
                </div>
                <p className="text-[5px] mt-1.5 underline">greijgijrr</p>
              </div>

              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[4px] mr-1.5" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    Skills
                  </p>
                  <CgShapeCircle className="text-[4px] ml-1.5" />
                </div>
                <div>
                  <p className="text-[5px] mt-1.5 text-center">Communication</p>
                  <div className="w-[65px] bg-gray-300" id="myProgress">
                    {/* 6 || 8 || 10*/}
                    <div
                      className="w-[30px] h-[1.5px] bg-gray-800 mt-1"
                      id="myBar"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mt-2">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[4px] mr-1.5" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    Hobbies
                  </p>
                  <CgShapeCircle className="text-[4px] ml-1.5" />
                </div>
                <p className="text-[5px] mt-1.5">rgerr</p>
              </div>

              <div className="flex flex-col justify-center items-center mt-2 w-full">
                <div className="flex flex-row justify-center items-center">
                  <CgShapeCircle className="text-[4px] mr-1.5" />
                  <p className="uppercase text-[6px] font-[600] -tracking-[0.5px]">
                    Languages
                  </p>
                  <CgShapeCircle className="text-[4px] ml-1.5" />
                </div>
                <div>
                  <p className="text-[5px] mt-1.5 text-center">rgerr</p>
                  <div className="w-[65px] bg-gray-300" id="myProgress">
                    {/* 6 || 8 || 10*/}
                    <div
                      className="w-[30px] h-[1.5px] bg-gray-800 mt-1"
                      id="myBar"
                    ></div>
                  </div>
                </div>
              </div>
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
