import React from "react";

const CoverLetterViennaTemplate = (props) => {
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
    <div className="flex flex-1 flex-col pt-12 ml-5 pb-7">
      <div>
        <p className="text-[20px] font-semibold">name</p>
        <p className="text-[8px]">jobTitle</p>
      </div>

      <div className="mt-5">
        <p className="text-[6px] font-bold">To: hiringManagerName, company</p>
        <p className="text-[6px] mt-[2px]">description</p>
      </div>

      <div className="flex flex-1 justify-center items-end">
        <div className="flex flex-row items-center">
          <p className="text-[6px]">address</p>
          <div className="w-[1px] h-[1px] bg-black mr-[2px] ml-[2px]" />
          <p className="text-[6px]">num</p>
          <div className="w-[1px] h-[1px] bg-black mr-[2px] ml-[2px]" />

          <p className="text-[6px] underline">email</p>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="w-4/12 h-1.5 bg-green-300" />
        </div>
      </div>
    </div>
  );
};

export default CoverLetterViennaTemplate;
