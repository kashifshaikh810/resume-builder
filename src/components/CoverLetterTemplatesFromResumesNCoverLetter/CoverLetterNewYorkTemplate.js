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
    <div className="m-6 w-full">
      <div className="grid grid-cols-[150px_minmax(220px,_1fr)_100px] -space-x-[3.2rem]">
        <div className="w-7/12">
          <div className="flex flex-col items-end">
            <p className="text-[10px] font-semibold text-end uppercase">
              {fullName}
            </p>
            <p className="text-[5px] uppercase mt-1">{jobTitle}</p>
          </div>

          <div className="flex flex-col items-end mt-6">
            <p className="text-[5px] text-black font-bold">
              {hiringManagerName || companyName ? `To` : ``}
            </p>
            <p className="text-[5px]">{hiringManagerName}</p>
            <p className="text-[5px]">{companyName}</p>
          </div>

          <div className="flex flex-col items-end mt-6">
            <p className="text-[5px] text-black font-bold">
              {fullName || jobTitle || address || email || phone ? `From` : ``}
            </p>
            <p className="text-[5px]">{fullName}</p>
            <p className="text-[5px]">{jobTitle}</p>
            <p className="text-[5px]">{address}</p>
            <p className="text-[5px]">{phone}</p>
            <p className="text-[5px] underline">{email}</p>
          </div>
        </div>
        <div className="w-full h-[28rem] border-l border-black pl-3.5 pt-[2.1rem]">
          <p className="text-[5px] leading-4">{letterDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterNewYorkTemplate;
