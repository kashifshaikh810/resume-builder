import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const SkillsInputBox = (props) => {
  const levelData = [
    { com: "level", level: "Novice", id: 0 },
    { com: "level", level: "Beginner", id: 1 },
    { com: "level", level: "Skillful", id: 2 },
    { com: "level", level: "Experienced", id: 3 },
    { com: "level", level: "Expert", id: 4 },
  ];

  const textColorObj = {
    Novice: "text-red-400",
    Beginner: "text-orange-400",
    Skillful: "text-yellow-400",
    Experienced: "text-green-400",
    Expert: "text-indigo-400",
  };

  const boxColorObj = {
    "0-Novice": "bg-red-400",
    "1-Beginner": "bg-orange-400",
    "2-Skillful": "bg-yellow-400",
    "3-Experienced": "bg-green-400",
    "4-Expert": "bg-indigo-400",
  };

  const boxDisabledColorObj = {
    "0-Novice": "bg-gray-400",
    "1-Beginner": "bg-gray-400",
    "2-Skillful": "bg-gray-400",
    "3-Experienced": "bg-gray-400",
    "4-Expert": "bg-gray-400",
  };

  const boxContainerColorObj = {
    Novice: "bg-red-100",
    Beginner: "bg-orange-100",
    Skillful: "bg-yellow-100",
    Experienced: "bg-green-100",
    Expert: "bg-indigo-100",
  };

  const boxLineColorObj = {
    Novice: "bg-red-300",
    Beginner: "bg-orange-300",
    Skillful: "bg-yellow-300",
    Experienced: "bg-green-300",
    Expert: "bg-indigo-300",
  };

  const boxDisabledLineColorObj = {
    Novice: "bg-gray-300",
    Beginner: "bg-gray-300",
    Skillful: "bg-gray-300",
    Experienced: "bg-gray-300",
    Expert: "bg-gray-300",
  };

  const websiteAndSocialSection = () => {
    if (props.skillsInputList) {
      return (
        <>
          {props.skillsInputList.map((x, i) => {
            return (
              <div
                key={i}
                className="flex flex-row"
                onMouseEnter={() => {
                  props.setIsShowSkillsBoxIcon({
                    show: true,
                    num: i,
                  });
                }}
                onMouseLeave={() => {
                  props.setIsShowSkillsBoxIcon({
                    show: false,
                    num: i,
                  });
                }}
              >
                <div
                  key={i}
                  className={`border border-gray-200 w-11/12 ${
                    props?.isShowSkillsBoxInput.show ? `h-auto` : `h-20`
                  } mt-7 
                       hover:cursor-pointer
                  }`}
                  onClick={() =>
                    props?.isShowSkillsBoxInput.show === false &&
                    props.setIsShowSkillsBoxInput({
                      ...props.isShowSkillsBoxInput,
                      show: !props?.isShowSkillsBoxInput.show,
                      num: i,
                    })
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 w-10/12">
                      <div className="">
                        <p
                          className={`${
                            props.isShowSkillsBoxIcon.show &&
                            props.isShowSkillsBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.skill ? (
                            x.skill
                          ) : (
                            <p
                              className={`${
                                props.isShowSkillsBoxIcon.show &&
                                props.isShowSkillsBoxIcon.num === i
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
                        props.setIsShowSkillsBoxInput({
                          ...props.isShowSkillsBoxInput,
                          show: !props?.isShowSkillsBoxInput.show,
                          num: i,
                        })
                      }
                    >
                      {props?.isShowSkillsBoxInput.show &&
                      props?.isShowSkillsBoxInput.num === i ? (
                        <BiChevronUp
                          className={`text-2xl ml-1 mt-1  ${
                            props.isShowSkillsBoxIcon.show &&
                            props.isShowSkillsBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      ) : (
                        <BiChevronDown
                          className={`text-2xl ml-1 mt-1 ${
                            props.isShowSkillsBoxIcon.show &&
                            props.isShowSkillsBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      )}
                    </div>
                  </div>
                  {props.isShowSkillsBoxInput.show &&
                    props.isShowSkillsBoxInput.num === i && (
                      <div className="p-4 flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row items-end">
                          <div>
                            <p className="text-sm text-gray-500">Skill</p>
                            <input
                              name="skill"
                              value={x.skill}
                              onChange={(e) =>
                                props.skillsHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>

                          <div className="ml-5 pl-5">
                            <div className="flex flex-row items-center">
                              <p className="text-sm text-gray-500 mr-1">
                                Level -
                              </p>
                              <p
                                className={`text-sm ${
                                  props?.isNotShowExpertLevel === false
                                    ? textColorObj[x.level]
                                    : null
                                }  ${
                                  props?.isNotShowExpertLevel === false
                                    ? `text-gray-400`
                                    : `text-gray-300`
                                }`}
                              >
                                {x.level}
                              </p>
                            </div>
                            <div
                              className={`${
                                props?.isNotShowExpertLevel === false
                                  ? boxContainerColorObj[x.level]
                                  : `bg-blue-100`
                              } w-full h-10 flex flex-row items-center rounded-sm`}
                            >
                              {levelData.map((item, index) => {
                                return (
                                  <div
                                    className={`flex flex-row ${
                                      props?.isNotShowExpertLevel
                                        ? `hover:cursor-default`
                                        : ``
                                    }`}
                                    onClick={() => {
                                      if (
                                        props?.isNotShowExpertLevel === false
                                      ) {
                                        const e = {
                                          target: {
                                            name: item.com,
                                            value: item.level,
                                          },
                                        };
                                        props.skillsHandleInputChange(e, i);
                                        props.setIsShowSkillsLevel({
                                          level: item.level,
                                          num: item.id,
                                        });
                                      }
                                    }}
                                  >
                                    <div
                                      className={`${
                                        props?.isNotShowExpertLevel === false
                                          ? boxColorObj[`${index}-${x.level}`]
                                          : boxDisabledColorObj[
                                              `${index}-${x.level}`
                                            ]
                                      } p-5 pl-6 pr-6 rounded-sm`}
                                    />
                                    <div className="flex flex-1 items-center">
                                      <div
                                        className={`w-px h-3 ${
                                          props?.isNotShowExpertLevel === false
                                            ? boxLineColorObj[x.level]
                                            : boxDisabledLineColorObj[x.level]
                                        }`}
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                {props.isShowSkillsBoxIcon.show &&
                  props.isShowSkillsBoxIcon.num === i && (
                    <div className="relative top-16 left-2 bottom-0 right-0">
                      <RiDeleteBin5Line
                        className="text-gray-500 text-lg hover:cursor-pointer hover:text-blue-500"
                        onClick={() => props.skillsHandleRemoveClick(i)}
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

export default SkillsInputBox;
