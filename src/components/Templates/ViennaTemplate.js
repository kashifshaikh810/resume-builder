import React from "react";
import { MdOutlineAttachment } from "react-icons/md";

import "./styles.css";

const ViennaTemplate = (props) => {
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
        <div className="p-10 w-full">
          <div className="flex flex-row w-full">
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="prof"
              className="w-64 h-48"
            />
            <div className="w-full bg-[#4afbba] p-5 pl-10">
              <p className="text-3xl font-bold">kashif here</p>
              <p className="text-xl capitalize">Web developer</p>

              <div className="pt-10">
                <div className="flex flex-row">
                  <p className="text-[12px]">fewfew, </p>
                  <p className="text-[12px] ml-1"> wwww, </p>
                  <p className="text-[12px] ml-1"> 2013eer, </p>
                  <p className="text-[12px] ml-1"> fffederr </p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-[12px]">031232424324</p>
                  <div className="bg-black w-[2px] h-[2px] rounded-full ml-2 mr-2" />
                  <p className="text-[12px] underline">
                    kashifshaikh910ss@gmail.com
                  </p>
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
              <div className="flex flex-row items-center">
                <MdOutlineAttachment className="text-[12px]" />
                <p className="ml-2.5 underline text-[12px]">efwfew</p>
              </div>
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
      </div>
    </div>
  );
};

export default ViennaTemplate;
