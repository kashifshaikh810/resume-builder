import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import MyButton from "../../MyButton/MyButton";
import "./styles.css";
import StockholmTemplate from "../../Templates/StockholmTemplate";
import TorontoTemplate from "../../Templates/TorontoTemplate";
import NewYorkTemplate from "../../Templates/NewYorkTemplate";
import ViennaTemplate from "../../Templates/ViennaTemplate";

const AllTemplatesMarkup = (props) => {
  const {
    isSelectedTemplate,
    setIsSelectedTemplate,
    isShowTemplateCard,
    setIsShowTemplateCard,
    navigate,
  } = props;

  const selectTemplatesData = [
    {
      id: 0,
      name: "Toronto",
      value: "toronto",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: 1,
      name: "Stockholm",
      value: "stockholm",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg",
    },
    {
      id: 2,
      name: "New York",
      value: "new-york",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: 3,
      name: "Vienna",
      value: "vienna",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/406/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  const selectTempColorObj = (item, index) => {
    if (
      isSelectedTemplate.numOfSelectedVal === item.id &&
      isSelectedTemplate.nameOfSelectedVal === item.value
    ) {
      if (isSelectedTemplate?.isChanged) {
        return "text-white";
      } else {
        return "border-[4px] border-blue-400";
      }
    }
  };

  return (
    <div
      className={`flex w-full h-[1050px] 
      max-[768px]:h-[1074px]
    flex-col bg-gray-700
    ${isSelectedTemplate ? `overscroll-y-none` : `overscroll-y-auto`}
    `}
    >
      <div
        className="flex flex-row items-center w-30 justify-end
       bg-black p-1.5 fixed left-[50rem] top-[35rem] 
       rounded-full hover:cursor-default unselectable
       max-[1029px]:left-[35rem]
       max-[1006px]:left-[33rem]
       max-[980px]:left-[32rem]
       max-[915px]:left-[30rem]
       max-[880px]:left-[28rem]
       max-[830px]:left-[26rem]
       max-[768px]:hidden
       "
      >
        <RiArrowLeftSLine
          size={22}
          className={`rounded-full  ${
            props.page > 1
              ? `text-white hover:cursor-pointer hover:bg-gray-600`
              : `text-gray-600`
          }`}
          onClick={() =>
            props.page > 1 ? props.setPage(props.page - 1) : null
          }
        />
        <p className="text-white ml-2 mr-2">
          {props.page} / {props.totalPage}
        </p>
        <RiArrowRightSLine
          size={22}
          className={`rounded-full ${
            props.page !== props.totalPage
              ? `text-white hover:cursor-pointer hover:bg-gray-600`
              : `text-gray-600`
          }`}
          onClick={() =>
            props.page !== props.totalPage
              ? props.setPage(props.page + 1)
              : null
          }
        />
      </div>
      <div className="bg-black w-full h-16 flex flex-row pl-6 pr-6 fixed z-50">
        <div
          className="flex items-center 
      max-[768px]:hidden
      "
        >
          <div
            className="flex flex-row items-center hover:cursor-pointer hover:bg-gray-700 rounded-full pl-0.5 pr-2.5"
            onClick={() => navigate(`/app/resumes/id/edit/${props?.tabName}`)}
          >
            <BiChevronLeft className="text-white text-3xl" />
            <p className="text-white text-base">Back to editor</p>
          </div>
        </div>
        <div
          className="hidden
      max-[768px]:flex
      flex-row items-center hover:cursor-pointer"
          onClick={() => {
            setIsShowTemplateCard(!isShowTemplateCard);
            if (!isShowTemplateCard) {
              setIsSelectedTemplate({
                nameOfSelectedVal: isSelectedTemplate.nameOfSelectedVal,
                numOfSelectedVal: isSelectedTemplate.numOfSelectedVal,
                isChanged: true,
              });
            }
            !isShowTemplateCard
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "unset") &&
                setIsSelectedTemplate({
                  nameOfSelectedVal: isSelectedTemplate.nameOfSelectedVal,
                  numOfSelectedVal: isSelectedTemplate.numOfSelectedVal,
                  isChanged: false,
                });
          }}
        >
          <GiHamburgerMenu className="text-white text-3xl" />
        </div>

        <div className="flex flex-row flex-1 justify-end items-center max-[768px]:justify-center">
          <MyButton
            {...props}
            title="Download PDF"
            className={`bg-blue-500 p-2 pl-6 pr-6 rounded-md ${
              isShowTemplateCard
                ? `cursor-default`
                : `hover:bg-blue-600 hover:cursor-pointer`
            }`}
            textStyle="text-white font-bold text-center"
            onPress={() => {}}
            loading={false}
          />
          <MyButton
            {...props}
            title="..."
            className={`bg-blue-500 ml-2 p-2 pl-4 pr-4 rounded-md ${
              isShowTemplateCard
                ? `cursor-default`
                : `hover:bg-blue-600 hover:cursor-pointer`
            }`}
            textStyle="text-white font-bold text-center"
            onPress={() => {}}
            loading={false}
          />
        </div>

        <div
          className={`items-center ${
            isShowTemplateCard ? `` : `hover:cursor-pointer`
          }
        hidden
        max-[768px]:flex`}
          onClick={() =>
            isShowTemplateCard === false && navigate("/app/resumes/id/edit")
          }
        >
          <MdClose
            className={`text-white text-3xl ${
              isShowTemplateCard ? `` : `hover:text-blue-500`
            }`}
          />
        </div>
      </div>

      {isShowTemplateCard && (
        <div className="fixed z-[5] inset-[0px]">
          <div
            className="hidden
      max-[768px]:flex z-50 fixed top-[30rem] bg-black w-full h-36
      delay-300 duration-300 flex-col
      "
          >
            <div className="flex w-full justify-center items-center pt-5 flex-col">
              <p className="text-white text-[12px] tracking-[1.8px] font-[600]">
                TEMPLATE
              </p>
              <div className="flex flex-row mt-2">
                {selectTemplatesData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-default"
                      onClick={() => {
                        setIsSelectedTemplate({
                          nameOfSelectedVal: item.value,
                          numOfSelectedVal: item.id,
                          isChanged: true,
                        });
                      }}
                    >
                      <p
                        className={`text-gray-600 text-base pb-1 pl-3 ml-3
                      ${selectTempColorObj(item, index)}`}
                      >
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="grid grid-cols-[400px_minmax(800px,_1fr)_100px]
        max-[1029px]:grid-cols-[200px_minmax(800px,_1fr)_100px] 
        max-[1006px]:grid-cols-[200px_minmax(750px,_1fr)_100px]
        max-[980px]:grid-cols-[200px_minmax(700px,_1fr)_100px]
        max-[915px]:grid-cols-[200px_minmax(650px,_1fr)_100px]
        max-[880px]:grid-cols-[200px_minmax(600px,_1fr)_100px]
        max-[830px]:grid-cols-[200px_minmax(550px,_1fr)_100px]
        max-[768px]:grid-cols-1
        mt-12 pt-12 mb-5 pb-5
        overscroll-y-none
        "
      >
        <div
          className="grid grid-cols-2 gap-0 overflow-y-auto overscroll-y-none h-screen
         max-[1029px]:grid-cols-1 max-[1029px]:h-[900px]
         max-[768px]:hidden
          w-11/12 ml-4
        "
        >
          {selectTemplatesData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-full relative"
              >
                <p className="text-white text-lg pb-1">{item.name}</p>
                {selectTempColorObj(item) && (
                  <div className="bg-blue-400 w-10 h-10 rounded-full absolute top-[8rem] flex justify-center items-center">
                    <TiTick className="text-white text-xl" />
                  </div>
                )}
                <img
                  src={item.uri}
                  alt="temps"
                  className={`w-11/12 h-auto rounded-[7px] opacity-1 hover:cursor-pointer
                  hover:border-[4px] hover:border-blue-400 
                  max-[1029px]:mb-4 ${selectTempColorObj(item)}`}
                  onClick={() => {
                    setIsSelectedTemplate({
                      nameOfSelectedVal: item.value,
                      numOfSelectedVal: item.id,
                    });
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* template results */}
        {isSelectedTemplate.nameOfSelectedVal === "toronto" ? (
          <TorontoTemplate {...props} />
        ) : null}

        {isSelectedTemplate.nameOfSelectedVal === "stockholm" ? (
          <StockholmTemplate {...props} />
        ) : null}

        {isSelectedTemplate.nameOfSelectedVal === "new-york" ? (
          <NewYorkTemplate {...props} />
        ) : null}

        {isSelectedTemplate.nameOfSelectedVal === "vienna" ? (
          <ViennaTemplate {...props} />
        ) : null}

        <div
          className="hidden 
      max-[768px]:flex flex-1 justify-center
      "
        >
          <RiArrowLeftSLine
            size={22}
            className={`rounded-full  ${
              props.page > 1
                ? `text-white hover:cursor-pointer hover:bg-gray-600`
                : `text-gray-600`
            }`}
            onClick={() =>
              props.page > 1 ? props.setPage(props.page - 1) : null
            }
          />
          <p className="text-white ml-2 mr-2">
            {props.page} / {props.totalPage}
          </p>
          <RiArrowRightSLine
            size={22}
            className={`rounded-full ${
              props.page !== props.totalPage
                ? `text-white hover:cursor-pointer hover:bg-gray-600`
                : `text-gray-600`
            }`}
            onClick={() =>
              props.page !== props.totalPage
                ? props.setPage(props.page + 1)
                : null
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AllTemplatesMarkup;
