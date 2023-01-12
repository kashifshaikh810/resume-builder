import React from "react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const CoursesInputBox = (props) => {
  const coursesSection = () => {
    if (props.coursesInputList) {
      return (
        <>
          {props.coursesInputList.map((x, i) => {
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
                  props.setIsShowCoursesBoxIcon({
                    show: true,
                    num: i,
                  });
                }}
                onMouseLeave={() => {
                  props.setIsShowCoursesBoxIcon({
                    show: false,
                    num: i,
                  });
                }}
              >
                <div
                  key={i}
                  className={`border border-gray-200 w-11/12 ${
                    props?.isShowCoursesBoxInput.show ? `h-auto` : `h-20`
                  } mt-7 hover:cursor-pointer`}
                  onClick={() =>
                    props?.isShowCoursesBoxInput.show === false &&
                    props.setIsShowCoursesBoxInput({
                      ...props.isShowCoursesBoxInput,
                      show: !props?.isShowCoursesBoxInput.show,
                      num: i,
                    })
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 w-10/12">
                      <div className="flex flex-row items-center">
                        <p
                          className={`${
                            props.isShowCoursesBoxIcon.show &&
                            props.isShowCoursesBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.course}
                        </p>
                        {x.course && x.institution ? (
                          <p
                            className={`${
                              props.isShowCoursesBoxIcon.show &&
                              props.isShowCoursesBoxIcon.num === i
                                ? `text-blue-400`
                                : `text-black`
                            } ml-1 mr-1 font-bold`}
                          >
                            at
                          </p>
                        ) : !x.course && !x.institution ? (
                          <p
                            className={`${
                              props.isShowCoursesBoxIcon.show &&
                              props.isShowCoursesBoxIcon.num === i
                                ? `text-blue-400`
                                : `text-black`
                            } font-bold text-sm`}
                          >
                            (Not specified)
                          </p>
                        ) : null}
                        <p
                          className={`${
                            props.isShowCoursesBoxIcon.show &&
                            props.isShowCoursesBoxIcon.num === i
                              ? `text-blue-400`
                              : `text-black`
                          } text-sm font-bold truncate`}
                        >
                          {x.institution}
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
                        props.setIsShowCoursesBoxInput({
                          ...props.isShowCoursesBoxInput,
                          show: !props?.isShowCoursesBoxInput.show,
                          num: i,
                        })
                      }
                    >
                      {props?.isShowCoursesBoxInput.show &&
                      props?.isShowCoursesBoxInput.num === i ? (
                        <BiChevronUp
                          className={`text-2xl ml-1 mt-1  ${
                            props.isShowCoursesBoxIcon.show &&
                            props.isShowCoursesBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      ) : (
                        <BiChevronDown
                          className={`text-2xl ml-1 mt-1 ${
                            props.isShowCoursesBoxIcon.show &&
                            props.isShowCoursesBoxIcon.num === i
                              ? `text-blue-500`
                              : `text-gray-500`
                          }`}
                        />
                      )}
                    </div>
                  </div>
                  {props.isShowCoursesBoxInput.show &&
                    props.isShowCoursesBoxInput.num === i && (
                      <div className="p-4 flex flex-col justify-center items-center w-full">
                        <div className="flex flex-row items-end">
                          <div>
                            <p className="text-sm text-gray-500">Course</p>
                            <input
                              name="course"
                              value={x.course}
                              onChange={(e) =>
                                props.coursesHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>

                          <div className="ml-5 pl-5">
                            <p className="text-sm text-gray-500">Institution</p>
                            <input
                              name="institution"
                              value={x.institution}
                              onChange={(e) =>
                                props.coursesHandleInputChange(e, i)
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
                                props.coursesHandleInputChange(e, i)
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
                                props.coursesHandleInputChange(e, i)
                              }
                              className="bg-gray-100 w-full h-10 pl-4 mt-1 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                {props.isShowCoursesBoxIcon.show &&
                  props.isShowCoursesBoxIcon.num === i && (
                    <div className="relative top-16 left-2 bottom-0 right-0">
                      <RiDeleteBin5Line
                        className="text-gray-500 text-lg hover:cursor-pointer hover:text-blue-500"
                        onClick={() => props.coursesHandleRemoveClick(i)}
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
  return <div>{coursesSection()}</div>;
};

export default CoursesInputBox;
