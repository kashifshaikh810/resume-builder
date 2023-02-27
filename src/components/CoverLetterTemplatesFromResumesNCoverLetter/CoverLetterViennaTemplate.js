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
    <div className="flex w-[12rem] h-full flex-col pt-6 ml-3 pb-7 overflow-hidden">
      <div>
        <p className="text-[10px] font-semibold">{fullName}</p>
        <p className="text-[5px]">{jobTitle}</p>
      </div>

      <div className="mt-3 w-8/12">
        <p className="text-[4px] font-bold">
          {hiringManagerName || companyName ? `To:` : ``} {hiringManagerName}
          {hiringManagerName && companyName ? `,` : ``} {companyName}
        </p>
        <p className="text-[4px]">{letterDetails}</p>
      </div>

      <div className="flex grid-cols-[200px_minmax(200px,_1fr)_100px] flex-1 justify-center items-end">
        <div className="flex flex-1 flex-row items-center flex-wrap">
          <p className="text-[4px]">{address}</p>
          {(address && phone) || email ? (
            <div className="w-[1px] h-[1px] bg-black mr-[2px] ml-[2px]" />
          ) : (
            <></>
          )}
          <p className="text-[4px]">{phone}</p>
          {phone && email ? (
            <div className="w-[1px] h-[1px] bg-black mr-[2px] ml-[2px]" />
          ) : (
            <></>
          )}

          <p className="text-[4px] underline">{email}</p>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="w-9/12 h-1 bg-green-300" />
        </div>
      </div>
    </div>
  );
};

export default CoverLetterViennaTemplate;
