import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import MyButton from "../../MyButton/MyButton";
import { BsArrowsAngleContract } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { BsBagFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import "./styles.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const AllTemplatesMarkup = (props) => {
  const { isSelectedTemplate, setIsSelectedTemplate } = props;

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

  // const selectTempColorObj = {
  //   "0-toronto": "border-[4px] border-blue-400",
  //   "1-stockholm": "border-[4px] border-blue-400",
  //   "2-new-york": "border-[4px] border-blue-400",
  //   "3-vienna": "border-[4px] border-blue-400",
  // };

  // const selectTempColorObj = () => {
  //   switch (isSelectedTemplate.numOfSelectedVal && isSelectedTemplate.nameOfSelectedVal) {
  //     case isSelectedTemplate.numOfSelectedVal ==0:

  //       break;

  //     default:
  //       break;
  //   }
  //   if (
  //     isSelectedTemplate.numOfSelectedVal === 0 &&
  //     isSelectedTemplate.nameOfSelectedVal === "toronto"
  //   ) {
  //     return "border-[4px] border-blue-400";
  //   } else if (
  //     isSelectedTemplate.numOfSelectedVal === 1 &&
  //     isSelectedTemplate.nameOfSelectedVal === "stockholm"
  //   ) {
  //     return "border-[4px] border-blue-400";
  //   }
  // };

  return (
    <div className="flex w-full h-[1050px] flex-col bg-gray-700">
      <div className="flex flex-row items-center w-30 justify-end bg-black p-1.5 fixed left-[50rem] top-[35rem] rounded-full hover:cursor-default unselectable">
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
        <div className="flex items-center">
          <div
            className="flex flex-row items-center hover:cursor-pointer hover:bg-gray-700 rounded-full pl-0.5 pr-2.5"
            onClick={() => props.navigate("/app/resumes/id/edit")}
          >
            <BiChevronLeft className="text-white text-3xl" />
            <p className="text-white text-base">Back to editor</p>
          </div>
        </div>
        <div className="flex flex-row flex-1 justify-end items-center">
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
      </div>

      <div className="grid grid-cols-[400px_minmax(800px,_1fr)_100px] mt-12 pt-12 mb-5 pb-5">
        <div className="grid grid-cols-2 gap-0 overflow-auto h-screen w-11/12 ml-4">
          {selectTemplatesData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center w-full">
                <p className="text-white text-lg pb-1">{item.name}</p>
                {/* {selectTempColorObj() && (
                  <div className="bg-blue-400 w-10 h-10 rounded-full absolute top-[14rem] flex justify-center items-center">
                    <TiTick className="text-white text-xl" />
                  </div>
                )} */}
                {/* <img
                  src={item.uri}
                  alt="temps"
                  className={`w-11/12 h-auto rounded-[7px] opacity-1 hover:cursor-pointer ${selectTempColorObj()}`}
                  onClick={() => {
                    setIsSelectedTemplate({
                      nameOfSelectedVal: item.value,
                      numOfSelectedVal: item.id,
                    });
                  }}
                /> */}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full h-[930px] border-l border-gray-600 ml-5 pl-10 pb-10 unselectable">
          <div className="flex bg-white w-full overflow-hidden h-[900px] self-center rounded-md hover:default">
            <div className="p-14 grid grid-cols-2 gap-2">
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
                    <p className="text-base font-bold">first name last name</p>
                    <p className="text-base text-gray-600">Finance</p>
                  </div>
                </div>

                <div className="flex flex-row mt-3">
                  <HiUser className="text-base mt-0.5" />
                  <div className="ml-1">
                    <p className="text-base font-semibold">Profile</p>
                    <p className="text-base text-gray-600">
                      epfijwejifwijefiefioew
                    </p>
                  </div>
                </div>

                <div className="flex flex-row mt-3">
                  <BsBagFill className="text-base mt-0.5" />
                  <div className="ml-1">
                    <p className="text-base font-semibold">
                      Employment History
                    </p>
                    <p className="text-base text-gray-600">
                      epfijwej at ifwije, fiefioew
                    </p>
                    <p className="text-base text-gray-400">
                      December 2022 - 2022
                    </p>
                    <p className="text-base text-gray-600">reigjierjirjige</p>
                  </div>
                </div>

                <div className="flex flex-row mt-3">
                  <IoMdSchool className="text-base mt-1" />
                  <div className="ml-1">
                    <p className="text-base font-semibold">Education</p>
                    <p className="text-base text-gray-600">
                      epfijwej, ifwije, fiefioew
                    </p>
                    <p className="text-base text-gray-400">
                      July 2022 - April 2022
                    </p>
                    <p className="text-base text-gray-600">reigjierjirjige</p>
                  </div>
                </div>
              </div>

              <div
                className={`relative left-44 ml-6 ${
                  props?.profileImage ? `top-14 mt-1` : `top-16`
                }`}
              >
                <p className="text-sm font-semibold">Details</p>
                <div>
                  <p className="text-sm text-gray-600">address</p>
                  <p className="text-sm text-gray-600">wwwwwwww, 2013</p>
                  <p className="text-sm text-gray-600">gijtjgijtg</p>
                  <p className="text-sm text-gray-600">0332244343433</p>
                  <p className="text-sm text-blue-400">
                    kashifshaikh910ssg@gmail.com
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-600">Date / Place of birth</p>
                  <p className="text-sm text-black">24</p>
                  <p className="text-sm text-black">323</p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-600">Nationality</p>
                  <p className="text-sm text-black">text</p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-600">Driving License</p>
                  <p className="text-sm text-black">text</p>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-semibold">Links</p>
                  <p className="text-sm text-blue-400">text</p>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-semibold">Skills</p>
                  <p className="text-sm text-black">communication</p>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-semibold">Hobbies</p>
                  <p className="text-sm text-black">efiwijoowijf</p>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-semibold">Languages</p>
                  <p className="text-sm text-black">languages names</p>
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
      </div>
    </div>
  );
};

export default AllTemplatesMarkup;
