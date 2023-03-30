import React from "react";
import { GrStrikeThrough, GrUnderline } from "react-icons/gr";
import { BsTypeBold } from "react-icons/bs";
import { TiAttachmentOutline } from "react-icons/ti";
import { AiOutlineItalic } from "react-icons/ai";
import { MdFormatListNumbered } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const EducationInputBox = (props) => {
  const descIcons = [
    { icon: () => <BsTypeBold />, name: "bold" },
    { icon: () => <AiOutlineItalic />, name: "italic" },
    { icon: () => <GrUnderline />, name: "underline" },
    { icon: () => <GrStrikeThrough />, name: "line-through" },
    { icon: () => <MdFormatListNumbered />, name: "" },
    { icon: () => <FaListUl />, name: "" },
    { icon: () => <TiAttachmentOutline />, name: "" },
  ];

  const educationSection = () => {
    if (props?.educationInputList?.length) {
      return (
        <>
          {props?.educationInputList?.map((x, i) => {
            let monthNames = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            let startDate = new Date(x.startDate);
            let month = startDate.getMonth();
            let startDateMonth = startDate ? monthNames[month] : "";
            let startDateYear = startDate
              ? new Date(startDate).getFullYear()
              : "";

            let endDate = new Date(x.endDate);
            let myMonth = endDate.getMonth();
            let endDateMonth = endDate ? monthNames[myMonth] : "";
            let endDateYear = endDate ? new Date(endDate).getFullYear() : "";

            return (
              <div
                key={i}
                className="flex flex-row"
                onMouseEnter={() => {
                  props.setIsShowEducationBoxIcon({
                    show: true,
                    num: i,
                  });
                }}
                onMouseLeave={() => {
                  props.setIsShowEducationBoxIcon({
                    show: false,
                    num: i,
                  });
                }}
              >
                <div
                  key={i}
                  className={`border border-gray-200 w-11/12 ${
                    props?.isShowEducationBoxInput.show ? `h-auto` : `h-20`
                  } mt-7 hover:cursor-pointer`}
                  onClick={() =>
                    props?.isShowEducationBoxInput.show === false &&
                    props.setIsShowEducationBoxInput({
                      ...props.isShowEducationBoxInput,
                      show: !props?.isShowEducationBoxInput.show,
                      num: i,
                    })
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 w-10/12">
                      <div className="flex flex-row items-center">
                        <p
                          className={`${
                            props.isShowEducationBoxIcon.show &&
                            props.isShowEducationBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.school}
                        </p>
                        {x.school && x.degree ? (
                          <p
                            className={`${
                              props.isShowEducationBoxIcon.show &&
                              props.isShowEducationBoxIcon.num === i
                                ? `text-blue-400`
                                : `text-black`
                            } ml-1 mr-1 font-bold`}
                          >
                            at
                          </p>
                        ) : !x.school && !x.degree ? (
                          <p
                            className={`${
                              props.isShowEducationBoxIcon.show &&
                              props.isShowEducationBoxIcon.num === i
                                ? `text-blue-400`
                                : `text-black`
                            } font-bold text-sm`}
                          >
                            (Not specified)
                          </p>
                        ) : null}
                        <p
                          className={`${
                            props.isShowEducationBoxIcon.show &&
                            props.isShowEducationBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.degree}
                        </p>
                      </div>
                      <div className="flex flex-row items-center">
                        <p className="text-gray-500 text-sm">
                          {x.startDate && startDateMonth}{" "}
                          {x.startDate && startDateYear}
                        </p>
                        {x.startDate && x.endDate ? (
                          <p className="text-gray-500 ml-1 mr-1">-</p>
                        ) : null}
                        <p className="text-gray-500 text-sm">
                          {x.endDate && endDateMonth} {x.endDate && endDateYear}
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex flex-1 h-20 justify-end items-center pr-4"
                      onClick={() =>
                        props.setIsShowEducationBoxInput({
                          ...props.isShowEducationBoxInput,
                          show: !props?.isShowEducationBoxInput.show,
                          num: i,
                        })
                      }
                    >
                      {props?.isShowEducationBoxInput.show &&
                      props?.isShowEducationBoxInput.num === i ? (
                        <BiChevronUp
                          className={`text-2xl ml-1 mt-1  ${
                            props.isShowEducationBoxIcon.show &&
                            props.isShowEducationBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      ) : (
                        <BiChevronDown
                          className={`text-2xl ml-1 mt-1 ${
                            props.isShowEducationBoxIcon.show &&
                            props.isShowEducationBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      )}
                    </div>
                  </div>
                  {props.isShowEducationBoxInput.show &&
                    props.isShowEducationBoxInput.num === i && (
                      <div className="p-4 flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row items-end">
                          <div>
                            <p className="text-sm text-gray-500">School</p>
                            <input
                              name="school"
                              value={x.school}
                              onChange={(e) =>
                                props.educationHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>

                          <div className="ml-5 pl-5">
                            <p className="text-sm text-gray-500">Degree</p>
                            <input
                              name="degree"
                              value={x.degree}
                              onChange={(e) =>
                                props.educationHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                        </div>

                        <div className="flex flex-row items-end mt-4 w-11/12">
                          <div className="w-full">
                            <p className="text-sm text-gray-500 w-auto">
                              Start & End Date
                            </p>
                            <input
                              name="startDate"
                              type="month"
                              placeholder="MM / YYYY"
                              value={x.startDate}
                              onChange={(e) =>
                                props.educationHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                          <div className="ml-5 pl-5 w-full">
                            <input
                              type="month"
                              name="endDate"
                              placeholder="MM / YYYY"
                              value={x.endDate}
                              onChange={(e) =>
                                props.educationHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                        </div>
                        <div className="w-11/12 mt-2 pt-2">
                          <p className="text-sm text-gray-500">City</p>
                          <input
                            name="city"
                            value={x.city}
                            onChange={(e) =>
                              props.educationHandleInputChange(e, i)
                            }
                            className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                          />
                        </div>
                        <div className="w-11/12 mt-5 mb-1">
                          <p className="text-sm text-gray-500">Description</p>
                        </div>
                        <div className="w-11/12 p-4 bg-gray-100 max-[767px]:w-full">
                          <div className="flex flex-row items-center">
                            {descIcons.map((item, index) => (
                              <div
                                key={index}
                                className={`m-2 mt-0 ml-0 hover:cursor-pointer hover:text-blue-400  ${
                                  (props?.isChangedEducationDescInputText
                                    ?.num === index &&
                                    props?.isChangedEducationDescInputText
                                      ?.name === "bold") ||
                                  (props?.isChangedEducationDescInputText
                                    ?.num === index &&
                                    props?.isChangedEducationDescInputText
                                      ?.name === "italic") ||
                                  (props?.isChangedEducationDescInputText
                                    ?.num === index &&
                                    props?.isChangedEducationDescInputText
                                      ?.name === "underline") ||
                                  (props?.isChangedEducationDescInputText
                                    ?.num === index &&
                                    props?.isChangedEducationDescInputText
                                      ?.name === "line-through")
                                    ? `text-blue-400`
                                    : `text-gray-500`
                                }`}
                                onClick={() =>
                                  props.setIsChangedEducationDescInputText({
                                    name: item.name,
                                    num: index,
                                  })
                                }
                                onDoubleClick={() =>
                                  props?.setIsChangedEducationDescInputText({
                                    name: "normal",
                                  })
                                }
                              >
                                {item.icon()}
                              </div>
                            ))}
                          </div>
                          <textarea
                            name="description"
                            value={x.description}
                            onChange={(e) =>
                              props.educationHandleInputChange(e, i)
                            }
                            rows={10000}
                            cols={10000}
                            className={`w-full h-48 bg-gray-100 border-none text-gray-800 overflow-hidden outline-none ${
                              (props?.isChangedEducationDescInputText?.name ===
                                "normal" &&
                                `font-normal`) ||
                              (props?.isChangedEducationDescInputText?.name ===
                                "bold" &&
                                `font-bold`) ||
                              (props?.isChangedEducationDescInputText?.name ===
                                "italic" &&
                                `italic`) ||
                              (props?.isChangedEducationDescInputText?.name ===
                                "underline" &&
                                `underline`) ||
                              (props?.isChangedEducationDescInputText?.name ===
                                "line-through" &&
                                `line-through`)
                            }`}
                          />
                        </div>
                      </div>
                    )}
                </div>
                {props.isShowEducationBoxIcon.show &&
                  props.isShowEducationBoxIcon.num === i && (
                    <div className="relative top-16 left-2 bottom-0 right-0">
                      <RiDeleteBin5Line
                        className="text-gray-500 text-lg hover:cursor-pointer hover:text-blue-500"
                        onClick={() => props.educationHandleRemoveClick(i)}
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
  return <div>{educationSection()}</div>;
};

export default EducationInputBox;
