import React from "react";

const CoverLetterNewYorkTemplate = (props) => {
  return (
    <div className="m-2 mt-3 overflow-hidden w-full">
      <div className="grid grid-cols-[81px_minmax(220px,_1fr)_100px] -space-x-[1.7rem]">
        <div className="w-7/12">
          <div className="flex flex-col items-end">
            <p className="text-[6px] font-semibold text-end uppercase">
              {props?.coverLetterData?.fullName}
            </p>
            <p className="text-[3.5px] uppercase mt-1">
              {props?.coverLetterData?.jobTitle}
            </p>
          </div>

          <div className="flex flex-col items-end mt-6">
            <p className="text-[3.5px] text-black font-bold">
              {props?.coverLetterData?.hiringManagerName ||
              props?.coverLetterData?.companyName
                ? `To`
                : ``}
            </p>
            <p className="text-[3.5px]">
              {props?.coverLetterData?.hiringManagerName}
            </p>
            <p className="text-[3.5px]">
              {props?.coverLetterData?.companyName}
            </p>
          </div>

          <div className="flex flex-col items-end mt-6">
            <p className="text-[3.5px] text-black font-bold">
              {props?.coverLetterData?.fullName ||
              props?.coverLetterData?.jobTitle ||
              props?.coverLetterData?.address ||
              props?.coverLetterData?.email ||
              props?.coverLetterData?.phone
                ? `From`
                : ``}
            </p>
            <p className="text-[3.5px]">{props?.coverLetterData?.fullName}</p>
            <p className="text-[3.5px]">{props?.coverLetterData?.jobTitle}</p>
            <p className="text-[3.5px]">{props?.coverLetterData?.address}</p>
            <p className="text-[3.5px]">{props?.coverLetterData?.phone}</p>
            <p className="text-[3.5px] underline">
              {props?.coverLetterData?.email}
            </p>
          </div>
        </div>
        <div className="w-6/12 h-[16rem] border-l border-[#a7a7a7] pl-2 pt-[1.4rem]">
          <p className="text-[3.5px]">
            {props?.coverLetterData?.letterDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterNewYorkTemplate;
