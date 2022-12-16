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
                  } mt-7 hover:cursor-pointer`}
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
                        <p className="text-gray-400 text-sm truncate">
                          {x.level}
                        </p>
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
                                className={`text-sm text-gray-500 ${
                                  (props.isShowSkillsLevel.level === "Novice" &&
                                    props.isShowSkillsLevel.num === 0 &&
                                    `text-red-400`) ||
                                  (props.isShowSkillsLevel.level ===
                                    "Beginner" &&
                                    props.isShowSkillsLevel.num === 1 &&
                                    `text-orange-400`) ||
                                  (props.isShowSkillsLevel.level ===
                                    "Skillful" &&
                                    props.isShowSkillsLevel.num === 2 &&
                                    `text-yellow-400`) ||
                                  (props.isShowSkillsLevel.level ===
                                    "Experienced" &&
                                    props.isShowSkillsLevel.num === 3 &&
                                    `text-green-400`) ||
                                  (props.isShowSkillsLevel.level === "Expert" &&
                                    props.isShowSkillsLevel.num === 4 &&
                                    `text-indigo-400`)
                                }`}
                              >
                                {props.isShowSkillsLevel.level}
                              </p>
                            </div>
                            <div
                              className={`${
                                (props.isShowSkillsLevel.level === "Novice" &&
                                  props.isShowSkillsLevel.num === 0 &&
                                  `bg-red-100`) ||
                                (props.isShowSkillsLevel.level === "Beginner" &&
                                  props.isShowSkillsLevel.num === 1 &&
                                  `bg-orange-100`) ||
                                (props.isShowSkillsLevel.level === "Skillful" &&
                                  props.isShowSkillsLevel.num === 2 &&
                                  `bg-yellow-100`) ||
                                (props.isShowSkillsLevel.level ===
                                  "Experienced" &&
                                  props.isShowSkillsLevel.num === 3 &&
                                  `bg-green-100`) ||
                                (props.isShowSkillsLevel.level === "Expert" &&
                                  props.isShowSkillsLevel.num === 4 &&
                                  `bg-indigo-100`)
                              } w-full h-10 flex flex-row items-center rounded-sm`}
                            >
                              {levelData.map((item, index) => {
                                return (
                                  <div
                                    className="flex flex-row"
                                    onClick={() =>
                                      props.setIsShowSkillsLevel({
                                        level: item.level,
                                        num: item.id,
                                      })
                                    }
                                  >
                                    <div
                                      className={`${
                                        (props.isShowSkillsLevel.level ===
                                          "Novice" &&
                                          props.isShowSkillsLevel.num ===
                                            item.id &&
                                          `bg-red-400`) ||
                                        (props.isShowSkillsLevel.level ===
                                          "Beginner" &&
                                          props.isShowSkillsLevel.num ===
                                            item.id &&
                                          `bg-orange-400`) ||
                                        (props.isShowSkillsLevel.level ===
                                          "Skillful" &&
                                          props.isShowSkillsLevel.num ===
                                            item.id &&
                                          `bg-yellow-400`) ||
                                        (props.isShowSkillsLevel.level ===
                                          "Experienced" &&
                                          props.isShowSkillsLevel.num ===
                                            item.id &&
                                          `bg-green-400`) ||
                                        (props.isShowSkillsLevel.level ===
                                          "Expert" &&
                                          props.isShowSkillsLevel.num ===
                                            item.id &&
                                          `bg-indigo-400`)
                                      } p-5 pl-6 pr-6 rounded-sm`}
                                    />
                                    <div className="flex flex-1 items-center">
                                      <div
                                        className={`w-px h-3 ${
                                          (props.isShowSkillsLevel.level ===
                                            "Novice" &&
                                            `bg-red-300`) ||
                                          (props.isShowSkillsLevel.level ===
                                            "Beginner" &&
                                            `bg-orange-300`) ||
                                          (props.isShowSkillsLevel.level ===
                                            "Skillful" &&
                                            `bg-yellow-300`) ||
                                          (props.isShowSkillsLevel.level ===
                                            "Experienced" &&
                                            `bg-green-300`) ||
                                          (props.isShowSkillsLevel.level ===
                                            "Expert" &&
                                            `bg-indigo-300`)
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
