import React, { useEffect } from "react";
import { BsArrowsAngleContract } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";

import "./styles.css";

const StockholmTemplate = (props) => {
  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

  const pageOne = () => {
    if (props.page === 1) {
      return (
        <div className="p-14 grid grid-cols-2 gap-2 max-[880px]:pl-12 max-[830px]:pl-10">
          <div>
            <div className="flex flex-row items-center">
              {props?.profileImage && (
                <img
                  src={props?.profileImage}
                  alt="profile"
                  className="w-8 h-8"
                />
              )}
              <div className={`${props?.profileImage ? `ml-3` : ``}`}>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    font-bold"
                >
                  first name last name
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-600"
                >
                  Finance
                </p>
              </div>
            </div>

            <div className="flex flex-row mt-3">
              <HiUser
                className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                  max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                  mt-0.5 max-[880px]:mt-1"
              />
              <div className="ml-1">
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    font-semibold"
                >
                  Profile
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-600"
                >
                  epfijwejifwijefiefioew
                </p>
              </div>
            </div>

            <div className="flex flex-row mt-3">
              <BsBagFill
                className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                  max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                  mt-0.5 max-[880px]:mt-1"
              />
              <div className="ml-1">
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    font-semibold"
                >
                  Employment History
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-600"
                >
                  epfijwej at ifwije, fiefioew
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-400"
                >
                  December 2022 - 2022
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-600"
                >
                  reigjierjirjige
                </p>
              </div>
            </div>

            <div className="flex flex-row mt-3">
              <IoMdSchool
                className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                  max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                  mt-1"
              />
              <div className="ml-1">
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    font-semibold"
                >
                  Education
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-600"
                >
                  epfijwej, ifwije, fiefioew
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-400"
                >
                  July 2022 - April 2022
                </p>
                <p
                  className="text-base max-[1004px]:text-[14px] max-[880px]:text-[13px] max-[830px]:text-[12px] 
                    max-[768px]:text-[11px]
                    max-[620px]:text-[10px]
                    max-[703px]:text-[9px]
                    max-[610px]:text-[8px]
                    max-[570px]:text-[7px]
                    max-[535px]:text-[6px]
                    max-[500px]:text-[5px]
                    text-gray-600"
                >
                  reigjierjirjige
                </p>
              </div>
            </div>
          </div>

          <div
            className={`relative left-44 ml-6
                max-[1029px]:left-40 max-[980px]:left-36 max-[915px]:left-24
                max-[880px]:left-16
                max-[830px]:left-12
                max-[768px]:left-64
                max-[703px]:left-44
                max-[610px]:left-36
                max-[570px]:left-28
                max-[535px]:left-20
                max-[500px]:left-20
                max-[473px]:left-8
                ${props?.profileImage ? `top-14 mt-1` : `top-16`}`}
          >
            <p
              className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                max-[768px]:text-[9px]
                   max-[620px]:text-[8px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                font-semibold"
            >
              Details
            </p>
            <div>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-gray-600"
              >
                address
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-gray-600"
              >
                wwwwwwww, 2013
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-gray-600"
              >
                gijtjgijtg
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-gray-600"
              >
                0332244343433
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-blue-400"
              >
                kashifshaikh910ssg@gmail.com
              </p>
            </div>

            <div className="mt-2">
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-gray-600"
              >
                Date / Place of birth
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-black"
              >
                24
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-black"
              >
                323
              </p>
            </div>

            <div className="mt-2">
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-gray-600"
              >
                Nationality
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-black"
              >
                text
              </p>
            </div>

            <div className="mt-2">
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-gray-600"
              >
                Driving License
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-black"
              >
                text
              </p>
            </div>

            <div className="mt-2">
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  font-semibold"
              >
                Links
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-blue-400"
              >
                text
              </p>
            </div>

            <div className="mt-2">
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  font-semibold"
              >
                Skills
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-black"
              >
                communication
              </p>
            </div>

            <div className="mt-2">
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  font-semibold"
              >
                Hobbies
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-black"
              >
                efiwijoowijf
              </p>
            </div>

            <div className="mt-2">
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  font-semibold"
              >
                Languages
              </p>
              <p
                className="text-sm max-[1004px]:text-[12px] max-[880px]:text-[11px]
                  max-[768px]:text-[9px]
                     max-[620px]:text810px]
                    max-[703px]:text-[7px]
                    max-[610px]:text-[6px]
                  text-black"
              >
                languages names
              </p>
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

        {props?.isHovered ? (
          <div className="flex flex-1 justify-center items-center absolute top-64 left-72">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
              <BsArrowsAngleContract size={20} color="#fff" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StockholmTemplate;
