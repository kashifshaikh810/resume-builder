import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { CgShapeCircle } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";

import "./styles.css";

const NewYorkTemplate = (props) => {
  return (
    <div
      className="flex flex-col w-full h-[930px] 
      border-l border-gray-600 ml-5
      max-[1029px]:pl-1 pl-10 pb-10 
      unselectable
      max-[768px]:border-none
      max-[768px]:ml-0
      "
    >
      <div className="flex bg-white flex-col w-full max-[1029px]:w-11/12 overflow-hidden h-[900px] self-center rounded-md hover:default">
        <div className="pt-14 w-full">
          <div className="flex w-full flex-col justify-center items-center">
            <div>
              <p className="text-2xl uppercase font-[500] tracking-widest font-serif">
                Muhammad kashif
              </p>
            </div>
            <div className="flex flex-row items-center mt-2">
              <p className="text-[10px]">WEB DEVELOPER</p>
              <div className="flex flex-row items-center ml-3">
                <MdLocationOn className="text-[10px]" />
                <p className="text-[10px] ml-1">wwwwwww, </p>
                <p className="text-[10px] ml-1">20132, </p>
                <p className="text-[10px] ml-1">CYCAD </p>
              </div>
              <div className="flex flex-row items-center ml-3">
                <BsTelephoneFill className="text-[10px]" />
                <p className="text-[10px] ml-1"> 03235422343 </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
          grid grid-cols-[200px_minmax(250px,_1fr)_100px]
          m-14
          p-12
          mr-0
          mb-0
          pr-0
          pb-0
          mt-5
          pt-5
          "
        >
          <div>
            <div className="flex flex-row items-center">
              <CgShapeCircle className="text-[7px] mr-1.5" />
              <p className="uppercase text-[13px] font-[600]">Details</p>
              <CgShapeCircle className="text-[7px] ml-1.5" />
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center">
              <IoMdPerson className="text-[14px] mr-4" />
              <p className="uppercase text-[13px] font-[600]">profile</p>
            </div>
            <div className="flex flex-row items-center mt-1">
              <CgShapeCircle className="text-[7px] ml-1 mr-5" />
              <p className="text-[13px]">ferfreregergetgrgr</p>
            </div>

            <div className="mt-5">
              <div className="flex flex-row items-center">
                <CgShapeCircle className="text-[7px] ml-1 mr-5" />
                <p className="uppercase text-[13px] font-[600]">profile</p>
              </div>

              <div className="flex flex-row mt-1">
                <div className="flex flex-col">
                  <CgShapeCircle className="text-[7px] mt-2.5 ml-1 mr-5" />
                  <div className="bg-black w-[2px] h-[30px] ml-[6.5px] relative -top-[1px]" />
                </div>
                <div>
                  <p>dadada</p>
                  <p>dadada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYorkTemplate;
