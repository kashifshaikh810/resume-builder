import React from "react";
import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import { VscFiles } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { TbHandRock } from "react-icons/tb";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import "./styles.css";

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
      {props?.toggleDrawer && <SideDrawer {...props} />}

      <div className={`m-auto ${`max-[767px]:` ? `` : `container`}`}>
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

          <div className="flex flex-row justify-center max-[767px]:justify-start mt-5 border-b border-gray-200 overflow-auto">
            {tabsData.map((item, index) => (
              <div
                className={`flex flex-row items-center p-5 max-[1023px]:pl-1 pb-0 ${
                  (props?.showSelectedTab.tabName === "All templates" &&
                    props?.showSelectedTab.id === index) ||
                  (props?.showSelectedTab.tabName === "Creative" &&
                    props?.showSelectedTab.id === index) ||
                  (props?.showSelectedTab.tabName === "Simple" &&
                    props?.showSelectedTab.id === index) ||
                  (props?.showSelectedTab.tabName === "Professional" &&
                    props?.showSelectedTab.id === index) ||
                  (props?.showSelectedTab.tabName === "Modern" &&
                    props?.showSelectedTab.id === index)
                    ? `cursor-default`
                    : `tab-container`
                }`}
                key={index}
                onClick={() => props?.setShowSelectedTab(item)}
              >
                <div
                  className={`flex flex-row pb-5 max-[1023px]:pb-2 ${
                    (props?.showSelectedTab.tabName === "All templates" &&
                      props?.showSelectedTab.id === index) ||
                    (props?.showSelectedTab.tabName === "Creative" &&
                      props?.showSelectedTab.id === index) ||
                    (props?.showSelectedTab.tabName === "Simple" &&
                      props?.showSelectedTab.id === index) ||
                    (props?.showSelectedTab.tabName === "Professional" &&
                      props?.showSelectedTab.id === index) ||
                    (props?.showSelectedTab.tabName === "Modern" &&
                      props?.showSelectedTab.id === index)
                      ? `border-b-2 border-blue-400`
                      : ``
                  }`}
                >
                  <div
                    className={`text-gray-400 tab-icon max-[1023px]:hidden ${
                      (props?.showSelectedTab.tabName === "All templates" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Creative" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Simple" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Professional" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Modern" &&
                        props?.showSelectedTab.id === index)
                        ? `text-blue-400`
                        : ``
                    }`}
                  >
                    {item.tabIcon()}
                  </div>
                  <p
                    className={`ml-2 text-sm max-[1023px]:ml-0 font-bold text-gray-400 tracking-widest max-[1023px]:text-xs max-[1023px]:uppercase tab-text max-[375px]:h-7 ${
                      (props?.showSelectedTab.tabName === "All templates" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Creative" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Simple" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Professional" &&
                        props?.showSelectedTab.id === index) ||
                      (props?.showSelectedTab.tabName === "Modern" &&
                        props?.showSelectedTab.id === index)
                        ? `text-black`
                        : ``
                    }`}
                  >
                    {item.tabName}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* {dummyData.map((item, i) => (
            <div>
              <img src={item.cvImage} className="w-5/12 h-auto" />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ResumesTemplatesMarkup;
