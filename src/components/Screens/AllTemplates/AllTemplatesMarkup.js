import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BsArrowsAngleContract } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import MyButton from "../../MyButton/MyButton";
import "./styles.css";

const AllTemplatesMarkup = (props) => {
  const {
    isSelectedTemplate,
    setIsSelectedTemplate,
    isShowTemplateCard,
    setIsShowTemplateCard,
  } = props;

  const selectTemplatesData = [
    {
      id: 0,
      name: "Toronto",
      value: "toronto",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: 1,
      name: "Stockholm",
      value: "stockholm",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg",
    },
    {
      id: 2,
      name: "New York",
      value: "new-york",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: 3,
      name: "Vienna",
      value: "vienna",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/406/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  const selectTempColorObj = (item) => {
    if (
      isSelectedTemplate.numOfSelectedVal === item.id &&
      isSelectedTemplate.nameOfSelectedVal === item.value
    ) {
      return "border-[4px] border-blue-400";
    }
  };

  return (
    <div
      className={`flex w-full h-[1050px] 
      max-[704px]:h-[998px]
      max-[768px]:h-[1074px]
      max-[610px]:h-[948px]
      max-[570px]:h-[898px]
      max-[535px]:h-[848px]
      max-[500px]:h-[798px]
    flex-col bg-gray-700
    ${isSelectedTemplate ? `overscroll-y-none` : `overscroll-y-auto`}
    `}
    >
      <div
        className="flex flex-row items-center w-30 justify-end
       bg-black p-1.5 fixed left-[50rem] top-[35rem] 
       rounded-full hover:cursor-default unselectable
       max-[1029px]:left-[35rem]
       max-[1006px]:left-[33rem]
       max-[980px]:left-[32rem]
       max-[915px]:left-[30rem]
       max-[880px]:left-[28rem]
       max-[830px]:left-[26rem]
       max-[768px]:hidden
       "
      >
        <RiArrowLeftSLine
          size={22}
          className="text-white hover:bg-gray-600 rounded-full hover:cursor-pointer"
        />
        <p className="text-white ml-2 mr-2">1 / 1</p>
        <RiArrowRightSLine
          size={22}
          className="text-white hover:bg-gray-600 rounded-full hover:cursor-pointer"
        />
      </div>
      <div className="bg-black w-full h-16 flex flex-row pl-6 pr-6 fixed z-50">
        <div
          className="flex items-center 
      max-[768px]:hidden
      "
        >
          <div
            className="flex flex-row items-center hover:cursor-pointer hover:bg-gray-700 rounded-full pl-0.5 pr-2.5"
            onClick={() => props.navigate("/app/resumes/id/edit")}
          >
            <BiChevronLeft className="text-white text-3xl" />
            <p className="text-white text-base">Back to editor</p>
          </div>
        </div>
        <div
          className="hidden
      max-[768px]:flex
      flex-row items-center hover:cursor-pointer"
          onClick={() => {
            // if (
            //   isSelectedTemplate ? `overscroll-y-none` : `overscroll-y-auto` &&
            //   typeof window != "undefined" &&
            //   window.document
            // ) {
            //   document.body.style.overflow = "hidden";
            // }
            // if (isSelectedTemplate === false) {
            //   document.body.style.overflow = "scroll";
            // }
            setIsShowTemplateCard(!isShowTemplateCard);
          }}
        >
          <GiHamburgerMenu className="text-white text-3xl" />
        </div>

        <div className="flex flex-row flex-1 justify-end items-center max-[768px]:justify-center">
          <MyButton
            {...props}
            title="Download PDF"
            className="bg-blue-500 p-2 pl-6 pr-6 rounded-md hover:bg-blue-600 hover:cursor-pointer"
            textStyle="text-white font-bold text-center"
            onPress={() => {}}
            loading={false}
          />
          <MyButton
            {...props}
            title="..."
            className="bg-blue-500 ml-2 p-2 pl-4 pr-4 rounded-md hover:bg-blue-600 hover:cursor-pointer"
            textStyle="text-white font-bold text-center"
            onPress={() => {}}
            loading={false}
          />
        </div>

        <div
          className="items-center hover:cursor-pointer
        hidden
        max-[768px]:flex"
        >
          <MdClose className="text-white text-3xl hover:text-blue-500" />
        </div>
      </div>

      {isShowTemplateCard && (
        <div className="fixed z-[5] inset-[0px]">
          <div
            className="hidden
      max-[768px]:flex z-50 fixed top-[30rem] bg-black w-full h-36
      delay-300 duration-300
      "
          >
            <p className="text-white text-xl">hello world</p>
          </div>
        </div>
      )}

      <div
        className="grid grid-cols-[400px_minmax(800px,_1fr)_100px]
        max-[1029px]:grid-cols-[200px_minmax(800px,_1fr)_100px] 
        max-[1006px]:grid-cols-[200px_minmax(750px,_1fr)_100px]
        max-[980px]:grid-cols-[200px_minmax(700px,_1fr)_100px]
        max-[915px]:grid-cols-[200px_minmax(650px,_1fr)_100px]
        max-[880px]:grid-cols-[200px_minmax(600px,_1fr)_100px]
        max-[830px]:grid-cols-[200px_minmax(550px,_1fr)_100px]
        max-[768px]:grid-cols-1
        mt-12 pt-12 mb-5 pb-5
        overscroll-y-none
        "
      >
        <div
          className="grid grid-cols-2 gap-0 overflow-y-auto overscroll-y-none h-screen
         max-[1029px]:grid-cols-1 max-[1029px]:h-[900px]
         max-[768px]:hidden
          w-11/12 ml-4"
        >
          {selectTemplatesData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-full relative"
              >
                <p className="text-white text-lg pb-1">{item.name}</p>
                {selectTempColorObj(item) && (
                  <div className="bg-blue-400 w-10 h-10 rounded-full absolute top-[8rem] flex justify-center items-center">
                    <TiTick className="text-white text-xl" />
                  </div>
                )}
                <img
                  src={item.uri}
                  alt="temps"
                  className={`w-11/12 h-auto rounded-[7px] opacity-1 hover:cursor-pointer
                  hover:border-[4px] hover:border-blue-400 
                  max-[1029px]:mb-4 ${selectTempColorObj(item)}`}
                  onClick={() => {
                    setIsSelectedTemplate({
                      nameOfSelectedVal: item.value,
                      numOfSelectedVal: item.id,
                    });
                  }}
                />
              </div>
            );
          })}
        </div>
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

            {props?.isHovered ? (
              <div className="flex flex-1 justify-center items-center absolute top-64 left-72">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
                  <BsArrowsAngleContract size={20} color="#fff" />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div
          className="hidden 
      max-[768px]:flex flex-1 justify-center
      "
        >
          <RiArrowLeftSLine
            size={22}
            className="text-white hover:bg-gray-600 rounded-full hover:cursor-pointer"
          />
          <p className="text-white ml-2 mr-2">1 / 1</p>
          <RiArrowRightSLine
            size={22}
            className="text-white hover:bg-gray-600 rounded-full hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AllTemplatesMarkup;
