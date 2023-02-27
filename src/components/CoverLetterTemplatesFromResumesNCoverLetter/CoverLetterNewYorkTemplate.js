import React from "react";

const CoverLetterNewYorkTemplate = (props) => {
  const {
    fullName,
    jobTitle,
    address,
    email,
    phone,
    companyName,
    hiringManagerName,
    letterDetails,
  } = props?.coverLetterData;

  return (
    <div className="m-2 mt-3 overflow-hidden w-full">
      <div className="grid grid-cols-[81px_minmax(220px,_1fr)_100px] -space-x-[1.7rem]">
        <div className="w-7/12">
          <div className="flex flex-col items-end">
            <p className="text-[6px] font-semibold text-end uppercase">
              {fullName}
            </p>
            <p className="text-[3.5px] uppercase mt-1">{jobTitle}</p>
          </div>

          <div className="flex flex-col items-end mt-6">
            <p className="text-[3.5px] text-black font-bold">
              {hiringManagerName || companyName ? `To` : ``}
            </p>
            <p className="text-[3.5px]">{hiringManagerName}</p>
            <p className="text-[3.5px]">{companyName}</p>
          </div>

          <div className="flex flex-col items-end mt-6">
            <p className="text-[3.5px] text-black font-bold">
              {fullName || jobTitle || address || email || phone ? `From` : ``}
            </p>
            <p className="text-[3.5px]">{fullName}</p>
            <p className="text-[3.5px]">{jobTitle}</p>
            <p className="text-[3.5px]">{address}</p>
            <p className="text-[3.5px]">{phone}</p>
            <p className="text-[3.5px] underline">{email}</p>
          </div>
        </div>
        <div className="w-6/12 h-[16rem] border-l border-[#a7a7a7] pl-2 pt-[1.4rem]">
          <p className="text-[3.5px]">{letterDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterNewYorkTemplate;
