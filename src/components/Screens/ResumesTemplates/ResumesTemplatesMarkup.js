import React from "react";
import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import { VscFiles } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { TbHandRock } from "react-icons/tb";

const ResumesTemplatesMarkup = (props) => {
  const tabsData = [
    { id: 0, tabName: "All templates", tabIcon: () => <VscFiles size={25} /> },
    { id: 1, tabName: "Creative", tabIcon: () => <FaRegCopyright size={25} /> },
    { id: 2, tabName: "Simple", tabIcon: () => <BsStars size={25} /> },
    {
      id: 3,
      tabName: "Professional",
      tabIcon: () => <TbBriefcase size={25} />,
    },
    { id: 4, tabName: "Modern", tabIcon: () => <TbHandRock size={25} /> },
  ];
  return (
    <div>
      <Header {...props} />

      <div className="m-auto container">
        <div className="container-main">
          <div className="flex flex-col w-full justify-center items-center mt-5">
            <p className="text-3xl text-center font-bold max-[767px]:text-2xl">
              Job-winning resume templates
            </p>
            <p className="w-8/12 text-center text-base mt-2 max-[767px]:w-full">
              Each resume template is expertly designed and follows the exact
              “resume rules” hiring managers look for. Stand out and get hired
              faster with field-tested resume templates.
            </p>

            <MyButton
              {...props}
              title="Create My Resume"
              className="bg-blue-500 mt-4 p-3 pl-5 pr-5 rounded-md cursor-pointer button max-[767px]:hidden"
              textStyle="text-white font-bold"
              onPress={() => {}}
              loading={false}
            />
          </div>

          <div className="flex flex-row justify-center mt-5 border-b border-gray-200">
            {tabsData.map((item, index) => (
              <div
                className="flex flex-row items-center p-5 border-b border-blue-200 tab-container"
                key={index}
              >
                <div className="text-gray-400">{item.tabIcon()}</div>
                <p className="ml-2 font-bold text-gray-400 tab-text">
                  {item.tabName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumesTemplatesMarkup;
