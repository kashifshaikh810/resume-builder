import React, { useEffect } from "react";
import { MdOutlineAttachment } from "react-icons/md";

import "./styles.css";

const ViennaTemplate = (props) => {
  // useEffect(() => {
  //   props.setTotalPage(2);
  // }, [props]);

  const pageOne = () => {
    if (true) {
      return (
        <div className="p-5">
          <div className="flex flex-row">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="prof"
              className="w-[90px] h-[90px]"
            />
            <div className="w-[235px] bg-[#4afbba] h-[90px] p-5 pt-2 pl-6">
              <p className="text-[15px] font-bold">kashif here</p>
              <p className="text-[9px] capitalize">Web developer</p>

              <div className="pt-4">
                <div className="flex flex-row">
                  <p className="text-[6px]">fewfew,</p>
                  <p className="text-[6px] ml-[1px]">wwww,</p>
                  <p className="text-[6px] ml-[1px]">2013eer,</p>
                  <p className="text-[6px] ml-[1px]">fffederr</p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-[6px]">031232424324</p>
                  <div className="bg-black w-[1px] h-[1px] rounded-full ml-1 mr-1" />
                  <p className="text-[6px] underline">
                    kashifshaikh910ss@gmail.com
                  </p>
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
              <div className="mt-3">
                <p className="text-[6px] font-bold">Date / Place of birth</p>
                <p className="text-[6px] mt-0.5">24, 432</p>
              </div>
              <div className="mt-3">
                <p className="text-[6px] font-bold">Nationality</p>
                <p className="text-[6px] mt-0.5">323</p>
              </div>
              <div className="mt-3">
                <p className="text-[6px] font-bold">Driving License</p>
                <p className="text-[6px] mt-0.5">323</p>
              </div>

              <div className="mt-3">
                <p className="text-[6px] font-bold">Skills</p>
                <p className="text-[6px] mt-0.5">Communication</p>
                <div className="flex flex-row items-center mt-0.5">
                  <div className="bg-black w-[15px] h-[1.5px]" />
                  <div className="bg-black w-[15px] h-[1.5px] ml-0.5" />
                  <div className="bg-black w-[15px] h-[1.5px] ml-0.5" />
                  <div className="bg-gray-400 w-[15px] h-[1.5px] ml-0.5" />
                  <div className="bg-gray-400 w-[15px] h-[1.5px] ml-0.5" />
                </div>
              </div>

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
