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
        <p className="text-[20px] font-semibold">{fullName}</p>
        <p className="text-[8px]">{jobTitle}</p>
      </div>

      <div className="mt-5">
        <p className="text-[6px] font-bold">
          {hiringManagerName || companyName ? `To:` : ``} {hiringManagerName}
          {hiringManagerName && companyName ? `,` : ``} {companyName}
        </p>
        <p className="text-[6px] mt-[2px]">{letterDetails}</p>
      </div>

      <div className="grid flex-1 justify-center items-end grid-cols-[200px_minmax(200px,_1fr)_100px]">
        <div className="flex flex-1 flex-row items-center flex-wrap">
          <p className="text-[6px]">{address}</p>
          {(address && phone) || email ? (
            <div className="w-[1px] h-[1px] bg-black mr-[2px] ml-[2px]" />
          ) : (
            <></>
          )}
          <p className="text-[6px]">{phone}</p>
          {phone && email ? (
            <div className="w-[1px] h-[1px] bg-black mr-[2px] ml-[2px]" />
          ) : (
            <></>
          )}

          <p className="text-[6px] underline">{email}</p>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="w-9/12 h-1.5 bg-green-300" />
        </div>
      </div>
    </div>
  );
};

export default CoverLetterViennaTemplate;
