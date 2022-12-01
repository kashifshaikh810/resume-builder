import React from "react";
import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import SideDrawer from "../../../components/SideDrawer/SideDrawer";
import "./styles.css";

const ResumesTemplatesMarkup = (props) => {
  const allTempSection = () => {
    if (props?.showSelectedTab.tabName === "All templates") {
      return (
        <div className="flex flex-wrap flex-row pb-5 max-[767px]:block max-[767px]:w-full">
          {props?.allTempData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-4/12 h-auto pt-5 p-4 max-[1023px]:w-6/12 max-[767px]:w-full all-temp-container"
              onMouseEnter={() => {
                props.setIsHovered({ num: index, show: true });
              }}
              onMouseLeave={() =>
                props.setIsHovered({ num: index, show: false })
              }
            >
              <div
                className={`p-5 bg-gray-100 w-full h-auto flex flex-col justify-center max-[767px]:w-full`}
              >
                {props?.screenWidth >= 1023 ? (
                  props?.isHovered?.show &&
                  props?.isHovered?.num === index && (
                    <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                      <MyButton
                        {...props}
                        title="Use This Template"
                        className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                        textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                        onPress={() => props.navigate("/app")}
                        loading={false}
                      />
                    </div>
                  )
                ) : (
                  <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                    <MyButton
                      {...props}
                      title="Use This Template"
                      className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                      textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                      onPress={() => props.navigate("/app")}
                      loading={false}
                    />
                  </div>
                )}
                <img
                  src={item.cvImage}
                  className="w-full h-auto rounded-md"
                  alt="temp"
                />
              </div>
              <p
                className={`text-xl font-bold pt-3 ${
                  props?.isHovered?.show && props?.isHovered?.num === index
                    ? `text-blue-400`
                    : `text-black`
                }`}
              >
                {item.name}
              </p>
              <p className="text-sm text-gray-400 w-10/12 pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  const creativeSection = () => {
    if (props?.showSelectedTab.tabName === "Creative") {
      return (
        <div className="flex flex-wrap flex-row pb-5 max-[767px]:block max-[767px]:w-full">
          {props?.creativeData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-4/12 h-auto pt-5 p-4 max-[1023px]:w-6/12 max-[767px]:w-full all-temp-container"
              onMouseEnter={() => {
                props.setIsHovered({ num: index, show: true });
              }}
              onMouseLeave={() =>
                props.setIsHovered({ num: index, show: false })
              }
            >
              <div
                className={`p-5 bg-gray-100 w-full h-auto flex flex-col justify-center max-[767px]:w-full`}
              >
                {props?.screenWidth >= 1023 ? (
                  props?.isHovered?.show &&
                  props?.isHovered?.num === index && (
                    <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                      <MyButton
                        {...props}
                        title="Use This Template"
                        className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                        textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                        onPress={() => props.navigate("/app")}
                        loading={false}
                      />
                    </div>
                  )
                ) : (
                  <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                    <MyButton
                      {...props}
                      title="Use This Template"
                      className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                      textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                      onPress={() => props.navigate("/app")}
                      loading={false}
                    />
                  </div>
                )}
                <img
                  src={item.cvImage}
                  className="w-full h-auto rounded-md"
                  alt="temp"
                />
              </div>
              <p
                className={`text-xl font-bold pt-3 ${
                  props?.isHovered?.show && props?.isHovered?.num === index
                    ? `text-blue-400`
                    : `text-black`
                }`}
              >
                {item.name}
              </p>
              <p className="text-sm text-gray-400 w-10/12 pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  const simpleSection = () => {
    if (props?.showSelectedTab.tabName === "Simple") {
      return (
        <div className="flex flex-wrap flex-row pb-5 max-[767px]:block max-[767px]:w-full">
          {props?.simpleData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-4/12 h-auto pt-5 p-4 max-[1023px]:w-6/12 max-[767px]:w-full all-temp-container"
              onMouseEnter={() => {
                props.setIsHovered({ num: index, show: true });
              }}
              onMouseLeave={() =>
                props.setIsHovered({ num: index, show: false })
              }
            >
              <div
                className={`p-5 bg-gray-100 w-full h-auto flex flex-col justify-center max-[767px]:w-full`}
              >
                {props?.screenWidth >= 1023 ? (
                  props?.isHovered?.show &&
                  props?.isHovered?.num === index && (
                    <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                      <MyButton
                        {...props}
                        title="Use This Template"
                        className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                        textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                        onPress={() => props.navigate("/app")}
                        loading={false}
                      />
                    </div>
                  )
                ) : (
                  <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                    <MyButton
                      {...props}
                      title="Use This Template"
                      className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                      textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                      onPress={() => props.navigate("/app")}
                      loading={false}
                    />
                  </div>
                )}
                <img
                  src={item.cvImage}
                  className="w-full h-auto rounded-md"
                  alt="temp"
                />
              </div>
              <p
                className={`text-xl font-bold pt-3 ${
                  props?.isHovered?.show && props?.isHovered?.num === index
                    ? `text-blue-400`
                    : `text-black`
                }`}
              >
                {item.name}
              </p>
              <p className="text-sm text-gray-400 w-10/12 pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  const professionalSection = () => {
    if (props?.showSelectedTab.tabName === "Professional") {
      return (
        <div className="flex flex-wrap flex-row pb-5 max-[767px]:block max-[767px]:w-full">
          {props?.professionalData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-4/12 h-auto pt-5 p-4 max-[1023px]:w-6/12 max-[767px]:w-full all-temp-container"
              onMouseEnter={() => {
                props.setIsHovered({ num: index, show: true });
              }}
              onMouseLeave={() =>
                props.setIsHovered({ num: index, show: false })
              }
            >
              <div
                className={`p-5 bg-gray-100 w-full h-auto flex flex-col justify-center max-[767px]:w-full`}
              >
                {props?.screenWidth >= 1023 ? (
                  props?.isHovered?.show &&
                  props?.isHovered?.num === index && (
                    <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                      <MyButton
                        {...props}
                        title="Use This Template"
                        className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                        textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                        onPress={() => props.navigate("/app")}
                        loading={false}
                      />
                    </div>
                  )
                ) : (
                  <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                    <MyButton
                      {...props}
                      title="Use This Template"
                      className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                      textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                      onPress={() => props.navigate("/app")}
                      loading={false}
                    />
                  </div>
                )}
                <img
                  src={item.cvImage}
                  className="w-full h-auto rounded-md"
                  alt="temp"
                />
              </div>
              <p
                className={`text-xl font-bold pt-3 ${
                  props?.isHovered?.show && props?.isHovered?.num === index
                    ? `text-blue-400`
                    : `text-black`
                }`}
              >
                {item.name}
              </p>
              <p className="text-sm text-gray-400 w-10/12 pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  const modernSection = () => {
    if (props?.showSelectedTab.tabName === "Modern") {
      return (
        <div className="flex flex-wrap flex-row pb-5 max-[767px]:block max-[767px]:w-full">
          {props?.modernData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-4/12 h-auto pt-5 p-4 max-[1023px]:w-6/12 max-[767px]:w-full all-temp-container"
              onMouseEnter={() => {
                props.setIsHovered({ num: index, show: true });
              }}
              onMouseLeave={() =>
                props.setIsHovered({ num: index, show: false })
              }
            >
              <div
                className={`p-5 bg-gray-100 w-full h-auto flex flex-col justify-center max-[767px]:w-full`}
              >
                {props?.screenWidth >= 1023 ? (
                  props?.isHovered?.show &&
                  props?.isHovered?.num === index && (
                    <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                      <MyButton
                        {...props}
                        title="Use This Template"
                        className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                        textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                        onPress={() => props.navigate("/app")}
                        loading={false}
                      />
                    </div>
                  )
                ) : (
                  <div className="flex w-full justify-center relative top-52 max-[1023px]:top-72 max-[767px]:top-96 max-[565px]:top-52 max-[463px]:top-26 bottom-0 right-0 left-0">
                    <MyButton
                      {...props}
                      title="Use This Template"
                      className="pb-4 pt-4 w-8/12 max-[565px]:w-8/12 max-[320px]:w-8/12 max-[463px]:w-7/12 max-[463px]:w-6/12 rounded-md bg-blue-500 absolute hover:bg-blue-600"
                      textStyle="text-white font-bold text-center max-[565px]:text-sm max-[463px]:text-xs"
                      onPress={() => props.navigate("/app")}
                      loading={false}
                    />
                  </div>
                )}
                <img
                  src={item.cvImage}
                  className="w-full h-auto rounded-md"
                  alt="temp"
                />
              </div>
              <p
                className={`text-xl font-bold pt-3 ${
                  props?.isHovered?.show && props?.isHovered?.num === index
                    ? `text-blue-400`
                    : `text-black`
                }`}
              >
                {item.name}
              </p>
              <p className="text-sm text-gray-400 w-10/12 pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <Header {...props} />
      {props?.toggleDrawer && <SideDrawer {...props} />}

      <div className={`m-auto ${`max-[767px]:` ? `` : `container`}`}>
        <div className="container-main">
          <div className="flex flex-col w-full justify-center items-center mt-5">
            <p className="text-3xl text-center font-bold max-[767px]:text-2xl">
              {(props?.showSelectedTab.tabName === "All templates" &&
                "Job-winning resume templates") ||
                (props?.showSelectedTab.tabName === "Creative" &&
                  "Job-winning creative resume templates") ||
                (props?.showSelectedTab.tabName === "Simple" &&
                  "Job-winning simple resume templates") ||
                (props?.showSelectedTab.tabName === "Professional" &&
                  "Job-winning professional resume templates") ||
                (props?.showSelectedTab.tabName === "Modern" &&
                  "Job-winning modern resume templates")}
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
              onPress={() => props.navigate("/app")}
              loading={false}
            />
          </div>

          <div className="flex flex-row justify-center max-[767px]:justify-start mt-5 border-b border-gray-200 overflow-auto">
            {props?.tabsData.map((item, index) => (
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
                    className={`ml-2 text-sm max-[1023px]:ml-0 font-bold tracking-widest max-[1023px]:text-xs max-[1023px]:uppercase tab-text max-[375px]:h-7

                    ${
                      props?.screenWidth <= 1023
                        ? (props?.showSelectedTab.tabName === "All templates" &&
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
                          : `text-black`
                        : (props?.showSelectedTab.tabName === "All templates" &&
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
                        : `text-gray-400`
                    }
                    `}
                  >
                    {item.tabName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* all templates tab */}
          {allTempSection()}

          {/* creative tab */}
          {creativeSection()}

          {/* simple tab */}
          {simpleSection()}

          {/* professional tab */}
          {professionalSection()}

          {/* modern tab */}
          {modernSection()}
        </div>
      </div>
    </div>
  );
};

export default ResumesTemplatesMarkup;
