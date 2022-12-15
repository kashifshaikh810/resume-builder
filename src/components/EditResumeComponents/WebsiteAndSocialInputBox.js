import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const WebsiteAndSocialInputBox = (props) => {
  const websiteAndSocialSection = () => {
    if (props.websiteInputList) {
      return (
        <>
          {props.websiteInputList.map((x, i) => {
            return (
              <div
                key={i}
                className="flex flex-row"
                onMouseEnter={() => {
                  props.setIsShowWebsiteBoxIcon({
                    show: true,
                    num: i,
                  });
                }}
                onMouseLeave={() => {
                  props.setIsShowWebsiteBoxIcon({
                    show: false,
                    num: i,
                  });
                }}
              >
                <div
                  key={i}
                  className={`border border-gray-200 w-11/12 ${
                    props?.isShowWebsiteBoxInput.show ? `h-auto` : `h-20`
                  } mt-7 hover:cursor-pointer`}
                  onClick={() =>
                    props?.isShowWebsiteBoxInput.show === false &&
                    props.setIsShowWebsiteBoxInput({
                      ...props.isShowWebsiteBoxInput,
                      show: !props?.isShowWebsiteBoxInput.show,
                      num: i,
                    })
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 w-10/12">
                      <div className="">
                        <p
                          className={`${
                            props.isShowWebsiteBoxIcon.show &&
                            props.isShowWebsiteBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.label ? (
                            x.label
                          ) : (
                            <p
                              className={`${
                                props.isShowWebsiteBoxIcon.show &&
                                props.isShowWebsiteBoxIcon.num === i
                                  ? `text-blue-400`
                                  : `text-black`
                              } font-bold text-sm`}
                            >
                              (Not specified)
                            </p>
                          )}
                        </p>
                        <p className="text-gray-400 text-sm truncate">
                          {x.link}
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex flex-1 h-20 justify-end items-center pr-4"
                      onClick={() =>
                        props.setIsShowWebsiteBoxInput({
                          ...props.isShowWebsiteBoxInput,
                          show: !props?.isShowWebsiteBoxInput.show,
                          num: i,
                        })
                      }
                    >
                      {props?.isShowWebsiteBoxInput.show &&
                      props?.isShowWebsiteBoxInput.num === i ? (
                        <BiChevronUp
                          className={`text-2xl ml-1 mt-1  ${
                            props.isShowWebsiteBoxIcon.show &&
                            props.isShowWebsiteBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      ) : (
                        <BiChevronDown
                          className={`text-2xl ml-1 mt-1 ${
                            props.isShowWebsiteBoxIcon.show &&
                            props.isShowWebsiteBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      )}
                    </div>
                  </div>
                  {props.isShowWebsiteBoxInput.show &&
                    props.isShowWebsiteBoxInput.num === i && (
                      <div className="p-4 flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row items-end">
                          <div>
                            <p className="text-sm text-gray-500">Label</p>
                            <input
                              name="label"
                              value={x.label}
                              onChange={(e) =>
                                props.websiteHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>

                          <div className="ml-5 pl-5">
                            <p className="text-sm text-gray-500">Link</p>
                            <input
                              name="link"
                              value={x.link}
                              onChange={(e) =>
                                props.websiteHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                {props.isShowWebsiteBoxIcon.show &&
                  props.isShowWebsiteBoxIcon.num === i && (
                    <div className="relative top-16 left-2 bottom-0 right-0">
                      <RiDeleteBin5Line
                        className="text-gray-500 text-lg hover:cursor-pointer hover:text-blue-500"
                        onClick={() => props.websiteHandleRemoveClick(i)}
                      />
                    </div>
                  )}
              </div>
            );
          })}
        </>
      );
    }
  };

  return <>{websiteAndSocialSection()}</>;
};

export default WebsiteAndSocialInputBox;
