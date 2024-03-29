import React from "react";
import { GrStrikeThrough, GrUnderline } from "react-icons/gr";
import { BsTypeBold } from "react-icons/bs";
import { TiAttachmentOutline } from "react-icons/ti";
import { AiOutlineItalic } from "react-icons/ai";
import { MdFormatListNumbered } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ExtraCurricularInputBox = (props) => {
  const descIcons = [
    { icon: () => <BsTypeBold />, name: "bold" },
    { icon: () => <AiOutlineItalic />, name: "italic" },
    { icon: () => <GrUnderline />, name: "underline" },
    { icon: () => <GrStrikeThrough />, name: "line-through" },
    { icon: () => <MdFormatListNumbered />, name: "" },
    { icon: () => <FaListUl />, name: "" },
    { icon: () => <TiAttachmentOutline />, name: "" },
  ];

  const extraCurricularSection = () => {
    if (props?.extraCurricularInputList?.length) {
      return (
        <>
          {props?.extraCurricularInputList?.map((x, i) => {
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
                  props.setIsShowExtraCurricularBoxIcon({
                    show: true,
                    num: i,
                  });
                }}
                onMouseLeave={() => {
                  props.setIsShowExtraCurricularBoxIcon({
                    show: false,
                    num: i,
                  });
                }}
              >
                <div
                  key={i}
                  className={`border border-gray-200 w-11/12 ${
                    props?.isShowExtraCurricularBoxInput.show
                      ? `h-auto`
                      : `h-20`
                  } mt-7 hover:cursor-pointer`}
                  onClick={() =>
                    props?.isShowExtraCurricularBoxInput.show === false &&
                    props.setIsShowExtraCurricularBoxInput({
                      ...props.isShowExtraCurricularBoxInput,
                      show: !props?.isShowExtraCurricularBoxInput.show,
                      num: i,
                    })
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 w-10/12">
                      <div className="flex flex-row items-center">
                        <p
                          className={`${
                            props.isShowExtraCurricularBoxIcon.show &&
                            props.isShowExtraCurricularBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.functionTitle}
                        </p>
                        {x.functionTitle && x.employer ? (
                          <p
                            className={`${
                              props.isShowExtraCurricularBoxIcon.show &&
                              props.isShowExtraCurricularBoxIcon.num === i
                                ? `text-blue-400`
                                : `text-black`
                            } ml-1 mr-1 font-bold`}
                          >
                            at
                          </p>
                        ) : !x.functionTitle && !x.employer ? (
                          <p
                            className={`${
                              props.isShowExtraCurricularBoxIcon.show &&
                              props.isShowExtraCurricularBoxIcon.num === i
                                ? `text-blue-400`
                                : `text-black`
                            } font-bold text-sm`}
                          >
                            (Not specified)
                          </p>
                        ) : null}
                        <p
                          className={`${
                            props.isShowExtraCurricularBoxIcon.show &&
                            props.isShowExtraCurricularBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.employer}
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
                        props.setIsShowExtraCurricularBoxInput({
                          ...props.isShowExtraCurricularBoxInput,
                          show: !props?.isShowExtraCurricularBoxInput.show,
                          num: i,
                        })
                      }
                    >
                      {props?.isShowExtraCurricularBoxInput.show &&
                      props?.isShowExtraCurricularBoxInput.num === i ? (
                        <BiChevronUp
                          className={`text-2xl ml-1 mt-1  ${
                            props.isShowExtraCurricularBoxIcon.show &&
                            props.isShowExtraCurricularBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      ) : (
                        <BiChevronDown
                          className={`text-2xl ml-1 mt-1 ${
                            props.isShowExtraCurricularBoxIcon.show &&
                            props.isShowExtraCurricularBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      )}
                    </div>
                  </div>
                  {props.isShowExtraCurricularBoxInput.show &&
                    props.isShowExtraCurricularBoxInput.num === i && (
                      <div className="p-4 flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row items-end">
                          <div>
                            <p className="text-sm text-gray-500">
                              Function Title
                            </p>
                            <input
                              name="functionTitle"
                              value={x.functionTitle}
                              onChange={(e) =>
                                props.extraCurricularHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>

                          <div className="ml-5 pl-5">
                            <p className="text-sm text-gray-500">Employer</p>
                            <input
                              name="employer"
                              value={x.employer}
                              onChange={(e) =>
                                props.extraCurricularHandleInputChange(e, i)
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
                                props.extraCurricularHandleInputChange(e, i)
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
                                props.extraCurricularHandleInputChange(e, i)
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
                              props.extraCurricularHandleInputChange(e, i)
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
                                  (props?.isChangedExtraCurricularDescInputText
                                    ?.num === index &&
                                    props?.isChangedExtraCurricularDescInputText
                                      ?.name === "bold") ||
                                  (props?.isChangedExtraCurricularDescInputText
                                    ?.num === index &&
                                    props?.isChangedExtraCurricularDescInputText
                                      ?.name === "italic") ||
                                  (props?.isChangedExtraCurricularDescInputText
                                    ?.num === index &&
                                    props?.isChangedExtraCurricularDescInputText
                                      ?.name === "underline") ||
                                  (props?.isChangedExtraCurricularDescInputText
                                    ?.num === index &&
                                    props?.isChangedExtraCurricularDescInputText
                                      ?.name === "line-through")
                                    ? `text-blue-400`
                                    : `text-gray-500`
                                }`}
                                onClick={() =>
                                  props.setIsChangedExtraCurricularDescInputText(
                                    {
                                      name: item.name,
                                      num: index,
                                    }
                                  )
                                }
                                onDoubleClick={() =>
                                  props?.setIsChangedExtraCurricularDescInputText(
                                    {
                                      name: "normal",
                                    }
                                  )
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
                              props.extraCurricularHandleInputChange(e, i)
                            }
                            rows={10000}
                            cols={10000}
                            className={`w-full h-48 bg-gray-100 border-none text-gray-800 overflow-hidden outline-none ${
                              (props?.isChangedExtraCurricularDescInputText
                                ?.name === "normal" &&
                                `font-normal`) ||
                              (props?.isChangedExtraCurricularDescInputText
                                ?.name === "bold" &&
                                `font-bold`) ||
                              (props?.isChangedExtraCurricularDescInputText
                                ?.name === "italic" &&
                                `italic`) ||
                              (props?.isChangedExtraCurricularDescInputText
                                ?.name === "underline" &&
                                `underline`) ||
                              (props?.isChangedExtraCurricularDescInputText
                                ?.name === "line-through" &&
                                `line-through`)
                            }`}
                          />
                        </div>
                      </div>
                    )}
                </div>
                {props.isShowExtraCurricularBoxIcon.show &&
                  props.isShowExtraCurricularBoxIcon.num === i && (
                    <div className="relative top-16 left-2 bottom-0 right-0">
                      <RiDeleteBin5Line
                        className="text-gray-500 text-lg hover:cursor-pointer hover:text-blue-500"
                        onClick={() =>
                          props.extraCurricularHandleRemoveClick(i)
                        }
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
  return <div>{extraCurricularSection()}</div>;
};

export default ExtraCurricularInputBox;
