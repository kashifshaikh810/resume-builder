import React from "react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const PreferencesInputBox = (props) => {
  const PreferencesSection = () => {
    if (props?.referencesInputList?.length >= 1) {
      return (
        <>
          {props?.referencesInputList?.map((x, i) => {
            return (
              <div
                key={i}
                className="flex flex-row"
                onMouseEnter={() => {
                  props.setIsShowReferencesBoxIcon({
                    show: true,
                    num: i,
                  });
                }}
                onMouseLeave={() => {
                  props.setIsShowReferencesBoxIcon({
                    show: false,
                    num: i,
                  });
                }}
              >
                <div
                  key={i}
                  className={`border border-gray-200 w-11/12 ${
                    props?.isShowReferencesBoxInput.show ? `h-auto` : `h-20`
                  } mt-7 hover:cursor-pointer`}
                  onClick={() =>
                    props?.isShowReferencesBoxInput.show === false &&
                    props.setIsShowReferencesBoxInput({
                      ...props.isShowReferencesBoxInput,
                      show: !props?.isShowReferencesBoxInput.show,
                      num: i,
                    })
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 w-10/12">
                      <div className="flex flex-row items-center">
                        <div className="">
                          <p
                            className={`${
                              props.isShowReferencesBoxIcon.show &&
                              props.isShowReferencesBoxIcon.num === i
                                ? `text-blue-400`
                                : `text-black`
                            } text-sm font-bold truncate`}
                          >
                            {x.referentFullName ? (
                              x.referentFullName
                            ) : (
                              <p
                                className={`${
                                  props.isShowReferencesBoxIcon.show &&
                                  props.isShowReferencesBoxIcon.num === i
                                    ? `text-blue-400`
                                    : `text-black`
                                } font-bold text-sm`}
                              >
                                (Not specified)
                              </p>
                            )}
                          </p>
                          <p className="text-gray-400 text-sm truncate">
                            {x.company === "Select company" ? "" : x.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-1 h-20 justify-end items-center pr-4"
                      onClick={() =>
                        props.setIsShowReferencesBoxInput({
                          ...props.isShowReferencesBoxInput,
                          show: !props?.isShowReferencesBoxInput.show,
                          num: i,
                        })
                      }
                    >
                      {props?.isShowReferencesBoxInput.show &&
                      props?.isShowReferencesBoxInput.num === i ? (
                        <BiChevronUp
                          className={`text-2xl ml-1 mt-1  ${
                            props.isShowReferencesBoxIcon.show &&
                            props.isShowReferencesBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      ) : (
                        <BiChevronDown
                          className={`text-2xl ml-1 mt-1 ${
                            props.isShowReferencesBoxIcon.show &&
                            props.isShowReferencesBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      )}
                    </div>
                  </div>
                  {props.isShowReferencesBoxInput.show &&
                    props.isShowReferencesBoxInput.num === i && (
                      <div className="p-4 flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row items-end">
                          <div>
                            <p className="text-sm text-gray-500">
                              Referent's Full Name
                            </p>
                            <input
                              name="referentFullName"
                              value={x.referentFullName}
                              onChange={(e) =>
                                props.preferencesHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>

                          <div className="ml-5 pl-5">
                            <p className="text-sm text-gray-500">Company</p>
                            <input
                              name="company"
                              value={x.company}
                              onChange={(e) =>
                                props.preferencesHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                        </div>

                        <div className="flex flex-row items-end mt-4 w-11/12">
                          <div className="w-full">
                            <p className="text-sm text-gray-500 w-auto">
                              phone
                            </p>
                            <input
                              name="phone"
                              value={x.phone}
                              onChange={(e) =>
                                props.preferencesHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                          <div className="ml-5 pl-5 w-full">
                            <p className="text-sm text-gray-500 w-auto">
                              email
                            </p>
                            <input
                              name="email"
                              value={x.email}
                              onChange={(e) =>
                                props.preferencesHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                {props.isShowReferencesBoxIcon.show &&
                  props.isShowReferencesBoxIcon.num === i && (
                    <div className="relative top-16 left-2 bottom-0 right-0">
                      <RiDeleteBin5Line
                        className="text-gray-500 text-lg hover:cursor-pointer hover:text-blue-500"
                        onClick={() => props.preferencesHandleRemoveClick(i)}
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
  return <div>{PreferencesSection()}</div>;
};

export default PreferencesInputBox;
