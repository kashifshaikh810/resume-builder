import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const LanguagesInputBox = (props) => {
  const LanguagesSection = () => {
    if (props.languagesInputList) {
      return (
        <>
          {props.languagesInputList.map((x, i) => {
            return (
              <div
                key={i}
                className="flex flex-row"
                onMouseEnter={() => {
                  props.setIsShowLanguagesBoxIcon({
                    show: true,
                    num: i,
                  });
                }}
                onMouseLeave={() => {
                  props.setIsShowLanguagesBoxIcon({
                    show: false,
                    num: i,
                  });
                }}
              >
                <div
                  key={i}
                  className={`border border-gray-200 w-11/12 ${
                    props?.isShowLanguagesBoxInput.show ? `h-auto` : `h-20`
                  } mt-7 
                       hover:cursor-pointer
                  }`}
                  onClick={() =>
                    props?.isShowLanguagesBoxInput.show === false &&
                    props.setIsShowLanguagesBoxInput({
                      ...props.isShowLanguagesBoxInput,
                      show: !props?.isShowLanguagesBoxInput.show,
                      num: i,
                    })
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 w-10/12">
                      <div className="">
                        <p
                          className={`${
                            props.isShowLanguagesBoxIcon.show &&
                            props.isShowLanguagesBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.language ? (
                            x.language
                          ) : (
                            <p
                              className={`${
                                props.isShowLanguagesBoxIcon.show &&
                                props.isShowLanguagesBoxIcon.num === i
                                  ? `text-blue-400`
                                  : `text-black`
                              } font-bold text-sm`}
                            >
                              (Not specified)
                            </p>
                          )}
                        </p>
                        {props?.isNotShowExpertLevel === false && (
                          <p className="text-gray-400 text-sm truncate">
                            {x.level}
                          </p>
                        )}
                      </div>
                    </div>
                    <div
                      className="flex flex-1 h-20 justify-end items-center pr-4"
                      onClick={() =>
                        props.setIsShowLanguagesBoxInput({
                          ...props.isShowLanguagesBoxInput,
                          show: !props?.isShowLanguagesBoxInput.show,
                          num: i,
                        })
                      }
                    >
                      {props?.isShowLanguagesBoxInput.show &&
                      props?.isShowLanguagesBoxInput.num === i ? (
                        <BiChevronUp
                          className={`text-2xl ml-1 mt-1  ${
                            props.isShowLanguagesBoxIcon.show &&
                            props.isShowLanguagesBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      ) : (
                        <BiChevronDown
                          className={`text-2xl ml-1 mt-1 ${
                            props.isShowLanguagesBoxIcon.show &&
                            props.isShowLanguagesBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      )}
                    </div>
                  </div>
                  {props.isShowLanguagesBoxInput.show &&
                    props.isShowLanguagesBoxInput.num === i && (
                      <div className="p-4 flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row items-end w-full">
                          <div className="w-11/12">
                            <p className="text-sm text-gray-500">Language</p>
                            <input
                              name="language"
                              value={x.language}
                              onChange={(e) =>
                                props.languagesHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>

                          <div className="ml-5 pl-5 w-11/12">
                            <div className="flex flex-row items-end">
                              <div className="w-full cursor-pointer">
                                <p className="text-sm text-gray-500">Level</p>
                                <select
                                  className="bg-gray-100 w-full h-10 pl-4 mt-1 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                                  typeof="dropdown"
                                >
                                  <option>Select Level</option>
                                  <option>Native Speaker</option>
                                  <option>Highly Proficient</option>
                                  <option>Very good command</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                {props.isShowLanguagesBoxIcon.show &&
                  props.isShowLanguagesBoxIcon.num === i && (
                    <div className="relative top-16 left-2 bottom-0 right-0">
                      <RiDeleteBin5Line
                        className="text-gray-500 text-lg hover:cursor-pointer hover:text-blue-500"
                        onClick={() => props.languagesHandleRemoveClick(i)}
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

  return <>{LanguagesSection()}</>;
};

export default LanguagesInputBox;
